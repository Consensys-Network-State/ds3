import { UserConfig } from './types.js';

const defaultConfig: UserConfig = {
  themes: {
    default: {
      colors: {
        neutral: 'gray',
        primary: 'blue',
        secondary: 'violet',
        error: 'red',
        warning: 'amber',
        success: 'green',
      },
      boxShadow: {
        elevated: {
          dark: [
            'inset 0 0 0 1px rgba(255, 255, 255, 0.10)',
            'inset 0 4px 2px -2px rgba(255, 255, 255, 0.15)',
            'inset 0 1px 1px 0 rgba(255, 255, 255, 0.40)',
            'inset 0 -1px 1px 0 rgba(0, 0, 0, 0.40)',
            'inset 0 0 0 0 rgba(255, 255, 255, 0.00)',
            'inset 0 0 0 0 rgba(255, 255, 255, 0.00)'
          ],
          light: [
            'inset 0 0 0 1px rgba(0, 0, 0, 0.09)',
            'inset 0 -2px 1px 0 rgba(0, 0, 0, 0.06)',
            'inset 0 0 0 0 rgba(255, 255, 255, 0.00)',
            'inset 0 0 0 0 rgba(255, 255, 255, 0.00)',
            'inset 0 4px 2px -2px rgba(255, 255, 255, 0.70)',
            'inset 0 2px 1px -1px rgba(255, 255, 255, 0.70)'
          ]
        },
      },
    },
  }
}

export default defaultConfig;