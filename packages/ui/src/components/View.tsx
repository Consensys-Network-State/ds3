import * as React from 'react';
import { View as RNView, type ViewProps as RNViewProps } from 'react-native';
import { cn } from '../utils';

export interface ViewProps extends RNViewProps {
  className?: string;
}

export const View = React.forwardRef<RNView, ViewProps>(({ className, ...props }, ref) => {
  return (
    <RNView
      ref={ref}
      className={cn(className)}
      {...props}
    />
  );
});

View.displayName = 'View'; 