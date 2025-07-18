import * as React from 'react';
import { cn } from '../../utils';
import { iconVariants } from './styles';
import type { IconProps } from './types';
import { IconContextProvider } from './context';

const Icon = React.forwardRef<SVGSVGElement, IconProps>(({
  icon: IconComponent,
  color,
  size,
  className,
  style,
  spectrum,
  ...otherProps
}, ref) => {
  const contextProps = React.useContext(IconContextProvider);
  
  // Merge context props with component props (component props take precedence)
  const mergedProps = {
    color: color ?? contextProps?.color,
    spectrum: spectrum ?? contextProps?.spectrum,
    size: size ?? contextProps?.size,
  };

  // Handle arbitrary numeric sizes with style property
  const iconStyle = typeof mergedProps.size === 'number' 
    ? { width: mergedProps.size, height: mergedProps.size, ...style }
    : style;

  return (
    <IconComponent
      role="img"
      ref={ref}
      className={cn(
        iconVariants({ 
          color: mergedProps.color, 
          size: typeof mergedProps.size === 'string' ? mergedProps.size : undefined, 
          spectrum: mergedProps.spectrum 
        }), 
        contextProps?.className,
        className
      )}
      style={iconStyle}
      {...otherProps}
    />
  );
});

Icon.displayName = 'Icon';

export { Icon }; 