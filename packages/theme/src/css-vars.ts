import type {
  ConfigColor,
  ConfigThemes,
  CssVariableRecord,
  CssVariable,
  ConfigColorShades
} from './types.js';
import { COLOR_MODES, DEFAULT_THEME } from './constants.js';

export const generateColorCssVar = (color: string, index: string | number): CssVariable => (`--color-${color}-${index}`);

export const generateShadowCssVar = (name: string): CssVariable => (`--shadow-${name}`);

export const generateColorCssVars = (color: string): ConfigColorShades => {
  const vars: ConfigColorShades = {};

  // Add base colors
  for (let i = 1; i <= 12; i++) {
    if (i === 1) {
      vars['DEFAULT'] = `var(${generateColorCssVar(color, 6)})`;
    }
    vars[i] = `var(${generateColorCssVar(color, i)})`;
    vars[`a${i}`] = `var(${generateColorCssVar(color, `a${i}`)})`;
  }

  // Add utility colors
  vars.contrast = `var(${generateColorCssVar(color, 'contrast')})`;
  vars.surface = `var(${generateColorCssVar(color, 'surface')})`;
  vars.indicator = `var(${generateColorCssVar(color, 'indicator')})`;
  vars.track = `var(${generateColorCssVar(color, 'track')})`;

  return vars;
};

export const generateThemeCssVars = (colors: ConfigColor): CssVariableRecord => {
  const vars: CssVariableRecord = {};
  Object.entries(colors).forEach(([color, shades]) => {
    Object.entries(shades).forEach(([index, shade]) => {
      Object.assign(vars, {
        [generateColorCssVar(color, index)]: shade,
      });
    });
  });
  return vars;
};

export const generateShadowCssVars = (shadows: Record<string, string>): CssVariableRecord => {
  const vars: CssVariableRecord = {};
  Object.entries(shadows).forEach(([name, value]) => {
    vars[generateShadowCssVar(name)] = value;
  });
  return vars;
};

export const generateThemeVars = (themes: ConfigThemes): Record<string, CssVariableRecord> => {
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

  return vars;
}; 