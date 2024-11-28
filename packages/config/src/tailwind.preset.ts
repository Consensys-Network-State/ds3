import { Config as TailwindConfig } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import {
  generateRadixColorValues,
  generateColorCssVars,
  generateThemeCssVars,
} from "./utils";
import _ from "lodash";
import {
  Config,
  ConfigColorShades,
  ConfigTheme,
  ConfigThemes,
  CssVariableRecord
} from "./types";
import { COLOR_MODES, DEFAULT_THEME } from "./constants";
import rnrPreset from './rnr.config';

const getThemeColorKeys = (themes: ConfigThemes): string[] => {
  const keys = _.uniq(_.flatMap(Object.values(themes), (theme: ConfigTheme) => {
    const colors = theme.colors;

    const mergedTheme = _.merge(
      {},
      _.omit(colors, [COLOR_MODES.Light, COLOR_MODES.Dark]),
      colors[COLOR_MODES.Light] || {},
      colors[COLOR_MODES.Dark] || {}
    );
    return Object.keys(mergedTheme);
  }));
  return keys;
};

const defineCssVars = (themes: ConfigThemes) =>
  plugin(({ addBase }) => {
    const vars: Record<string, CssVariableRecord> = {
      ':root': generateThemeCssVars(themes.default.colors.light)
    };

    Object.entries(themes).forEach(([themeName, theme]) => {
      const lightClassName =
        themeName === DEFAULT_THEME ? `.${COLOR_MODES.Light}` : `.${themeName}.${COLOR_MODES.Light}`;
      const darkClassName =
        themeName === DEFAULT_THEME ? `.${COLOR_MODES.Dark}` : `.${themeName}.${COLOR_MODES.Dark}`;

      // Assuming generateThemeCssVars is defined elsewhere to return valid CSS variables
      vars[lightClassName] = generateThemeCssVars(theme.colors.light);
      vars[darkClassName] = generateThemeCssVars(theme.colors.dark);
    });

    // @ts-ignore
    addBase(vars);
  });

const assignCssVars = (themes: ConfigThemes): Record<string, ConfigColorShades> => {
  const vars: Record<string, ConfigColorShades> = Object.fromEntries(
    getThemeColorKeys(themes).map(key => [key, generateColorCssVars(key)])
  );

  return vars;
};

const ds3Preset = (config: Config): TailwindConfig => ({
  darkMode: 'class',
  content: [],
  presets: [
    rnrPreset,
  ],
  plugins: [
    defineCssVars(config.themes),
  ],
  theme: {
    extend: {
      colors: {
        ...assignCssVars(config.themes),
        tomato: generateRadixColorValues('tomato'),
      },
    },
  },
  safelist: [
    ...Object.values(COLOR_MODES),
    ...Object.keys(config.themes),
  ],
});

export default ds3Preset;
