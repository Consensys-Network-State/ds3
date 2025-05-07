import { Easing, WithSpringConfig } from 'react-native-reanimated';
import type { IconProps } from '../icon/types';

export interface SpinnerProps extends Omit<IconProps, 'icon'> {
  icon?: React.ComponentType<any>;
  duration?: number;
  easing?: typeof Easing.linear;
  repeat?: number;
  springConfig?: WithSpringConfig;
  useSpring?: boolean;
  autoPlay?: boolean;
  direction?: 'clockwise' | 'counterclockwise';
} 