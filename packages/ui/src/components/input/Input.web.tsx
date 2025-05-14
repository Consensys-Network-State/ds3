import * as React from 'react';
import { Pressable } from 'react-native';
import * as Slot from '@rn-primitives/slot';
import { cn } from '../../utils';
import { inputRootVariants, inputTextVariants } from './styles';
import { InputContextProvider, useInputContext } from './context';
import { InputIcon, InputSpinner, InputText } from './Input.shared';
import { toWebProps, getInputAccessibilityProps, handleFocus } from './utils';
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
            readOnly && 'cursor-text',
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
  const { multiline, onFocus, onBlur, rows, numberOfLines, ...otherProps } = fieldProps;

  // Transform props for web
  const webProps = toWebProps(otherProps);
  const accessibilityProps = getInputAccessibilityProps(fieldProps);

  // Ensure autoCorrect is a string value
  if ('autoCorrect' in webProps) {
    webProps.autoCorrect = webProps.autoCorrect ? 'on' : 'off';
  }

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
    <textarea {...commonProps} rows={rows ?? numberOfLines} />
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