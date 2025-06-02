import { VariantProps } from 'class-variance-authority';
import { checkboxRootVariants } from './styles';
import { Icon } from '../icon';
import * as CheckboxPrimitive from '@rn-primitives/checkbox';

export interface CheckboxRootProps extends Omit<CheckboxPrimitive.RootProps, 'children'> {
  variant?: VariantProps<typeof checkboxRootVariants>['variant'];
  color?: VariantProps<typeof checkboxRootVariants>['color'];
  size?: VariantProps<typeof checkboxRootVariants>['size'];
  indeterminate?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export interface CheckboxIconProps extends React.ComponentPropsWithoutRef<typeof Icon> {}

export interface CheckboxContextValue {
  size?: VariantProps<typeof checkboxRootVariants>['size'];
  variant?: VariantProps<typeof checkboxRootVariants>['variant'];
  color?: VariantProps<typeof checkboxRootVariants>['color'];
  checked?: boolean;
  indeterminate?: boolean;
} 