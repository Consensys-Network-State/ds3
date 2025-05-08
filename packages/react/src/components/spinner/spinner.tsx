import * as React from 'react';
import Animated, {
  useAnimatedStyle,
  withRepeat,
  withTiming,
  useSharedValue,
  Easing,
} from 'react-native-reanimated';
import { LoaderCircle } from 'lucide-react-native';
import { Icon } from '../icon';
import type { SpinnerProps } from './types';

const getDuration = (speed: SpinnerProps['speed']) => {
  switch (speed) {
    case 'slow':
      return 2000;
    case 'fast':
      return 500;
    default:
      return 1000;
  }
};

const Spinner = React.forwardRef<React.ElementRef<typeof Icon>, SpinnerProps>(
  (props, ref) => {
    const {
      icon = LoaderCircle,
      speed = 'normal',
      direction = 'clockwise',
      ...otherProps
    } = props;

    const rotation = useSharedValue(0);

    React.useEffect(() => {
      rotation.value = 0;
      rotation.value = withRepeat(
        withTiming(
          direction === 'clockwise' ? 360 : -360,
          {
            duration: getDuration(speed),
            easing: Easing.linear,
          }
        ),
        -1
      );
    }, [speed, direction]);

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