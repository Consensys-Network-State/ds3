import * as React from 'react';
import { View } from 'react-native';
import { COLOR_MODES } from "@consensys/ds3-theme";
import { PortalHost } from '@rn-primitives/portal';
import { ThemeContext } from './context';
import type { ThemeProviderProps } from './types';
import { useColorScheme } from './useColorScheme';
import { ThemeBase } from './Theme';

export const ThemeProvider = React.forwardRef<View, ThemeProviderProps>(
  ({ children, config, ...otherProps }, ref) => {
    const { theme, setTheme, mode, setMode, currentMode } = useColorScheme();

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
        <ThemeBase
          ref={ref}
          config={config}
          theme={theme}
          mode={currentMode}
          {...otherProps}
        >
          {children}
        </ThemeBase>
        <PortalHost />
      </ThemeContext.Provider>
    );
  }
);

ThemeProvider.displayName = 'ThemeProvider'; 