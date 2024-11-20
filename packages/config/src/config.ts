import type {
  ColorMode,
  SupportedRadixColorKeys,
  ThemeName,
  Config
} from "./types";

import {
  generateColorCssVars,
  generateCssVar,
  generateThemeCssVars
} from "./utils";

export const configEnv = import.meta.env.DS3;

export const config: Config = {
  ...configEnv,
  getTheme: (theme: ThemeName) => configEnv.themes[theme],
  getThemeCssVars: (theme: ThemeName, mode: ColorMode) => generateThemeCssVars(configEnv.themes[theme].colors[mode]),
  getColorCssVars: (theme: ThemeName, mode: ColorMode) => generateColorCssVars(configEnv.themes[theme].colors[mode]),
  getCssVar: (color: SupportedRadixColorKeys, index: string) => generateCssVar(color, index),
};
