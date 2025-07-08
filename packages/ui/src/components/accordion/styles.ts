import { cva } from 'class-variance-authority';

export const accordionVariants = cva(
  'w-full',
  {
    variants: {
      variant: {
        card: '',
        underline: '',
        outline: 'border border-solid rounded-lg',
        unstyled: '',
      },
      color: {
        neutral: '',
        primary: '',
        secondary: '',
        error: '',
        warning: '',
        success: '',
      },
    },
    compoundVariants: [
      { variant: 'outline', color: 'neutral', class: 'border-neutral-6' },
      { variant: 'outline', color: 'primary', class: 'border-primary-6' },
      { variant: 'outline', color: 'secondary', class: 'border-secondary-6' },
      { variant: 'outline', color: 'error', class: 'border-error-6' },
      { variant: 'outline', color: 'warning', class: 'border-warning-6' },
      { variant: 'outline', color: 'success', class: 'border-success-6' },
    ],
    defaultVariants: {
      variant: 'card',
      color: 'neutral',
    },
  }
);

export const accordionItemVariants = cva(
  '',
  {
    variants: {
      variant: {
        card: '',
        underline: 'border-b',
        outline: '',
        unstyled: '',
      },
      color: {
        neutral: '',
        primary: '',
        secondary: '',
        error: '',
        warning: '',
        success: '',
      },
    },
    compoundVariants: [
      { variant: 'underline', color: 'neutral', class: 'border-neutral-6' },
      { variant: 'underline', color: 'primary', class: 'border-primary-6' },
      { variant: 'underline', color: 'secondary', class: 'border-secondary-6' },
      { variant: 'underline', color: 'error', class: 'border-error-6' },
      { variant: 'underline', color: 'warning', class: 'border-warning-6' },
      { variant: 'underline', color: 'success', class: 'border-success-6' },
    ],
    defaultVariants: {
      variant: 'card',
      color: 'neutral',
    },
  }
);

export const accordionTriggerVariants = cva(
  'flex flex-row items-center justify-between w-full overflow-hidden',
  {
    variants: {
      variant: {
        card: 'px-4',
        underline: 'bg-neutral-1 px-0 py-2',
        outline: 'px-4',
        unstyled: 'px-4',
      },
      size: {
        sm: 'py-3 text-sm',
        md: 'py-4 text-base',
        lg: 'py-5 text-lg',
      },
      color: {
        neutral: '',
        primary: '',
        secondary: '',
        error: '',
        warning: '',
        success: '',
      },
    },
    compoundVariants: [
      { variant: 'underline', color: 'neutral', class: 'text-neutral-12' },
      { variant: 'underline', color: 'primary', class: 'text-primary-12' },
      { variant: 'underline', color: 'secondary', class: 'text-secondary-12' },
      { variant: 'underline', color: 'error', class: 'text-error-12' },
      { variant: 'underline', color: 'warning', class: 'text-warning-12' },
      { variant: 'underline', color: 'success', class: 'text-success-12' },
      { variant: 'outline', color: 'neutral', class: 'text-neutral-12' },
      { variant: 'outline', color: 'primary', class: 'text-primary-12' },
      { variant: 'outline', color: 'secondary', class: 'text-secondary-12' },
      { variant: 'outline', color: 'error', class: 'text-error-12' },
      { variant: 'outline', color: 'warning', class: 'text-warning-12' },
      { variant: 'outline', color: 'success', class: 'text-success-12' },
    ],
    defaultVariants: {
      variant: 'card',
      size: 'md',
      color: 'neutral',
    },
  }
);

export const accordionContentVariants = cva(
  'overflow-hidden',
  {
    variants: {
      variant: {
        card: 'p-4',
        underline: 'px-0 pb-2',
        outline: 'px-4 pb-4',
        unstyled: 'p-4',
      },
      color: {
        neutral: '',
        primary: '',
        secondary: '',
        error: '',
        warning: '',
        success: '',
      },
    },
    compoundVariants: [
      { variant: 'underline', color: 'neutral', class: 'text-neutral-11' },
      { variant: 'underline', color: 'primary', class: 'text-primary-11' },
      { variant: 'underline', color: 'secondary', class: 'text-secondary-11' },
      { variant: 'underline', color: 'error', class: 'text-error-11' },
      { variant: 'underline', color: 'warning', class: 'text-warning-11' },
      { variant: 'underline', color: 'success', class: 'text-success-11' },
      { variant: 'outline', color: 'neutral', class: 'text-neutral-11' },
      { variant: 'outline', color: 'primary', class: 'text-primary-11' },
      { variant: 'outline', color: 'secondary', class: 'text-secondary-11' },
      { variant: 'outline', color: 'error', class: 'text-error-11' },
      { variant: 'outline', color: 'warning', class: 'text-warning-11' },
      { variant: 'outline', color: 'success', class: 'text-success-11' },
    ],
    defaultVariants: {
      variant: 'card',
      color: 'neutral',
    },
  }
);