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
    hover: {
      false: '',
      true: 'group',
    }
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

    // Hover states for text spectrum
    { spectrum: 'text', hover: true, color: 'neutral', class: 'group-hover:text-neutral-a12' },
    { spectrum: 'text', hover: true, color: 'primary', class: 'group-hover:text-primary-a12' },
    { spectrum: 'text', hover: true, color: 'secondary', class: 'group-hover:text-secondary-a12' },
    { spectrum: 'text', hover: true, color: 'error', class: 'group-hover:text-error-a12' },
    { spectrum: 'text', hover: true, color: 'warning', class: 'group-hover:text-warning-a12' },
    { spectrum: 'text', hover: true, color: 'success', class: 'group-hover:text-success-a12' },

    // Hover states for background spectrum
    { spectrum: 'bg', hover: true, color: 'neutral', class: 'group-hover:text-neutral-a4' },
    { spectrum: 'bg', hover: true, color: 'primary', class: 'group-hover:text-primary-a4' },
    { spectrum: 'bg', hover: true, color: 'secondary', class: 'group-hover:text-secondary-a4' },
    { spectrum: 'bg', hover: true, color: 'error', class: 'group-hover:text-error-a4' },
    { spectrum: 'bg', hover: true, color: 'warning', class: 'group-hover:text-warning-a4' },
    { spectrum: 'bg', hover: true, color: 'success', class: 'group-hover:text-success-a4' },

    // Hover states for border spectrum
    { spectrum: 'border', hover: true, color: 'neutral', class: 'group-hover:text-neutral-a8' },
    { spectrum: 'border', hover: true, color: 'primary', class: 'group-hover:text-primary-a8' },
    { spectrum: 'border', hover: true, color: 'secondary', class: 'group-hover:text-secondary-a8' },
    { spectrum: 'border', hover: true, color: 'error', class: 'group-hover:text-error-a8' },
    { spectrum: 'border', hover: true, color: 'warning', class: 'group-hover:text-warning-a8' },
    { spectrum: 'border', hover: true, color: 'success', class: 'group-hover:text-success-a8' },

    // Hover states for solid spectrum
    { spectrum: 'solid', hover: true, color: 'neutral', class: 'group-hover:text-neutral-10' },
    { spectrum: 'solid', hover: true, color: 'primary', class: 'group-hover:text-primary-10' },
    { spectrum: 'solid', hover: true, color: 'secondary', class: 'group-hover:text-secondary-10' },
    { spectrum: 'solid', hover: true, color: 'error', class: 'group-hover:text-error-10' },
    { spectrum: 'solid', hover: true, color: 'warning', class: 'group-hover:text-warning-10' },
    { spectrum: 'solid', hover: true, color: 'success', class: 'group-hover:text-success-10' },

    // Hover states for contrast spectrum
    { spectrum: 'contrast', hover: true, color: 'neutral', class: 'group-hover:text-neutral-a12' },
    { spectrum: 'contrast', hover: true, color: 'primary', class: 'group-hover:text-primary-a12' },
    { spectrum: 'contrast', hover: true, color: 'secondary', class: 'group-hover:text-secondary-a12' },
    { spectrum: 'contrast', hover: true, color: 'error', class: 'group-hover:text-error-a12' },
    { spectrum: 'contrast', hover: true, color: 'warning', class: 'group-hover:text-warning-a12' },
    { spectrum: 'contrast', hover: true, color: 'success', class: 'group-hover:text-success-a12' },
  ],
  defaultVariants: {
    color: 'neutral',
    size: 'md',
    spectrum: 'text',
    hover: false
  }
}); 