import type { VariantProps } from 'class-variance-authority';
import { fieldVariants } from './styles';
import { Icon } from '../icon';

export type FieldColors = NonNullable<VariantProps<typeof fieldVariants>['color']>;

export interface FieldRootProps {
  color?: FieldColors;
  onLabelPress?: () => void;
  children?: React.ReactNode;
  className?: string;
}

export interface FieldIconProps extends React.ComponentPropsWithoutRef<typeof Icon> {
  icon: React.ComponentType<any>;
}

export interface FieldItemProps {
  id?: string;
  children?: React.ReactNode;
  className?: string;
}

export interface UseFieldProps {
  error?: string;
  required?: boolean;
  ariaProps?: Record<string, any>;
} 