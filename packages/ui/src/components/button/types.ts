import * as React from 'react';
import { PressableProps } from 'react-native';
import type { VariantProps } from 'class-variance-authority';
import type { IconProps } from '../icon/types';
import type { SpinnerProps } from '../spinner/types';
import { buttonVariants } from './styles';

// Shared button props
export type SharedButtonProps = {
  variant?: VariantProps<typeof buttonVariants>['variant'];
  color?: VariantProps<typeof buttonVariants>['color'];
  accentColor?: VariantProps<typeof buttonVariants>['color'];
  size?: VariantProps<typeof buttonVariants>['size'];
  disabled?: boolean;
  loading?: boolean;
  square?: boolean;
  asChild?: boolean;
  className?: string;
  children?: React.ReactNode;
};

// Native button props
export type NativeButtonProps = SharedButtonProps & PressableProps;

// The main props type - now unified around native
export type ButtonRootProps = NativeButtonProps;

export type ButtonContext = {
  variant?: VariantProps<typeof buttonVariants>['variant'];
  color?: VariantProps<typeof buttonVariants>['color'];
  size?: VariantProps<typeof buttonVariants>['size'];
  disabled?: boolean;
  loading?: boolean;
  square?: boolean;
  isPressed?: boolean;
  isHovered?: boolean;
  setPressed?: (pressed: boolean) => void;
  setHovered?: (hovered: boolean) => void;
  buttonRef?: React.RefObject<any>;
  buttonProps?: ButtonRootProps;
};

export type ButtonIconProps = IconProps & {
  className?: string;
};

export type ButtonSpinnerProps = SpinnerProps & {
  className?: string;
  loadingIcon?: React.ComponentType<any>;
};

export type ButtonTextProps = {
  className?: string;
  children?: React.ReactNode;
};

export type ButtonColors = NonNullable<ButtonRootProps['color']>;
export type ButtonSizes = NonNullable<ButtonRootProps['size']>;
export type ButtonVariant = NonNullable<ButtonRootProps['variant']>;
