import React, { createContext, useState, useEffect } from 'react';
import { useColorScheme, ColorSchemeName } from 'react-native';
import { ThemeBase, ThemeProps } from "./Theme";
import type { ColorMode, ThemeName, Config } from "@ds3/config";
import { DEFAULT_MODE, DEFAULT_THEME } from "@ds3/config";
import { PortalHost } from '@rn-primitives/portal';

export interface ThemeContextType {
  theme: ThemeName;
  mode: ColorSchemeName | ColorMode | undefined;
  setTheme: (theme: ThemeName) => void;
  setMode: (mode: ColorSchemeName) => void;
  config: Config;
}

export const ThemeContext =
  createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps extends ThemeProps {
  config: Config,
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, config, ...otherProps}) => {
  const currentMode = useColorScheme();
  const [theme, setTheme] = useState<ThemeName>(DEFAULT_THEME);
  const [mode, setMode] = useState<ColorSchemeName>(currentMode || DEFAULT_MODE);

  useEffect(() => {
    setMode(currentMode);
  }, [currentMode]);

  return (
    <ThemeContext.Provider
      value={{ theme, mode, setTheme, setMode, config }}
    >
      <ThemeBase
        theme={theme}
        mode={mode as ColorMode}
        config={config}
        {...otherProps}
      >
        {children}
        <PortalHost />
      </ThemeBase>
    </ThemeContext.Provider>
  );
};
