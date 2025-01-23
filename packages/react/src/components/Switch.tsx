import * as React from 'react';
import * as SwitchPrimitives from '@rn-primitives/switch';
import { Platform } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import { cn } from '../utils';
import { Icon } from "./Icon";

const switchRootVariants = cva(
  'flex-row h-6 w-11 shrink-0 items-center rounded-full border-2 transition-colors',
  {
    variants: {
      variant: {
        solid: 'border-transparent',
        soft: 'border-transparent',
        outline: '',
      },
      color: {
        neutral: '',
        primary: '',
        secondary: '',
        error: '',
        warning: '',
        success: '',
      },
      size: {
        sm: 'h-8 w-14',
        md: 'h-10 w-[72px]',
        lg: 'h-12 w-[88px]',
      },
      checked: {
        true: '',
        false: '',
      },
      disabled: {
        true: 'opacity-40 cursor-not-allowed web:!pointer-events-auto',
        false: '',
      },
    },
    compoundVariants: [
      // Solid variant - Unchecked states
      { variant: 'solid', color: 'neutral', checked: false, class: 'bg-neutral-a5 hover:bg-neutral-a6 active:bg-neutral-a7' },
      { variant: 'solid', color: 'primary', checked: false, class: 'bg-primary-a5 hover:bg-primary-a6 active:bg-primary-a7' },
      { variant: 'solid', color: 'secondary', checked: false, class: 'bg-secondary-a5 hover:bg-secondary-a6 active:bg-secondary-a7' },
      { variant: 'solid', color: 'error', checked: false, class: 'bg-error-a5 hover:bg-error-a6 active:bg-error-a7' },
      { variant: 'solid', color: 'warning', checked: false, class: 'bg-warning-a5 hover:bg-warning-a6 active:bg-warning-a7' },
      { variant: 'solid', color: 'success', checked: false, class: 'bg-success-a5 hover:bg-success-a6 active:bg-success-a7' },

      // Solid variant - Checked states
      { variant: 'solid', color: 'neutral', checked: true, class: 'bg-primary-a9 hover:bg-primary-a10 active:bg-primary-a11' },
      { variant: 'solid', color: 'primary', checked: true, class: 'bg-primary-a9 hover:bg-primary-a10 active:bg-primary-a11' },
      { variant: 'solid', color: 'secondary', checked: true, class: 'bg-secondary-a9 hover:bg-secondary-a10 active:bg-secondary-a11' },
      { variant: 'solid', color: 'error', checked: true, class: 'bg-error-a9 hover:bg-error-a10 active:bg-error-a11' },
      { variant: 'solid', color: 'warning', checked: true, class: 'bg-warning-a9 hover:bg-warning-a10 active:bg-warning-a11' },
      { variant: 'solid', color: 'success', checked: true, class: 'bg-success-a9 hover:bg-success-a10 active:bg-success-a11' },

      // Soft variant - Unchecked states
      { variant: 'soft', color: 'neutral', checked: false, class: 'bg-neutral-a3 hover:bg-neutral-a4 active:bg-neutral-a5' },
      { variant: 'soft', color: 'primary', checked: false, class: 'bg-primary-a3 hover:bg-primary-a4 active:bg-primary-a5' },
      { variant: 'soft', color: 'secondary', checked: false, class: 'bg-secondary-a3 hover:bg-secondary-a4 active:bg-secondary-a5' },
      { variant: 'soft', color: 'error', checked: false, class: 'bg-error-a3 hover:bg-error-a4 active:bg-error-a5' },
      { variant: 'soft', color: 'warning', checked: false, class: 'bg-warning-a3 hover:bg-warning-a4 active:bg-warning-a5' },
      { variant: 'soft', color: 'success', checked: false, class: 'bg-success-a3 hover:bg-success-a4 active:bg-success-a5' },

      // Soft variant - Checked states
      { variant: 'soft', color: 'neutral', checked: true, class: 'bg-primary-a5 hover:bg-primary-a6 active:bg-primary-a7' },
      { variant: 'soft', color: 'primary', checked: true, class: 'bg-primary-a5 hover:bg-primary-a6 active:bg-primary-a7' },
      { variant: 'soft', color: 'secondary', checked: true, class: 'bg-secondary-a5 hover:bg-secondary-a6 active:bg-secondary-a7' },
      { variant: 'soft', color: 'error', checked: true, class: 'bg-error-a5 hover:bg-error-a6 active:bg-error-a7' },
      { variant: 'soft', color: 'warning', checked: true, class: 'bg-warning-a5 hover:bg-warning-a6 active:bg-warning-a7' },
      { variant: 'soft', color: 'success', checked: true, class: 'bg-success-a5 hover:bg-success-a6 active:bg-success-a7' },

      // Outline variant - Unchecked states
      { variant: 'outline', color: 'neutral', checked: false, class: 'border-neutral-a7 hover:border-neutral-a8 active:border-neutral-a9' },
      { variant: 'outline', color: 'primary', checked: false, class: 'border-primary-a7 hover:border-primary-a8 active:border-primary-a9' },
      { variant: 'outline', color: 'secondary', checked: false, class: 'border-secondary-a7 hover:border-secondary-a8 active:border-secondary-a9' },
      { variant: 'outline', color: 'error', checked: false, class: 'border-error-a7 hover:border-error-a8 active:border-error-a9' },
      { variant: 'outline', color: 'warning', checked: false, class: 'border-warning-a7 hover:border-warning-a8 active:border-warning-a9' },
      { variant: 'outline', color: 'success', checked: false, class: 'border-success-a7 hover:border-success-a8 active:border-success-a9' },

      // Outline variant - Checked states
      { variant: 'outline', color: 'neutral', checked: true, class: 'border-primary-a9 hover:border-primary-a10 active:border-primary-a11' },
      { variant: 'outline', color: 'primary', checked: true, class: 'border-primary-a9 hover:border-primary-a10 active:border-primary-a11' },
      { variant: 'outline', color: 'secondary', checked: true, class: 'border-secondary-a9 hover:border-secondary-a10 active:border-secondary-a11' },
      { variant: 'outline', color: 'error', checked: true, class: 'border-error-a9 hover:border-error-a10 active:border-error-a11' },
      { variant: 'outline', color: 'warning', checked: true, class: 'border-warning-a9 hover:border-warning-a10 active:border-warning-a11' },
      { variant: 'outline', color: 'success', checked: true, class: 'border-success-a9 hover:border-success-a10 active:border-success-a11' },
    ],
    defaultVariants: {
      variant: 'solid',
      color: 'neutral',
      size: 'md',
      disabled: false,
    },
  }
);

