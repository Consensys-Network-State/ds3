import { useTheme } from './useTheme';

export type Platform = 'vite' | 'nextjs' | 'expo' | 'unknown';

export const usePlatform = (): Platform => {
  const { config } = useTheme();
  
  if (!config?.framework) {
    return 'unknown';
  }
  
  return config.framework;
}; 