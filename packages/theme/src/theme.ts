import _ from "lodash";
import type {
  Config,
  ConfigTheme,
  ConfigThemes,
  UserConfig,
  UserConfigColors
} from './types';
import defaultConfig from "./default-config";
import { generateColorValues } from './colors';
import { generateBoxShadowValues } from './shadows';
import { COLOR_MODES } from './constants';

export const generateConfig = (userConfig: UserConfig): Config => {
  const blueprint = _.merge(defaultConfig, userConfig || {});

  return {
    blueprint,
    themes: generateThemes(blueprint),
    framework: blueprint.framework,
  }
};

export const generateThemes = (config: UserConfig): ConfigThemes => {
  const { themes } = config;
  if (!themes) return {};

  const processedThemes: ConfigThemes = {};

  Object.entries(themes).forEach(([themeName, theme]) => {
    const { colors, boxShadow } = theme;
    const processedTheme: ConfigTheme = {
      colors: {
        light: {},
        dark: {}
      }
    };

    if (colors) {
      // Handle both direct colors and light/dark mode specific colors
      if ('light' in colors || 'dark' in colors) {
        const colorConfig = colors as { light?: UserConfigColors; dark?: UserConfigColors };
        processedTheme.colors.light = generateColorValues(colorConfig.light || {});
        processedTheme.colors.dark = generateColorValues(colorConfig.dark || {}, true);
      } else {
        const colorConfig = colors as UserConfigColors;
        processedTheme.colors.light = generateColorValues(colorConfig);
        processedTheme.colors.dark = generateColorValues(colorConfig, true);
      }
    }

    if (boxShadow) {
      processedTheme.boxShadow = {
        light: generateBoxShadowValues(boxShadow),
        dark: generateBoxShadowValues(boxShadow, true)
      };
    }

    processedThemes[themeName] = processedTheme;
  });

  return processedThemes;
};

export const getThemeColorKeys = (themes: ConfigThemes): string[] => {
  return _.uniq(_.flatMap(Object.values(themes), (theme: ConfigTheme) => {
    const colors = theme.colors;

    const mergedTheme = _.merge(
      {},
      _.omit(colors, [COLOR_MODES.Light, COLOR_MODES.Dark]),
      colors[COLOR_MODES.Light] || {},
      colors[COLOR_MODES.Dark] || {}
    );
    return Object.keys(mergedTheme);
  }));
}; 