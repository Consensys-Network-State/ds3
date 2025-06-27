import * as React from 'react';
import { cn } from '../../utils';
import { iconVariants } from './styles';
import type { IconProps } from './types';

const Icon = React.forwardRef<SVGSVGElement, IconProps>(({
  icon: IconComponent,
  color,
  size,
  className,
  style,
  ...otherProps
}, ref) => {
  // Handle arbitrary numeric sizes with style property
  const iconStyle = typeof size === 'number' 
    ? { width: size, height: size, ...style }
    : style;

  return (
    <IconComponent
      role="img"
      ref={ref}
      className={cn(iconVariants({ color, size: typeof size === 'string' ? size : undefined }), className)}
      style={iconStyle}
      {...otherProps}
    />
  );
});

Icon.displayName = 'Icon';

export { Icon }; 