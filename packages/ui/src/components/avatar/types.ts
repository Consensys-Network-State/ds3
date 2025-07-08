import * as React from 'react';
import * as AvatarPrimitive from '@rn-primitives/avatar';
import type { VariantProps } from 'class-variance-authority';
import { avatarVariants } from './styles';

// Shared avatar props
export type SharedAvatarProps = {
  size?: VariantProps<typeof avatarVariants>['size'];
  color?: VariantProps<typeof avatarVariants>['color'];
  border?: boolean;
  className?: string;
  children?: React.ReactNode;
  source?: AvatarPrimitive.ImageProps['source'];
  icon?: React.ComponentType<any>;
};

// Avatar root props extending from primitives
export type AvatarRootProps = SharedAvatarProps & Omit<AvatarPrimitive.RootProps, keyof SharedAvatarProps>;

export type AvatarContext = {
  size?: VariantProps<typeof avatarVariants>['size'];
  color?: VariantProps<typeof avatarVariants>['color'];
  border?: boolean;
  source?: AvatarPrimitive.ImageProps['source'];
  icon?: React.ComponentType<any>;
};

export type AvatarImageProps = AvatarPrimitive.ImageProps & {
  className?: string;
};

export type AvatarFallbackProps = AvatarPrimitive.FallbackProps & {
  className?: string;
  children?: React.ReactNode;
};

export type AvatarTextProps = {
  className?: string;
  children?: React.ReactNode;
};

export type AvatarIconProps = {
  className?: string;
  icon?: React.ComponentType<any>;
};

export type AvatarSizes = NonNullable<AvatarRootProps['size']>;
export type AvatarColors = NonNullable<AvatarRootProps['color']>; 