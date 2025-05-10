import * as React from 'react';
import { ButtonRootProps } from './types';
import { toWebProps, getAccessibilityProps } from './utils';
import { buttonVariants, buttonTextVariants } from './styles';
import { ButtonContextProvider } from './context';
import { ButtonIcon, ButtonSpinner, ButtonText } from './button.shared';
import { cn } from '../../utils';
import { TextClassContext } from '../text';

export const ButtonRoot = React.forwardRef<HTMLButtonElement, ButtonRootProps>(
  ({ className, variant, color, accentColor, size, disabled, loading, children, onPressIn, onPressOut, onHoverIn, onHoverOut, ...props }, ref) => {
    const [isPressed, setIsPressed] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);
    const effectiveColor = (isPressed || isHovered) && accentColor ? accentColor : color;
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    React.useImperativeHandle(
      ref,
      () => {
        if (!buttonRef.current) {
          return {} as HTMLButtonElement;
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

    const handlePressIn = React.useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
      setIsPressed(true);
      onPressIn?.(event as any);
    }, [onPressIn]);

    const handlePressOut = React.useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
      setIsPressed(false);
      onPressOut?.(event as any);
    }, [onPressOut]);

    const handleHoverIn = React.useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
      setIsHovered(true);
      onHoverIn?.(event as any);
    }, [onHoverIn]);

    const handleHoverOut = React.useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
      setIsHovered(false);
      onHoverOut?.(event as any);
    }, [onHoverOut]);

    const webProps = toWebProps(props);
    const accessibilityProps = getAccessibilityProps({ disabled, loading });

    return (
      <ButtonContextProvider.Provider value={contextValue}>
        <TextClassContext.Provider value={buttonTextVariants({ variant, color: effectiveColor, size })}>
          <button
            ref={buttonRef}
            type="button"
            className={cn(buttonVariants({ variant, color: effectiveColor, size, disabled: disabled || loading }), className)}
            disabled={disabled || loading}
            onMouseDown={handlePressIn}
            onMouseUp={handlePressOut}
            onMouseEnter={handleHoverIn}
            onMouseLeave={handleHoverOut}
            {...accessibilityProps}
            {...webProps}
          >
            {children}
          </button>
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