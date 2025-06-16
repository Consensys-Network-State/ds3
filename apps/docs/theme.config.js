/**
 * Theme configuration for DS3
 * @see https://github.com/Consensys-Network-State/ds3/tree/main/packages/theme
 * @type {import('@consensys/ds3-theme').UserConfig}
 */
module.exports = {
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
};