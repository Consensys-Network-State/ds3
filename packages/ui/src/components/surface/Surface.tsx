import * as React from 'react';
import { Pressable, View } from 'react-native';
import * as Slot from '@rn-primitives/slot';
import { cn } from '../../utils';
import { surfaceVariants, getSurfaceColorProps } from './styles';
import type { SurfaceRootProps } from './types';
import { TextContextProvider } from '../text';
import { IconContextProvider } from '../icon';

const SurfaceRoot = React.forwardRef<any, SurfaceRootProps>(
  ({
    className,
    variant = 'elevated',
    color = 'neutral',
    toColor,
    disabled = false,
    asChild = false,
    pressable = false,
    iconContext: providedIconContext,
    textContext: providedTextContext,
    children,
    ...props
  }, ref) => {
    const [isPressed, setIsPressed] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);
    const effectiveColor = (isPressed || isHovered) && toColor ? toColor : color;
    const colorContext = getSurfaceColorProps(variant || undefined, effectiveColor || undefined);

    const iconContext = { ...colorContext, ...providedIconContext };
    const textContext = { ...colorContext, ...providedTextContext };

    if (pressable) {
      const pressableProps = {
        disabled: disabled,
        accessibilityRole: 'button' as const,
        accessibilityState: {
          disabled,
        },
        onPressIn: (e: any) => {
          setIsPressed(true);
          props.onPressIn?.(e);
        },
        onPressOut: (e: any) => {
          setIsPressed(false);
          props.onPressOut?.(e);
        },
        onHoverIn: (e: any) => {
          setIsHovered(true);
          props.onHoverIn?.(e);
        },
        onHoverOut: (e: any) => {
          setIsHovered(false);
          props.onHoverOut?.(e);
        },
      };

      const Component = asChild ? Slot.Pressable : Pressable;

      return (
        <TextContextProvider.Provider value={textContext}>
          <IconContextProvider.Provider value={iconContext}>
            <Component
              ref={ref}
              className={cn(
                surfaceVariants({ variant, color: effectiveColor, disabled, pressable: true }),
                className,
              )}
              {...pressableProps}
              {...props}
            >
              {children}
            </Component>
          </IconContextProvider.Provider>
        </TextContextProvider.Provider>
      );
    }

    const Component = asChild ? Slot.View : View;

    return (
      <TextContextProvider.Provider value={textContext}>
        <IconContextProvider.Provider value={iconContext}>
          <Component
            ref={ref}
            className={cn(
              surfaceVariants({ variant, color: effectiveColor, disabled, pressable: false }),
              className,
            )}
            {...props}
          >
            {children}
          </Component>
        </IconContextProvider.Provider>
      </TextContextProvider.Provider>
    );
  }
);

SurfaceRoot.displayName = 'Surface';

const Surface = Object.assign(SurfaceRoot, {});

export { Surface }; 