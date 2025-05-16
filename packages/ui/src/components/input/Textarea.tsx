import * as React from 'react';
import { Input } from './Input';
import type { InputRootProps } from './types';
import { isWebInputProps } from './utils';

const Textarea = React.forwardRef<HTMLTextAreaElement, InputRootProps>(
  (props: any, ref) => {
    const numberOfLines = 3;

    const baseProps = { ...props, multiline: true };

    if (isWebInputProps(props)) {
      if (!('rows' in props)) {
        (baseProps as any).rows = numberOfLines;
      }
    } else {
      if (!('numberOfLines' in props)) {
        baseProps.numberOfLines = numberOfLines;
      }
    }

    return (
      <Input
        ref={ref as any}
        {...baseProps}
      />
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea };