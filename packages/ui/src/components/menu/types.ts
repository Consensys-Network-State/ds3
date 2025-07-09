import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { menuVariants, menuItemVariants } from './styles';
import type { SurfaceRootProps } from '../surface/types';

// Menu root props extending Surface props
export type MenuRootProps = SurfaceRootProps & {
  size?: VariantProps<typeof menuVariants>['size'];
  className?: string;
  children?: React.ReactNode;
};

// Menu item props extending Surface props
export type MenuItemProps = SurfaceRootProps & {
  size?: VariantProps<typeof menuItemVariants>['size'];
  disabled?: boolean;
  onPress?: () => void;
  className?: string;
  children?: React.ReactNode;
};

// Menu size type
export type MenuSize = NonNullable<MenuRootProps['size']>; 