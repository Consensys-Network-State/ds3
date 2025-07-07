import * as React from 'react';
import { Pressable } from 'react-native';
import { cn } from '../../utils';
import { buttonVariants, buttonIconVariants, buttonTextVariants } from './styles';
import { getNativeButtonAccessibilityProps } from './utils';
import type { ButtonRootProps } from './types';
import { Surface } from '../surface';
import { Text } from '../text';

const ButtonRoot = React.forwardRef<React.ElementRef<typeof Pressable>, ButtonRootProps>(
  ({
    className,
    size,
    disabled = false,
    square = false,
    children,
    ...props
  }, ref) => {
    // TODO: move to surface
    const accessibilityProps = getNativeButtonAccessibilityProps({ disabled });

    return (
      <Surface
        ref={ref}
        pressable
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
    );
  }
);

ButtonRoot.displayName = 'Button';

export { ButtonRoot as Button }; 