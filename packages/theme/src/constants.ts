export const COLOR_MODES = {
  Light: 'light' as const,
  Dark: 'dark' as const,
};

export const DEFAULT_THEME = 'default';
export const DEFAULT_MODE = 'light';

export const COLOR_GENERATOR_DEFAULTS = {
  gray: '#8B8D98',
  background: {
    light: '#FFFFFF',
    dark: '#111111'
  }
} as const;
