import * as React from 'react';
import type { MouseEvent } from 'react';
import * as Slot from '@radix-ui/react-slot';
import { ButtonRootProps } from './types';
import { toWebProps, getAccessibilityProps, createPressHandlers, createHoverHandlers } from './utils';
import { buttonVariants, buttonTextVariants } from './styles';
import { ButtonContextProvider } from './context';
import { ButtonIcon, ButtonSpinner, ButtonText } from './Button.shared';
import { cn } from '../../utils';
import { TextClassContext } from '../text';
import type { NativePressEvent } from '../../types';
import { GestureResponderEvent } from 'react-native';

export const ButtonRoot = React.forwardRef<HTMLButtonElement, ButtonRootProps>(
  ({
    className,
    variant,
    color,
    accentColor,
    size,
    disabled = false,
    loading,
    asChild = false,
    ...props
  }, ref) => {
    const [isPressed, setIsPressed] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);
    const effectiveColor = (isPressed || isHovered) && accentColor ? accentColor : color;

    const { onPressIn, onPressOut, onHoverIn, onHoverOut, ...restProps } = props;
    const webProps = toWebProps(restProps);
    const accessibilityProps = getAccessibilityProps({ disabled, loading });

    const { handlePressIn, handlePressOut } = React.useMemo(
      () => createPressHandlers(
        setIsPressed,
        onPressIn as ((e: GestureResponderEvent | NativePressEvent) => void) | null,
        onPressOut as ((e: GestureResponderEvent | NativePressEvent) => void) | null
      ),
      [setIsPressed, onPressIn, onPressOut]
    );

    const { handleHoverIn, handleHoverOut } = React.useMemo(
      () => createHoverHandlers(
        setIsHovered,
        onHoverIn as ((e: MouseEvent<Element>) => void) | null,
        onHoverOut as ((e: MouseEvent<Element>) => void) | null
      ),
      [setIsHovered, onHoverIn, onHoverOut]
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
      buttonProps: props,
    }), [variant, effectiveColor, size, disabled, loading, isPressed, isHovered, props]);

    const Component = asChild ? Slot.Root : 'button';

    return (
      <ButtonContextProvider.Provider value={contextValue}>
        <TextClassContext.Provider value={buttonTextVariants({ variant, color: effectiveColor, size })}>
          <Component
            ref={ref}
            type={asChild ? undefined : ('button' as const)}
            className={cn(
              buttonVariants({ variant, color: effectiveColor, size, disabled: disabled || loading }),
              className
            )}
            disabled={disabled || loading}
            onMouseDown={handlePressIn}
            onMouseUp={handlePressOut}
            onMouseEnter={handleHoverIn}
            onMouseLeave={handleHoverOut}
            {...accessibilityProps}
            {...webProps}
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