const { generateConfig } = require('@ds3/config');

module.exports = generateConfig({
  themes: {
    default: {
      // use any radix colors - https://www.radix-ui.com/colors
      colors: {
        neutral: 'gray',
        primary: 'blue',
        secondary: 'violet',
        error: 'red',
        warning: 'amber',
        success: 'green',
        // add custom schemes here
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
});