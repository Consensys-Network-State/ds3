import { cva } from 'class-variance-authority';

export const avatarVariants = cva(
  'relative flex shrink-0 overflow-hidden rounded-full flex h-full w-full items-center justify-center',
  {
    variants: {
      size: {
        sm: 'h-8 w-8',
        md: 'h-10 w-10',
        lg: 'h-12 w-12',
        xl: 'h-16 w-16',
        '2xl': 'h-20 w-20',
      },
      color: {
        neutral: 'bg-neutral-a3',
        primary: 'bg-primary-a3',
        secondary: 'bg-secondary-a3',
        error: 'bg-error-a3',
        warning: 'bg-warning-a3',
        success: 'bg-success-a3',
      },
      border: {
        true: 'border border-solid',
        false: '',
      },
    },
    compoundVariants: [
      { border: true, color: 'neutral', class: 'border-neutral-a7' },
      { border: true, color: 'primary', class: 'border-primary-a7' },
      { border: true, color: 'secondary', class: 'border-secondary-a7' },
      { border: true, color: 'error', class: 'border-error-a7' },
      { border: true, color: 'warning', class: 'border-warning-a7' },
      { border: true, color: 'success', class: 'border-success-a7' },
    ],
    defaultVariants: {
      size: 'md',
      color: 'neutral',
      border: false,
    },
  }
);

export const avatarImageVariants = cva(
  'aspect-square h-full w-full',
  {
    variants: {
      size: {
        sm: '',
        md: '',
        lg: '',
        xl: '',
        '2xl': '',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);



export const avatarTextVariants = cva(
  'font-medium',
  {
    variants: {
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
        xl: 'text-lg',
        '2xl': 'text-xl',
      },
      color: {
        neutral: 'text-neutral-a11',
        primary: 'text-primary-a11',
        secondary: 'text-secondary-a11',
        error: 'text-error-a11',
        warning: 'text-warning-a11',
        success: 'text-success-a11',
      },
    },
    compoundVariants: [
      { color: 'neutral', class: 'text-neutral-a11' },
      { color: 'primary', class: 'text-primary-a11' },
      { color: 'secondary', class: 'text-secondary-a11' },
      { color: 'error', class: 'text-error-a11' },
      { color: 'warning', class: 'text-warning-a11' },
      { color: 'success', class: 'text-success-a11' },
    ],
    defaultVariants: {
      size: 'md',
      color: 'neutral',
    },
  }
);

export const avatarIconVariants = cva(
  '',
  {
    variants: {
      size: {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
        xl: 'h-8 w-8',
        '2xl': 'h-10 w-10',
      },
      color: {
        neutral: 'text-neutral-a11',
        primary: 'text-primary-a11',
        secondary: 'text-secondary-a11',
        error: 'text-error-a11',
        warning: 'text-warning-a11',
        success: 'text-success-a11',
      },
    },
    compoundVariants: [
      { color: 'neutral', class: 'text-neutral-a11' },
      { color: 'primary', class: 'text-primary-a11' },
      { color: 'secondary', class: 'text-secondary-a11' },
      { color: 'error', class: 'text-error-a11' },
      { color: 'warning', class: 'text-warning-a11' },
      { color: 'success', class: 'text-success-a11' },
    ],
    defaultVariants: {
      size: 'md',
      color: 'neutral',
    },
  }
); 