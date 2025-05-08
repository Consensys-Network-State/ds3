import { cva } from 'class-variance-authority';

export const textVariants = cva('text-neutral-12', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    color: {
      neutral: 'text-neutral-12',
      primary: 'text-primary-12',
      secondary: 'text-secondary-12',
      error: 'text-error-12',
      warning: 'text-warning-12',
      success: 'text-success-12',
    },
  },
  defaultVariants: {
    size: 'base',
    weight: 'normal',
    color: 'neutral',
  },
}); 