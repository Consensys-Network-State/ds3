import * as React from 'react';
import { View } from 'react-native';
import { DEFAULT_THEME, COLOR_MODES } from "@consensys/ds3-theme";
import { PortalHost } from '@rn-primitives/portal';
import { ThemeContext } from './context';
import type { ThemeProviderProps } from './types';
import { useColorScheme } from './useColorScheme';

export const ThemeProvider = React.forwardRef<View, ThemeProviderProps>(
  ({ children, config }, ref) => {
    const { theme, setTheme, mode, setMode, currentMode } = useColorScheme();

    React.useImperativeHandle(
      ref,
      () => document.documentElement as unknown as View,
      []
    );

    React.useEffect(() => {
      if (!mode) return;

      const root = document.documentElement;
      const themeClasses = Object.keys(config.themes);
      root.classList.remove(...themeClasses, COLOR_MODES.Light, COLOR_MODES.Dark, COLOR_MODES.System);

      if (theme !== DEFAULT_THEME) {
        root.classList.add(theme);
      }

      if (mode === COLOR_MODES.System) {
        root.classList.add(currentMode);
      } else {
        root.classList.add(mode);
      }
    }, [theme, currentMode, mode, config.themes]);

    if (!mode) return null;

    return (
      <ThemeContext.Provider value={{
        theme,
        mode: currentMode,
        selectedMode: mode,
        setTheme,
        setMode,
        config
      }}>
        {children}
        <PortalHost />
      </ThemeContext.Provider>
    );
  }
);

ThemeProvider.displayName = 'ThemeProvider'; 