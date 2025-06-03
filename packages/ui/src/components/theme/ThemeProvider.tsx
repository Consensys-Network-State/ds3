import * as React from 'react';
import { useColorScheme, View } from 'react-native';
import { ThemeBase } from "./Theme";
import { DEFAULT_MODE, DEFAULT_THEME, ColorMode } from "@consensys/ds3-theme";
import { PortalHost } from '@rn-primitives/portal';
import { ThemeContext } from './context';
import type { ThemeProviderProps } from './types';

export const ThemeProvider = React.forwardRef<View, ThemeProviderProps>(
  ({ children, config, ...otherProps}, ref) => {
    const currentMode = useColorScheme();
    const [theme, setTheme] = React.useState(DEFAULT_THEME);
    const [mode, setMode] = React.useState<ColorMode>(currentMode || DEFAULT_MODE);
    const containerRef = React.useRef<React.ElementRef<typeof ThemeBase>>(null);

    React.useImperativeHandle(
      ref,
      () => {
        if (!containerRef.current) {
          return {} as View;
        }
        return containerRef.current;
      },
      [containerRef.current]
    );

    React.useEffect(() => {
      if (currentMode) {
        setMode(currentMode as ColorMode);
      }
    }, [currentMode]);

    const contextValue = React.useMemo(() => ({
      theme,
      mode,
      setTheme,
      setMode,
      config,
      containerRef
    }), [theme, mode, config]);

    return (
      <ThemeContext.Provider value={contextValue}>
        <ThemeBase
          ref={containerRef}
          theme={theme}
          mode={mode}
          config={config}
          {...otherProps}
        >
          {children}
          <PortalHost />
        </ThemeBase>
      </ThemeContext.Provider>
    );
  }
);
ThemeProvider.displayName = 'ThemeProvider';