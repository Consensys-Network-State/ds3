import type { ViewProps } from 'react-native';

export type AnimationType = 'fade' | 'fadeDown' | 'slideDown';

export interface AnimateProps extends Omit<ViewProps, 'children'> {
  children: React.ReactNode;
  type?: AnimationType;
  duration?: number;
  delay?: number;
  show?: boolean;
} 