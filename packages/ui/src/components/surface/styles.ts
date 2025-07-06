import { cva } from 'class-variance-authority';
import type { TextProps } from '../text/types';
import type { IconProps } from '../icon/types';

export const surfaceVariants = cva(
  'group flex',
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
        elevated: 'shadow-elevated',
        solid: '',
        soft: '',
        outline: 'border',
        dashed: 'border border-dashed',
        ghost: '',
      },
      disabled: {
        false: null,
        true: ['opacity-40 web:cursor-not-allowed'],
      },
      pressable: {
        false: null,
        true: null,
      },
    },
    compoundVariants: [
      // Base styles (no hover/active states)
      { variant: ['solid', 'elevated'], color: 'neutral', class: 'bg-neutral-9' },
      { variant: ['solid', 'elevated'], color: 'primary', class: 'bg-primary-9' },
      { variant: ['solid', 'elevated'], color: 'secondary', class: 'bg-secondary-9' },
      { variant: ['solid', 'elevated'], color: 'error', class: 'bg-error-9' },
      { variant: ['solid', 'elevated'], color: 'warning', class: 'bg-warning-9' },
      { variant: ['solid', 'elevated'], color: 'success', class: 'bg-success-9' },

      { variant: 'soft', color: 'neutral', class: 'bg-neutral-a3' },
      { variant: 'soft', color: 'primary', class: 'bg-primary-a3' },
      { variant: 'soft', color: 'secondary', class: 'bg-secondary-a3' },
      { variant: 'soft', color: 'error', class: 'bg-error-a3' },
      { variant: 'soft', color: 'warning', class: 'bg-warning-a3' },
      { variant: 'soft', color: 'success', class: 'bg-success-a3' },

      { variant: ['outline', 'dashed'], color: 'neutral', class: 'border-neutral-a7' },
      { variant: ['outline', 'dashed'], color: 'primary', class: 'border-primary-a7' },
      { variant: ['outline', 'dashed'], color: 'secondary', class: 'border-secondary-a7' },
      { variant: ['outline', 'dashed'], color: 'error', class: 'border-error-a7' },
      { variant: ['outline', 'dashed'], color: 'warning', class: 'border-warning-a7' },
      { variant: ['outline', 'dashed'], color: 'success', class: 'border-success-a7' },

      // Pressable hover/active states (using web:enabled:hover: like Button)
      { variant: ['solid', 'elevated'], color: 'neutral', pressable: true, class: 'web:enabled:hover:bg-neutral-10 web:enabled:active:bg-neutral-10' },
      { variant: ['solid', 'elevated'], color: 'primary', pressable: true, class: 'web:enabled:hover:bg-primary-10 web:enabled:active:bg-primary-10' },
      { variant: ['solid', 'elevated'], color: 'secondary', pressable: true, class: 'web:enabled:hover:bg-secondary-10 web:enabled:active:bg-secondary-10' },
      { variant: ['solid', 'elevated'], color: 'error', pressable: true, class: 'web:enabled:hover:bg-error-10 web:enabled:active:bg-error-10' },
      { variant: ['solid', 'elevated'], color: 'warning', pressable: true, class: 'web:enabled:hover:bg-warning-10 web:enabled:active:bg-warning-10' },
      { variant: ['solid', 'elevated'], color: 'success', pressable: true, class: 'web:enabled:hover:bg-success-10 web:enabled:active:bg-success-10' },

      { variant: 'soft', color: 'neutral', pressable: true, class: 'web:enabled:hover:bg-neutral-a4 web:enabled:active:bg-neutral-a4' },
      { variant: 'soft', color: 'primary', pressable: true, class: 'web:enabled:hover:bg-primary-a4 web:enabled:active:bg-primary-a4' },
      { variant: 'soft', color: 'secondary', pressable: true, class: 'web:enabled:hover:bg-secondary-a4 web:enabled:active:bg-secondary-a4' },
      { variant: 'soft', color: 'error', pressable: true, class: 'web:enabled:hover:bg-error-a4 web:enabled:active:bg-error-a4' },
      { variant: 'soft', color: 'warning', pressable: true, class: 'web:enabled:hover:bg-warning-a4 web:enabled:active:bg-warning-a4' },
      { variant: 'soft', color: 'success', pressable: true, class: 'web:enabled:hover:bg-success-a4 web:enabled:active:bg-success-a4' },

      { variant: ['outline', 'dashed'], color: 'neutral', pressable: true, class: 'web:enabled:hover:border-neutral-a8 web:enabled:active:border-neutral-a8' },
      { variant: ['outline', 'dashed'], color: 'primary', pressable: true, class: 'web:enabled:hover:border-primary-a8 web:enabled:active:border-primary-a8' },
      { variant: ['outline', 'dashed'], color: 'secondary', pressable: true, class: 'web:enabled:hover:border-secondary-a8 web:enabled:active:border-secondary-a8' },
      { variant: ['outline', 'dashed'], color: 'error', pressable: true, class: 'web:enabled:hover:border-error-a8 web:enabled:active:border-error-a8' },
      { variant: ['outline', 'dashed'], color: 'warning', pressable: true, class: 'web:enabled:hover:border-warning-a8 web:enabled:active:border-warning-a8' },
      { variant: ['outline', 'dashed'], color: 'success', pressable: true, class: 'web:enabled:hover:border-success-a8 web:enabled:active:border-success-a8' },

      { variant: ['outline', 'dashed', 'ghost'], color: 'neutral', pressable: true, class: 'web:enabled:hover:bg-neutral-a3 web:enabled:active:bg-neutral-a3' },
      { variant: ['outline', 'dashed', 'ghost'], color: 'primary', pressable: true, class: 'web:enabled:hover:bg-primary-a3 web:enabled:active:bg-primary-a3' },
      { variant: ['outline', 'dashed', 'ghost'], color: 'secondary', pressable: true, class: 'web:enabled:hover:bg-secondary-a3 web:enabled:active:bg-secondary-a3' },
      { variant: ['outline', 'dashed', 'ghost'], color: 'error', pressable: true, class: 'web:enabled:hover:bg-error-a3 web:enabled:active:bg-error-a3' },
      { variant: ['outline', 'dashed', 'ghost'], color: 'warning', pressable: true, class: 'web:enabled:hover:bg-warning-a3 web:enabled:active:bg-warning-a3' },
      { variant: ['outline', 'dashed', 'ghost'], color: 'success', pressable: true, class: 'web:enabled:hover:bg-success-a3 web:enabled:active:bg-success-a3' },
    ],
    defaultVariants: {
      variant: 'elevated',
      color: 'neutral',
      disabled: false,
      pressable: false,
    },
  }
);

