import { UserConfig } from './types.js';

const defaultConfig: UserConfig = {
  themes: {
    default: {
      colors: {
        neutral: 'gray',
        primary: 'violet',
        secondary: 'teal',
        error: 'red',
        warning: 'yellow',
        success: 'green',
      }
    },
  }
}

export default defaultConfig;