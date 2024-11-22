import * as radixColors from "@radix-ui/colors";
import type {
  RadixColorKeys,
  SupportedRadixColorKeys,
  ConfigColorShades,
  ConfigThemes,
  ConfigColor,
  Config,
  UserConfigColor,
  UserConfigColors,
  UserConfig,
  CssVariableRecord,
  CssVariable
} from './types.js'
import _ from "lodash";
import defaultConfig from "./default-config.js";
// import { join } from "path";
// import { existsSync } from "fs";
//
// export const loadConfig = (configFileName: string = 'ds3.config'): Config => {
//   const tsPath = join(process.cwd(), `${configFileName}.ts`);
//   const jsPath = join(process.cwd(), `${configFileName}.js`);
//
//   const configPath = existsSync(tsPath) ? tsPath : jsPath;
//
//   if (!existsSync(configPath)) {
//     throw new Error(`Config file not found. Looked for ${tsPath} or ${jsPath}`);
//   }
//
//   // Ensure the config file exists
//   if (!existsSync(configPath)) {
//     throw new Error(`Config file not found at ${configPath}`);
//   }
//
//   // Dynamically import the config file (supports ESM and CJS)
//   const rawConfig: UserConfig = require(configPath).default ?? require(configPath);
//
//   // Validate and transform the config using the generator
//   return generateConfig(rawConfig);
// }

export const generateConfig = (userConfig: UserConfig) : Config => {
  const blueprint = _.merge(defaultConfig, userConfig || {});

  return {
    blueprint,
    themes: generateThemes(blueprint),
  }
}

export const generateThemes = (config: UserConfig): ConfigThemes => {
  const { themes } = config;
  if (!themes) return {};

  const processedThemes: ConfigThemes = {};

  Object.entries(themes).forEach(([themeName, theme]) => {
    const colors = theme.colors;
    if (!colors) return;

    const lightColors = (colors.light || colors) as UserConfigColor;
    const darkColors = (colors.dark || {}) as UserConfigColor;

    const lightColorShades = generateColorValues(lightColors);
    const darkColorShades = Object.keys(darkColors).length > 0
      ? generateColorValues(darkColors, true)
      : generateColorValues(lightColors, true);

    processedThemes[themeName] = {
      colors: {
        light: lightColorShades,
        dark: darkColorShades
      }
    }
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
