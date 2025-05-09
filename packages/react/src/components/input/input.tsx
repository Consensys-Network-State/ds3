import * as React from 'react';
import { TextInput, Pressable } from 'react-native';
import * as Slot from '@rn-primitives/slot';
import { Icon } from '../icon';
import { Spinner } from '../spinner';
import { Text } from '../text';
import { cn } from '../../utils';
import { inputRootVariants, inputIconVariants, inputTextVariants } from './styles';
import { InputContextProvider, useInputContext } from './context';
import type {
  InputRootProps,
  InputFieldProps,
  InputIconProps,
  InputSpinnerProps,
  InputTextProps,
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
  const { multiline, onFocus, onBlur, accessibilityState, ...otherProps } = fieldProps;

  return (
    <TextInput
      ref={inputRef}
      className={cn(
        'flex-1 bg-transparent p-0 outline-none text-neutral-a12 placeholder:text-neutral-a10',
        inputTextVariants({ size }),
        disabled && 'web:cursor-not-allowed',
        readOnly && 'web:cursor-text',
        multiline && 'native:min-h-[80px]',
        className
      )}
      multiline={multiline}
      textAlignVertical={multiline ? 'top' : 'center'}
      editable={!disabled && !readOnly}
      selectTextOnFocus={readOnly}
      onFocus={(e) => {
        setFocused?.(true);
        onFocus?.(e);
      }}
      onBlur={(e) => {
        setFocused?.(false);
        onBlur?.(e);
      }}
      aria-multiline={multiline}
      aria-disabled={disabled}
      aria-busy={loading}
      accessibilityState={{
        ...accessibilityState,
        disabled,
        busy: loading,
      }}
      {...otherProps}
    />
  );
};
InputField.displayName = 'InputField';

const InputIcon = React.forwardRef<React.ElementRef<typeof Icon>, InputIconProps>(
  ({ className, icon, ...props }, ref) => {
    const context = useInputContext();

    return (
      <Icon
        ref={ref}
        icon={icon}
        className={cn(
          inputIconVariants({
            color: context.color,
            size: context.size,
            disabled: context.disabled,
          }),
          className
        )}
        {...props}
      />
    );
  }
);
InputIcon.displayName = 'InputIcon';

const InputSpinner = React.forwardRef<React.ElementRef<typeof Icon>, InputSpinnerProps>(
  (props, ref) => {
    const {
      className,
      icon,
      loadingIcon,
      ...otherProps
    } = props;

    const context = useInputContext();

    if (icon && !context.loading) {
      return (
        <Icon
          ref={ref}
          icon={icon}
          className={cn(
            inputIconVariants({
              color: context.color,
              size: context.size,
              disabled: context.disabled,
            }),
            className
          )}
          {...otherProps}
        />
      );
    }

    if (context.loading) {
      return (
        <Spinner
          ref={ref}
          icon={loadingIcon}
          className={cn(
            inputIconVariants({
              color: context.color,
              size: context.size,
              disabled: context.disabled,
            }),
            'animate-spin origin-center',
            className
          )}
          {...otherProps}
        />
      );
    }

    return null;
  }
);
InputSpinner.displayName = 'InputSpinner';

const InputText = React.forwardRef<React.ElementRef<typeof Text>, InputTextProps>(
  (props, ref) => (
    <Text
      ref={ref}
      {...props}
    />
  )
);
InputText.displayName = 'InputText';

const Input = Object.assign(InputRoot, {
  Field: InputField,
  Text: InputText,
  Icon: InputIcon,
  Spinner: InputSpinner,
});

export { Input }; 