import * as React from 'react';
import { Text as RNText } from 'react-native';
import * as Slot from '@rn-primitives/slot';
import { cn } from '../../utils';
import { textVariants } from './styles';
import type { TextProps, TextRef } from './types';
import { TextClassContext } from './context';

const Text = React.forwardRef<TextRef, TextProps>(
  ({ className, size, weight, color, lineHeight, fontFamily, spectrum, hover, asChild = false, ...props }, ref) => {
    const textClass = React.useContext(TextClassContext);
    const Component = asChild ? Slot.Text : RNText;

    return (
      <Component
        ref={ref}
        className={cn(textVariants({ size, weight, color, lineHeight, fontFamily, spectrum, hover }), textClass, className)}
        {...props}
      />
    );
  }
);
Text.displayName = 'Text';

export { Text }; 