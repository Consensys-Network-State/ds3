import * as React from 'react';
import { Pressable, GestureResponderEvent } from 'react-native';
import * as Slot from '@rn-primitives/slot';
import { cn } from '../../utils';
import { buttonVariants, buttonTextVariants } from './styles';
import { ButtonContextProvider } from './context';
import { ButtonIcon, ButtonSpinner, ButtonText } from './Button.shared';
import { getNativeAccessibilityProps, createPressHandlers } from './utils';
import type { ButtonRootProps } from './types';
import { TextClassContext } from '../text';
import { toNativeProps } from './utils';
import type { NativePressEvent } from '../../types';

const ButtonRoot = React.forwardRef<React.ElementRef<typeof Pressable>, ButtonRootProps>(
  ({
    className,
    variant,
    color,
    accentColor,
    size,
    disabled = false,
    loading = false,
    asChild = false,
    ...props
  }, ref) => {
    const [isPressed, setIsPressed] = React.useState(false);
    const effectiveColor = isPressed && accentColor ? accentColor : color;

    const nativeProps = toNativeProps(props);
    const accessibilityProps = getNativeAccessibilityProps({ disabled, loading });
    const { onPressIn, onPressOut, ...restNativeProps } = nativeProps;

    const { handlePressIn, handlePressOut } = React.useMemo(
      () => createPressHandlers(
        setIsPressed,
        onPressIn as ((e: GestureResponderEvent | NativePressEvent) => void) | null,
        onPressOut as ((e: GestureResponderEvent | NativePressEvent) => void) | null
      ),
      [setIsPressed, onPressIn, onPressOut]
    );

    const contextValue = React.useMemo(() => ({
      variant,
      color: effectiveColor,
      size,
      disabled: disabled || loading,
      loading,
      isPressed,
      setPressed: setIsPressed,
      buttonProps: nativeProps,
    }), [variant, effectiveColor, size, disabled, loading, isPressed, nativeProps]);

    const Component = asChild ? Slot.Pressable : Pressable;

    return (
      <ButtonContextProvider.Provider value={contextValue}>
        <TextClassContext.Provider value={buttonTextVariants({ variant, color: effectiveColor, size })}>
          <Component
            ref={ref}
            className={cn(
              buttonVariants({ variant, color: effectiveColor, size, disabled: disabled || loading }),
              className,
            )}
            disabled={disabled || loading}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            {...accessibilityProps}
            {...(restNativeProps as React.ComponentProps<typeof Pressable>)}
          />
        </TextClassContext.Provider>
      </ButtonContextProvider.Provider>
    );
  }
);

ButtonRoot.displayName = 'Button';

const Button = Object.assign(ButtonRoot, {
  Text: ButtonText,
  Icon: ButtonIcon,
  Spinner: ButtonSpinner,
});

export { Button }; 