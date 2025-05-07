import { TextInput } from 'react-native';
import type { IconProps } from '../icon/types';
import type { SpinnerProps } from '../spinner/types';

type InputContext = {
  variant?: 'soft' | 'outline' | 'underline' | 'ghost';
  color?: 'neutral' | 'primary' | 'secondary' | 'error' | 'warning' | 'success';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  readOnly?: boolean;
  focused?: boolean;
  setFocused?: (focused: boolean) => void;
  inputRef?: React.RefObject<any>;
  fieldProps?: Omit<React.ComponentPropsWithoutRef<typeof TextInput>, 'className'>;
};

type InputRootProps = Omit<React.ComponentPropsWithoutRef<typeof TextInput>,
  'editable' |
  'textAlignVertical'
> & {
  variant?: 'soft' | 'outline' | 'underline' | 'ghost';
  color?: 'neutral' | 'primary' | 'secondary' | 'error' | 'warning' | 'success';
  accentColor?: 'neutral' | 'primary' | 'secondary' | 'error' | 'warning' | 'success';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  readOnly?: boolean;
  asChild?: boolean;
  children?: React.ReactNode;
  className?: string;
};

type InputFieldProps = {
  className?: string;
};

type InputIconProps = Omit<IconProps, 'icon'> & {
  icon: React.ComponentType<any>;
  className?: string;
};

type InputSpinnerProps = Omit<SpinnerProps, 'icon'> & {
  loadingIcon?: React.ComponentType<any>;
  icon?: React.ComponentType<any>;
  className?: string;
};

type InputTextProps = {
  className?: string;
};

export type {
  InputContext,
  InputRootProps,
  InputFieldProps,
  InputIconProps,
  InputSpinnerProps,
  InputTextProps,
}; 