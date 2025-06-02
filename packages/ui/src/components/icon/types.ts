import type { VariantProps } from 'class-variance-authority';
import { iconVariants } from './styles';

export type IconColors = NonNullable<VariantProps<typeof iconVariants>['color']>;
export type IconSizes = NonNullable<VariantProps<typeof iconVariants>['size']>;

export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'color' | 'size'>, VariantProps<typeof iconVariants> {
  icon: React.ComponentType<any>;
  className?: string;
} 