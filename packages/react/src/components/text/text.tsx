import * as React from 'react';
import { Text as RNText } from 'react-native';
import * as Slot from '@rn-primitives/slot';
import { cn } from '../../utils';
import { textVariants } from './styles';
import type { TextProps, TextRef } from './types';

const TextClassContext = React.createContext<string | undefined>(undefined);

const Text = React.forwardRef<TextRef, TextProps>(
  ({ className, size, weight, color, asChild = false, ...props }, ref) => {
    const textClass = React.useContext(TextClassContext);
    const Component = asChild ? Slot.Text : RNText;
    return (
      <Component
        ref={ref}
        className={cn(textVariants({ size, weight, color }), textClass, className)}
        {...props}
      />
    );
  }
);
Text.displayName = 'Text';

export { Text, TextClassContext };