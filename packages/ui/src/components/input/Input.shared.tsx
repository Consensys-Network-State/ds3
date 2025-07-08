import * as React from 'react';
import { Icon } from '../icon';
import { Spinner } from '../spinner';
import { Text } from '../text';
import { cn } from '../../utils';
import { inputIconVariants } from './styles';
import { useInputContext } from './context';
import type {
  InputIconProps,
  InputSpinnerProps,
  InputTextProps,
} from './types';

export const InputIcon = React.forwardRef<React.ElementRef<typeof Icon>, InputIconProps>(
  ({ className, icon, ...props }, ref) => {
    const context = useInputContext();

    return (
      <Icon
        ref={ref}
        icon={icon}
        className={cn(
          inputIconVariants({
            color: context.color,
            size: context.size,
            disabled: context.disabled,
          }),
          className
        )}
        {...props}
      />
    );
  }
);
InputIcon.displayName = 'InputIcon';

export const InputSpinner = React.forwardRef<React.ElementRef<typeof Icon>, InputSpinnerProps>(
  (props, ref) => {
    const {
      className,
      icon,
      loadingIcon,
      ...otherProps
    } = props;

    const context = useInputContext();

    if (icon && !context.loading) {
      return (
        <Icon
          ref={ref}
          icon={icon}
          className={cn(
            inputIconVariants({
              color: context.color,
              size: context.size,
              disabled: context.disabled,
            }),
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
          spinner={loadingIcon}
          className={cn(
            inputIconVariants({
              color: context.color,
              size: context.size,
              disabled: context.disabled,
            }),
            'animate-spin origin-center',
            className
          )}
          {...otherProps}
        />
      );
    }

    return null;
  }
);
InputSpinner.displayName = 'InputSpinner';

export const InputText = React.forwardRef<React.ElementRef<typeof Text>, InputTextProps>(
  (props, ref) => (
    <Text
      ref={ref}
      {...props}
    />
  )
);
InputText.displayName = 'InputText'; 