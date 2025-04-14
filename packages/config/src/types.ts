import * as radixColors from '@radix-ui/colors';
import { COLOR_MODES } from "./constants.js";
// types/plugin.ts
import type { DefaultTheme } from 'tailwindcss/types'
import type { DeepPartial } from 'tailwindcss/types/config'

type ExcludeColorVariants<T extends string> = T extends `${infer Base}${'A' | 'DarkA' | 'Dark' | 'P3' | 'DarkP3'}` ? never : T;

export type RadixColorKeys = keyof typeof radixColors;
export type SupportedRadixColorKeys = ExcludeColorVariants<keyof typeof radixColors>;

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
  boxShadow: ConfigBoxShadow;
}

export type ConfigThemes = Record<string, ConfigTheme>;

export interface Config {
  blueprint: UserConfig;
  themes: ConfigThemes;
}

export type UserConfigColor = Record<string, SupportedRadixColorKeys>;

export interface UserConfigColorMode {
  light?: UserConfigColor;
  dark?: UserConfigColor;
}

export type UserConfigColors = Record<string, SupportedRadixColorKeys | UserConfigColorMode>;

export interface UserConfigTheme {
  colors?: UserConfigColors;
  boxShadow?: BoxShadowConfig;
}

export type UserConfigThemes = Record<string, UserConfigTheme>;

export interface UserConfig {
  themes?: UserConfigThemes;
}