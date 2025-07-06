import * as React from 'react';
import { Icon } from '../icon';
import { Spinner } from '../spinner';
import { Text } from '../text';
import { cn } from '../../utils';
import { buttonIconVariants, buttonTextVariants } from './styles';
import { useButtonContext } from './context';
import type {
  ButtonIconProps,
  ButtonSpinnerProps,
  ButtonTextProps,
} from './types';

export const ButtonIcon = React.forwardRef<React.ElementRef<typeof Icon>, ButtonIconProps>(
  ({ className, icon, ...props }, ref) => {
    const context = useButtonContext();

    return (
      <Icon
        ref={ref}
        icon={icon}
        className={cn(
          buttonIconVariants({ size: context.size }),
          className
        )}
        {...props}
      />
    );
  }
);
ButtonIcon.displayName = 'ButtonIcon';

export const ButtonSpinner = React.forwardRef<React.ElementRef<typeof Icon>, ButtonSpinnerProps>(
  (props, ref) => {
    const {
      className,
      icon,
      loadingIcon,
      ...otherProps
    } = props;

    const context = useButtonContext();

    if (icon && !context.loading) {
      return (
        <Icon
          ref={ref}
          icon={icon}
          className={cn(
            buttonIconVariants({ size: context.size }),
            className
          )}
          {...otherProps}
        />
      );
    }

    if (context.loading) {
      return (
        <Spinner
          ref={ref}
          icon={loadingIcon}
          className={cn(
            buttonIconVariants({ size: context.size }),
            className
          )}
          {...otherProps}
        />
      );
    }

    return null;
  }
);
ButtonSpinner.displayName = 'ButtonSpinner';

export const ButtonText = React.forwardRef<React.ElementRef<typeof Text>, ButtonTextProps>(
  ({ className, ...props }, ref) => {
    const context = useButtonContext();
    
    return (
      <Text
        ref={ref}
        className={cn(
          buttonTextVariants({
            size: context.size,
          }),
          className
        )}
        {...props}
      />
    );
  }
);
ButtonText.displayName = 'ButtonText'; 