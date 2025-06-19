import * as React from 'react';
import { View } from 'react-native';
import { DEFAULT_THEME, COLOR_MODES } from "@consensys/ds3-theme";
import type { ThemeProviderProps } from './types';
import { useTheme } from './useTheme';

export const ThemeProvider = React.forwardRef<View, ThemeProviderProps>(
  ({ children, config }, ref) => {
    const { mode, currentMode, isLoaded, theme, setConfig } = useTheme();

    React.useEffect(() => {
      if (config) {
        setConfig(config);
      }
    }, [config]);


    React.useImperativeHandle(
      ref,
      () => document.documentElement as unknown as View,
      []
    );

    React.useEffect(() => {
      if (!isLoaded) return;

      const root = document.documentElement;
      const themeClasses = Object.keys(config.themes);
      root.classList.remove(...themeClasses, COLOR_MODES.Light, COLOR_MODES.Dark, COLOR_MODES.System);

      if (theme !== DEFAULT_THEME) {
        root.classList.add(theme);
      }

      if (!mode && currentMode) {
        root.classList.add(currentMode);
      } else if (mode === COLOR_MODES.System) {
        root.classList.add(currentMode);
      } else if (mode) {
        root.classList.add(mode);
      }
    }, [theme, currentMode, mode, config.themes, isLoaded]);

    if (!isLoaded) {
      return null;
    }

    return children;
  }
);

ThemeProvider.displayName = 'ThemeProvider';