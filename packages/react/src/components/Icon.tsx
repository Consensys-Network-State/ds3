import { cssInterop } from 'nativewind';
import { forwardRef, ComponentType, SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  icon: ComponentType<any>;
  className?: string;
  size?: number | string;
}

const Icon = forwardRef<SVGSVGElement, IconProps>(({ icon, ...otherProps }, ref) => {
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

  return <StyledIcon ref={ref} {...otherProps} />;
});

Icon.displayName = 'Icon';

export { Icon };