const switchThumbVariants = cva(
  'flex items-center justify-center rounded-full bg-background shadow-lg ring-0 transition-transform',
  {
    variants: {
      size: {
        sm: 'h-7 w-7',
        md: 'h-9 w-9',
        lg: 'h-11 w-11',
      },
      checked: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      { size: 'sm', checked: true, class: 'web:translate-x-6' },
      { size: 'sm', checked: false, class: 'web:translate-x-0' },
      { size: 'md', checked: true, class: 'web:translate-x-8' },
      { size: 'md', checked: false, class: 'web:translate-x-0' },
      { size: 'lg', checked: true, class: 'web:translate-x-10' },
      { size: 'lg', checked: false, class: 'web:translate-x-0' },
    ],
    defaultVariants: {
      size: 'md',
      checked: false,
    },
  }
);

const switchIconVariants = cva('', {
  variants: {
    size: {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
    },
    checked: {
      true: '',
      false: '',
    },
    color: {
      neutral: 'text-neutral-a11',
      primary: 'text-primary-a11',
      secondary: 'text-secondary-a11',
      error: 'text-error-a11',
      warning: 'text-warning-a11',
      success: 'text-success-a11',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'neutral',
  },
});

interface SwitchThumbProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Thumb> {
  size?: VariantProps<typeof switchThumbVariants>['size'];
  color?: VariantProps<typeof switchIconVariants>['color'];
  checked?: boolean;
  icon?: React.ComponentProps<typeof Icon>['icon'];
}

const SwitchThumb = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Thumb>,
  SwitchThumbProps
>(({ className, size, color, checked, icon, ...props }, ref) => (
  <SwitchPrimitives.Thumb
    ref={ref}
    className={cn(switchThumbVariants({ size, checked }), className)}
    {...props}
  >
    {icon && (
      <Icon
        icon={icon}
        className={cn(
          switchIconVariants({ size, color, checked }),
        )}
      />
    )}
  </SwitchPrimitives.Thumb>
));
SwitchThumb.displayName = 'SwitchThumb';

interface SwitchProps extends SwitchPrimitives.RootProps {
  variant?: VariantProps<typeof switchRootVariants>['variant'];
  color?: VariantProps<typeof switchRootVariants>['color'];
  size?: VariantProps<typeof switchRootVariants>['size'];
  thumbIcon?: React.ComponentProps<typeof Icon>['icon'];
}

const SwitchWeb = React.forwardRef<React.ElementRef<typeof SwitchPrimitives.Root>, SwitchProps>(
  ({ className, variant, color, size, checked, disabled, thumbIcon, ...props }, ref) => (
    <SwitchPrimitives.Root
      ref={ref}
      checked={checked}
      disabled={disabled}
      className={cn(switchRootVariants({ variant, color, size, checked, disabled }), className)}
      {...props}
    >
      <SwitchThumb
        size={size}
        color={color}
        checked={checked}
        icon={thumbIcon}
      />
    </SwitchPrimitives.Root>
  )
);
SwitchWeb.displayName = 'SwitchWeb';

const SwitchNative = React.forwardRef<React.ElementRef<typeof SwitchPrimitives.Root>, SwitchProps>(
  ({ className, variant, color, size = 'md', checked, disabled, thumbIcon, ...props }, ref) => {
    const TRANSLATE_X_MAP = {
      sm: 21,
      md: 36,
      lg: 46,
    } as const;

    const translateX = useDerivedValue(() => (checked ? TRANSLATE_X_MAP[size as keyof typeof TRANSLATE_X_MAP] : 0));

    const animatedThumbStyle = useAnimatedStyle(() => ({
      transform: [{ translateX: withTiming(translateX.value, { duration: 200 }) }],
    }));

    return (
      <SwitchPrimitives.Root
        ref={ref}
        checked={checked}
        disabled={disabled}
        className={cn(switchRootVariants({ variant, color, size, checked, disabled }), className)}
        {...props}
      >
        <Animated.View style={animatedThumbStyle}>
          <SwitchThumb
            size={size}
            color={color}
            checked={checked}
            icon={thumbIcon}
          />
        </Animated.View>
      </SwitchPrimitives.Root>
    );
  }
);
SwitchNative.displayName = 'SwitchNative';

const Switch = Platform.select({
  web: SwitchWeb,
  default: SwitchNative,
});

export { Switch, switchRootVariants, switchThumbVariants };
export type { SwitchProps };