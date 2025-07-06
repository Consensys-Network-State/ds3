import * as React from 'react';
import { Pressable } from 'react-native';
import { cn } from '../../utils';
import { buttonVariants, buttonIconVariants, buttonTextVariants } from './styles';
import { ButtonContextProvider } from './context';
import { ButtonIcon, ButtonSpinner, ButtonText } from './Button.shared';
import { getNativeButtonAccessibilityProps } from './utils';
import type { ButtonRootProps } from './types';
import { Surface } from '../surface';
import { Text } from '../text';

const ButtonRoot = React.forwardRef<React.ElementRef<typeof Pressable>, ButtonRootProps>(
  ({
    className,
    variant,
    color,
    toColor,
    size,
    disabled = false,
    loading = false,
    square = false,
    asChild = false,
    children,
    ...props
  }, ref) => {
    const accessibilityProps = getNativeButtonAccessibilityProps({ disabled, loading });

    const contextValue = React.useMemo(() => ({
      variant,
      color,
      size,
      disabled: disabled || loading,
      loading,
      square,
      buttonProps: props,
    }), [variant, color, size, disabled, loading, square, props]);

    return (
      <ButtonContextProvider.Provider value={contextValue}>
        <Surface
          ref={ref}
          pressable
          variant={variant}
          color={color}
          toColor={toColor}
          disabled={disabled || loading}
          iconContext={{ className: buttonIconVariants({ size }) }}
          textContext={{ className: buttonTextVariants({ size }) }}
          className={cn(
            buttonVariants({ size, square }),
            className,
          )}
          {...accessibilityProps}
          {...props}
        >
          {typeof children === 'string' ? <Text>{children}</Text> : children}
        </Surface>
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