export const surfaceIconVariants = cva(
  'h-4 w-4',
  {
    variants: {},
    defaultVariants: {},
  }
);

// Helper function to convert Surface props to Text props
export const getSurfaceTextProps = (
  variant?: 'elevated' | 'solid' | 'soft' | 'outline' | 'dashed' | 'ghost',
  color?: 'neutral' | 'primary' | 'secondary' | 'error' | 'warning' | 'success'
): Partial<TextProps> => {
  const textProps: Partial<TextProps> = {
    spectrum: 'solid',
  };

  // Map Surface color to Text color
  if (color) {
    textProps.color = color;
  }

  // For elevated and solid variants, use contrast spectrum
  if (variant === 'elevated' || variant === 'solid') {
    textProps.spectrum = 'contrast';
  }

  return textProps;
};

// Helper function to convert Surface props to Icon props
export const getSurfaceIconProps = (
  variant?: 'elevated' | 'solid' | 'soft' | 'outline' | 'dashed' | 'ghost',
  color?: 'neutral' | 'primary' | 'secondary' | 'error' | 'warning' | 'success'
): Partial<IconProps> => {
  const iconProps: Partial<IconProps> = {
    spectrum: 'solid',
  };

  // Map Surface color to Icon color
  if (color) {
    iconProps.color = color;
  }

  // For elevated and solid variants, use contrast spectrum
  if (variant === 'elevated' || variant === 'solid') {
    iconProps.spectrum = 'contrast';
  }

  return iconProps;
};
