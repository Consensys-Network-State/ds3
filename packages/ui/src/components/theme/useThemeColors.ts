import { useTheme } from './useTheme';
import type { ConfigColorShades, ConfigColorModes } from '@consensys/ds3-theme';

type ColorKey = keyof ConfigColorModes['light'];
type ShadeKey = keyof ConfigColorShades;
type ThemeColorKey = `${ColorKey}${Exclude<ShadeKey, 'DEFAULT'>}`;

type ThemeColors = {
  [K in ThemeColorKey]: string;
};

export function useThemeColors(): ThemeColors {
  const { theme, config, currentMode } = useTheme();
  const currentTheme = config?.themes[theme];
  const colors = currentTheme?.colors[currentMode];

  if (!colors) {
    return {} as ThemeColors;
  }

  // Transform the colors object to make it easier to use
  const transformedColors = {} as ThemeColors;
  
  Object.entries(colors as Record<string, unknown>).forEach(([colorName, colorValue]) => {
    // If it's a direct color value
    if (typeof colorValue === 'string') {
      transformedColors[colorName as ThemeColorKey] = colorValue;
      return;
    }

    // If it's a color scale
    Object.entries(colorValue as Record<string, string>).forEach(([shade, value]) => {
      // Convert shade to camelCase (e.g., 'a1' -> 'A1')
      const camelShade = shade.startsWith('a') 
        ? `A${shade.slice(1)}` 
        : shade;
      
      const key = `${colorName}${camelShade}` as ThemeColorKey;
      transformedColors[key] = value;
    });
  });

  return transformedColors;
} 