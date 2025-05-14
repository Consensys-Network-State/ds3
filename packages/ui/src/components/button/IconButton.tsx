import * as React from 'react';
import { Button } from './Button';
import { cn } from '../../utils';
import { iconButtonVariants, iconSizeVariants } from './styles';
import type { IconButtonProps } from './types';

export const IconButton = React.forwardRef<React.ElementRef<typeof Button>, IconButtonProps>(
  (props, ref) => {
    const {
      className,
      icon,
      size = 'md',
      ...buttonProps
    } = props;

    return (
      <Button
        ref={ref}
        className={cn(
          iconButtonVariants({ size }),
          className
        )}
        {...buttonProps}
      >
        <Button.Icon
          icon={icon}
          className={iconSizeVariants({ size })}
        />
      </Button>
    );
  }
);

IconButton.displayName = 'IconButton'; 