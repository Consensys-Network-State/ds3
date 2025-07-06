import { cva } from 'class-variance-authority';

export const iconVariants = cva('', {
  variants: {
    color: {
      neutral: 'text-neutral-a11',
      primary: 'text-primary-a11',
      secondary: 'text-secondary-a11',
      error: 'text-error-a11',
      warning: 'text-warning-a11',
      success: 'text-success-a11',
    },
    size: {
      sm: 'h-3 w-3',
      md: 'h-4 w-4',
      lg: 'h-5 w-5',
    },
    spectrum: {
      bg: '',
      border: '',
      solid: '',
      text: '',
      contrast: '',
    },
  },
  compoundVariants: [
    // Text spectrum (default behavior)
    { spectrum: 'text', color: 'neutral', class: 'text-neutral-a11' },
    { spectrum: 'text', color: 'primary', class: 'text-primary-a11' },
    { spectrum: 'text', color: 'secondary', class: 'text-secondary-a11' },
    { spectrum: 'text', color: 'error', class: 'text-error-a11' },
    { spectrum: 'text', color: 'warning', class: 'text-warning-a11' },
    { spectrum: 'text', color: 'success', class: 'text-success-a11' },

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
    { spectrum: 'solid', color: 'neutral', class: 'text-neutral-a11' },
    { spectrum: 'solid', color: 'primary', class: 'text-primary-a11' },
    { spectrum: 'solid', color: 'secondary', class: 'text-secondary-a11' },
    { spectrum: 'solid', color: 'error', class: 'text-error-a11' },
    { spectrum: 'solid', color: 'warning', class: 'text-warning-a11' },
    { spectrum: 'solid', color: 'success', class: 'text-success-a11' },

    // Contrast spectrum
    { spectrum: 'contrast', color: 'neutral', class: 'text-neutral-contrast' },
    { spectrum: 'contrast', color: 'primary', class: 'text-primary-contrast' },
    { spectrum: 'contrast', color: 'secondary', class: 'text-secondary-contrast' },
    { spectrum: 'contrast', color: 'error', class: 'text-error-contrast' },
    { spectrum: 'contrast', color: 'warning', class: 'text-warning-contrast' },
    { spectrum: 'contrast', color: 'success', class: 'text-success-contrast' },
  ],
  defaultVariants: {
    color: 'neutral',
    size: 'md',
    spectrum: 'text'
  }
}); 