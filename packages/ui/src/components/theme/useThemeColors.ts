import { useThemeContext } from './context';
import { useColorScheme } from './useColorScheme';
import type { ConfigColorShades, ConfigColorModes } from '@consensys/ds3-theme';
import { COLOR_MODES } from '@consensys/ds3-theme';

type ColorKey = keyof ConfigColorModes['light'];
type ShadeKey = keyof ConfigColorShades;
type ThemeColorKey = `${ColorKey}${Exclude<ShadeKey, 'DEFAULT'>}`;

type ThemeColors = {
  [K in ThemeColorKey]: string;
};

export function useThemeColors(): ThemeColors {
  const { theme, config } = useThemeContext();
  const { currentMode } = useColorScheme();
  const currentTheme = config.themes[theme];
  const colors = currentTheme.colors[currentMode || COLOR_MODES.Light];

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