import * as React from 'react';
import * as SwitchPrimitives from '@rn-primitives/switch';
import { cn } from '../../utils';
import { Icon } from '../icon';
import { switchThumbVariants, switchIconVariants } from './styles';
import type { SwitchThumbProps } from './types';

export const SwitchThumb = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Thumb>,
  SwitchThumbProps
>(({ className, size, variant, color, checked, icon, ...props }, ref) => (
  <SwitchPrimitives.Thumb
    ref={ref}
    className={cn(switchThumbVariants({ size, variant, color, checked }), className)}
    {...props}
  >
    {icon && (
      <Icon
        icon={icon}
        className={cn(
          switchIconVariants({ size, variant, color, checked }),
        )}
      />
    )}
  </SwitchPrimitives.Thumb>
));
SwitchThumb.displayName = 'SwitchThumb'; 