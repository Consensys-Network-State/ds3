import { cva } from 'class-variance-authority';

export const switchRootVariants = cva(
  'flex-row h-6 w-11 shrink-0 items-center rounded-full border-2 transition-colors focus:outline-none focus-visible:ring-4 active:ring-4',
  {
    variants: {
      variant: {
        solid: 'border-transparent',
        soft: 'border-transparent',
        outline: '',
      },
      color: {
        neutral: 'ring-primary-a7',
        primary: 'ring-primary-a7',
        secondary: 'ring-secondary-a7',
        error: 'ring-error-a7',
        warning: 'ring-warning-a7',
        success: 'ring-success-a7',
      },
      size: {
        sm: 'h-8 w-14',
        md: 'h-10 w-[72px]',
        lg: 'h-12 w-[88px]',
      },
      checked: {
        true: '',
        false: '',
      },
      disabled: {
        true: 'opacity-40 cursor-not-allowed web:!pointer-events-auto focus:ring-0 active:ring-0',
        false: '',
      },
    },
    compoundVariants: [
      // Common - Unchecked states
      { variant: 'solid', checked: false, class: 'bg-neutral-9 hover:bg-neutral-10 ring-neutral-a7' },
      { variant: 'soft', checked: false, class: 'bg-neutral-a3 hover:bg-neutral-a4 ring-neutral-a7' },
      { variant: 'outline', checked: false, class: 'border-neutral-a7 hover:border-neutral-a8 ring-neutral-a7' },

      // Solid variant - Checked states
      { variant: 'solid', color: ['neutral', 'primary'], checked: true, class: 'bg-primary-9 hover:bg-primary-10' },
      { variant: 'solid', color: 'secondary', checked: true, class: 'bg-secondary-9 hover:bg-secondary-10' },
      { variant: 'solid', color: 'error', checked: true, class: 'bg-error-9 hover:bg-error-10' },
      { variant: 'solid', color: 'warning', checked: true, class: 'bg-warning-9 hover:bg-warning-10' },
      { variant: 'solid', color: 'success', checked: true, class: 'bg-success-9 hover:bg-success-10' },

      // Soft variant - Checked states
      { variant: 'soft', color: ['neutral', 'primary'], checked: true, class: 'bg-primary-a3 hover:bg-primary-a4' },
      { variant: 'soft', color: 'secondary', checked: true, class: 'bg-secondary-a3 hover:bg-secondary-a4' },
      { variant: 'soft', color: 'error', checked: true, class: 'bg-error-a3 hover:bg-error-a4' },
      { variant: 'soft', color: 'warning', checked: true, class: 'bg-warning-a3 hover:bg-warning-a4' },
      { variant: 'soft', color: 'success', checked: true, class: 'bg-success-a3 hover:bg-success-a4' },

      // Outline variant - Checked states
      { variant: 'outline', color: ['neutral', 'primary'], checked: true, class: 'border-primary-a7 hover:border-primary-a8' },
      { variant: 'outline', color: 'secondary', checked: true, class: 'border-secondary-a7 hover:border-secondary-a8' },
      { variant: 'outline', color: 'error', checked: true, class: 'border-error-a7 hover:border-error-a8' },
      { variant: 'outline', color: 'warning', checked: true, class: 'border-warning-a7 hover:border-warning-a8' },
      { variant: 'outline', color: 'success', checked: true, class: 'border-success-a7 hover:border-success-a8' },
    ],
    defaultVariants: {
      variant: 'solid',
      color: 'neutral',
      size: 'md',
      disabled: false,
    },
  }
);

export const switchThumbVariants = cva(
  'flex items-center justify-center rounded-full transition-transform',
  {
    variants: {
      size: {
        sm: 'h-6 w-6',
        md: 'h-8 w-8',
        lg: 'h-10 w-10',
      },
      variant: {
        solid: '',
        soft: '',
        outline: '',
      },
      color: {
        neutral: '',
        primary: '',
        secondary: '',
        error: '',
        warning: '',
        success: '',
      },
      checked: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      // Base background for unchecked state
      { checked: false, class: 'bg-neutral-9' },

      // Solid variant - checked state (white background)
      { variant: 'solid', class: 'bg-background' },

      // Soft variant - checked state (colored background)
      { variant: 'soft', color: 'neutral', checked: true, class: 'bg-primary-9' },
      { variant: 'soft', color: 'primary', checked: true, class: 'bg-primary-9' },
      { variant: 'soft', color: 'secondary', checked: true, class: 'bg-secondary-9' },
      { variant: 'soft', color: 'error', checked: true, class: 'bg-error-9' },
      { variant: 'soft', color: 'warning', checked: true, class: 'bg-warning-9' },
      { variant: 'soft', color: 'success', checked: true, class: 'bg-success-9' },

      // Outline variant - checked state (colored background)
      { variant: 'outline', color: 'neutral', checked: true, class: 'bg-primary-9' },
      { variant: 'outline', color: 'primary', checked: true, class: 'bg-primary-9' },
      { variant: 'outline', color: 'secondary', checked: true, class: 'bg-secondary-9' },
      { variant: 'outline', color: 'error', checked: true, class: 'bg-error-9' },
      { variant: 'outline', color: 'warning', checked: true, class: 'bg-warning-9' },
      { variant: 'outline', color: 'success', checked: true, class: 'bg-success-9' },

      // Translation animations
      { size: 'sm', checked: true, class: 'web:translate-x-6' },
      { size: 'sm', checked: false, class: 'web:translate-x-1' },
      { size: 'md', checked: true, class: 'web:translate-x-8' },
      { size: 'md', checked: false, class: 'web:translate-x-1' },
      { size: 'lg', checked: true, class: 'web:translate-x-10' },
      { size: 'lg', checked: false, class: 'web:translate-x-1' },
    ],
    defaultVariants: {
      size: 'md',
      variant: 'solid',
      color: 'neutral',
      checked: false,
    },
  }
);

export const switchIconVariants = cva('', {
  variants: {
    size: {
      sm: 'h-3 w-3',
      md: 'h-4 w-4',
      lg: 'h-6 w-6'
    },
    variant: {
      solid: '',
      soft: '',
      outline: '',
    },
    checked: {
      true: '',
      false: '',
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
    // Unchecked state (neutral color for all variants)
    { checked: false, class: 'text-white' },
    { checked: false, variant: 'solid', class: 'text-neutral-10' },

    // Solid variant - checked state (colored icon)
    { variant: 'solid', color: 'neutral', checked: true, class: 'text-primary-10' },
    { variant: 'solid', color: 'primary', checked: true, class: 'text-primary-10' },
    { variant: 'solid', color: 'secondary', checked: true, class: 'text-secondary-10' },
    { variant: 'solid', color: 'error', checked: true, class: 'text-error-10' },
    { variant: 'solid', color: 'warning', checked: true, class: 'text-warning-10' },
    { variant: 'solid', color: 'success', checked: true, class: 'text-success-10' },

    // Soft & Outline variants - checked state (white icon)
    { variant: ['soft', 'outline'], checked: true, class: 'text-white' },
  ],
  defaultVariants: {
    size: 'md',
    variant: 'solid',
    color: 'neutral',
    checked: false,
  },
}); 