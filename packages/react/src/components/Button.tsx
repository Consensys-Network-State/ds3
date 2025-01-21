import { cva, type VariantProps } from 'class-variance-authority';
import { createContext, forwardRef, ElementRef, useContext, ComponentType } from 'react';
import { Pressable } from 'react-native';
import { cn } from '../utils';
import { TextClassContext } from './Text';
import { Icon } from './Icon';
import * as React from "react";
import { Spinner, SpinnerProps } from './Spinner'
//
// border-radius: var(--layout-radius, 8px);
// background: var(--color-neutral-9, #6E6E6E);
//
// /* button/elevated/box-shadow */
// box-shadow: var(--button-elevated-box-shadow-top-1-position-x, 0px) var(--button-elevated-box-shadow-top-1-position-y, 0px) var(--button-elevated-box-shadow-top-1-blur, 0px) var(--button-elevated-box-shadow-top-1-spread, 1px) var(--button-elevated-box-shadow-top-1-color, rgba(255, 255, 255, 0.10)) inset, var(--button-elevated-box-shadow-top-2-position-x, 0px) var(--button-elevated-box-shadow-top-2-position-y, 4px) var(--button-elevated-box-shadow-top-2-blur, 2px) var(--button-elevated-box-shadow-top-2-spread, -2px) var(--button-elevated-box-shadow-top-2-color, rgba(255, 255, 255, 0.15)) inset, var(--button-elevated-box-shadow-top-3-position-x, 0px) var(--button-elevated-box-shadow-top-3-position-y, 1px) var(--button-elevated-box-shadow-top-3-blur, 1px) var(--button-elevated-box-shadow-top-3-spread, 0px) var(--button-elevated-box-shadow-top-3-color, rgba(255, 255, 255, 0.40)) inset, var(--button-elevated-box-shadow-top-4-position-x, 0px) var(--button-elevated-box-shadow-top-4-position-y, -1px) var(--button-elevated-box-shadow-top-4-blur, 1px) var(--button-elevated-box-shadow-top-4-spread, 0px) var(--button-elevated-box-shadow-top-4-color, rgba(0, 0, 0, 0.40)) inset, var(--button-elevated-box-shadow-bottom-1-position-x, 0px) var(--button-elevated-box-shadow-bottom-1-position-y, 0px) var(--button-elevated-box-shadow-bottom-1-blur, 0px) var(--button-elevated-box-shadow-bottom-1-spread, 0px) var(--button-elevated-box-shadow-bottom-1-color, rgba(255, 255, 255, 0.00)) inset, var(--button-elevated-box-shadow-bottom-2-position-x, 0px) var(--button-elevated-box-shadow-bottom-2-position-y, 0px) var(--button-elevated-box-shadow-bottom-2-blur, 0px) var(--button-elevated-box-shadow-bottom-2-spread, 0px) var(--button-elevated-box-shadow-bottom-2-color, rgba(255, 255, 255, 0.00)) inset;

// group flex items-center justify-center rounded-4 web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2

