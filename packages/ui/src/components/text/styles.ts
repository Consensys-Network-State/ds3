import { cva } from 'class-variance-authority';

export const textVariants = cva('', {
  variants: {
    size: {
      // Font sizes (numeric)
      2: 'text-2',
      '2.5': 'text-2.5',
      3: 'text-3',
      '3.5': 'text-3.5',
      4: 'text-4',
      '4.5': 'text-4.5',
      5: 'text-5',
      '5.5': 'text-5.5',
      6: 'text-6',
      7: 'text-7',
      8: 'text-8',
      10: 'text-10',
      12: 'text-12',
      14: 'text-14',
      16: 'text-16',
      
      // Text sizes (with line height and weight)
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      
      // Heading sizes (with line height and weight)
      h1: 'text-h1',
      h2: 'text-h2',
      h3: 'text-h3',
      h4: 'text-h4',
      h5: 'text-h5',
      h6: 'text-h6',
      
      // Legacy sizes (kept for backward compatibility)
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      regular: 'font-regular',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    color: {
      neutral: 'text-neutral-a11',
      primary: 'text-primary-a11',
      secondary: 'text-secondary-a11',
      error: 'text-error-a11',
      warning: 'text-warning-a11',
      success: 'text-success-a11',
    },
    lineHeight: {
      tight: 'leading-tight',
      normal: 'leading-normal',
      loose: 'leading-loose',
    },
    fontFamily: {
      inter: 'font-inter',
      roboto: 'font-roboto',
      robotoCondensed: 'font-robotoCondensed',
      robotoSlab: 'font-robotoSlab',
      libreFranklin: 'font-libreFranklin',
    },
    spectrum: {
      bg: '',
      border: '',
      solid: '',
      text: '',
      contrast: '',
    },
    hover: {
      false: '',
      true: '',
    }
  },
  compoundVariants: [
    // Text spectrum (default behavior)
    { spectrum: 'text', color: 'neutral', class: 'text-neutral-12' },
    { spectrum: 'text', color: 'primary', class: 'text-primary-12' },
    { spectrum: 'text', color: 'secondary', class: 'text-secondary-12' },
    { spectrum: 'text', color: 'error', class: 'text-error-12' },
    { spectrum: 'text', color: 'warning', class: 'text-warning-12' },
    { spectrum: 'text', color: 'success', class: 'text-success-12' },

    // Background spectrum
    { spectrum: 'bg', color: 'neutral', class: 'text-neutral-a3' },
    { spectrum: 'bg', color: 'primary', class: 'text-primary-a3' },
    { spectrum: 'bg', color: 'secondary', class: 'text-secondary-a3' },
    { spectrum: 'bg', color: 'error', class: 'text-error-a3' },
    { spectrum: 'bg', color: 'warning', class: 'text-warning-a3' },
    { spectrum: 'bg', color: 'success', class: 'text-success-a3' },

    // Border spectrum
    { spectrum: 'border', color: 'neutral', class: 'text-neutral-a7' },
    { spectrum: 'border', color: 'primary', class: 'text-primary-a7' },
    { spectrum: 'border', color: 'secondary', class: 'text-secondary-a7' },
    { spectrum: 'border', color: 'error', class: 'text-error-a7' },
    { spectrum: 'border', color: 'warning', class: 'text-warning-a7' },
    { spectrum: 'border', color: 'success', class: 'text-success-a7' },

    // Solid spectrum
    { spectrum: 'solid', color: 'neutral', class: 'text-neutral-9' },
    { spectrum: 'solid', color: 'primary', class: 'text-primary-9' },
    { spectrum: 'solid', color: 'secondary', class: 'text-secondary-9' },
    { spectrum: 'solid', color: 'error', class: 'text-error-9' },
    { spectrum: 'solid', color: 'warning', class: 'text-warning-9' },
    { spectrum: 'solid', color: 'success', class: 'text-success-9' },

    // Contrast spectrum
    { spectrum: 'contrast', color: 'neutral', class: 'text-neutral-contrast' },
    { spectrum: 'contrast', color: 'primary', class: 'text-primary-contrast' },
    { spectrum: 'contrast', color: 'secondary', class: 'text-secondary-contrast' },
    { spectrum: 'contrast', color: 'error', class: 'text-error-contrast' },
    { spectrum: 'contrast', color: 'warning', class: 'text-warning-contrast' },
    { spectrum: 'contrast', color: 'success', class: 'text-success-contrast' },

    // Hover states for text spectrum (12 -> a12)
    { spectrum: 'text', hover: true, color: 'neutral', class: 'text-neutral-12 hover:text-neutral-a12' },
    { spectrum: 'text', hover: true, color: 'primary', class: 'text-primary-12 hover:text-primary-a12' },
    { spectrum: 'text', hover: true, color: 'secondary', class: 'text-secondary-12 hover:text-secondary-a12' },
    { spectrum: 'text', hover: true, color: 'error', class: 'text-error-12 hover:text-error-a12' },
    { spectrum: 'text', hover: true, color: 'warning', class: 'text-warning-12 hover:text-warning-a12' },
    { spectrum: 'text', hover: true, color: 'success', class: 'text-success-12 hover:text-success-a12' },

    // Hover states for background spectrum (a3 -> a4)
    { spectrum: 'bg', hover: true, color: 'neutral', class: 'text-neutral-a3 hover:text-neutral-a4' },
    { spectrum: 'bg', hover: true, color: 'primary', class: 'text-primary-a3 hover:text-primary-a4' },
    { spectrum: 'bg', hover: true, color: 'secondary', class: 'text-secondary-a3 hover:text-secondary-a4' },
    { spectrum: 'bg', hover: true, color: 'error', class: 'text-error-a3 hover:text-error-a4' },
    { spectrum: 'bg', hover: true, color: 'warning', class: 'text-warning-a3 hover:text-warning-a4' },
    { spectrum: 'bg', hover: true, color: 'success', class: 'text-success-a3 hover:text-success-a4' },

    // Hover states for border spectrum (a7 -> a8)
    { spectrum: 'border', hover: true, color: 'neutral', class: 'text-neutral-a7 hover:text-neutral-a8' },
    { spectrum: 'border', hover: true, color: 'primary', class: 'text-primary-a7 hover:text-primary-a8' },
    { spectrum: 'border', hover: true, color: 'secondary', class: 'text-secondary-a7 hover:text-secondary-a8' },
    { spectrum: 'border', hover: true, color: 'error', class: 'text-error-a7 hover:text-error-a8' },
    { spectrum: 'border', hover: true, color: 'warning', class: 'text-warning-a7 hover:text-warning-a8' },
    { spectrum: 'border', hover: true, color: 'success', class: 'text-success-a7 hover:text-success-a8' },

    // Hover states for solid spectrum (9 -> 10)
    { spectrum: 'solid', hover: true, color: 'neutral', class: 'text-neutral-9 hover:text-neutral-10' },
    { spectrum: 'solid', hover: true, color: 'primary', class: 'text-primary-9 hover:text-primary-10' },
    { spectrum: 'solid', hover: true, color: 'secondary', class: 'text-secondary-9 hover:text-secondary-10' },
    { spectrum: 'solid', hover: true, color: 'error', class: 'text-error-9 hover:text-error-10' },
    { spectrum: 'solid', hover: true, color: 'warning', class: 'text-warning-9 hover:text-warning-10' },
    { spectrum: 'solid', hover: true, color: 'success', class: 'text-success-9 hover:text-success-10' },

    // Hover states for contrast spectrum (contrast -> a12)
    // { spectrum: 'contrast', hover: true, color: 'neutral', class: 'text-neutral-contrast hover:text-neutral-a12' },
    { spectrum: 'contrast', hover: true, color: 'primary', class: 'text-primary-contrast hover:text-primary-a12' },
    { spectrum: 'contrast', hover: true, color: 'secondary', class: 'text-secondary-contrast hover:text-secondary-a12' },
    { spectrum: 'contrast', hover: true, color: 'error', class: 'text-error-contrast hover:text-error-a12' },
    { spectrum: 'contrast', hover: true, color: 'warning', class: 'text-warning-contrast hover:text-warning-a12' },
    { spectrum: 'contrast', hover: true, color: 'success', class: 'text-success-contrast hover:text-success-a12' },
  ],
  defaultVariants: {
    size: 'base',
    weight: 'normal',
    color: 'neutral',
    lineHeight: 'normal',
    spectrum: 'text',
    hover: false,
  },
}); 