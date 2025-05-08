import type { IconProps } from '../icon/types';

export interface SpinnerProps extends Omit<IconProps, 'icon'> {
  icon?: React.ComponentType<any>;
  speed?: 'slow' | 'normal' | 'fast';
  direction?: 'clockwise' | 'counterclockwise';
} 