import * as React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import type { VariantProps } from 'class-variance-authority';
import type { IconProps } from '../icon/types';
import type { SpinnerProps } from '../spinner/types';
import { inputRootVariants } from './styles';
import type { WebChangeEvent, WebFocusEvent, NativeFocusEvent } from '../../types';

// Platform-specific input props
export type WebInputProps = {
  type?: HTMLInputElement['type'];
  value?: string;
  defaultValue?: string;
  onChange?: (e: WebChangeEvent) => void;
  autoComplete?: HTMLInputElement['autocomplete'];
  rows?: number;
};

export type NativeInputProps = {
  value?: string;
  defaultValue?: string;
  onChangeText?: (text: string) => void;
  keyboardType?: TextInputProps['keyboardType'];
  secureTextEntry?: boolean;
  autoCorrect?: TextInputProps['autoCorrect'];
  autoComplete?: TextInputProps['autoComplete'];
  numberOfLines?: number;
  textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center';
};

// Shared input props
export type SharedInputProps = {
  variant?: VariantProps<typeof inputRootVariants>['variant'];
  color?: VariantProps<typeof inputRootVariants>['color'];
  accentColor?: VariantProps<typeof inputRootVariants>['color'];
  size?: VariantProps<typeof inputRootVariants>['size'];
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  multiline?: boolean;
  maxLength?: number;
  autoCapitalize?: TextInputProps['autoCapitalize'];
  required?: boolean;
  loading?: boolean;
  error?: boolean;
  asChild?: boolean;
  className?: string;
  children?: React.ReactNode;
  onFocus?: (e: WebFocusEvent | NativeFocusEvent) => void;
  onBlur?: (e: WebFocusEvent | NativeFocusEvent) => void;
};

// Unified input props
export type UnifiedInputProps = SharedInputProps & (WebInputProps | NativeInputProps);

export type InputContext = {
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

export type InputRootProps = Omit<React.ComponentPropsWithoutRef<typeof TextInput>,
  'className' | 'style' | 'children'> & UnifiedInputProps;

export type InputFieldProps = {
  className?: string;
};

export type InputIconProps = IconProps & {
  className?: string;
};

export type InputSpinnerProps = SpinnerProps & {
  className?: string;
  loadingIcon?: React.ComponentType<any>;
};

export type InputTextProps = {
  className?: string;
  children?: React.ReactNode;
}; 