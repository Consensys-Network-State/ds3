import type {
  ConfigColorShades,
  ConfigColor,
  UserConfigColors,
  GeneratedColorConfig,
} from './types.js';
import {
  RADIX_GENERATOR_DEFAULTS,
  RADIX_COLORS,
  generateRadixColors,
  getColorScaleObject
} from './radix';
import { COLOR_MODES } from './constants.js';

export const generateColorValues = (colors: UserConfigColors, isDark: boolean = false): ConfigColor => {
  const vars: ConfigColor = {};
  
  Object.entries(colors).forEach(([colorName, color]) => {
    if (typeof color === 'string') {
      // Handle preset color names by getting their base color and generating
      const presetColor = RADIX_COLORS[color as keyof typeof RADIX_COLORS];
      if (!presetColor) {
        console.warn(`Invalid preset color name "${color}"`);
        return;
      }

      const generatedColors = generateRadixColors({
        appearance: isDark ? COLOR_MODES.Dark : COLOR_MODES.Light,
        accent: presetColor,
        gray: RADIX_GENERATOR_DEFAULTS.gray,
        background: RADIX_GENERATOR_DEFAULTS.background[isDark ? COLOR_MODES.Dark : COLOR_MODES.Light]
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

      vars[colorName] = {
        ...colorScale.base,
        ...colorScale.alpha,
        contrast: colorScale.base.contrast,
        surface: colorScale.base.surface,
        indicator: colorScale.base.indicator,
        track: colorScale.base.track
      };
    } else if ('accent' in color) {
      // Handle generated colors
      const config = color as GeneratedColorConfig;
      const accentColor = typeof config.accent === 'string' 
        ? config.accent 
        : isDark ? (config.accent.dark || config.accent.light) : config.accent.light;

      const generatedColors = generateRadixColors({
        appearance: isDark ? COLOR_MODES.Dark : COLOR_MODES.Light,
        accent: accentColor,
        gray: config.gray || RADIX_GENERATOR_DEFAULTS.gray,
        background: config.background?.[isDark ? COLOR_MODES.Dark : COLOR_MODES.Light] || 
                   RADIX_GENERATOR_DEFAULTS.background[isDark ? COLOR_MODES.Dark : COLOR_MODES.Light]
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

      vars[colorName] = {
        ...colorScale.base,
        ...colorScale.alpha,
        contrast: colorScale.base.contrast,
        surface: colorScale.base.surface,
        indicator: colorScale.base.indicator,
        track: colorScale.base.track
      };
    } else if (COLOR_MODES.Light in color) {
      // Handle custom palettes
      const palette = color as { [COLOR_MODES.Light]: ConfigColorShades; [COLOR_MODES.Dark]?: ConfigColorShades };
      const darkPalette = isDark ? palette[COLOR_MODES.Dark] : undefined;
      vars[colorName] = darkPalette || palette[COLOR_MODES.Light];
    }
  });

  return vars;
}; 