import * as React from 'react'
import Animated, {
  useAnimatedStyle,
  withRepeat,
  withTiming,
  useSharedValue,
  withSpring,
  Easing,
  WithSpringConfig
} from 'react-native-reanimated';
import { LoaderCircle } from 'lucide-react-native';
import { Icon, IconProps } from './Icon';

export interface SpinnerProps extends Omit<IconProps, 'icon'> {
  icon?: React.ComponentType<any>;
  duration?: number;
  easing?: typeof Easing.linear;
  repeat?: number;
  springConfig?: WithSpringConfig;
  useSpring?: boolean;
  autoPlay?: boolean;
  direction?: 'clockwise' | 'counterclockwise';
}

const Spinner = React.forwardRef<React.ElementRef<typeof Icon>, SpinnerProps>(
  (props, ref) => {
    const {
      icon = LoaderCircle,
      duration = 1000,
      easing = Easing.linear,
      repeat = -1,
      springConfig = {
        damping: 10,
        stiffness: 100
      },
      useSpring = false,
      direction = 'clockwise',
      ...otherProps
    } = props;

    const rotation = useSharedValue(0);

    React.useEffect(() => {
      rotation.value = 0;
      rotation.value = withRepeat(
        useSpring
          ? withSpring(direction === 'clockwise' ? 360 : -360, springConfig)
          : withTiming(
            direction === 'clockwise' ? 360 : -360,
            {
              duration,
              easing
            }
          ),
        repeat
      );
    }, [duration, easing, repeat, direction, useSpring]);

    const animatedStyle = useAnimatedStyle(() => {
      return {
        transform: [{ rotate: `${rotation.value}deg` }]
      };
    }, [rotation]);

    return (
      <Animated.View style={animatedStyle}>
        <Icon
          ref={ref}
          icon={icon}
          {...otherProps}
        />
      </Animated.View>
    );
  });

Spinner.displayName = 'Spinner';

export { Spinner };