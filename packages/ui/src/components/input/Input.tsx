import * as React from 'react';
import { TextInput, Pressable } from 'react-native';
import * as Slot from '@rn-primitives/slot';
import { cn } from '../../utils';
import { inputRootVariants, inputTextVariants } from './styles';
import { InputContextProvider, useInputContext } from './context';
import { InputIcon, InputSpinner, InputText } from './Input.shared';
import { 
  getNativeInputAccessibilityProps,
} from './utils';
import type {
  InputRootProps,
  InputFieldProps,
} from './types';

const InputRoot = React.forwardRef<React.ElementRef<typeof TextInput>, InputRootProps>(
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
    const internalInputRef = React.useRef<React.ElementRef<typeof TextInput>>(null);
    const [focused, setFocused] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);

    const inputRef = (ref as React.RefObject<React.ElementRef<typeof TextInput>>) || internalInputRef;
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

    const Component = asChild ? Slot.Pressable : Pressable;

    const handlePress = React.useCallback(() => {
      if (!disabled && !loading && inputRef.current) {
        inputRef.current.focus();
      }
    }, [disabled, loading]);

    return (
      <InputContextProvider.Provider value={contextValue}>
        <Component
          className={cn(
            inputRootVariants({ variant, color: effectiveColor, size, disabled, focused }),
            readOnly && 'web:cursor-text',
            className,
          )}
          onPress={handlePress}
          onHoverIn={(e) => {
            setIsHovered(true);
          }}
          onHoverOut={(e) => {
            setIsHovered(false);
          }}
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
  const accessibilityProps = getNativeInputAccessibilityProps({ disabled, loading, multiline, readOnly });

  // Calculate height based on numberOfLines
  const lineHeight = 20; // Approximate line height in pixels
  const minHeight = multiline ? Math.max(80, (otherProps.numberOfLines ?? 1) * lineHeight) : undefined;

  return (
    <TextInput
      ref={inputRef}
      className={cn(
        'flex-1 bg-transparent p-0 outline-none text-neutral-a12 placeholder:text-neutral-a10',
        inputTextVariants({ size }),
        disabled && 'web:cursor-not-allowed',
        readOnly && 'web:cursor-text',
        className
      )}
      style={multiline ? { minHeight } : undefined}
      multiline={multiline}
      textAlignVertical={multiline ? 'top' : 'center'}
      editable={!disabled && !readOnly}
      selectTextOnFocus={readOnly}
      onFocus={(e) => {
        setFocused?.(true);
        if (onFocus) onFocus(e);
      }}
      onBlur={(e) => {
        setFocused?.(false);
        if (onBlur) onBlur(e)
      }}
      {...accessibilityProps}
      {...otherProps}
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