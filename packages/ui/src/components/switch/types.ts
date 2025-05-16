import * as React from 'react';
import * as SwitchPrimitives from '@rn-primitives/switch';
import { VariantProps } from 'class-variance-authority';
import { switchRootVariants, switchThumbVariants } from './styles';
import { Icon } from '../icon';

export interface SwitchThumbProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Thumb> {
  size?: VariantProps<typeof switchThumbVariants>['size'];
  variant?: VariantProps<typeof switchThumbVariants>['variant'];
  color?: VariantProps<typeof switchThumbVariants>['color'];
  checked: boolean;
  icon?: React.ComponentProps<typeof Icon>['icon'];
}

export interface SwitchRootProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  variant?: VariantProps<typeof switchRootVariants>['variant'];
  color?: VariantProps<typeof switchRootVariants>['color'];
  size?: VariantProps<typeof switchRootVariants>['size'];
  thumbIcon?: React.ComponentProps<typeof Icon>['icon'];
  checked: boolean;
  disabled: boolean;
  className?: string;
  onCheckedChange: (checked: boolean) => void;
} 