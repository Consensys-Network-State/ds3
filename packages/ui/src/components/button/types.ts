import { PressableProps } from 'react-native';
import type { VariantProps } from 'class-variance-authority';
import type { SurfaceRootProps } from '../surface/types';
import { buttonVariants } from './styles';

// Shared button props - extends Surface props
export type SharedButtonProps = Omit<SurfaceRootProps, 'pressable'> & {
  size?: VariantProps<typeof buttonVariants>['size'];
  square?: boolean;
};

// Button props - uses React Native PressableProps
export type ButtonRootProps = SharedButtonProps & PressableProps;

export type ButtonSizes = NonNullable<ButtonRootProps['size']>;
export type ButtonColors = NonNullable<SurfaceRootProps['color']>;
export type ButtonVariant = NonNullable<SurfaceRootProps['variant']>;
