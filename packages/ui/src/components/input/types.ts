import * as React from 'react';
import { TextInputProps } from 'react-native';
import type { VariantProps } from 'class-variance-authority';
import type { IconProps } from '../icon/types';
import type { SpinnerRootProps } from '../spinner/types';
import { inputRootVariants } from './styles';

export type SharedInputProps = {
  variant?: VariantProps<typeof inputRootVariants>['variant'];
  color?: VariantProps<typeof inputRootVariants>['color'];
  toColor?: VariantProps<typeof inputRootVariants>['color'];
  size?: VariantProps<typeof inputRootVariants>['size'];
  loading?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  multiline?: boolean;
  asChild?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export type NativeInputProps = SharedInputProps & TextInputProps;

// The main props type - now unified around native
export type InputRootProps = NativeInputProps;

export type InputContext = {
  variant?: VariantProps<typeof inputRootVariants>['variant'];
  color?: VariantProps<typeof inputRootVariants>['color'];
  size?: VariantProps<typeof inputRootVariants>['size'];
  disabled?: boolean;
  loading?: boolean;
  readOnly?: boolean;
  multiline?: boolean;
  focused?: boolean;
  setFocused?: (focused: boolean) => void;
  inputRef?: React.RefObject<any>;
  fieldProps?: InputRootProps;
};

export type InputFieldProps = {
  className?: string;
};

export type InputIconProps = IconProps & {
  className?: string;
};

export type InputSpinnerProps = SpinnerRootProps & {
  className?: string;
  loadingIcon?: React.ComponentType<any>;
};

export type InputTextProps = {
  className?: string;
  children?: React.ReactNode;
}; 