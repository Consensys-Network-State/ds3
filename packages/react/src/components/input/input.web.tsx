import * as React from 'react';
import { Pressable } from 'react-native';
import { useAugmentedRef } from '@rn-primitives/hooks';
import * as Slot from '@rn-primitives/slot';
import { Icon } from '../icon';
import { Spinner } from '../spinner';
import { Text } from '../Text';
import { cn } from '../../utils';
import { inputRootVariants, inputIconVariants, inputTextVariants } from './styles';
import type {
  InputContext,
  InputRootProps,
  InputFieldProps,
  InputIconProps,
  InputSpinnerProps,
  InputTextProps,
} from './types';

const InputContext = React.createContext<InputContext | undefined>(undefined);

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
    const augmentedRef = useAugmentedRef({ ref });
    const [focused, setFocused] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);

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
      inputRef: augmentedRef,
      fieldProps
    }), [variant, effectiveColor, size, disabled, loading, readOnly, focused, fieldProps]);

    const Component = asChild ? Slot.Pressable : Pressable;

    const handlePress = () => {
      if (!disabled && !loading && augmentedRef.current) {
        augmentedRef.current.focus();
      }
    };

    return (
      <InputContext.Provider value={contextValue}>
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
      </InputContext.Provider>
    );
  }
);
InputRoot.displayName = 'Input';

const InputField = ({ className }: InputFieldProps) => {
  const context = React.useContext(InputContext);
  if (!context) {
    throw new Error('InputField must be used within an Input');
  }

  const { fieldProps = {}, setFocused, disabled, readOnly, size, loading, inputRef } = context;
  const { multiline, onFocus, onBlur, accessibilityState, ...otherProps } = fieldProps;

  return (
    <input
      ref={inputRef}
      className={cn(
        'flex-1 bg-transparent p-0 outline-none text-neutral-a12 placeholder:text-neutral-a10',
        inputTextVariants({ size }),
        disabled && 'cursor-not-allowed',
        readOnly && 'cursor-text',
        className
      )}
      disabled={disabled}
      readOnly={readOnly}
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
      {...otherProps}
    />
  );
};
InputField.displayName = 'InputField';

const InputIcon = React.forwardRef<React.ElementRef<typeof Icon>, InputIconProps>(
  ({ className, icon, ...props }, ref) => {
    const context = React.useContext(InputContext);
    if (!context) {
      throw new Error('InputIcon must be used within an Input');
    }

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

    const context = React.useContext(InputContext);
    if (!context) {
      throw new Error('InputSpinner must be used within an Input');
    }

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