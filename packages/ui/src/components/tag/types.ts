import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';
import type { SurfaceRootProps } from '../surface/types';
import type { tagVariants } from './styles';

export interface TagContext {
  color: NonNullable<TagProps['color']>;
  size: NonNullable<TagProps['size']>;
  variant: NonNullable<TagProps['variant']>;
}

export interface TagProps extends SurfaceRootProps, Pick<VariantProps<typeof tagVariants>, 'size'> {
  children?: React.ReactNode;
} 