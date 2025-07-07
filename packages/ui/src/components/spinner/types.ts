import * as React from 'react';
import type { IconProps } from '../icon/types';

// Shared spinner props
export type SharedSpinnerProps = {
  speed?: 'slow' | 'normal' | 'fast' | number;
  direction?: 'clockwise' | 'counterclockwise';
  spin?: boolean;
  className?: string;
  children?: React.ReactNode;
  spinner?: React.ComponentType<any>;
  fallback?: React.ComponentType<any>;
};

// Spinner root props
export type SpinnerRootProps = SharedSpinnerProps & Omit<IconProps, 'icon'>;

export type SpinnerContext = {
  speed?: 'slow' | 'normal' | 'fast' | number;
  direction?: 'clockwise' | 'counterclockwise';
  spin?: boolean;
  spinner?: React.ComponentType<any>;
  fallback?: React.ComponentType<any>;
};

export type SpinnerFallbackProps = {
  className?: string;
  children?: React.ReactNode;
};

export type SpinnerSizes = NonNullable<SpinnerRootProps['size']>;
export type SpinnerColors = NonNullable<SpinnerRootProps['color']>; 