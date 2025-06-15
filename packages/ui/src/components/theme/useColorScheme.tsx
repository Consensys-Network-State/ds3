import * as React from 'react';
import { useColorScheme as useNativeWindColorScheme } from 'nativewind';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DEFAULT_MODE, DEFAULT_THEME, ColorMode, COLOR_MODES } from "@consensys/ds3-theme";

export const THEME_MODE_KEY = '@ds3-theme-mode';
export const THEME_NAME_KEY = '@ds3-theme-name';

type ColorScheme = typeof COLOR_MODES.Light | typeof COLOR_MODES.Dark;

export const useColorScheme = () => {
  const { colorScheme, setColorScheme } = useNativeWindColorScheme();
  const [theme, setTheme] = React.useState(DEFAULT_THEME);
  const [mode, setMode] = React.useState<ColorMode | null>(null);

  // Load saved mode and theme on mount
  React.useEffect(() => {
    Promise.all([
      AsyncStorage.getItem(THEME_MODE_KEY),
      AsyncStorage.getItem(THEME_NAME_KEY)
    ]).then(([savedMode, savedTheme]) => {
      const newMode = savedMode as ColorMode || DEFAULT_MODE;
      setMode(newMode);
      setColorScheme(newMode === COLOR_MODES.System ? 'system' : newMode);
      if (savedTheme) {
        setTheme(savedTheme);
      }
    }).catch(() => {
      setMode(DEFAULT_MODE);
      setColorScheme('system');
    });
  }, []);

  const handleModeChange = React.useCallback((newMode: ColorMode) => {
    setMode(newMode);
    setColorScheme(newMode === COLOR_MODES.System ? 'system' : newMode);
    AsyncStorage.setItem(THEME_MODE_KEY, newMode).catch(console.warn);
  }, [setColorScheme]);

  const handleThemeChange = React.useCallback((newTheme: string) => {
    setTheme(newTheme);
    if (newTheme === DEFAULT_THEME) {
      AsyncStorage.removeItem(THEME_NAME_KEY).catch(console.warn);
    } else {
      AsyncStorage.setItem(THEME_NAME_KEY, newTheme).catch(console.warn);
    }
  }, []);

  return {
    theme,
    setTheme: handleThemeChange,
    mode,
    setMode: handleModeChange,
    currentMode: colorScheme as ColorScheme
  };
}; 