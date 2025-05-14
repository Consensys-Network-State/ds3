import { UserConfig } from '@ds3/core'

export default {
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
    },
    oceanBreeze: {
      colors: {
        neutral: 'slate',
        primary: 'cyan',
        secondary: 'blue',
        error: 'red',
        warning: 'amber',
        success: 'grass',
      },
    },
    sunsetGlow: {
      colors: {
        neutral: 'mauve',
        primary: 'pink',
        secondary: 'orange',
        error: 'crimson',
        warning: 'yellow',
        success: 'lime',
      },
    },
    forestHues: {
      colors: {
        neutral: 'sage',
        primary: 'green',
        secondary: 'brown',
        error: 'red',
        warning: 'orange',
        success: 'teal',
      },
    }
  },
} satisfies UserConfig;
