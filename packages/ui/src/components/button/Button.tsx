import * as React from 'react';
import { Pressable } from 'react-native';
import * as Slot from '@rn-primitives/slot';
import { cn } from '../../utils';
import { buttonVariants, buttonTextVariants } from './styles';
import { ButtonContextProvider } from './context';
import { ButtonIcon, ButtonSpinner, ButtonText } from './Button.shared';
import { getNativeButtonAccessibilityProps } from './utils';
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
    children,
    ...props
  }, ref) => {
    const [isPressed, setIsPressed] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);
    const effectiveColor = (isPressed || isHovered) && accentColor ? accentColor : color;

    const accessibilityProps = getNativeButtonAccessibilityProps({ disabled, loading });

    const contextValue = React.useMemo(() => ({
      variant,
      color: effectiveColor,
      size,
      disabled: disabled || loading,
      loading,
      isPressed,
      setPressed: setIsPressed,
      buttonProps: props,
    }), [variant, effectiveColor, size, disabled, loading, isPressed, props]);

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
            onPressIn={(e) => {
              setIsPressed(true);
              props.onPressIn?.(e);
            }}
            onPressOut={(e) => {
              setIsPressed(false);
              props.onPressOut?.(e);
            }}
            onHoverIn={(e) => {
              setIsHovered(true);
              props.onHoverIn?.(e);
            }}
            onHoverOut={(e) => {
              setIsHovered(false);
              props.onHoverOut?.(e);
            }}
            {...accessibilityProps}
            {...props}
          >
            {typeof children === 'string' ? <ButtonText>{children}</ButtonText> : children}
          </Component>
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