import { COLOR_MODES } from "./constants";
import type { RadixColorName } from "./radix";

export type CssVariable = `--${string}`;
export type alphaColor = `a${string}`;
export type CssVariableRecord = Record<CssVariable, string | number>;
export type ThemeName = string;
export type ColorMode = typeof COLOR_MODES[keyof typeof COLOR_MODES];

export type BoxShadowValue = string | string[] | {
  light: string | string[];
  dark: string | string[];
};

export type BoxShadowConfig = Record<string, BoxShadowValue>;

export interface ConfigColorShades extends
  Record<number, string>,
  Record<alphaColor, string> {
  [key: string]: string
}

export type ConfigColor = Record<string, ConfigColorShades>;

export interface ConfigColorModes {
  light: ConfigColor;
  dark: ConfigColor;
}

export interface ConfigBoxShadow {
  light: Record<string, string>;
  dark: Record<string, string>;
}

export interface ConfigTheme {
  colors: ConfigColorModes;
  boxShadow?: ConfigBoxShadow;
}

export type ConfigThemes = Record<string, ConfigTheme>;

export interface Config {
  blueprint: UserConfig;
  themes: ConfigThemes;
  framework?: 'vite' | 'nextjs' | 'expo';
}

export type HexColor = `#${string}`;
export type GeneratedColorConfig = {
  accent: HexColor | {
    light: HexColor;
    dark?: HexColor;  // Optional dark mode accent
  };
  gray?: HexColor;
  background?: {
    light?: HexColor;
    dark?: HexColor;
  };
};

export type ColorConfig = 
  | RadixColorName  // Radix color name
  | GeneratedColorConfig     // Generated color
  | {                        // Custom palette
      light: ConfigColorShades;
      dark?: ConfigColorShades;  // Optional dark mode
    };

export type UserConfigColors = Record<string, ColorConfig>;

export interface UserConfigTheme {
  colors?: UserConfigColors | {
    light?: UserConfigColors;
    dark?: UserConfigColors;
  };
  boxShadow?: BoxShadowConfig;
}

export type UserConfigThemes = Record<string, UserConfigTheme>;

export interface UserConfig {
  themes?: UserConfigThemes;
  framework?: 'vite' | 'nextjs' | 'expo';
}