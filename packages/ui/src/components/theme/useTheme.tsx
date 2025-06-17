import * as React from 'react';
import { useColorScheme } from 'nativewind';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DEFAULT_THEME, ColorMode, COLOR_MODES, Config } from "@consensys/ds3-theme";
import { create } from 'zustand';
import { persist, PersistStorage } from 'zustand/middleware';

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

type PersistedState = Pick<ThemeState, 'theme' | 'mode' | 'currentMode'>;

const STORAGE_KEY = '@ds3-theme';

const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: DEFAULT_THEME,
      mode: COLOR_MODES.System,
      currentMode: 'light',
      isLoaded: false,
      config: undefined,
      setTheme: (theme) => set({ theme }),
      setMode: (mode) => set({ mode }),
      setCurrentMode: (currentMode) => set({ currentMode }),
      setLoaded: (isLoaded) => set({ isLoaded }),
      setConfig: (config) => set({ config }),
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
        currentMode: state.currentMode,
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

  // Validate theme before using it
  const validTheme = React.useMemo(() => {
    const currentConfig = config || storedConfig;
    if (!currentConfig) return theme;
    return currentConfig.themes[theme] ? theme : DEFAULT_THEME;
  }, [theme, config, storedConfig]);

  // Update theme if it's invalid
  React.useEffect(() => {
    if (theme !== validTheme) {
      setTheme(validTheme);
    }
  }, [theme, validTheme, setTheme]);

  // Update currentMode based on system preference when in system mode
  React.useEffect(() => {
    if (mode === COLOR_MODES.System && colorScheme) {
      setCurrentMode(colorScheme as ColorScheme);
    }
  }, [colorScheme, mode]);

  React.useEffect(() => {
    if (!isLoaded) {
      setColorScheme(mode);
      setLoaded(true);
    }
  }, [isLoaded, mode, setColorScheme, setLoaded]);

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
    theme: validTheme,
    mode,
    currentMode,
    isLoaded,
    config: storedConfig,
    setTheme,
    setMode: handleModeChange
  };
};