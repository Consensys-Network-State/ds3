import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'group flex flex-row gap-1 items-center self-start justify-center rounded-4',
  {
    variants: {
      color: {
        neutral: '',
        primary: '',
        secondary: '',
        error: '',
        warning: '',
        success: '',
      },
      variant: {
        elevated: 'shadow-elevated web:enabled:hover:shadow-none',
        solid: '',
        soft: '',
        outline: 'border',
        dashed: 'border border-dashed',
        ghost: '',
      },
      size: {
        sm: 'px-2.5 py-[0.34375rem]',
        md: 'px-3 py-2',
        lg: 'px-3.5 py-[0.65625rem]',
      },
      disabled: {
        false: null,
        true: ['opacity-40 web:cursor-not-allowed'],
      },
    },
    compoundVariants: [
      { variant: ['solid', 'elevated'], color: 'neutral', class: 'bg-neutral-9 web:enabled:hover:bg-neutral-10 web:enabled:active:bg-neutral-10' },
      { variant: ['solid', 'elevated'], color: 'primary', class: 'bg-primary-9 web:enabled:hover:bg-primary-10 web:enabled:active:bg-primary-10' },
      { variant: ['solid', 'elevated'], color: 'secondary', class: 'bg-secondary-9 web:enabled:hover:bg-secondary-10 web:enabled:active:bg-secondary-10' },
      { variant: ['solid', 'elevated'], color: 'error', class: 'bg-error-9 web:enabled:hover:bg-error-10 web:enabled:active:bg-error-10' },
      { variant: ['solid', 'elevated'], color: 'warning', class: 'bg-warning-9 web:enabled:hover:bg-warning-10 web:enabled:active:bg-warning-10' },
      { variant: ['solid', 'elevated'], color: 'success', class: 'bg-success-9 web:enabled:hover:bg-success-10 web:enabled:active:bg-success-10' },

      { variant: 'soft', color: 'neutral', class: 'bg-neutral-a3 web:enabled:hover:bg-neutral-a4 web:enabled:active:bg-neutral-a4' },
      { variant: 'soft', color: 'primary', class: 'bg-primary-a3 web:enabled:hover:bg-primary-a4 web:enabled:active:bg-primary-a4' },
      { variant: 'soft', color: 'secondary', class: 'bg-secondary-a3 web:enabled:hover:bg-secondary-a4 web:enabled:active:bg-secondary-a4' },
      { variant: 'soft', color: 'error', class: 'bg-error-a3 web:enabled:hover:bg-error-a4 web:enabled:active:bg-error-a4' },
      { variant: 'soft', color: 'warning', class: 'bg-warning-a3 web:enabled:hover:bg-warning-a4 web:enabled:active:bg-warning-a4' },
      { variant: 'soft', color: 'success', class: 'bg-success-a3 web:enabled:hover:bg-success-a4 web:enabled:active:bg-success-a4' },

      { variant: ['outline', 'dashed'], color: 'neutral', class: 'border-neutral-a7 web:enabled:hover:border-neutral-a8 web:enabled:active:border-neutral-a8' },
      { variant: ['outline', 'dashed'], color: 'primary', class: 'border-primary-a7 web:enabled:hover:border-primary-a8 web:enabled:active:border-primary-a8' },
      { variant: ['outline', 'dashed'], color: 'secondary', class: 'border-secondary-a7 web:enabled:hover:border-secondary-a8 web:enabled:active:border-secondary-a8' },
      { variant: ['outline', 'dashed'], color: 'error', class: 'border-error-a7 web:enabled:hover:border-error-a8 web:enabled:active:border-error-a8' },
      { variant: ['outline', 'dashed'], color: 'warning', class: 'border-warning-a7 web:enabled:hover:border-warning-a8 web:enabled:active:border-warning-a8' },
      { variant: ['outline', 'dashed'], color: 'success', class: 'border-success-a7 web:enabled:hover:border-success-a8 web:enabled:active:border-success-a8' },

      { variant: ['outline', 'dashed', 'ghost'], color: 'neutral', class: 'web:enabled:hover:bg-neutral-a3 web:enabled:active:bg-neutral-a3' },
      { variant: ['outline', 'dashed', 'ghost'], color: 'primary', class: 'web:enabled:hover:bg-primary-a3 web:enabled:active:bg-primary-a3' },
      { variant: ['outline', 'dashed', 'ghost'], color: 'secondary', class: 'web:enabled:hover:bg-secondary-a3 web:enabled:active:bg-secondary-a3' },
      { variant: ['outline', 'dashed', 'ghost'], color: 'error', class: 'web:enabled:hover:bg-error-a3 web:enabled:active:bg-error-a3' },
      { variant: ['outline', 'dashed', 'ghost'], color: 'warning', class: 'web:enabled:hover:bg-warning-a3 web:enabled:active:bg-warning-a3' },
      { variant: ['outline', 'dashed', 'ghost'], color: 'success', class: 'web:enabled:hover:bg-success-a3 web:enabled:active:bg-success-a3' },
    ],
    defaultVariants: {
      variant: 'elevated',
      color: 'neutral',
      size: 'md',
      disabled: false,
    },
  }
);

export const buttonTextVariants = cva(
  '',
  {
    variants: {
      color: {
        neutral: 'text-neutral-a11',
        primary: 'text-primary-a11',
        secondary: 'text-secondary-a11',
        error: 'text-error-a11',
        warning: 'text-warning-a11',
        success: 'text-success-a11',
      },
      variant: {
        elevated: '',
        solid: '',
        soft: '',
        outline: '',
        dashed: '',
        ghost: '',
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
    },
    compoundVariants: [
      { variant: ['elevated', 'solid'], class: 'text-white' },
      { variant: ['elevated', 'solid'], color: 'warning', class: 'text-neutral-12' },
    ],
    defaultVariants: {
      color: 'neutral',
      size: 'md',
    },
  }
);

export const buttonIconVariants = cva(
  '',
  {
    variants: {
      size: {
        sm: '',
        md: 'h-4 w-4',
        lg: '',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
); 