import * as React from 'react';
import { View } from 'react-native';
import { cn } from '../../utils';
import { useSpinnerContext } from './context';
import type { SpinnerFallbackProps } from './types';

export const SpinnerFallback = React.forwardRef<React.ElementRef<typeof View>, SpinnerFallbackProps>(
  ({ className, children, ...props }, ref) => {
    const context = useSpinnerContext();
    
    // Only render when spin is false
    if (context.spin) {
      return null;
    }

    // If children are provided, render them
    if (children) {
      return (
        <View ref={ref} className={cn('web:inline-block', className)} {...props}>
          {children}
        </View>
      );
    }

    // If no children and no fallback, render nothing
    return null;
  }
);
SpinnerFallback.displayName = 'SpinnerFallback'; 