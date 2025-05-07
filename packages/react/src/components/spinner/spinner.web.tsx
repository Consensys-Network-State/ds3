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
      ...otherProps
    } = props;

    return (
      <Icon
        ref={ref}
        icon={icon}
        className={cn('animate-spin origin-center', className)}
        {...otherProps}
      />
    );
  });

Spinner.displayName = 'Spinner';

export { Spinner }; 