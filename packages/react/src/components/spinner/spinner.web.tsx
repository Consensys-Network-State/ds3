import * as React from 'react';
import { LoaderCircle } from 'lucide-react-native';
import { Icon } from '../icon';
import { cn } from '../../utils';
import type { SpinnerProps } from './types';

const Spinner = React.forwardRef<React.ElementRef<typeof Icon>, SpinnerProps>(
  (props, ref) => {
    const {
      icon = LoaderCircle,
      className,
      speed = 'normal',
      direction = 'clockwise',
      ...otherProps
    } = props;

    const getAnimationClass = () => {
      const speedClass = speed === 'slow' ? 'animate-spin-slow' : 
                        speed === 'fast' ? 'animate-spin-fast' : 
                        'animate-spin-normal';
      return direction === 'counterclockwise' ? 'animate-spin-reverse' : speedClass;
    };

    return (
      <Icon
        ref={ref}
        icon={icon}
        className={cn(getAnimationClass(), 'origin-center', className)}
        {...otherProps}
      />
    );
  });

Spinner.displayName = 'Spinner';

export { Spinner }; 