import * as React from 'react';
import * as SwitchPrimitives from '@rn-primitives/switch';
import { cn } from '../../utils';
import { switchRootVariants } from './styles';
import { SwitchThumb } from './Switch.shared';
import type { SwitchRootProps } from './types';

const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitives.Root>, SwitchRootProps>(
  ({ className, variant, color, size, checked = false, disabled, thumbIcon, onCheckedChange = () => {}, ...props }, ref) => (
    <SwitchPrimitives.Root
      ref={ref}
      checked={checked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      className={cn(switchRootVariants({ variant, color, size, checked, disabled }), className)}
      {...props}
    >
      <SwitchThumb
        size={size}
        color={color}
        variant={variant}
        checked={checked}
        icon={thumbIcon}
      />
    </SwitchPrimitives.Root>
  )
);
Switch.displayName = 'Switch';

export { Switch }; 