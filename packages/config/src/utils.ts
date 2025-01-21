import * as radixColors from "@radix-ui/colors";
import type {
  RadixColorKeys,
  SupportedRadixColorKeys,
  ConfigColorShades,
  ConfigThemes,
  ConfigTheme,
  ConfigColor,
  Config,
  UserConfigColor,
  UserConfigColors,
  UserConfig,
  CssVariableRecord,
  CssVariable,
  BoxShadowConfig
} from './types.js'
import _ from "lodash";
import defaultConfig from "./default-config.js";

export const generateConfig = (userConfig: UserConfig): Config => {
  const blueprint = _.merge(defaultConfig, userConfig || {});

  return {
    blueprint,
    themes: generateThemes(blueprint),
  }
}

export const normalizeBoxShadowValue = (value: string | string[]): string => {
  return Array.isArray(value) ? value.join(', ') : value;
};

export const generateBoxShadowValues = (
  shadows: BoxShadowConfig,
  isDark: boolean = false
): Record<string, string> => {
  const processedShadows: Record<string, string> = {};

  Object.entries(shadows).forEach(([name, value]) => {
    if (typeof value === 'string' || Array.isArray(value)) {
      processedShadows[name] = normalizeBoxShadowValue(value);
    } else {
      const modeValue = isDark ? value.dark : value.light;
      processedShadows[name] = normalizeBoxShadowValue(modeValue);
    }
  });

  return processedShadows;
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
      const lightColors = (colors.light || colors) as UserConfigColor;
      const darkColors = (colors.dark || {}) as UserConfigColor;

      processedTheme.colors.light = generateColorValues(lightColors);
      processedTheme.colors.dark = Object.keys(darkColors).length > 0
        ? generateColorValues(darkColors, true)
        : generateColorValues(lightColors, true);
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
}

export const generateColorValues = (colors: UserConfigColors, isDark: boolean = false): ConfigColor => {
  const vars: ConfigColor = {};
  Object.entries(colors).forEach(([colorName, color]) => {
    Object.assign(vars, { [colorName]: generateRadixColorValues(color as SupportedRadixColorKeys, isDark)});
  });
  return vars;
};

export const generateRadixColorValues = (color: SupportedRadixColorKeys, isDark: boolean = false): ConfigColorShades => {
  const colorKey = isDark ? `${color}Dark` as RadixColorKeys : color;
  const alphaKey = isDark ? `${color}DarkA` as RadixColorKeys : `${color}A` as RadixColorKeys;

  const colors = radixColors[colorKey];
  const alphaColors = radixColors[alphaKey];

  const shades: ConfigColorShades = {};

  if (colors) {
    Object.values(colors).forEach((value, index) => {
      const key = `${index + 1}` as keyof ConfigColorShades;
      shades[key] = value;
    });
  } else {
    console.warn(`Invalid radix color "${color}".`);
  }

  if (alphaColors) {
    Object.values(alphaColors).forEach((value, index) => {
      const key = `a${index + 1}` as keyof ConfigColorShades;
      shades[key] = value;
    });
  } else {
    console.warn(`Invalid radix alpha color "${color}A".`);
  }

  return shades;
};

export const generateCssVar = (color: string, index: string | number): CssVariable => (`--color-${color}-${index}`);
export const generateShadowCssVar = (name: string): CssVariable => (`--shadow-${name}`);

export function generateColorCssVars(color: string): ConfigColorShades {
  const vars: ConfigColorShades = {};

  for (let i = 1; i <= 12; i++) {
    if (i === 1) {
      vars['DEFAULT'] = `var(${generateCssVar(color, 6)})`;
    }
    vars[i] = `var(${generateCssVar(color, i)})`;
    vars[`a${i}`] = `var(${generateCssVar(color, `a${i}`)})`;
  }

  return vars;
}

export const generateShadowCssVars = (shadows: Record<string, string>): CssVariableRecord => {
  const vars: CssVariableRecord = {};
  Object.entries(shadows).forEach(([name, value]) => {
    vars[generateShadowCssVar(name)] = value;
  });
  return vars;
};

export const generateThemeCssVars = (colors: ConfigColor): CssVariableRecord => {
  const vars: CssVariableRecord = {};
  Object.entries(colors).forEach(([color, shades]) => {
    Object.entries(shades).forEach(([index, shade]) => {
      Object.assign(vars, {
        [`${generateCssVar(color, index)}`]: shade,
      });
    });
  });
  return vars;
};