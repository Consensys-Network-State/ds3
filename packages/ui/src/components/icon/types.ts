import type { VariantProps } from 'class-variance-authority';
import { iconVariants } from './styles';

export type IconColors = NonNullable<VariantProps<typeof iconVariants>['color']>;
export type IconSizes = NonNullable<VariantProps<typeof iconVariants>['size']>;
export type IconSpectrum = 'bg' | 'border' | 'solid' | 'text' | 'contrast';

export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'color' | 'size'>, Omit<VariantProps<typeof iconVariants>, 'size'> {
  icon: React.ComponentType<any>;
  className?: string;
  size?: IconSizes | number;
  spectrum?: IconSpectrum;
} 