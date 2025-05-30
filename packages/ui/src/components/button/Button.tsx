import * as React from 'react';
import { Pressable } from 'react-native';
import * as Slot from '@rn-primitives/slot';
import { cn } from '../../utils';
import { buttonVariants, buttonTextVariants } from './styles';
import { ButtonContextProvider } from './context';
import { ButtonIcon, ButtonSpinner, ButtonText } from './Button.shared';
import { getNativeButtonAccessibilityProps, createPressHandlers, toNativeProps } from './utils';
import type { ButtonRootProps } from './types';
import { TextClassContext } from '../text';

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
    const accessibilityProps = getNativeButtonAccessibilityProps({ disabled, loading });

    // Handle press events
    const { handlePressIn, handlePressOut } = React.useMemo(
      () => createPressHandlers(
        setIsPressed,
        nativeProps.onPressIn,
        nativeProps.onPressOut
      ),
      [setIsPressed, nativeProps.onPressIn, nativeProps.onPressOut]
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
            {...nativeProps}
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