import { Config as TailwindConfig } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import tailwindcssAnimate from 'tailwindcss-animate';
import {
  generateColorCssVars,
  generateThemeCssVars,
  generateShadowCssVars,
  generateConfig,
} from "./utils";
import _ from "lodash";
import {
  Config,
  ConfigColorShades,
  ConfigTheme,
  ConfigThemes,
  CssVariableRecord,
  UserConfig
} from "./types";
import { COLOR_MODES, DEFAULT_THEME } from "./constants";
import rnrPreset from './rnr.config';
import type { CSSRuleObject } from 'tailwindcss/types/config';

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

      // Generate color variables
      const lightVars = generateThemeCssVars(theme.colors.light);
      const darkVars = generateThemeCssVars(theme.colors.dark);

      // Generate shadow variables if they exist
      if (theme.boxShadow) {
        Object.assign(lightVars, generateShadowCssVars(theme.boxShadow.light));
        Object.assign(darkVars, generateShadowCssVars(theme.boxShadow.dark));
      }

      vars[lightClassName] = lightVars;
      vars[darkClassName] = darkVars;
    });

    // Convert the vars record into a CSSRuleObject
    const cssRules: CSSRuleObject = Object.entries(vars).reduce((acc, [selector, variables]) => ({
      ...acc,
      [selector]: variables
    }), {});

    addBase(cssRules);
  });

const assignCssVars = (themes: ConfigThemes): Record<string, ConfigColorShades> => {
  return Object.fromEntries(
    getThemeColorKeys(themes).map(key => [key, generateColorCssVars(key)])
  );
};

const assignShadowVars = (themes: ConfigThemes): Record<string, string> => {
  const defaultTheme = themes[DEFAULT_THEME];
  if (!defaultTheme?.boxShadow?.light) return {};

  return Object.fromEntries(
    Object.keys(defaultTheme.boxShadow.light).map(key => [
      key,
      `var(--shadow-${key})`
    ])
  );
};

const pxToRem = (px: number, base: number = 16) => `${px / base}rem`;

const ds3Preset = (userConfig: UserConfig): TailwindConfig => {
  const config = generateConfig(userConfig);
  
  return {
    darkMode: 'class',
    content: [],
    presets: [
      rnrPreset,
    ],
    plugins: [
      defineCssVars(config.themes),
      tailwindcssAnimate,
    ],
    theme: {
      extend: {
        colors: assignCssVars(config.themes),
        boxShadow: assignShadowVars(config.themes),
        spacing: {
          0: '0rem',
          '0.5': '0.125rem',
          1: '0.25rem',
          '1.5': '0.375rem',
          2: '0.5rem',
          '2.5': '0.625rem',
          3: '0.75rem',
          '3.5': '0.875rem',
          4: '1rem',
          5: '1.25rem',
          6: '1.5rem',
          7: '1.75rem',
          8: '2rem',
          10: '2.5rem',
          12: '3rem',
          14: '3.5rem',
          16: '4rem',
          18: '4.5rem',
          20: '5rem',
          24: '6rem',
          28: '7rem',
          32: '8rem',
          36: '9rem',
          40: '10rem',
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
        fontWeight: {
          light: '300',
          regular: '400',
          medium: '500',
          bold: '700',
        },
        lineHeight: {
          'tight': '1.25',
          'normal': '1.5',
          'loose': '2',
        },
        fontSize: {
          // font
          2: '0.5rem',
          '2.5': '0.625rem',
          3: '0.75rem',
          '3.5': '0.875rem',
          4: '1rem',
          '4.5': '1.125rem',
          5: '1.25rem',
          '5.5': '1.375rem',
          6: '1.5rem',
          7: '1.75rem',
          8: '2rem',
          10: '2.5rem',
          12: '3rem',
          14: '3.5rem',
          16: '4rem',

          // text
          'xl': ['1.25rem', { lineHeight: '1.875rem', fontWeight: '400' }],
          'lg': ['1.125rem', { lineHeight: '1.6875rem', fontWeight: '400' }],
          'base': ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }],
          'sm': ['0.875rem', { lineHeight: '1.3125rem', fontWeight: '400' }],
          'xs': ['0.75rem', { lineHeight: '1.125rem', fontWeight: '400' }],

          // heading
          'h1': ['4rem', { lineHeight: '5rem', fontWeight: '700' }],
          'h2': ['3rem', { lineHeight: '3.75rem', fontWeight: '700' }],
          'h3': ['2rem', { lineHeight: '2.5rem', fontWeight: '700' }],
          'h4': ['1.75rem', { lineHeight: '2.1875rem', fontWeight: '700' }],
          'h5': ['1.5rem', { lineHeight: '1.875rem', fontWeight: '700' }],
          'h6': ['1.25rem', { lineHeight: '1.5625rem', fontWeight: '700' }],
        },
        animation: {
          'spin-normal': 'spin 2s linear infinite',
          'spin-slow': 'spin 4s linear infinite',
          'spin-fast': 'spin 1s linear infinite',
          'spin-reverse': 'spin 2s linear infinite reverse',
        },
        keyframes: {
          spin: {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
        },
      },
    },
    safelist: [
      ...Object.values(COLOR_MODES),
      ...Object.keys(config.themes),
    ],
  };
};

export default ds3Preset;