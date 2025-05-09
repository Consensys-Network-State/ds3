import * as React from 'react';
import Animated, { 
  FadeInDown, 
  FadeIn, 
  FadeOut, 
  SlideInDown, 
  SlideOutDown,
  FadeOutDown 
} from 'react-native-reanimated';
import type { AnimateProps } from './types';

export const Animate = React.forwardRef<React.ElementRef<typeof Animated.View>, AnimateProps>(
  ({ 
    children, 
    type = 'fadeDown',
    duration = 200,
    delay = 0,
    show = true,
    ...props
  }, ref) => {
    const getEnterAnimation = () => {
      switch (type) {
        case 'fade':
          return FadeIn.duration(duration).delay(delay);
        case 'fadeDown':
          return FadeInDown.duration(duration).delay(delay);
        case 'slideDown':
          return SlideInDown.duration(duration).delay(delay);
        default:
          return FadeInDown.duration(duration).delay(delay);
      }
    };

    const getExitAnimation = () => {
      switch (type) {
        case 'fade':
          return FadeOut.duration(duration);
        case 'fadeDown':
          return FadeOutDown.duration(duration);
        case 'slideDown':
          return SlideOutDown.duration(duration);
        default:
          return FadeOutDown.duration(duration);
      }
    };

    if (!show) return null;

    return (
      <Animated.View 
        ref={ref}
        entering={getEnterAnimation()}
        exiting={getExitAnimation()}
        {...props}
      >
        {children}
      </Animated.View>
    );
  }
); 