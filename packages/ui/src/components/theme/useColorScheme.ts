import { useTheme } from './useTheme';
import type { ColorScheme } from './useTheme';

export function useColorScheme(): ColorScheme {
  const { currentMode } = useTheme();
  return currentMode;
}

