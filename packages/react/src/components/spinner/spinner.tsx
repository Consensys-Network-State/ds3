import * as React from 'react';
import { LoaderCircle } from 'lucide-react-native';
import Animated, { 
  withRepeat, 
  withTiming, 
  useSharedValue, 
  useAnimatedStyle,
  withSpring,
  Easing
} from 'react-native-reanimated';
import { Icon } from '../icon';
import type { SpinnerProps } from './types';

const getDuration = (speed: SpinnerProps['speed']) => {
  if (typeof speed === 'number') {
    return speed;
  }
  
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
      const config = {
        duration: getDuration(speed),
        easing: Easing.linear,
      };

      rotation.value = withRepeat(
        withTiming(
          direction === 'clockwise' ? 360 : -360,
          config
        ),
        -1,
        false
      );
    }, [speed, direction, rotation]);

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ rotate: `${rotation.value}deg` }]
    }), [rotation]);

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