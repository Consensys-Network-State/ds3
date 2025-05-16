import * as React from 'react';
import { cn } from '../../utils';
import { iconVariants } from './styles';
import type { IconProps } from './types';

const Icon = React.forwardRef<SVGSVGElement, IconProps>(({
  icon: IconComponent,
  color,
  size,
  className,
  ...otherProps
}, ref) => {
  return (
    <IconComponent
      role="img"
      ref={ref}
      className={cn(iconVariants({ color, size }), className)}
      {...otherProps}
    />
  );
});

Icon.displayName = 'Icon';

export { Icon }; 