import * as React from 'react';
import { Input } from './input';
import type { InputRootProps } from './types';

const Textarea = React.forwardRef<HTMLTextAreaElement, InputRootProps>(
  ({ numberOfLines = 3, ...props }, ref) => {
    return (
      <Input
        ref={ref as any}
        multiline
        numberOfLines={numberOfLines}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea };