import { cssInterop } from 'nativewind';
import * as React from 'react';
import { cn } from '../../utils';
import { iconVariants } from './styles';
import type { IconProps } from './types';
import { IconContextProvider } from './context';

const Icon = React.forwardRef<SVGSVGElement, IconProps>(({
  icon,
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

  // Handle arbitrary numeric sizes with style property
  const iconStyle = typeof mergedProps.size === 'number' 
    ? { width: mergedProps.size, height: mergedProps.size, ...style }
    : style;

  return (
    <StyledIcon
      role="img"
      accessibilityRole="image"
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