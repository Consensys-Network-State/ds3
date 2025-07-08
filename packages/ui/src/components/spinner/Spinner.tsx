import * as React from 'react';
import { LoaderCircle } from 'lucide-react-native';
import Animated, { 
  withRepeat, 
  withTiming, 
  useSharedValue, 
  useAnimatedStyle,
  Easing
} from 'react-native-reanimated';
import { Icon } from '../icon';
import type { SpinnerRootProps } from './types';
import { SpinnerContextProvider } from './context';
import { SpinnerFallback } from './Spinner.shared';
import { View } from 'react-native';

const getDuration = (speed: SpinnerRootProps['speed']) => {
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

const createSpinnerIcon = (ref: React.Ref<any>, spinner: React.ComponentType<any> | undefined, otherProps: any) => (
  <Icon
    ref={ref}
    icon={spinner || LoaderCircle}
    {...otherProps}
  />
);

const SpinnerRoot = React.forwardRef<React.ElementRef<typeof Icon>, SpinnerRootProps>(
  (props, ref) => {
    const {
      speed = 'normal',
      direction = 'clockwise',
      spin = true,
      spinner,
      fallback,
      children,
      className,
      ...otherProps
    } = props;

    const contextValue = React.useMemo(() => ({ 
      speed, 
      direction, 
      spin, 
      spinner,
      fallback 
    }), [speed, direction, spin, spinner, fallback]);

    const rotation = useSharedValue(0);

    React.useEffect(() => {
      if (!spin) {
        rotation.value = 0;
        return;
      }

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
    }, [speed, direction, spin, rotation]);

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ rotate: `${rotation.value}deg` }]
    }), [rotation]);

    let content;
    
    // Handle children with Spinner.Fallback when spinning
    if (children && spin) {
      const hasSpinnerFallback = React.Children.toArray(children).some(
        child => React.isValidElement(child) && child.type === SpinnerFallback
      );
      
      if (hasSpinnerFallback) {
        content = createSpinnerIcon(ref, spinner, otherProps);
      } else {
        content = children;
      }
    }
    // Handle children when not spinning
    else if (children) {
      content = children;
    }
    // Handle fallback when not spinning
    else if (!spin && fallback) {
      content = createSpinnerIcon(ref, fallback, otherProps);
    }
    // Handle spinning with no children
    else if (spin) {
      content = createSpinnerIcon(ref, spinner, otherProps);
    }
    // Default: render nothing
    else {
      content = null;
    }

    return (
      <SpinnerContextProvider.Provider value={contextValue}>
        <View className="web:inline-block w-fit h-fit flex items-center justify-center">
          {spin ? (
            <Animated.View style={animatedStyle}>
              {content}
            </Animated.View>
          ) : (
            content
          )}
        </View>
      </SpinnerContextProvider.Provider>
    );
  }
);

SpinnerRoot.displayName = 'Spinner';

const Spinner = Object.assign(SpinnerRoot, {
  Fallback: SpinnerFallback,
});

export { Spinner }; 