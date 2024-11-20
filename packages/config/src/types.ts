import * as radixColors from '@radix-ui/colors';
import { COLOR_MODES } from "./constants.js";

type ExcludeColorVariants<T extends string> = T extends `${infer Base}${'A' | 'DarkA' | 'Dark' | 'P3' | 'DarkP3'}` ? never : T;

export type RadixColorKeys = keyof typeof radixColors;
export type SupportedRadixColorKeys = ExcludeColorVariants<keyof typeof radixColors>;

export type CssVariable = `--${string}`;

export type alphaColor = `a${string}`;

export type CssVariableRecord = Record<CssVariable, string | number>;

export type ThemeName = string;

export type ColorMode = typeof COLOR_MODES[keyof typeof COLOR_MODES];

export interface ConfigColorShades extends
  Record<number, string>,
  Record<alphaColor, string> {
  [key: string]: string // todo: do i need this
}

export type ConfigColor = Record<string, ConfigColorShades>;

export interface ConfigColorModes {
  light: ConfigColor;
  dark: ConfigColor;
}

export interface ConfigTheme {
  colors: ConfigColorModes;
}

export type ConfigThemes = Record<string, ConfigTheme>;

export interface Config {
  blueprint: UserConfig;
  themes: ConfigThemes;

  // getters
  getTheme?: (theme: ThemeName) => ConfigThemes[ThemeName];
  getThemeCssVars?: (theme: ThemeName, mode: ColorMode) => CssVariableRecord;
  getColorCssVars?: (theme: ThemeName, mode: ColorMode) => ConfigColorShades;
  getCssVar?: (color: SupportedRadixColorKeys, index: string) => CssVariableRecord;
}

export type UserConfigColor = Record<string, SupportedRadixColorKeys>;

export interface UserConfigColorMode {
  light?: UserConfigColor;
  dark?: UserConfigColor;
}

export type UserConfigColors = Record<string, SupportedRadixColorKeys | UserConfigColorMode>;

export interface UserConfigTheme {
  colors?: UserConfigColors;
}

export type UserConfigThemes = Record<string, UserConfigTheme>;

export interface UserConfig {
  themes?: UserConfigThemes;
}
