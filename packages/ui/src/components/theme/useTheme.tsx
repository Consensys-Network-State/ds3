'use client';

import * as React from 'react';
import { useColorScheme } from 'nativewind';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DEFAULT_THEME, ColorMode, COLOR_MODES, Config } from "@consensys/ds3-theme";
import { create } from 'zustand';
import { persist, PersistStorage } from 'zustand/middleware';

const DEBUG = false;

export type ColorScheme = typeof COLOR_MODES.Light | typeof COLOR_MODES.Dark;

interface ThemeState {
  theme: string;
  mode: ColorMode;
  currentMode: ColorScheme;
  isLoaded: boolean;
  config?: Config;
  setTheme: (theme: string) => void;
  setMode: (mode: ColorMode) => void;
  setCurrentMode: (mode: ColorScheme) => void;
  setLoaded: (isLoaded: boolean) => void;
  setConfig: (config: Config) => void;
}

type PersistedState = Pick<ThemeState, 'theme' | 'mode'>;

const STORAGE_KEY = '@ds3-theme';

const isValidMode = (mode: any): mode is ColorMode => {
  return mode === COLOR_MODES.Light || mode === COLOR_MODES.Dark || mode === COLOR_MODES.System;
};

const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: DEFAULT_THEME,
      mode: COLOR_MODES.System,
      currentMode: COLOR_MODES.Light,
      isLoaded: false,
      config: undefined,
      setTheme: (theme) => {
        const current = get().theme;
        if (current !== theme) {
          if (DEBUG) console.log('🔄 Theme chanrging to:', theme);
          set({ theme });
        }
      },
      setMode: (mode) => {
        const current = get().mode;
        if (current !== mode) {
          if (DEBUG) console.log('🔄 Mode changing to:', mode);
          set({ mode });
        }
      },
      setCurrentMode: (currentMode) => {
        const current = get().currentMode;
        if (current !== currentMode) {
          if (DEBUG) console.log('🔄 CurrentMode changing to:', currentMode);
          set({ currentMode });
        }
      },
      setLoaded: (isLoaded) => {
        const current = get().isLoaded;
        if (current !== isLoaded) {
          set({ isLoaded });
        }
      },
      setConfig: (config) => {
        const current = get().config;
        if (current !== config) {
          if (DEBUG) console.log('🔄 Config changing to:', config?.themes ? Object.keys(config.themes) : 'undefined');
          set({ config });

          // Prevent invalid theme in local storage
          const state = get();
          const validTheme = config?.themes[state.theme] ? state.theme : DEFAULT_THEME;
          if (state.theme !== validTheme) {
            set({ theme: validTheme });
          }
        }
      },
    }),
    {
      name: STORAGE_KEY,
      storage: {
        getItem: async (name) => {
          try {
            const value = await AsyncStorage.getItem(name);
            if (!value) return null;

            try {
              const parsed = JSON.parse(value);
              if (!parsed.state) return null;

              // Prevent invalid mode in local storage
              const state = parsed.state;
              if (!isValidMode(state.mode)) {
                state.mode = COLOR_MODES.System;
              }
              
              // Set currentMode based on mode
              if (state.mode !== COLOR_MODES.System) {
                state.currentMode = state.mode as ColorScheme;
              }

              return {
                state: parsed.state,
                version: parsed.version || 0
              };
            } catch (parseError) {
              return null;
            }
          } catch (error) {
            return null;
          }
        },
        setItem: async (name, value) => {
          const stringified = JSON.stringify(value);
          await AsyncStorage.setItem(name, stringified);
        },
        removeItem: async (name) => {
          await AsyncStorage.removeItem(name);
        },
      } as PersistStorage<PersistedState>,
      partialize: (state) => ({
        theme: state.theme,
        mode: state.mode,
      }),
    }
  )
);

export const useTheme = (config?: Config) => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const {
    theme,
    mode,
    currentMode,
    isLoaded,
    config: storedConfig,
    setTheme,
    setMode,
    setCurrentMode,
    setLoaded,
    setConfig
  } = useThemeStore();

  // Update config when it changes
  React.useEffect(() => {
    if (config) {
      setConfig(config);
    }
  }, [config, setConfig]);

  // Sync currentMode with system preference when in system mode
  // This ensures the UI stays in sync with system theme changes
  React.useEffect(() => {
    if (mode === COLOR_MODES.System && colorScheme) {
      setCurrentMode(colorScheme as ColorScheme);
    }
  }, [colorScheme, mode]);

  // Initialize theme system on mount
  // Sets up initial color scheme and marks theme system as ready
  React.useEffect(() => {
    if (!isLoaded) {
      setColorScheme(mode);
      setLoaded(true);
    }
  }, [isLoaded, mode, setColorScheme, setLoaded]);

  // Handle theme mode changes
  // For system mode: use system preference
  // For light/dark: use selected mode directly
  const handleModeChange = React.useCallback((newMode: ColorMode) => {
    setMode(newMode);
    if (newMode === COLOR_MODES.System) {
      setCurrentMode(colorScheme as ColorScheme);
    } else {
      setCurrentMode(newMode as ColorScheme);
    }
    setColorScheme(newMode);
  }, [colorScheme, setColorScheme]);

  return {
    theme,
    mode,
    currentMode,
    isLoaded,
    config: storedConfig,
    setTheme,
    setMode: handleModeChange
  };
};