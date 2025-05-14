import * as React from "react";
import { Input, InputRootProps, Button } from '@ds3/ui/src';
import { useCopyToClipboard } from '@ds3/ui/src/hooks';
import { Platform } from 'react-native';
import { Check, Copy } from 'lucide-react-native';

interface InputClipboardProps extends Omit<InputRootProps, 'readOnly' | 'children'> {
  value: string;
  className?: string;
}

const InputClipboard = React.forwardRef<React.ElementRef<typeof Input>, InputClipboardProps>(
  ({ value, className, ...props }, forwardedRef) => {
    const inputRef = React.useRef<React.ElementRef<typeof Input>>(null);
    const { copied, copy } = useCopyToClipboard({
      onSuccess: () => inputRef.current?.focus(),
    });

    React.useImperativeHandle(
      forwardedRef,
      () => {
        if (!inputRef.current) {
          return {} as React.ComponentRef<typeof Input>;
        }
        return inputRef.current;
      },
      [inputRef.current]
    );

    const handleCopy = React.useCallback(() => {
      copy(value);
    }, [copy, value]);

    return (
      <Input
        ref={inputRef}
        readOnly
        value={value}
        className={className}
        {...props}
      >
        <Input.Field />
        <Button
          size="sm"
          variant="ghost"
          accessibilityLabel={copied ? "Copied" : "Copy to clipboard"}
          accessibilityHint="Click to copy text to clipboard"
          onPress={handleCopy}
        >
          <Input.Icon
            icon={copied ? Check : Copy}
            className={Platform.OS === 'web' ? 'cursor-pointer' : ''}
          />
        </Button>
      </Input>
    );
  }
);

InputClipboard.displayName = 'InputClipboard';

export { InputClipboard };
export type { InputClipboardProps };