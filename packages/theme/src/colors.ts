import * as radixColors from "@radix-ui/colors";
import type {
  RadixColorKeys,
  SupportedRadixColorKeys,
  ConfigColorShades,
  ConfigColor,
  UserConfigColors,
  GeneratedColorConfig,
} from './types.js';
import { COLOR_GENERATOR_DEFAULTS } from './constants.js';
import { generateRadixColors, getColorScaleObject } from './generateRadixColors.js';

export const generateColorValues = (colors: UserConfigColors, isDark: boolean = false): ConfigColor => {
  const vars: ConfigColor = {};
  
  Object.entries(colors).forEach(([colorName, color]) => {
    if (typeof color === 'string') {
      // Handle Radix color names
      vars[colorName] = generateRadixColorValues(color as SupportedRadixColorKeys, isDark);
    } else if ('accent' in color) {
      // Handle generated colors
      const config = color as GeneratedColorConfig;
      const accentColor = typeof config.accent === 'string' 
        ? config.accent 
        : isDark ? (config.accent.dark || config.accent.light) : config.accent.light;

      const generatedColors = generateRadixColors({
        appearance: isDark ? 'dark' : 'light',
        accent: accentColor,
        gray: config.gray || COLOR_GENERATOR_DEFAULTS.gray,
        background: config.background?.[isDark ? 'dark' : 'light'] || 
                   COLOR_GENERATOR_DEFAULTS.background[isDark ? 'dark' : 'light']
      });
      
      const colorScale = getColorScaleObject({
        scale: generatedColors.accentScale,
        scaleWideGamut: generatedColors.accentScaleWideGamut,
        scaleAlpha: generatedColors.accentScaleAlpha,
        scaleAlphaWideGamut: generatedColors.accentScaleAlphaWideGamut,
        contrast: generatedColors.accentContrast,
        surface: generatedColors.accentSurface,
        surfaceWideGamut: generatedColors.accentSurfaceWideGamut,
      });

      // Combine base colors and alpha colors
      vars[colorName] = {
        ...colorScale.base,
        ...colorScale.alpha
      };
    } else if ('light' in color) {
      // Handle custom palettes
      const palette = color as { light: ConfigColorShades; dark?: ConfigColorShades };
      vars[colorName] = isDark && palette.dark ? palette.dark : palette.light;
    }
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