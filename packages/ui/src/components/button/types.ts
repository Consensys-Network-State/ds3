import * as React from 'react';
import { Pressable } from 'react-native';
import type { VariantProps } from 'class-variance-authority';
import type { IconProps } from '../icon/types';
import type { SpinnerProps } from '../spinner/types';
import { buttonVariants, iconButtonVariants } from './styles';
import type { WebClickEvent, WebFocusEvent, NativeFocusEvent } from '../../types';
import type { GestureResponderEvent } from 'react-native';

// Platform-specific button props
export type WebButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: WebClickEvent) => void;
  onFocus?: (e: WebFocusEvent) => void;
  onBlur?: (e: WebFocusEvent) => void;
  onMouseDown?: (e: WebClickEvent) => void;
  onMouseUp?: (e: WebClickEvent) => void;
  onMouseEnter?: (e: WebClickEvent) => void;
  onMouseLeave?: (e: WebClickEvent) => void;
};

export interface NativeButtonProps extends SharedButtonProps {
  onPress?: (e: GestureResponderEvent) => void;
  onPressIn?: (e: GestureResponderEvent) => void;
  onPressOut?: (e: GestureResponderEvent) => void;
  onFocus?: (e: NativeFocusEvent) => void;
  onBlur?: (e: NativeFocusEvent) => void;
}

// Shared button props
export type SharedButtonProps = {
  variant?: VariantProps<typeof buttonVariants>['variant'];
  color?: VariantProps<typeof buttonVariants>['color'];
  accentColor?: VariantProps<typeof buttonVariants>['color'];
  size?: VariantProps<typeof buttonVariants>['size'];
  disabled?: boolean;
  loading?: boolean;
  asChild?: boolean;
  className?: string;
  children?: React.ReactNode;
};

// Unified button props
export type UnifiedButtonProps = SharedButtonProps & (WebButtonProps | NativeButtonProps);

export type ButtonContext = {
  variant?: VariantProps<typeof buttonVariants>['variant'];
  color?: VariantProps<typeof buttonVariants>['color'];
  size?: VariantProps<typeof buttonVariants>['size'];
  disabled?: boolean;
  loading?: boolean;
  isPressed?: boolean;
  isHovered?: boolean;
  setPressed?: (pressed: boolean) => void;
  setHovered?: (hovered: boolean) => void;
  buttonRef?: React.RefObject<any>;
  buttonProps?: UnifiedButtonProps;
};

export type ButtonRootProps = Omit<React.ComponentPropsWithoutRef<typeof Pressable>,
  'className' | 'style' | 'children'> & UnifiedButtonProps;

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

export type IconButtonProps = {
  icon: ButtonIconProps['icon'];
  className?: string;
} & VariantProps<typeof iconButtonVariants> & 
  Pick<VariantProps<typeof buttonVariants>, 'variant' | 'color'> & {
    disabled?: boolean;
    loading?: boolean;
  } & ButtonRootProps; 

export type ButtonColors = NonNullable<ButtonRootProps['color']>;
export type ButtonSizes = NonNullable<ButtonRootProps['size']>;
export type ButtonVariant = NonNullable<ButtonRootProps['variant']>;
