import * as React from 'react';
import { PressableProps } from 'react-native';
import type { VariantProps } from 'class-variance-authority';
import type { IconProps } from '../icon/types';
import type { SpinnerRootProps } from '../spinner/types';
import type { SurfaceRootProps } from '../surface/types';
import { buttonVariants } from './styles';

// Shared button props - extends Surface props
export type SharedButtonProps = Omit<SurfaceRootProps, 'pressable'> & {
  size?: VariantProps<typeof buttonVariants>['size'];
  loading?: boolean;
  square?: boolean;
};

// Native button props
export type NativeButtonProps = SharedButtonProps & PressableProps;

// The main props type - now unified around native
export type ButtonRootProps = NativeButtonProps;

export type ButtonContext = {
  variant?: SurfaceRootProps['variant'];
  color?: SurfaceRootProps['color'];
  size?: VariantProps<typeof buttonVariants>['size'];
  disabled?: boolean;
  loading?: boolean;
  square?: boolean;
  buttonProps?: ButtonRootProps;
};

export type ButtonIconProps = IconProps & {
  className?: string;
};

export type ButtonSpinnerProps = SpinnerRootProps & {
  className?: string;
  loadingIcon?: React.ComponentType<any>;
};

export type ButtonTextProps = {
  className?: string;
  children?: React.ReactNode;
};

export type ButtonSizes = NonNullable<ButtonRootProps['size']>;
export type ButtonColors = NonNullable<SurfaceRootProps['color']>;
export type ButtonVariant = NonNullable<SurfaceRootProps['variant']>;
