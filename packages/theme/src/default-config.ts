import { UserConfig } from './types';

/**
 * Default config for the DS3 theme.
 * 
 * To learn more about theme configuration, see:
 * @see https://github.com/Consensys-Network-State/ds3/tree/main/packages/theme
 */
export const defaultConfig: UserConfig = {
  themes: {
    // Default theme using Radix preset colors
    default: {
      colors: {
        neutral: 'gray',
        primary: 'blue',
        secondary: 'violet',
        error: 'red',
        warning: 'amber',
        success: 'green',
        info: 'cyan'
      },

      // Box shadow configuration
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

    // Ocean theme using Radix preset colors
    ocean: {
      colors: {
        neutral: 'slate',
        primary: 'cyan',
        secondary: 'blue',
        error: 'red',
        warning: 'amber',
        success: 'grass',
        info: 'sky'
      },
    },

    // Sunset theme using Radix color generator
    sunset: {
      colors: {
        primary: {
          accent: '#d6409f', // pink preset color
          gray: '#8B8D98',
          background: {
            light: '#FFFFFF',
            dark: '#111111'
          }
        },
        secondary: {
          accent: '#f76b15', // orange preset color
        },

        // rest are Radix presets
        neutral: 'mauve',
        error: 'crimson',
        warning: 'yellow',
        success: 'lime',
        info: 'iris'
      },
    },

     // Forest theme using custom values for primary
     forest: {
      colors: {
        primary: { // green preset color
          light: {
            1: '#fbfefc',
            2: '#f4fbf7',
            3: '#e5f6eb',
            4: '#d6f1df',
            5: '#c4e8d1',
            6: '#adddc0',
            7: '#8fcea8',
            8: '#60b887',
            9: '#30a46c',
            10: '#289662',
            11: '#00814c',
            12: '#1d3b2a',
            a1: '#00c04004',
            a2: '#00a3460b',
            a3: '#00a73b1a',
            a4: '#00a83829',
            a5: '#019c393b',
            a6: '#00963c52',
            a7: '#00903970',
            a8: '#008d3f9f',
            a9: '#008f4acf',
            a10: '#008345d7',
            a11: '#00814c',
            a12: '#00220fe2',
            contrast: '#ffffff',
            surface: '#f4fbf7cc',
            indicator: '#30a46c',
            track: '#30a46c'
          },
          dark: {
            1: '#0c130f',
            2: '#121b16',
            3: '#152c1f',
            4: '#143b27',
            5: '#1b4930',
            6: '#23573b',
            7: '#2b6848',
            8: '#327c55',
            9: '#30a46c',
            10: '#1d9760',
            11: '#63d196',
            12: '#b2f1cb',
            a1: '#00bb0003',
            a2: '#29f9850b',
            a3: '#35ff8d1d',
            a4: '#22ff8e2d',
            a5: '#3cff953c',
            a6: '#4fffa04b',
            a7: '#58fda65e',
            a8: '#5bffa873',
            a9: '#44ffa49e',
            a10: '#27ff9d90',
            a11: '#77ffb6ce',
            a12: '#bcffd7f0',
            contrast: '#ffffff',
            surface: '#121b1680',
            indicator: '#30a46c',
            track: '#30a46c'
          }
        },

        // rest are Radix presets
        neutral: 'sage',
        secondary: 'brown',
        error: 'red',
        warning: 'orange',
        success: 'teal',
        info: 'bronze'
      },
    },

    // Onyx theme - Monochrome black and white using Radix color generator
    onyx: {
      colors: {
        neutral: 'gray',
        primary: {
          accent: {
            light: '#000000',
            dark: '#ffffff'
          },
        },
        secondary: 'violet',
        error: 'red',
        warning: 'amber',
        success: 'green',
        info: 'cyan'
      },
    },
  }
}

export default defaultConfig;