// box-shadow: var(--button-elevated-box-shadow-top-1-position-x, 0px) var(--button-elevated-box-shadow-top-1-position-y, 0px) var(--button-elevated-box-shadow-top-1-blur, 0px) var(--button-elevated-box-shadow-top-1-spread, 1px) var(--button-elevated-box-shadow-top-1-color, rgba(255, 255, 255, 0.10)) inset, var(--button-elevated-box-shadow-top-2-position-x, 0px) var(--button-elevated-box-shadow-top-2-position-y, 4px) var(--button-elevated-box-shadow-top-2-blur, 2px) var(--button-elevated-box-shadow-top-2-spread, -2px) var(--button-elevated-box-shadow-top-2-color, rgba(255, 255, 255, 0.15)) inset, var(--button-elevated-box-shadow-top-3-position-x, 0px) var(--button-elevated-box-shadow-top-3-position-y, 1px) var(--button-elevated-box-shadow-top-3-blur, 1px) var(--button-elevated-box-shadow-top-3-spread, 0px) var(--button-elevated-box-shadow-top-3-color, rgba(255, 255, 255, 0.40)) inset, var(--button-elevated-box-shadow-top-4-position-x, 0px) var(--button-elevated-box-shadow-top-4-position-y, -1px) var(--button-elevated-box-shadow-top-4-blur, 1px) var(--button-elevated-box-shadow-top-4-spread, 0px) var(--button-elevated-box-shadow-top-4-color, rgba(0, 0, 0, 0.40)) inset, var(--button-elevated-box-shadow-bottom-1-position-x, 0px) var(--button-elevated-box-shadow-bottom-1-position-y, 0px) var(--button-elevated-box-shadow-bottom-1-blur, 0px) var(--button-elevated-box-shadow-bottom-1-spread, 0px) var(--button-elevated-box-shadow-bottom-1-color, rgba(255, 255, 255, 0.00)) inset, var(--button-elevated-box-shadow-bottom-2-position-x, 0px) var(--button-elevated-box-shadow-bottom-2-position-y, 0px) var(--button-elevated-box-shadow-bottom-2-blur, 0px) var(--button-elevated-box-shadow-bottom-2-spread, 0px) var(--button-elevated-box-shadow-bottom-2-color, rgba(255, 255, 255, 0.00)) inset;

// web:whitespace-nowrap text-sm native:text-base font-medium text-foreground web:transition-colors

