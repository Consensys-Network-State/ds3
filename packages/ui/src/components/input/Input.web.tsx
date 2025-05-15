import * as React from 'react';
import * as Slot from '@radix-ui/react-slot';
import { cn } from '../../utils';
import { inputRootVariants, inputTextVariants } from './styles';
import { InputContextProvider, useInputContext } from './context';
import { InputIcon, InputSpinner, InputText } from './Input.shared';
import { 
  toWebProps, 
  getWebInputAccessibilityProps, 
  handleFocus,
} from './utils';
import type {
  InputRootProps,
  InputFieldProps,
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
  const { multiline, onFocus, onBlur, ...otherProps } = fieldProps;
  const webProps = toWebProps(otherProps);
  const accessibilityProps = getWebInputAccessibilityProps({ disabled, loading, multiline, readOnly });

  const commonProps = {
    ref: inputRef,
    className: cn(
      'flex-1 bg-transparent p-0 outline-none text-neutral-a12 placeholder:text-neutral-a10',
      inputTextVariants({ size }),
      disabled && 'cursor-not-allowed',
      readOnly && 'cursor-text',
      className
    ),
    disabled,
    readOnly,
    onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFocused?.(true);
      handleFocus(true, onFocus, undefined, e);
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFocused?.(false);
      handleFocus(false, undefined, onBlur, e);
    },
    ...accessibilityProps,
    ...webProps,
  };

  return multiline ? (
    <textarea {...commonProps} />
  ) : (
    <input {...commonProps} />
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