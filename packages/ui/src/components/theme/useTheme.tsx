import * as React from 'react';
import { useColorScheme } from 'nativewind';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DEFAULT_THEME, ColorMode, COLOR_MODES, Config } from "@consensys/ds3-theme";
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

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
      name: '@ds3-theme',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ 
        theme: state.theme, 
        mode: state.mode,
        currentMode: state.currentMode 
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
    if (!currentConfig) return DEFAULT_THEME;
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