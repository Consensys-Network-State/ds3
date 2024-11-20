import React, { createContext, useState, useEffect } from 'react';
import { useColorScheme, ColorSchemeName } from 'react-native';
import { ThemeBase, ThemeProps } from "../theme/Theme";
import type { ColorMode, ThemeName } from "@ds3/config";
import { DEFAULT_MODE, DEFAULT_THEME } from "@ds3/config";

export interface ThemeContextType {
  theme: ThemeName;
  mode: ColorSchemeName | ColorMode | undefined;
  setTheme: (theme: ThemeName) => void;
  setMode: (mode: ColorSchemeName) => void;
}

export const ThemeContext =
  createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps extends ThemeProps {}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children , ...otherProps}) => {
  const currentMode = useColorScheme();
  const [theme, setTheme] = useState<ThemeName>(DEFAULT_THEME);
  const [mode, setMode] = useState<ColorSchemeName>(currentMode || DEFAULT_MODE);

  useEffect(() => {
    setMode(currentMode);
  }, [currentMode]);

  return (
    <ThemeContext.Provider value={{ theme, mode, setTheme, setMode}}>
      <ThemeBase theme={theme} mode={mode as ColorMode} {...otherProps}>
        {children}
      </ThemeBase>
    </ThemeContext.Provider>
  );
};
