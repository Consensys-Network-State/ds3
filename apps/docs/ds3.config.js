const { generateConfig } = require('@ds3/config');

module.exports = generateConfig({
  themes: {
    default: {
      // use any radix colors - https://www.radix-ui.com/colors
      colors: {
        neutral: 'gray',
        primary: 'violet',
        secondary: 'teal',
        error: 'red',
        warning: 'yellow',
        success: 'green',
        // add custom schemes here
      },
    },
  },
});