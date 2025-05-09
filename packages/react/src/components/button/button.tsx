import * as React from 'react';
import { Pressable } from 'react-native';
import * as Slot from '@rn-primitives/slot';
import { cn } from '../../utils';
import { buttonVariants, buttonTextVariants } from './styles';
import { ButtonContextProvider } from './context';
import { ButtonIcon, ButtonSpinner, ButtonText } from './button.shared';
import { getNativeAccessibilityProps } from './utils';
import type { ButtonRootProps } from './types';

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
    children,
    onPressIn,
    onPressOut,
    onHoverIn,
    onHoverOut,
    ...props
  }, ref) => {
    const [isPressed, setIsPressed] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);
    const effectiveColor = (isPressed || isHovered) && accentColor ? accentColor : color;
    const buttonRef = React.useRef<React.ElementRef<typeof Pressable>>(null);

    React.useImperativeHandle(
      ref,
      () => {
        if (!buttonRef.current) {
          return {} as React.ElementRef<typeof Pressable>;
        }
        return buttonRef.current;
      },
      [buttonRef.current]
    );

    const contextValue = React.useMemo(() => ({
      variant,
      color: effectiveColor,
      size,
      disabled: disabled || loading,
      loading,
      isPressed,
      isHovered,
      setPressed: setIsPressed,
      setHovered: setIsHovered,
      buttonRef,
      buttonProps: props,
    }), [variant, effectiveColor, size, disabled, loading, isPressed, isHovered, props]);

    const Component = asChild ? Slot.Pressable : Pressable;

    const handlePressIn = React.useCallback((event: any) => {
      setIsPressed(true);
      onPressIn?.(event);
    }, [onPressIn]);

    const handlePressOut = React.useCallback((event: any) => {
      setIsPressed(false);
      onPressOut?.(event);
    }, [onPressOut]);

    const handleHoverIn = React.useCallback((event: any) => {
      setIsHovered(true);
      onHoverIn?.(event);
    }, [onHoverIn]);

    const handleHoverOut = React.useCallback((event: any) => {
      setIsHovered(false);
      onHoverOut?.(event);
    }, [onHoverOut]);

    const accessibilityProps = getNativeAccessibilityProps({ disabled, loading });

    return (
      <ButtonContextProvider.Provider value={contextValue}>
        <Component
          className={cn(
            buttonVariants({ variant, color: effectiveColor, size, disabled: disabled || loading }),
            className,
          )}
          ref={ref}
          disabled={disabled || loading}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onHoverIn={handleHoverIn}
          onHoverOut={handleHoverOut}
          {...accessibilityProps}
          {...props}
        >
          {children}
        </Component>
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