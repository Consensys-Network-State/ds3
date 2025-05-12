import * as React from 'react';
import * as SwitchPrimitives from '@rn-primitives/switch';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';
import { cn } from '../../utils';
import { switchRootVariants } from './styles';
import { SwitchThumb } from './switch.shared';
import type { SwitchRootProps } from './types';

const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitives.Root>, SwitchRootProps>(
  ({ className, variant, color, size = 'md', checked, disabled, thumbIcon, ...props }, ref) => {
    const TRANSLATE_X_MAP = {
      sm: 21,
      md: 36,
      lg: 46,
    } as const;

    const translateX = useDerivedValue(() => {
      return withSpring(
        checked ? TRANSLATE_X_MAP[size as keyof typeof TRANSLATE_X_MAP] : 3,
        {
          mass: 0.3,
          damping: 15,
          stiffness: 180,
          restSpeedThreshold: 0.1,
        }
      );
    }, [checked]);

    const animatedThumbStyle = useAnimatedStyle(() => ({
      transform: [{ translateX: translateX.value }],
    }), [translateX]);

    return (
      <SwitchPrimitives.Root
        ref={ref}
        checked={checked}
        disabled={disabled}
        className={cn(switchRootVariants({ variant, color, size, checked, disabled }), className)}
        {...props}
      >
        <Animated.View style={animatedThumbStyle}>
          <SwitchThumb
            size={size}
            color={color}
            variant={variant}
            checked={checked}
            icon={thumbIcon}
          />
        </Animated.View>
      </SwitchPrimitives.Root>
    );
  }
);
Switch.displayName = 'Switch';

export { Switch };