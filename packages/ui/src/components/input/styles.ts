import { cva } from 'class-variance-authority';

export const inputRootVariants = cva(
  'flex flex-row items-center gap-3 rounded-4',
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
        soft: 'border border-transparent',
        outline: 'border',
        underline: 'border-b rounded-none',
        ghost: 'border-b rounded-none border-transparent',
      },
      size: {
        sm: 'px-2.5 py-[0.34375rem]',
        md: 'px-3 py-2',
        lg: 'px-3.5 py-[0.65625rem]',
      },
      focused: {
        true: '',
        false: null,
      },
      disabled: {
        true: 'opacity-40 web:cursor-not-allowed',
        false: null,
      }
    },
    compoundVariants: [
      // Soft variant
      { variant: 'soft', color: 'neutral', class: 'bg-neutral-a3' },
      { variant: 'soft', color: 'primary', class: 'bg-primary-a3' },
      { variant: 'soft', color: 'secondary', class: 'bg-secondary-a3' },
      { variant: 'soft', color: 'error', class: 'bg-error-a3' },
      { variant: 'soft', color: 'warning', class: 'bg-warning-a3' },
      { variant: 'soft', color: 'success', class: 'bg-success-a3' },

      // Outline and underline variant
      { variant: ['outline', 'underline'], color: 'neutral', class: 'border-neutral-a7' },
      { variant: ['outline', 'underline'], color: 'primary', class: 'border-primary-a7' },
      { variant: ['outline', 'underline'], color: 'secondary', class: 'border-secondary-a7' },
      { variant: ['outline', 'underline'], color: 'error', class: 'border-error-a7' },
      { variant: ['outline', 'underline'], color: 'warning', class: 'border-warning-a7' },
      { variant: ['outline', 'underline'], color: 'success', class: 'border-success-a7' },

      // Hover states
      { color: 'neutral', focused: false, disabled: false, class: 'web:hover:border-neutral-a8' },
      { color: 'primary', focused: false, disabled: false, class: 'web:hover:border-primary-a8' },
      { color: 'secondary', focused: false, disabled: false, class: 'web:hover:border-secondary-a8' },
      { color: 'error', focused: false, disabled: false, class: 'web:hover:border-error-a8' },
      { color: 'warning', focused: false, disabled: false, class: 'web:hover:border-warning-a8' },
      { color: 'success', focused: false, disabled: false, class: 'web:hover:border-success-a8' },

      // Focus states
      { color: 'neutral', focused: true, disabled: false, class: 'border-neutral-a9' },
      { color: 'primary', focused: true, disabled: false, class: 'border-primary-a9' },
      { color: 'secondary', focused: true, disabled: false, class: 'border-secondary-a9' },
      { color: 'error', focused: true, disabled: false, class: 'border-error-a9' },
      { color: 'warning', focused: true, disabled: false, class: 'border-warning-a9' },
      { color: 'success', focused: true, disabled: false, class: 'border-success-a9' },
    ],
    defaultVariants: {
      variant: 'soft',
      color: 'neutral',
      size: 'md',
      disabled: false,
      focused: false,
    },
  }
);

export const inputIconVariants = cva(
  'flex-shrink-0',
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
      size: {
        sm: 'h-3.5 w-3.5',
        md: 'h-4 w-4',
        lg: 'h-5 w-5',
      },
      disabled: {
        true: 'opacity-40',
        false: null,
      }
    },
    defaultVariants: {
      color: 'neutral',
      size: 'md',
      disabled: false,
    },
  }
);

export const inputTextVariants = cva('', {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
}); 