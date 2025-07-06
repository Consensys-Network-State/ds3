import * as React from 'react';
import { PressableProps, ViewProps } from 'react-native';
import type { VariantProps } from 'class-variance-authority';
import { surfaceVariants } from './styles';

// Shared surface props
export type SharedSurfaceProps = {
  variant?: VariantProps<typeof surfaceVariants>['variant'];
  color?: VariantProps<typeof surfaceVariants>['color'];
  toColor?: VariantProps<typeof surfaceVariants>['color'];
  disabled?: boolean;
  asChild?: boolean;
  pressable?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export type SurfaceRootProps = SharedSurfaceProps & ViewProps & Partial<PressableProps>;

export type SurfaceColor = NonNullable<SurfaceRootProps['color']>;
export type SurfaceVariant = NonNullable<SurfaceRootProps['variant']>; 