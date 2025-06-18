import * as React from 'react';
import * as Slot from '@radix-ui/react-slot';
import { ButtonRootProps } from './types';
import { toWebProps, getWebButtonAccessibilityProps, createPressHandlers, createHoverHandlers } from './utils';
import { buttonVariants, buttonTextVariants } from './styles';
import { ButtonContextProvider } from './context';
import { ButtonIcon, ButtonSpinner, ButtonText } from './Button.shared';
import { cn } from '../../utils';
import { TextClassContext } from '../text';
import { WebClickEvent } from '../../types';

export const ButtonRoot = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonRootProps>(
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

    const webProps = toWebProps(props);
    const accessibilityProps = getWebButtonAccessibilityProps({ disabled, loading });

    // Handle press events
    const { handlePressIn, handlePressOut } = React.useMemo(
      () => createPressHandlers<WebClickEvent>(
        setIsPressed,
        (e) => webProps.onMouseDown?.(e as any),
        (e) => webProps.onMouseUp?.(e as any)
      ),
      [setIsPressed, webProps.onMouseDown, webProps.onMouseUp]
    );

    // Handle hover events (web-only)
    const { handleHoverIn, handleHoverOut } = React.useMemo(
      () => createHoverHandlers(
        setIsHovered,
        (e) => webProps.onMouseEnter?.(e as any),
        (e) => webProps.onMouseLeave?.(e as any)
      ),
      [setIsHovered, webProps.onMouseEnter, webProps.onMouseLeave]
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

    // Extract type prop for special handling (TypeScript requires literal type 'button'|'submit'|'reset')
    const { type, ...restWebProps } = webProps;

    // Handle button type safely:
    // - Regular buttons (<button>) need a valid type attribute
    // - Slot components (asChild=true) should not force type attribute on custom elements
    const safeType = !asChild 
      ? (type === 'submit' || type === 'reset' ? type : 'button') as 'button' | 'submit' | 'reset' 
      : undefined;

    const sharedProps = {
      className: cn(
        buttonVariants({ variant, color: effectiveColor, size, disabled: disabled || loading }),
        className
      ),
      ...accessibilityProps,
    };

    return (
      <ButtonContextProvider.Provider value={contextValue}>
        <TextClassContext.Provider value={buttonTextVariants({ variant, color: effectiveColor, size })}>
          {asChild ? (
            <Slot.Root
              ref={ref}
              {...sharedProps}
              {...webProps}
            />
          ) : (
            <button
              ref={ref as React.RefObject<HTMLButtonElement>}
              disabled={disabled || loading}
              type={safeType}
              onMouseDown={handlePressIn as any}
              onMouseUp={handlePressOut as any}
              onMouseEnter={handleHoverIn as any}
              onMouseLeave={handleHoverOut as any}
              {...sharedProps}
              {...restWebProps as any}
            />
          )}
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