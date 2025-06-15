import { useColorScheme as useDS3ColorScheme } from '@consensys/ds3';

export function useColorScheme(): 'light' | 'dark' {
  const { currentMode } = useDS3ColorScheme();
  return currentMode === 'dark'? 'dark' : 'light';
}
