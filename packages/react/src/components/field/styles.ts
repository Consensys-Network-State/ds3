import { cva } from 'class-variance-authority';

export const fieldVariants = cva('', {
  variants: {
    color: {
      neutral: 'text-neutral-a11',
      primary: 'text-primary-a11',
      secondary: 'text-secondary-a11',
      error: 'text-error-a11',
      warning: 'text-warning-a11',
      success: 'text-success-a11',
    },
  },
  defaultVariants: {
    color: 'neutral',
  },
}); 