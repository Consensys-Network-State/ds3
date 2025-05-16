import { cva } from 'class-variance-authority';
import { forwardRef, ElementRef } from 'react';
import { Button, type ButtonRootProps, type ButtonIconProps } from '../button';
import { cn } from '../../utils';

const iconButtonVariants = cva('flex items-center justify-center', {
  variants: {
    size: {
      sm: 'p-[9px]',
      md: 'p-[12px]',
      lg: 'p-[15px]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const iconSizeVariants = cva('', {
  variants: {
    size: {
      sm: 'h-3.5 w-3.5',
      md: 'h-4 w-4',
      lg: 'h-[18px] w-[18px]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

interface IconButtonProps extends Omit<ButtonRootProps, 'asChild'> {
  icon: ButtonIconProps['icon'];
}

const IconButton = forwardRef<ElementRef<typeof Button>, IconButtonProps>(
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

export { IconButton, type IconButtonProps };