const buttonVariants = cva(
  'group flex flex-row gap-1 items-center self-start justify-center rounded-4',
  {
    variants: {
      color: {
        neutral: '',
        primary: '',
        secondary: '',
        error: '',
        warning: '',
        success: '',
      },
      variant: {
        elevated: 'shadow-elevated web:enabled:hover:shadow-none',
        solid: '',
        soft: '',
        outline: 'border',
        dashed: 'border border-dashed',
        ghost: '',

        // legacy
        // default: 'bg-primary web:hover:opacity-90 active:opacity-90',
        // destructive: 'bg-destructive web:hover:opacity-90 active:opacity-90',
        // outline:
        //   'border border-input bg-background web:hover:bg-accent web:hover:text-accent-foreground active:bg-accent',
        // secondary: 'bg-secondary web:hover:opacity-80 active:opacity-80',
        // ghost: 'web:hover:bg-accent web:hover:text-accent-foreground active:bg-accent',
        // link: 'web:underline-offset-4 web:hover:underline web:focus:underline '
      },
      size: {
        sm: 'px-2.5 py-[0.34375rem]',
        md: 'px-3 py-2',
        lg: 'px-3.5 py-[0.65625rem]',
        icon: 'h-10 w-10',
      },

      disabled: {
        false: null,
        true: ['opacity-40 web:cursor-not-allowed'],
      },
    },
    compoundVariants: [

      // TBD: finish this
      { disabled: true, color: 'neutral', class: '' },
      { disabled: true, color: 'primary', class: '' },
      { disabled: true, color: 'secondary', class: '' },
      { disabled: true, color: 'error', class: '' },
      { disabled: true, color: 'warning', class: '' },
      { disabled: true, color: 'success', class: '' },
      //
      // { variant: 'elevated', color: 'neutral', class: 'bg-neutral-9 web:enabled:hover:bg-neutral-10' },
      // { variant: 'elevated', color: 'primary', class: 'bg-primary-9 web:enabled:hover:bg-primary-10' },
      // { variant: 'elevated', color: 'secondary', class: 'bg-secondary-9 web:enabled:hover:bg-secondary-10' },
      // { variant: 'elevated', color: 'error', class: 'bg-error-9 web:enabled:hover:bg-error-10' },
      // { variant: 'elevated', color: 'warning', class: 'bg-warning-9 web:enabled:hover:bg-warning-10' },
      // { variant: 'elevated', color: 'success', class: 'bg-success-9 web:enabled:hover:bg-success-10' },

      { variant: ['solid', 'elevated'], color: 'neutral', class: 'bg-neutral-9 web:enabled:hover:bg-neutral-10' },
      { variant: ['solid', 'elevated'], color: 'primary', class: 'bg-primary-9 web:enabled:hover:bg-primary-10' },
      { variant: ['solid', 'elevated'], color: 'secondary', class: 'bg-secondary-9 web:enabled:hover:bg-secondary-10' },
      { variant: ['solid', 'elevated'], color: 'error', class: 'bg-error-9 web:enabled:hover:bg-error-10' },
      { variant: ['solid', 'elevated'], color: 'warning', class: 'bg-warning-9 web:enabled:hover:bg-warning-10' },
      { variant: ['solid', 'elevated'], color: 'success', class: 'bg-success-9 web:enabled:hover:bg-success-10' },

      { variant: 'soft', color: 'neutral', class: 'bg-neutral-a3 web:enabled:hover:bg-neutral-a4' },
      { variant: 'soft', color: 'primary', class: 'bg-primary-a3 web:enabled:hover:bg-primary-a4' },
      { variant: 'soft', color: 'secondary', class: 'bg-secondary-a3 web:enabled:hover:bg-secondary-a4' },
      { variant: 'soft', color: 'error', class: 'bg-error-a3 web:enabled:hover:bg-error-a4' },
      { variant: 'soft', color: 'warning', class: 'bg-warning-a3 web:enabled:hover:bg-warning-a4' },
      { variant: 'soft', color: 'success', class: 'bg-success-a3 web:enabled:hover:bg-success-a4' },

      { variant: ['outline', 'dashed'], color: 'neutral', class: 'border-neutral-a7 web:enabled:hover:border-neutral-a8' },
      { variant: ['outline', 'dashed'], color: 'primary', class: 'border-primary-a7 web:enabled:hover:border-primary-a8' },
      { variant: ['outline', 'dashed'], color: 'secondary', class: 'border-secondary-a7 web:enabled:hover:border-secondary-a8' },
      { variant: ['outline', 'dashed'], color: 'error', class: 'border-error-a7 web:enabled:hover:border-error-a8' },
      { variant: ['outline', 'dashed'], color: 'warning', class: 'border-warning-a7 web:enabled:hover:border-warning-a8' },
      { variant: ['outline', 'dashed'], color: 'success', class: 'border-success-a7 web:enabled:hover:border-success-a8' },

      { variant: ['outline', 'dashed', 'ghost'], color: 'neutral', class: 'web:enabled:hover:bg-neutral-a3' },
      { variant: ['outline', 'dashed', 'ghost'], color: 'primary', class: 'web:enabled:hover:bg-primary-a3' },
      { variant: ['outline', 'dashed', 'ghost'], color: 'secondary', class: 'web:enabled:hover:bg-secondary-a3' },
      { variant: ['outline', 'dashed', 'ghost'], color: 'error', class: 'web:enabled:hover:bg-error-a3' },
      { variant: ['outline', 'dashed', 'ghost'], color: 'warning', class: 'web:enabled:hover:bg-warning-a3' },
      { variant: ['outline', 'dashed', 'ghost'], color: 'success', class: 'web:enabled:hover:bg-success-a3' },
    ],
    defaultVariants: {
      variant: 'elevated',
      color: 'neutral',
      size: 'md',
      disabled: false,
    },
  }
);


const buttonTextVariants = cva(
  '',
  {
    variants: {
      color: {
        neutral: 'text-neutral-a11',
        primary: 'text-primary-a11',
        secondary: 'text-secondary-a11',
        error: 'text-error-a11',
        warning: 'text-warning-a11',
        success: 'text-success-a11',
      },
      variant: {
        elevated: '',
        solid: '',
        soft: '',
        outline: '',
        dashed: '',
        ghost: '',
        // default: 'text-primary-foreground',
        // destructive: 'text-destructive-foreground',
        // outline: 'group-active:text-accent-foreground',
        // secondary: 'text-secondary-foreground group-active:text-secondary-foreground',
        // ghost: 'group-active:text-accent-foreground',
        // link: 'text-primary group-active:underline',
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        icon: '',
      },
    },
    compoundVariants: [
      { variant: ['elevated', 'solid'], class: 'text-white' },
      { variant: ['elevated', 'solid'], color: 'warning', class: 'text-neutral-12' },
    ],
    defaultVariants: {
      color: 'neutral',
      size: 'md',
    },
  }
);

