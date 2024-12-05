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

const defineCssVars = (themes: ConfigThemes) =>
  plugin(({ addBase }) => {
    const vars: Record<string, CssVariableRecord> = {};

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
  return Object.fromEntries(
    getThemeColorKeys(themes).map(key => [key, generateColorCssVars(key)])
  );
};

const pxToRem = (px: number, base: number = 16) => `${px / base}rem`;

const fontWeight = {
  light: '300',
  regular: '400',
  medium: '500',
  bold: '700',
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
      spacing: {
        1: pxToRem(4),
        2: pxToRem(8),
        3: pxToRem(12),
        4: pxToRem(16),
        5: pxToRem(20),
        6: pxToRem(24),
        7: pxToRem(32),
        8: pxToRem(40),
        9: pxToRem(48),
        10: pxToRem(56),
        11: pxToRem(64),
        12: pxToRem(80),
        13: pxToRem(96),
        14: pxToRem(112),
        15: pxToRem(128),
      },
      borderRadius: {
        0: '0',
        1: pxToRem(2),
        2: pxToRem(4),
        3: pxToRem(6),
        4: pxToRem(8),
        5: pxToRem(10),
        6: pxToRem(12),
        7: pxToRem(14),
        8: pxToRem(16),
        'full': '9999px',
      },
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
        robotoCondensed: ['"Roboto Condensed"', 'sans-serif'],
        robotoSlab: ['"Roboto Slab"', 'serif'],
        libreFranklin: ['"Libre Franklin"', 'sans-serif'],
      },
      fontWeight,
      fontSize: {
        1: [pxToRem(10), { lineHeight: pxToRem(15), fontWeight: fontWeight.regular }],
        2: [pxToRem(12), { lineHeight: pxToRem(18), fontWeight: fontWeight.regular }],
        3: [pxToRem(14), { lineHeight: pxToRem(21), fontWeight: fontWeight.regular }],
        4: [pxToRem(16), { lineHeight: pxToRem(24), fontWeight: fontWeight.regular }],
        5: [pxToRem(18), { lineHeight: pxToRem(27), fontWeight: fontWeight.regular }],
        6: [pxToRem(20), { lineHeight: pxToRem(30), fontWeight: fontWeight.regular }],
        7: [pxToRem(24), { lineHeight: pxToRem(36), fontWeight: fontWeight.regular }],
        8: [pxToRem(26), { lineHeight: pxToRem(39), fontWeight: fontWeight.regular }],
        9: [pxToRem(32), { lineHeight: pxToRem(48), fontWeight: fontWeight.regular }],
        10: [pxToRem(40), { lineHeight: pxToRem(60), fontWeight: fontWeight.regular }],
        11: [pxToRem(40), { lineHeight: pxToRem(60), fontWeight: fontWeight.regular }],
        12: [pxToRem(50), { lineHeight: pxToRem(75), fontWeight: fontWeight.regular }],
        13: [pxToRem(54), { lineHeight: pxToRem(81), fontWeight: fontWeight.regular }],
        14: [pxToRem(72), { lineHeight: pxToRem(108), fontWeight: fontWeight.regular }],
        15: [pxToRem(80), { lineHeight: pxToRem(120), fontWeight: fontWeight.regular }],

        // strong
        'strong-1': [pxToRem(10), { lineHeight: pxToRem(15), fontWeight: fontWeight.medium }],
        'strong-2': [pxToRem(12), { lineHeight: pxToRem(18), fontWeight: fontWeight.medium }],
        'strong-3': [pxToRem(14), { lineHeight: pxToRem(21), fontWeight: fontWeight.medium }],
        'strong-4': [pxToRem(16), { lineHeight: pxToRem(24), fontWeight: fontWeight.medium }],
        'strong-5': [pxToRem(18), { lineHeight: pxToRem(27), fontWeight: fontWeight.medium }],
        'strong-6': [pxToRem(20), { lineHeight: pxToRem(30), fontWeight: fontWeight.medium }],
        'strong-7': [pxToRem(24), { lineHeight: pxToRem(36), fontWeight: fontWeight.medium }],
        'strong-8': [pxToRem(26), { lineHeight: pxToRem(39), fontWeight: fontWeight.medium }],
        'strong-9': [pxToRem(32), { lineHeight: pxToRem(48), fontWeight: fontWeight.medium }],
        'strong-10': [pxToRem(40), { lineHeight: pxToRem(60), fontWeight: fontWeight.medium }],
        'strong-11': [pxToRem(40), { lineHeight: pxToRem(60), fontWeight: fontWeight.medium }],
        'strong-12': [pxToRem(50), { lineHeight: pxToRem(75), fontWeight: fontWeight.medium }],
        'strong-13': [pxToRem(54), { lineHeight: pxToRem(81), fontWeight: fontWeight.medium }],
        'strong-14': [pxToRem(72), { lineHeight: pxToRem(108), fontWeight: fontWeight.medium }],
        'strong-15': [pxToRem(80), { lineHeight: pxToRem(120), fontWeight: fontWeight.medium }],

        // heading
        'heading-1': [pxToRem(10), { lineHeight: pxToRem(12), fontWeight: fontWeight.medium }],
        'heading-2': [pxToRem(12), { lineHeight: pxToRem(14), fontWeight: fontWeight.medium }],
        'heading-3': [pxToRem(14), { lineHeight: pxToRem(16), fontWeight: fontWeight.medium }],
        'heading-4': [pxToRem(16), { lineHeight: pxToRem(20), fontWeight: fontWeight.medium }],
        'heading-5': [pxToRem(18), { lineHeight: pxToRem(22), fontWeight: fontWeight.medium }],
        'heading-6': [pxToRem(20), { lineHeight: pxToRem(24), fontWeight: fontWeight.medium }],
        'heading-7': [pxToRem(24), { lineHeight: pxToRem(28), fontWeight: fontWeight.medium }],
        'heading-8': [pxToRem(28), { lineHeight: pxToRem(34), fontWeight: fontWeight.medium }],
        'heading-9': [pxToRem(32), { lineHeight: pxToRem(38), fontWeight: fontWeight.medium }],
        'heading-10': [pxToRem(40), { lineHeight: pxToRem(48), fontWeight: fontWeight.medium }],
        'heading-11': [pxToRem(48), { lineHeight: pxToRem(58), fontWeight: fontWeight.medium }],
        'heading-12': [pxToRem(56), { lineHeight: pxToRem(56), fontWeight: fontWeight.medium }],
        'heading-13': [pxToRem(64), { lineHeight: pxToRem(76), fontWeight: fontWeight.medium }],
        'heading-14': [pxToRem(72), { lineHeight: pxToRem(86), fontWeight: fontWeight.medium }],
        'heading-15': [pxToRem(80), { lineHeight: pxToRem(96), fontWeight: fontWeight.medium }],
      }
    },
  },
  safelist: [
    ...Object.values(COLOR_MODES),
    ...Object.keys(config.themes),
  ],
});

export default ds3Preset;