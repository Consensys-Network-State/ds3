import * as React from 'react';
import { TextInput, Pressable } from 'react-native';
import * as Slot from '@rn-primitives/slot';
import { cn } from '../../utils';
import { inputRootVariants, inputTextVariants } from './styles';
import { InputContextProvider, useInputContext } from './context';
import { InputIcon, InputSpinner, InputText } from './input.shared';
import { toNativeProps, getNativeAccessibilityProps, handleFocus } from './utils';
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
      fieldProps
    }), [variant, effectiveColor, size, disabled, loading, readOnly, focused, fieldProps]);

    const Component = asChild ? Slot.Pressable : Pressable;

    const handlePress = () => {
      if (!disabled && !loading && inputRef.current) {
        inputRef.current.focus();
      }
    };

    return (
      <InputContextProvider.Provider value={contextValue}>
        <Component
          className={cn(
            inputRootVariants({ variant, color: effectiveColor, size, disabled, focused }),
            readOnly && 'web:cursor-text',
            className,
          )}
          onPress={handlePress}
          onHoverIn={() => setIsHovered(true)}
          onHoverOut={() => setIsHovered(false)}
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
  const { multiline, onFocus, onBlur, numberOfLines, rows, ...otherProps } = fieldProps;

  // Transform props for native
  const nativeProps = toNativeProps(otherProps);
  const accessibilityProps = getNativeAccessibilityProps(fieldProps);

  // Calculate height based on numberOfLines or rows
  const lineHeight = 20; // Approximate line height in pixels
  const minHeight = multiline ? Math.max(80, (numberOfLines ?? rows ?? 1) * lineHeight) : undefined;

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
      numberOfLines={multiline ? (numberOfLines ?? rows) : undefined}
      textAlignVertical={multiline ? 'top' : 'center'}
      editable={!disabled && !readOnly}
      selectTextOnFocus={readOnly}
      onFocus={(e) => {
        setFocused?.(true);
        handleFocus(true, onFocus, undefined, e);
      }}
      onBlur={(e) => {
        setFocused?.(false);
        handleFocus(false, undefined, onBlur, e);
      }}
      {...accessibilityProps}
      {...nativeProps}
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