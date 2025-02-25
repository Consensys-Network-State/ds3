import { cva, type VariantProps } from 'class-variance-authority';
import { createContext, forwardRef, ElementRef, useContext, ComponentType, useMemo } from 'react';
import { Pressable } from 'react-native';
import { cn } from '../utils';
import { TextClassContext, Text } from './Text';
import { Icon } from './Icon';
import { Spinner, SpinnerProps } from './Spinner'
import * as Slot from '@rn-primitives/slot';
import * as React from "react";
import { SlottableTextProps, TextRef } from '@rn-primitives/types';

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
      },
      size: {
        sm: 'px-2.5 py-[0.34375rem]',
        md: 'px-3 py-2',
        lg: 'px-3.5 py-[0.65625rem]',
      },

      disabled: {
        false: null,
        true: ['opacity-40 web:cursor-not-allowed'],
      },
    },
    compoundVariants: [
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
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
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
      // Todo: we may want to define these globally or have the svgs scale accordingly.
      size: {
        sm: '',
        md: 'h-4 w-4',
        lg: '',
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

interface ButtonRootProps extends PressableProps, VariantProps<typeof buttonVariants> {
  loading?: boolean;
  asChild?: boolean;
}

export type ButtonColors = NonNullable<ButtonRootProps['color']>;
export type ButtonSizes = NonNullable<ButtonRootProps['size']>;
export type ButtonVariant = NonNullable<ButtonRootProps['variant']>;

const ButtonRoot = forwardRef<ElementRef<typeof Pressable>, ButtonRootProps>(
  (props, ref) => {
    const {
      className,
      variant,
      color,
      loading = false,
      asChild = false,
      size,
      disabled,
      ...otherProps
    } = props;

    const Component = asChild ? Slot.Pressable : Pressable;

    const contextValue = useMemo(() => ({
      variant, color, size, loading, disabled: disabled || loading
    }), [variant, color, size, loading, disabled]);

    return (
      <ButtonContext.Provider value={contextValue}>
        <TextClassContext.Provider
          value={buttonTextVariants({ variant, color, size })}
        >
          <Component
            className={cn(
              buttonVariants({ variant, color, size, disabled }),
              className,
            )}
            ref={ref}
            role='button'
            disabled={disabled}
            {...otherProps}
          />
        </TextClassContext.Provider>
      </ButtonContext.Provider>
    );
  }
);
ButtonRoot.displayName = 'Button';

interface ButtonIconProps extends React.ComponentPropsWithoutRef<typeof Icon> {}

const ButtonIcon = forwardRef<ElementRef<typeof Icon>, ButtonIconProps>(
  (props, ref) => {
    const { className, icon, ...otherProps } = props;
    const buttonContext = useContext(ButtonContext);

    return (
      <Icon
        className={cn(
          buttonTextVariants({
            variant: buttonContext?.variant,
            color: buttonContext?.color,
          }),
          buttonIconVariants({ size: buttonContext?.size, }),
          className
        )}
        icon={icon}
        ref={ref}
        {...otherProps}
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
            }),
            buttonIconVariants({ size: buttonContext?.size, }),
            className
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
            }),
            buttonIconVariants({ size: buttonContext?.size, }),
            className
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

const ButtonText = React.forwardRef<TextRef, SlottableTextProps>(
  (props, ref) => (
    <Text
      ref={ref}
      {...props}
    />
  )
);
ButtonText.displayName = 'ButtonText';

const Button = Object.assign(ButtonRoot, {
  Text: ButtonText,
  Icon: ButtonIcon,
  Spinner: ButtonSpinner,
});

export { Button, ButtonIcon, ButtonSpinner, buttonTextVariants, buttonVariants };
export type { ButtonRootProps, ButtonIconProps, ButtonSpinnerProps };