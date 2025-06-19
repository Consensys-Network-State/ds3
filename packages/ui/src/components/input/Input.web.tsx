import * as React from 'react';
import * as Slot from '@radix-ui/react-slot';
import { cn } from '../../utils';
import { inputRootVariants, inputTextVariants } from './styles';
import { InputContextProvider, useInputContext } from './context';
import { InputIcon, InputSpinner, InputText } from './Input.shared';
import { 
  toWebProps, 
  getWebInputAccessibilityProps,
} from './utils';
import type {
  InputRootProps,
  InputFieldProps,
  WebInputBaseProps,
  WebTextareaProps,
} from './types';

const InputRoot = React.forwardRef<HTMLInputElement, InputRootProps>(
  ({
    className,
    variant,
    color,
    accentColor,
    size,
    disabled = false,
    loading = false,
    readOnly = false,
    asChild = false,
    children,
    ...fieldProps
  }, ref) => {
    const internalInputRef = React.useRef<HTMLInputElement>(null);
    const [focused, setFocused] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);

    const inputRef = (ref as React.RefObject<HTMLInputElement>) || internalInputRef;
    const effectiveColor = (focused || isHovered) && accentColor ? accentColor : color;

    // Memoize fieldProps separately
    const memoizedFieldProps = React.useMemo(() => fieldProps, [fieldProps]);

    // Create context value with all dependencies properly listed
    const contextValue = React.useMemo(() => ({
      variant,
      color: effectiveColor,
      size,
      disabled,
      loading,
      readOnly,
      focused,
      setFocused,
      inputRef,
      fieldProps: memoizedFieldProps
    }), [
      variant,
      effectiveColor,
      size,
      disabled,
      loading,
      readOnly,
      focused,
      memoizedFieldProps
    ]);

    const Component = asChild ? Slot.Root : 'div';

    const handleClick = React.useCallback(() => {
      if (!disabled && !loading && inputRef.current) {
        inputRef.current.focus();
      }
    }, [disabled, loading]);

    return (
      <InputContextProvider.Provider value={contextValue}>
        <Component
          className={cn(
            inputRootVariants({ variant, color: effectiveColor, size, disabled, focused }),
            readOnly && 'cursor-text',
            className,
          )}
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          role="button"
          tabIndex={-1}
        >
          {children || <InputField />}
        </Component>
      </InputContextProvider.Provider>
    );
  }
);
InputRoot.displayName = 'Input';

const InputField = ({ className }: InputFieldProps) => {
  const context = useInputContext();
  const { fieldProps = {}, setFocused, disabled, readOnly, size, loading, inputRef } = context;
  const { multiline, ...otherProps } = fieldProps;
  
  // Convert to appropriate web props type
  const webProps = toWebProps(otherProps);
  const accessibilityProps = getWebInputAccessibilityProps({ disabled, loading, multiline, readOnly });

  // Create unified event handlers for focus events
  const handleFocus = React.useCallback((e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFocused?.(true);
    if ('onFocus' in webProps && typeof webProps.onFocus === 'function') {
      (webProps.onFocus as any)(e);
    }
  }, [webProps, setFocused]);

  const handleBlur = React.useCallback((e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFocused?.(false);
    if ('onBlur' in webProps && typeof webProps.onBlur === 'function') {
      (webProps.onBlur as any)(e);
    }
  }, [webProps, setFocused]);

  // Shared props for both input and textarea
  const sharedProps = {
    className: cn(
      'flex-1 bg-transparent p-0 outline-none text-neutral-a12 placeholder:text-neutral-a10',
      inputTextVariants({ size }),
      disabled && 'cursor-not-allowed',
      readOnly && 'cursor-text',
      className
    ),
    disabled,
    readOnly,
    ...accessibilityProps,
  };

  if (multiline) {
    return (
      <textarea
        ref={inputRef as React.RefObject<HTMLTextAreaElement>}
        onFocus={handleFocus as React.FocusEventHandler<HTMLTextAreaElement>}
        onBlur={handleBlur as React.FocusEventHandler<HTMLTextAreaElement>}
        {...sharedProps}
        {...(webProps as WebTextareaProps)}
      />
    );
  }

  return (
    <input
      ref={inputRef}
      onFocus={handleFocus as React.FocusEventHandler<HTMLInputElement>}
      onBlur={handleBlur as React.FocusEventHandler<HTMLInputElement>}
      {...sharedProps}
      {...(webProps as WebInputBaseProps)}
    />
  );
};
InputField.displayName = 'InputField';

const Input = Object.assign(InputRoot, {
  Field: InputField,
  Text: InputText,
  Icon: InputIcon,
  Spinner: InputSpinner,
});

export { Input };