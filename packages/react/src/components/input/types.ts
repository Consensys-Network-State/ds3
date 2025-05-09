import * as React from 'react';
import { TextInput, NativeSyntheticEvent, TextInputFocusEventData, TextInputProps } from 'react-native';
import type { VariantProps } from 'class-variance-authority';
import type { IconProps } from '../icon/types';
import type { SpinnerProps } from '../spinner/types';
import { inputRootVariants } from './styles';

// Platform-specific event types
export type WebChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
export type WebFocusEvent = React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>;
export type NativeChangeEvent = NativeSyntheticEvent<TextInputFocusEventData>;
export type NativeFocusEvent = NativeSyntheticEvent<TextInputFocusEventData>;

// Platform-specific input props
export type WebInputProps = {
  type?: HTMLInputElement['type'];
  value?: string;
  defaultValue?: string;
  onChange?: (e: WebChangeEvent) => void;
  selection?: { selectionStart?: number; selectionEnd?: number };
  autoCorrect?: 'on' | 'off';
  autoComplete?: HTMLInputElement['autocomplete'];
  rows?: number;
};

export type NativeInputProps = {
  value?: string;
  defaultValue?: string;
  onChangeText?: (text: string) => void;
  keyboardType?: TextInputProps['keyboardType'];
  selection?: TextInputProps['selection'];
  secureTextEntry?: boolean;
  autoCorrect?: TextInputProps['autoCorrect'];
  autoComplete?: TextInputProps['autoComplete'];
};

// Shared input props
export type SharedInputProps = {
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  multiline?: boolean;
  maxLength?: number;
  autoCapitalize?: TextInputProps['autoCapitalize'];
  required?: boolean;
  loading?: boolean;
  numberOfLines?: number;
  onFocus?: (e: WebFocusEvent | NativeFocusEvent) => void;
  onBlur?: (e: WebFocusEvent | NativeFocusEvent) => void;
};

// Unified input props
export type UnifiedInputProps = SharedInputProps & (WebInputProps | NativeInputProps);

type InputContext = {
  variant?: VariantProps<typeof inputRootVariants>['variant'];
  color?: VariantProps<typeof inputRootVariants>['color'];
  size?: VariantProps<typeof inputRootVariants>['size'];
  disabled?: boolean;
  loading?: boolean;
  readOnly?: boolean;
  focused?: boolean;
  setFocused?: (focused: boolean) => void;
  inputRef?: React.RefObject<any>;
  fieldProps?: UnifiedInputProps;
};

type InputRootProps = Omit<React.ComponentPropsWithoutRef<typeof TextInput>,
  'className' | 'style' | 'children'> & {
  variant?: VariantProps<typeof inputRootVariants>['variant'];
  color?: VariantProps<typeof inputRootVariants>['color'];
  accentColor?: VariantProps<typeof inputRootVariants>['color'];
  size?: VariantProps<typeof inputRootVariants>['size'];
  disabled?: boolean;
  loading?: boolean;
  readOnly?: boolean;
  error?: boolean;
  asChild?: boolean;
  children?: React.ReactNode;
  className?: string;
} & UnifiedInputProps;

type InputFieldProps = {
  className?: string;
};

type InputIconProps = IconProps & {
  className?: string;
};

type InputSpinnerProps = SpinnerProps & {
  className?: string;
  loadingIcon?: React.ComponentType<any>;
};

type InputTextProps = {
  className?: string;
  children?: React.ReactNode;
};

export type {
  InputContext,
  InputRootProps,
  InputFieldProps,
  InputIconProps,
  InputSpinnerProps,
  InputTextProps,
}; 