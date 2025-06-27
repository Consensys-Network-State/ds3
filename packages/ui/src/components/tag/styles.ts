import { cva } from 'class-variance-authority';

export const tagVariants = cva(
  'inline-flex items-center justify-center rounded-md border font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent',
        outline: 'bg-transparent',
        secondary: 'border-transparent bg-neutral-2 text-neutral-12',
      },
      size: {
        sm: 'h-6 px-2 text-xs',
        md: 'h-8 px-3 text-sm',
        lg: 'h-10 px-4 text-base',
      },
      color: {
        neutral: 'bg-neutral-3 text-neutral-12 hover:bg-neutral-4',
        primary: 'bg-primary-3 text-primary-12 hover:bg-primary-4',
        secondary: 'bg-secondary-3 text-secondary-12 hover:bg-secondary-4',
        success: 'bg-success-3 text-success-12 hover:bg-success-4',
        warning: 'bg-warning-3 text-warning-12 hover:bg-warning-4',
        error: 'bg-error-3 text-error-12 hover:bg-error-4',
      },
    },
    compoundVariants: [
      {
        variant: 'outline',
        color: 'neutral',
        class: 'border-neutral-6 text-neutral-12 hover:bg-neutral-2',
      },
      {
        variant: 'outline',
        color: 'primary',
        class: 'border-primary-6 text-primary-12 hover:bg-primary-2',
      },
      {
        variant: 'outline',
        color: 'secondary',
        class: 'border-secondary-6 text-secondary-12 hover:bg-secondary-2',
      },
      {
        variant: 'outline',
        color: 'success',
        class: 'border-success-6 text-success-12 hover:bg-success-2',
      },
      {
        variant: 'outline',
        color: 'warning',
        class: 'border-warning-6 text-warning-12 hover:bg-warning-2',
      },
      {
        variant: 'outline',
        color: 'error',
        class: 'border-error-6 text-error-12 hover:bg-error-2',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'md',
      color: 'neutral',
    },
  }
);

export const tagTextVariants = cva(
  'font-medium',
  {
    variants: {
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
      color: {
        neutral: 'text-neutral-12',
        primary: 'text-primary-12',
        secondary: 'text-secondary-12',
        success: 'text-success-12',
        warning: 'text-warning-12',
        error: 'text-error-12',
      },
    },
    defaultVariants: {
      size: 'md',
      color: 'neutral',
    },
  }
); 