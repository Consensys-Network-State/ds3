import type {
  BoxShadowConfig,
} from './types';

export const normalizeBoxShadowValue = (value: string | string[]): string => {
  return Array.isArray(value) ? value.join(', ') : value;
};

export const generateBoxShadowValues = (
  shadows: BoxShadowConfig,
  isDark: boolean = false
): Record<string, string> => {
  const processedShadows: Record<string, string> = {};

  Object.entries(shadows).forEach(([name, value]) => {
    if (typeof value === 'string' || Array.isArray(value)) {
      processedShadows[name] = normalizeBoxShadowValue(value);
    } else {
      const modeValue = isDark ? value.dark : value.light;
      processedShadows[name] = normalizeBoxShadowValue(modeValue);
    }
  });

  return processedShadows;
};
