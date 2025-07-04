import { cva } from 'class-variance-authority';

export const accordionVariants = cva(
  'w-full',
  {
    variants: {
      variant: {
        default: '',
        bordered: 'border border-solid border-neutral-a7 rounded-4',
        card: 'bg-neutral-a2 border border-solid border-neutral-a7 rounded-4',
        underline: '',
      },
      color: {
        neutral: '',
        primary: '',
        secondary: '',
        error: '',
        warning: '',
        success: '',
      },
      size: {
        sm: '',
        md: '',
        lg: '',
      },
    },
    compoundVariants: [
      { variant: 'bordered', color: 'primary', class: 'border-primary-a7' },
      { variant: 'bordered', color: 'secondary', class: 'border-secondary-a7' },
      { variant: 'bordered', color: 'error', class: 'border-error-a7' },
      { variant: 'bordered', color: 'warning', class: 'border-warning-a7' },
      { variant: 'bordered', color: 'success', class: 'border-success-a7' },
      
      { variant: 'card', color: 'primary', class: 'border-primary-a7' },
      { variant: 'card', color: 'secondary', class: 'border-secondary-a7' },
      { variant: 'card', color: 'error', class: 'border-error-a7' },
      { variant: 'card', color: 'warning', class: 'border-warning-a7' },
      { variant: 'card', color: 'success', class: 'border-success-a7' },
    ],
    defaultVariants: {
      variant: 'bordered',
      color: 'neutral',
      size: 'md',
    },
  }
);

export const accordionItemVariants = cva(
  'overflow-hidden',
  {
    variants: {
      variant: {
        default: '',
        bordered: '',
        card: 'border-b border-solid border-neutral-a7 last:border-b-0',
        underline: 'border-b border-solid border-neutral-a7',
      },
      color: {
        neutral: '',
        primary: '',
        secondary: '',
        error: '',
        warning: '',
        success: '',
      },
      size: {
        sm: '',
        md: '',
        lg: '',
      },
    },
    compoundVariants: [
      { variant: 'default', color: 'primary', class: 'border-primary-a7' },
      { variant: 'default', color: 'secondary', class: 'border-secondary-a7' },
      { variant: 'default', color: 'error', class: 'border-error-a7' },
      { variant: 'default', color: 'warning', class: 'border-warning-a7' },
      { variant: 'default', color: 'success', class: 'border-success-a7' },
      
      { variant: 'card', color: 'primary', class: 'border-primary-a7' },
      { variant: 'card', color: 'secondary', class: 'border-secondary-a7' },
      { variant: 'card', color: 'error', class: 'border-error-a7' },
      { variant: 'card', color: 'warning', class: 'border-warning-a7' },
      { variant: 'card', color: 'success', class: 'border-success-a7' },
    ],
    defaultVariants: {
      variant: 'bordered',
      color: 'neutral',
      size: 'md',
    },
  }
);

export const accordionTriggerVariants = cva(
  'flex flex-row items-center justify-between w-full transition-all group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-muted-foreground',
  {
    variants: {
      variant: {
        default: 'py-4',
        bordered: 'py-4 px-4',
        card: 'py-4 px-4',
        underline: 'py-3',
      },
      color: {
        neutral: 'text-neutral-a11 hover:text-neutral-a12',
        primary: 'text-primary-a11 hover:text-primary-a12',
        secondary: 'text-secondary-a11 hover:text-secondary-a12',
        error: 'text-error-a11 hover:text-error-a12',
        warning: 'text-warning-a11 hover:text-warning-a12',
        success: 'text-success-a11 hover:text-success-a12',
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      variant: 'bordered',
      color: 'neutral',
      size: 'md',
    },
  }
);

export const accordionContentVariants = cva(
  'overflow-hidden transition-all',
  {
    variants: {
      variant: {
        default: 'pb-4',
        bordered: 'pb-4 px-4',
        card: 'pb-4 px-4',
        underline: 'pb-3',
      },
      color: {
        neutral: 'text-neutral-a11',
        primary: 'text-primary-a11',
        secondary: 'text-secondary-a11',
        error: 'text-error-a11',
        warning: 'text-warning-a11',
        success: 'text-success-a11',
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      variant: 'bordered',
      color: 'neutral',
      size: 'md',
    },
  }
);

export const accordionChevronVariants = cva(
  'shrink-0 transition-transform duration-200',
  {
    variants: {
      size: {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
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
    defaultVariants: {
      size: 'md',
      color: 'neutral',
    },
  }
); 