const buttonIconVariants = cva(
  '',
  {
    variants: {
      size: {
        sm: '',
        md: 'h-4 w-4',
        lg: '',
        icon: '',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const ButtonContext = createContext<VariantProps<typeof buttonVariants> & {
  loading?: boolean,
} | undefined>(undefined);

type PressableProps = Omit<React.ComponentPropsWithoutRef<typeof Pressable>, keyof VariantProps<typeof buttonVariants>>;

interface ButtonProps extends PressableProps, VariantProps<typeof buttonVariants> {
  loading?: boolean;
  asChild?: boolean;
}

export type ButtonColors = NonNullable<ButtonProps['color']>;
export type ButtonSizes = NonNullable<ButtonProps['size']>;
export type ButtonVariant = NonNullable<ButtonProps['variant']>;

const Button = forwardRef<ElementRef<typeof Pressable>, ButtonProps>(
  ({ className, variant, color, loading = false, size, disabled, ...props }, ref) => {
    return (
      <ButtonContext.Provider value={{ variant, color, size, loading }}>
        <TextClassContext.Provider
          value={buttonTextVariants({ variant, color, size })}
        >
          <Pressable
            className={buttonVariants({ variant, color, size, className, disabled })}
            ref={ref}
            role='button'
            disabled={disabled}
            {...props}
          />
        </TextClassContext.Provider>
      </ButtonContext.Provider>
    );
  }
);
Button.displayName = 'Button';

interface ButtonIconProps extends React.ComponentPropsWithoutRef<typeof Icon> {}

const ButtonIcon = forwardRef<ElementRef<typeof Icon>, ButtonIconProps>(
  ({ className, icon, ...props }, ref) => {
    const buttonContext = useContext(ButtonContext);
    return (
      <Icon
        className={cn(
          buttonTextVariants({
            variant: buttonContext?.variant,
            color: buttonContext?.color,
            // size: buttonContext?.size,
            className
          }),
          buttonIconVariants({ size: buttonContext?.size, })
        )}
        icon={icon}
        ref={ref}
        {...props}
      />
    );
  }
);
ButtonIcon.displayName = 'ButtonIcon';

interface ButtonSpinnerProps extends SpinnerProps {
  loadingIcon?: ComponentType<any>;
  loadingSpeed?: number;
}

const ButtonSpinner = forwardRef<ElementRef<typeof Icon>, ButtonSpinnerProps>(
  (props, ref) => {
    const {
      className,
      icon,
      loadingIcon,
      ...otherProps
    } = props

    const buttonContext = useContext(ButtonContext);

    if (icon && !buttonContext?.loading) {
      return (
        <Icon
          className={cn(
            buttonTextVariants({
              variant: buttonContext?.variant,
              color: buttonContext?.color,
              className
            }),
            buttonIconVariants({ size: buttonContext?.size, })
          )}
          icon={icon}
          ref={ref}
          {...otherProps}
        />
      );
    }

    if (buttonContext?.loading) {
      return (
        <Spinner
          className={cn(
            buttonTextVariants({
              variant: buttonContext?.variant,
              color: buttonContext?.color,
              className
            }),
            buttonIconVariants({ size: buttonContext?.size, }),
          )}
          icon={loadingIcon}
          ref={ref}
          {...otherProps}
        />
      );
    }

    return null;
  }
);
ButtonSpinner.displayName = 'ButtonSpinner';

export { Button, ButtonIcon, ButtonSpinner, buttonTextVariants, buttonVariants };
export type { ButtonProps };