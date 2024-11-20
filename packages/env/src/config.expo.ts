import ExpoConstants from 'expo-constants';

import type {
  ColorMode,
  SupportedRadixColorKeys,
  ThemeName,
  Config
} from "@ds3/config";

import {
  generateColorCssVars,
  generateCssVar,
  generateThemeCssVars
} from "@ds3/config";

// @ts-ignore
const configEnv = ExpoConstants.expoConfig.extra.DS3 || {
  themes: []
};

export const config: Config = {
  ...configEnv,
  getTheme: (theme: ThemeName) => configEnv.themes[theme],
  getThemeCssVars: (theme: ThemeName, mode: ColorMode) => generateThemeCssVars(configEnv.themes[theme].colors[mode]),
  getColorCssVars: (theme: ThemeName, mode: ColorMode) => generateColorCssVars(configEnv.themes[theme].colors[mode]),
  getCssVar: (color: SupportedRadixColorKeys, index: string) => generateCssVar(color, index),
};

export default config;