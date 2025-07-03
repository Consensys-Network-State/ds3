import { cva } from 'class-variance-authority';

export const cardVariants = cva(
  'rounded-lg overflow-hidden',
  {
    variants: {
      color: {
        neutral: 'bg-neutral-a2',
        primary: 'bg-primary-a2',
        secondary: 'bg-secondary-a2',
        error: 'bg-error-a2',
        warning: 'bg-warning-a2',
        success: 'bg-success-a2',
      },
      border: {
        false: '',
        true: 'border',
      },
    },
    compoundVariants: [
      // Backgrounds and borders
      { color: 'neutral', border: true, class: 'border-neutral-a7' },
      { color: 'primary', border: true, class: 'border-primary-a7' },
      { color: 'secondary', border: true, class: 'border-secondary-a7' },
      { color: 'error', border: true, class: 'border-error-a7' },
      { color: 'warning', border: true, class: 'border-warning-a7' },
      { color: 'success', border: true, class: 'border-success-a7' },
    ],
    defaultVariants: {
      color: 'neutral',
      border: false,
    },
  }
);

export const cardHeaderVariants = cva(
  'flex flex-col space-y-1.5 px-4 py-2',
  {
    variants: {
      color: {
        neutral: 'bg-neutral-a3',
        primary: 'bg-primary-a3',
        secondary: 'bg-secondary-a3',
        error: 'bg-error-a3',
        warning: 'bg-warning-a3',
        success: 'bg-success-a3',
      },
      border: {
        false: '',
        true: '',
      },
    },
    compoundVariants: [
      { color: 'neutral', border: true, class: 'border-b border-neutral-a7' },
      { color: 'primary', border: true, class: 'border-b border-primary-a7' },
      { color: 'secondary', border: true, class: 'border-b border-secondary-a7' },
      { color: 'error', border: true, class: 'border-b border-error-a7' },
      { color: 'warning', border: true, class: 'border-b border-warning-a7' },
      { color: 'success', border: true, class: 'border-b border-success-a7' },
    ],
    defaultVariants: {
      color: 'neutral',
      border: false,
    },
  }
);

export const cardTextVariants = cva(
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
    },
    defaultVariants: {
      color: 'neutral',
    },
  }
);

export const cardContentVariants = cva(
  'p-4',
  {
    variants: {
      color: {
        neutral: 'bg-neutral-a2',
        primary: 'bg-primary-a2',
        secondary: 'bg-secondary-a2',
        error: 'bg-error-a2',
        warning: 'bg-warning-a2',
        success: 'bg-success-a2',
      },
    },
    defaultVariants: {
      color: 'neutral',
    },
  }
);

export const cardFooterVariants = cva(
  'flex flex-row items-center px-4 py-2',
  {
    variants: {
      color: {
        neutral: 'bg-neutral-a3',
        primary: 'bg-primary-a3',
        secondary: 'bg-secondary-a3',
        error: 'bg-error-a3',
        warning: 'bg-warning-a3',
        success: 'bg-success-a3',
      },
      border: {
        false: '',
        true: '',
      },
    },
    compoundVariants: [
      { color: 'neutral', border: true, class: 'border-t border-neutral-a7' },
      { color: 'primary', border: true, class: 'border-t border-primary-a7' },
      { color: 'secondary', border: true, class: 'border-t border-secondary-a7' },
      { color: 'error', border: true, class: 'border-t border-error-a7' },
      { color: 'warning', border: true, class: 'border-t border-warning-a7' },
      { color: 'success', border: true, class: 'border-t border-success-a7' },
    ],
    defaultVariants: {
      color: 'neutral',
      border: false,
    },
  }
); 