import * as React from 'react';
import { Pressable, NativeSyntheticEvent, GestureResponderEvent } from 'react-native';
import type { VariantProps } from 'class-variance-authority';
import type { IconProps } from '../icon/types';
import type { SpinnerProps } from '../spinner/types';
import { buttonVariants } from './styles';

// Platform-specific event types
export type WebClickEvent = React.MouseEvent<HTMLButtonElement>;
export type WebFocusEvent = React.FocusEvent<HTMLButtonElement>;
export type NativePressEvent = NativeSyntheticEvent<GestureResponderEvent>;
export type NativeFocusEvent = NativeSyntheticEvent<GestureResponderEvent>;

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

export type NativeButtonProps = {
  onPress?: (e: NativePressEvent) => void;
  onPressIn?: (e: NativePressEvent) => void;
  onPressOut?: (e: NativePressEvent) => void;
  onFocus?: (e: NativeFocusEvent) => void;
  onBlur?: (e: NativeFocusEvent) => void;
};

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