import { cssInterop } from 'nativewind';
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils';

const iconVariants = cva('', {
  variants: {
    color: {
      neutral: 'text-neutral-a11',
      primary: 'text-primary-a11',
      secondary: 'text-secondary-a11',
      error: 'text-error-a11',
      warning: 'text-warning-a11',
      success: 'text-success-a11',
    },
    size: {
      sm: 'h-3 w-3',
      md: 'h-4 w-4',
      lg: 'h-5 w-5',
    }
  },
  defaultVariants: {
    color: 'neutral',
    size: 'md'
  }
});

export type IconColors = NonNullable<VariantProps<typeof iconVariants>['color']>;
export type IconSizes = NonNullable<VariantProps<typeof iconVariants>['size']>;

export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'color' | 'size'>, VariantProps<typeof iconVariants> {
  icon: React.ComponentType<any>;
  className?: string;
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(({
 icon,
 color,
 size,
 className,
 ...otherProps
}, ref) => {
  const StyledIcon = cssInterop(icon, {
    className: {
      target: 'style',
      nativeStyleToProp: {
        height: true,
        color: true,
        opacity: true,
      },
    },
  });

  return (
    <StyledIcon
      role="img"
      accessibilityRole="image"
      ref={ref}
      className={cn(iconVariants({ color, size }), className)}
      {...otherProps}
    />
  );
});

Icon.displayName = 'Icon';

export { Icon, iconVariants };