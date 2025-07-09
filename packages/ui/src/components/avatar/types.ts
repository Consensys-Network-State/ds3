import * as React from 'react';
import { ImageProps } from 'react-native';
import type { VariantProps } from 'class-variance-authority';
import { avatarVariants } from './styles';
import type { SurfaceRootProps } from '../surface/types';

// Shared avatar props
export type SharedAvatarProps = {
  size?: VariantProps<typeof avatarVariants>['size'];
  color?: VariantProps<typeof avatarVariants>['color'];
  border?: boolean;
  className?: string;
  children?: React.ReactNode;
  source?: ImageProps['source'];
  icon?: React.ComponentType<any>;
  alt?: string;
};

// Avatar root props extending from Surface
export type AvatarRootProps = SharedAvatarProps & Omit<SurfaceRootProps, keyof SharedAvatarProps>;

export type AvatarImageProps = ImageProps & {
  className?: string;
  size?: VariantProps<typeof avatarVariants>['size'];
};

export type AvatarFallbackProps = {
  className?: string;
  children?: React.ReactNode;
};

export type AvatarSizes = NonNullable<AvatarRootProps['size']>;
export type AvatarColors = NonNullable<AvatarRootProps['color']>; 