import { accentColors, gray, bgLight, bgDark } from './baseColors';
import { generateRadixColors, getColorScaleObject } from './generateRadixColors';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

type AccentColors = typeof accentColors;
type ColorName = keyof AccentColors;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Generate palettes for each accent color
const generatedPalettes = Object.entries(accentColors).map(([colorName, colorValue]) => {
  // Generate light mode colors
  const lightColors = generateRadixColors({
    appearance: 'light',
    accent: colorValue as string,
    gray,
    background: bgLight,
  });

  // Generate dark mode colors
  const darkColors = generateRadixColors({
    appearance: 'dark',
    accent: colorValue as string,
    gray,
    background: bgDark,
  });

  // Get the formatted objects
  const lightPalette = getColorScaleObject({
    scale: lightColors.accentScale,
    scaleWideGamut: lightColors.accentScaleWideGamut,
    scaleAlpha: lightColors.accentScaleAlpha,
    scaleAlphaWideGamut: lightColors.accentScaleAlphaWideGamut,
    contrast: lightColors.accentContrast,
    surface: lightColors.accentSurface,
    surfaceWideGamut: lightColors.accentSurfaceWideGamut,
  });

  const darkPalette = getColorScaleObject({
    scale: darkColors.accentScale,
    scaleWideGamut: darkColors.accentScaleWideGamut,
    scaleAlpha: darkColors.accentScaleAlpha,
    scaleAlphaWideGamut: darkColors.accentScaleAlphaWideGamut,
    contrast: darkColors.accentContrast,
    surface: darkColors.accentSurface,
    surfaceWideGamut: darkColors.accentSurfaceWideGamut,
  });

  // Extract utility colors
  const lightUtils = {
    contrast: lightPalette.base.contrast,
    surface: lightPalette.base.surface,
    indicator: lightPalette.base.indicator,
    track: lightPalette.base.track,
  };

  const darkUtils = {
    contrast: darkPalette.base.contrast,
    surface: darkPalette.base.surface,
    indicator: darkPalette.base.indicator,
    track: darkPalette.base.track,
  };

  // Remove utility colors from base objects
  const { contrast, surface, indicator, track, ...lightBase } = lightPalette.base;
  const { contrast: dContrast, surface: dSurface, indicator: dIndicator, track: dTrack, ...darkBase } = darkPalette.base;

  // Convert numeric keys to Radix format (e.g., "1" -> "colorName1")
  const convertToRadixFormat = (obj: Record<string, string>, prefix: string) => {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      acc[`${prefix}${key}`] = value;
      return acc;
    }, {} as Record<string, string>);
  };

  // Convert alpha keys to Radix format (e.g., "a1" -> "colorNameA1")
  const convertAlphaToRadixFormat = (obj: Record<string, string>, prefix: string) => {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      acc[`${prefix}A${key.slice(1)}`] = value;
      return acc;
    }, {} as Record<string, string>);
  };

  return {
    name: String(colorName),
    light: convertToRadixFormat(lightBase, colorName),
    lightA: convertAlphaToRadixFormat(lightPalette.alpha, colorName),
    lightUtils,
    dark: convertToRadixFormat(darkBase, colorName),
    darkA: convertAlphaToRadixFormat(darkPalette.alpha, colorName),
    darkUtils,
  };
});

// Generate the output string
const output = `// Generated color palettes
// This file is auto-generated. Do not edit directly.

${generatedPalettes.map(palette => {
  const formatObject = (obj: Record<string, string>) => {
    return Object.entries(obj)
      .map(([key, value]) => `  ${key}: "${value}"`)
      .join(',\n');
  };

  return `export const ${palette.name} = {
${formatObject(palette.light)}
} as const; // light palette
export const ${palette.name}A = {
${formatObject(palette.lightA)}
} as const; // light alpha palette
export const ${palette.name}Utils = {
${formatObject(palette.lightUtils)}
} as const; // light utility colors
export const ${palette.name}Dark = {
${formatObject(palette.dark)}
} as const; // dark palette
export const ${palette.name}DarkA = {
${formatObject(palette.darkA)}
} as const; // dark alpha palette
export const ${palette.name}DarkUtils = {
${formatObject(palette.darkUtils)}
} as const; // dark utility colors\n`;
}).join('\n')}
`;

// Write to file
const outputPath = join(__dirname, 'index.ts');
writeFileSync(outputPath, output);

console.log(`Generated color palettes written to ${outputPath}`); 