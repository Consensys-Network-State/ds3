import * as React from 'react';
import * as CheckboxPrimitive from '@rn-primitives/checkbox';
import { Check, Minus } from 'lucide-react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils';
import { Icon } from "./Icon";

const checkboxRootVariants = cva(
  'shrink-0 rounded-md border-2 transition-colors focus:outline-none focus-visible:ring-2 active:ring-2 disabled:cursor-not-allowed disabled:opacity-40',
  {
    variants: {
      variant: {
        solid: 'border-transparent',
        soft: 'border-transparent',
        outline: '',
      },
      color: {
        neutral: 'ring-primary-a7',
        primary: 'ring-primary-a7',
        secondary: 'ring-secondary-a7',
        error: 'ring-error-a7',
        warning: 'ring-warning-a7',
        success: 'ring-success-a7',
      },
      size: {
        sm: 'h-5 w-5',
        md: 'h-6 w-6',
        lg: 'h-7 w-7',
      },
      checked: {
        true: '',
        false: '',
      },
      disabled: {
        true: 'opacity-40 web:cursor-not-allowed web:!pointer-events-auto focus:ring-0 active:ring-0',
        false: '',
      },
    },
    compoundVariants: [
      // Common - Unchecked states
      { variant: 'solid', checked: false, class: 'bg-neutral-7 hover:bg-neutral-8 ring-neutral-a7' },
      { variant: 'soft', checked: false, class: 'bg-neutral-a3 hover:bg-neutral-a4 ring-neutral-a7' },
      { variant: 'outline', checked: false, class: 'border-neutral-a7 hover:border-neutral-a8 ring-neutral-a7' },

      // Solid variant - Checked states
      { variant: 'solid', color: ['neutral', 'primary'], checked: true, class: 'bg-primary-9 hover:bg-primary-10' },
      { variant: 'solid', color: 'secondary', checked: true, class: 'bg-secondary-9 hover:bg-secondary-10' },
      { variant: 'solid', color: 'error', checked: true, class: 'bg-error-9 hover:bg-error-10' },
      { variant: 'solid', color: 'warning', checked: true, class: 'bg-warning-9 hover:bg-warning-10' },
      { variant: 'solid', color: 'success', checked: true, class: 'bg-success-9 hover:bg-success-10' },

      // Soft variant - Checked states
      { variant: 'soft', color: ['neutral', 'primary'], checked: true, class: 'bg-primary-a5 hover:bg-primary-a6' },
      { variant: 'soft', color: 'secondary', checked: true, class: 'bg-secondary-a5 hover:bg-secondary-a6' },
      { variant: 'soft', color: 'error', checked: true, class: 'bg-error-a5 hover:bg-error-a6' },
      { variant: 'soft', color: 'warning', checked: true, class: 'bg-warning-a5 hover:bg-warning-a6' },
      { variant: 'soft', color: 'success', checked: true, class: 'bg-success-a5 hover:bg-success-a6' },

      // Outline variant - Checked states
      { variant: 'outline', color: ['neutral', 'primary'], checked: true, class: 'border-primary-9 hover:border-primary-a10' },
      { variant: 'outline', color: 'secondary', checked: true, class: 'border-secondary-9 hover:border-secondary-a10' },
      { variant: 'outline', color: 'error', checked: true, class: 'border-error-9 hover:border-error-a10' },
      { variant: 'outline', color: 'warning', checked: true, class: 'border-warning-9 hover:border-warning-a10' },
      { variant: 'outline', color: 'success', checked: true, class: 'border-success-9 hover:border-success-a10' },
    ],
    defaultVariants: {
      variant: 'solid',
      color: 'neutral',
      size: 'md',
      disabled: false,
    },
  }
);

const checkboxIconVariants = cva(
  '',
  {
    variants: {
      size: {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
      },
      variant: {
        solid: '',
        soft: '',
        outline: '',
      },
      color: {
        neutral: 'text-neutral-a11',
        primary: 'text-primary-a11',
        secondary: 'text-secondary-a11',
        error: 'text-error-a11',
        warning: 'text-warning-a11',
        success: 'text-success-a11',
      },
      checked: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      // todo: use contrast
      { variant: 'solid', checked: true, class: 'text-white' },

      { variant: 'soft', checked: true, color: 'neutral', class: 'text-primary-a12' },
      { variant: 'soft', checked: true, color: 'primary', class: 'text-primary-a12' },
      { variant: 'soft', checked: true, color: 'secondary', class: 'text-secondary-a12' },
      { variant: 'soft', checked: true, color: 'error', class: 'text-error-a12' },
      { variant: 'soft', checked: true, color: 'warning', class: 'text-warning-a12' },
      { variant: 'soft', checked: true, color: 'success', class: 'text-success-a12' },
    ],
    defaultVariants: {
      size: 'md',
      variant: 'solid',
      color: 'neutral',
      checked: false,
    },
  }
);

const CheckboxContext = React.createContext<{
  size?: VariantProps<typeof checkboxRootVariants>['size'];
  variant?: VariantProps<typeof checkboxRootVariants>['variant'];
  color?: VariantProps<typeof checkboxRootVariants>['color'];
  checked?: boolean;
  indeterminate?: boolean;
} | null>(null);

interface CheckboxIconProps extends React.ComponentPropsWithoutRef<typeof Icon> {}

const CheckboxIcon = React.forwardRef<
  React.ElementRef<typeof Icon>,
  CheckboxIconProps
>(({ className, icon, ...props }, ref) => {
  const context = React.useContext(CheckboxContext);

  return (
    <CheckboxPrimitive.Indicator className="flex items-center justify-center h-full w-full'">
      <Icon
        ref={ref}
        icon={icon}
        className={cn(
          className,
          checkboxIconVariants({
            size: context?.size,
            variant: context?.variant,
            color: context?.color,
            checked: context?.checked
          })
        )}
        {...props}
      />
    </CheckboxPrimitive.Indicator>
  );
});
CheckboxIcon.displayName = 'CheckboxIcon';

interface CheckboxRootProps extends CheckboxPrimitive.RootProps {
  variant?: VariantProps<typeof checkboxRootVariants>['variant'];
  color?: VariantProps<typeof checkboxRootVariants>['color'];
  size?: VariantProps<typeof checkboxRootVariants>['size'];
  indeterminate?: boolean;
}

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

export { Checkbox, CheckboxIcon, checkboxRootVariants, checkboxIconVariants };
export type { CheckboxRootProps, CheckboxIconProps };