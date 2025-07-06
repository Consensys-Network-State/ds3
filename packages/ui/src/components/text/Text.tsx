import * as React from 'react';
import { Text as RNText } from 'react-native';
import * as Slot from '@rn-primitives/slot';
import { cn } from '../../utils';
import { textVariants } from './styles';
import type { TextProps, TextRef } from './types';
import { TextContextProvider } from './context';

const Text = React.forwardRef<TextRef, TextProps>(
  ({ className, size, weight, color, lineHeight, fontFamily, spectrum, asChild = false, ...props }, ref) => {
    const contextProps = React.useContext(TextContextProvider);
    
    // Merge context props with component props (component props take precedence)
    const mergedProps = {
      color: color ?? contextProps?.color,
      spectrum: spectrum ?? contextProps?.spectrum,
      size: size ?? contextProps?.size,
      weight: weight ?? contextProps?.weight,
      lineHeight: lineHeight ?? contextProps?.lineHeight,
      fontFamily: fontFamily ?? contextProps?.fontFamily,
    };
    
    const Component = asChild ? Slot.Text : RNText;
    return (
      <Component
        ref={ref}
        className={cn(
          textVariants(mergedProps), 
          contextProps?.className,
          className
        )}
        {...props}
      />
    );
  }
);
Text.displayName = 'Text';

export { Text };