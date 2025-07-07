import type { VariantProps } from 'class-variance-authority';
import type { SurfaceRootProps } from '../surface/types';
import { buttonVariants } from './styles';

export type ButtonRootProps = SurfaceRootProps & {
  size?: VariantProps<typeof buttonVariants>['size'];
  square?: boolean;
};

export type ButtonSizes = NonNullable<ButtonRootProps['size']>;
export type ButtonColors = NonNullable<SurfaceRootProps['color']>;
export type ButtonVariant = NonNullable<SurfaceRootProps['variant']>;
