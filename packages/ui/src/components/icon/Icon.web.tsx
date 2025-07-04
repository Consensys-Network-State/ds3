import * as React from 'react';
import { View } from 'react-native';
import { cn } from '../../utils';
import { iconVariants } from './styles';
import type { IconProps } from './types';

const Icon = React.forwardRef<SVGSVGElement, IconProps>(({
  icon: IconComponent,
  color,
  size,
  className,
  style,
  hover,
  spectrum,
  ...otherProps
}, ref) => {
  // Handle arbitrary numeric sizes with style property
  const iconStyle = typeof size === 'number' 
    ? { width: size, height: size, ...style }
    : style;

  // If hover is enabled, wrap in a container View
  if (hover) {
    return (
      <View className="inline-block group">
        <IconComponent
          role="img"
          ref={ref}
          className={cn(iconVariants({ color, size: typeof size === 'string' ? size : undefined, hover, spectrum }), className)}
          style={iconStyle}
          {...otherProps}
        />
      </View>
    );
  }

  return (
    <IconComponent
      role="img"
      ref={ref}
      className={cn(iconVariants({ color, size: typeof size === 'string' ? size : undefined, hover, spectrum }), className)}
      style={iconStyle}
      {...otherProps}
    />
  );
});

Icon.displayName = 'Icon';

export { Icon }; 