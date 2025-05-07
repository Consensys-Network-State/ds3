import { cssInterop } from 'nativewind';
import * as React from 'react';
import { cn } from '../../utils';
import { iconVariants } from './styles';
import type { IconProps } from './types';

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