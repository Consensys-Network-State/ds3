import * as React from 'react';
import * as CheckboxPrimitive from '@rn-primitives/checkbox';
import { Check, Minus } from 'lucide-react-native';
import { cn } from '../../utils';
import { Icon } from '../icon';
import { checkboxRootVariants, checkboxIconVariants } from './styles';
import { CheckboxContext, useCheckboxContext } from './context';
import type { CheckboxRootProps, CheckboxIconProps } from './types';

const CheckboxIcon = React.forwardRef<React.ElementRef<typeof Icon>, CheckboxIconProps>(
  ({ className, icon, ...props }, ref) => {
    const context = useCheckboxContext();

    return (
      <CheckboxPrimitive.Indicator className="flex items-center justify-center h-full w-full">
        <Icon
          ref={ref}
          icon={icon}
          className={cn(
            className,
            checkboxIconVariants({
              size: context.size,
              variant: context.variant,
              color: context.color,
              checked: context.checked
            })
          )}
          {...props}
        />
      </CheckboxPrimitive.Indicator>
    );
  }
);
CheckboxIcon.displayName = 'CheckboxIcon';

const CheckboxRoot = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxRootProps
>(({
  className,
  variant,
  color,
  size = 'md',
  checked,
  disabled,
  children,
  indeterminate,
  ...props
}, ref) => {
  const contextValue = React.useMemo(() => ({
    size,
    variant,
    color,
    checked,
    indeterminate
  }), [size, variant, color, checked, indeterminate]);

  return (
    <CheckboxContext.Provider value={contextValue}>
      <CheckboxPrimitive.Root
        ref={ref}
        checked={checked}
        disabled={disabled}
        className={cn(
          checkboxRootVariants({ variant, color, size, checked, disabled }),
          className
        )}
        {...props}
      >
        {children || (
          <CheckboxIcon
            icon={indeterminate ? Minus : Check}
          />
        )}
      </CheckboxPrimitive.Root>
    </CheckboxContext.Provider>
  );
});
CheckboxRoot.displayName = 'Checkbox';

const Checkbox = Object.assign(CheckboxRoot, {
  Icon: CheckboxIcon,
});

export { Checkbox };