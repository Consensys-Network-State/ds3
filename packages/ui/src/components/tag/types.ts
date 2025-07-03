import * as React from 'react';
import type { ViewProps } from 'react-native';
import type { TextProps } from '../text';
import type { VariantProps } from 'class-variance-authority';
import type { tagVariants, tagTextVariants } from './styles';

export interface TagContext {
  color: NonNullable<TagProps['color']>;
  size: NonNullable<TagProps['size']>;
  variant: NonNullable<TagProps['variant']>;
}

export interface TagProps extends ViewProps, VariantProps<typeof tagVariants> {
  children?: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
}

export interface TagTextProps extends Omit<TextProps, 'color' | 'size'>, VariantProps<typeof tagTextVariants> {
  children?: React.ReactNode;
} 