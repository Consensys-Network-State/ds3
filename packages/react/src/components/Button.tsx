import { cva, type VariantProps } from 'class-variance-authority';
import { createContext, forwardRef, ElementRef, useContext } from 'react';
import { Pressable } from 'react-native';
import { cn } from '../utils';
import { TextClassContext } from './Text';
import { Icon } from './Icon';
import * as React from "react";

//group flex items-center justify-center rounded-4 web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2

// box-shadow: var(--button-elevated-box-shadow-top-1-position-x, 0px) var(--button-elevated-box-shadow-top-1-position-y, 0px) var(--button-elevated-box-shadow-top-1-blur, 0px) var(--button-elevated-box-shadow-top-1-spread, 1px) var(--button-elevated-box-shadow-top-1-color, rgba(255, 255, 255, 0.10)) inset, var(--button-elevated-box-shadow-top-2-position-x, 0px) var(--button-elevated-box-shadow-top-2-position-y, 4px) var(--button-elevated-box-shadow-top-2-blur, 2px) var(--button-elevated-box-shadow-top-2-spread, -2px) var(--button-elevated-box-shadow-top-2-color, rgba(255, 255, 255, 0.15)) inset, var(--button-elevated-box-shadow-top-3-position-x, 0px) var(--button-elevated-box-shadow-top-3-position-y, 1px) var(--button-elevated-box-shadow-top-3-blur, 1px) var(--button-elevated-box-shadow-top-3-spread, 0px) var(--button-elevated-box-shadow-top-3-color, rgba(255, 255, 255, 0.40)) inset, var(--button-elevated-box-shadow-top-4-position-x, 0px) var(--button-elevated-box-shadow-top-4-position-y, -1px) var(--button-elevated-box-shadow-top-4-blur, 1px) var(--button-elevated-box-shadow-top-4-spread, 0px) var(--button-elevated-box-shadow-top-4-color, rgba(0, 0, 0, 0.40)) inset, var(--button-elevated-box-shadow-bottom-1-position-x, 0px) var(--button-elevated-box-shadow-bottom-1-position-y, 0px) var(--button-elevated-box-shadow-bottom-1-blur, 0px) var(--button-elevated-box-shadow-bottom-1-spread, 0px) var(--button-elevated-box-shadow-bottom-1-color, rgba(255, 255, 255, 0.00)) inset, var(--button-elevated-box-shadow-bottom-2-position-x, 0px) var(--button-elevated-box-shadow-bottom-2-position-y, 0px) var(--button-elevated-box-shadow-bottom-2-blur, 0px) var(--button-elevated-box-shadow-bottom-2-spread, 0px) var(--button-elevated-box-shadow-bottom-2-color, rgba(255, 255, 255, 0.00)) inset;

const buttonVariants = cva(
  'flex flex-row gap-1 items-center justify-center flex-shrink-0 rounded-4 border web:transition-colors',
  {
    variants: {
      color: {
        neutral: 'bg-neutral-9 border-neutral-9 hover:bg-primary-a4',
        primary: 'bg-primary-9 border-primary-9',
        secondary: 'bg-secondary-9 border-secondary-9',
        error: 'bg-error-9 border-error-9',
        warning: 'bg-warning-9 border-warning-9',
        success: 'bg-success-9 border-success-9',
      },
      variant: {
        elevated: '',
        solid: '',
        soft: '',
        outline: '',
        dashed: 'border-dashed',
        ghost: 'border-transparent',

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
        sm: 'h-9 rounded-md px-3',
        md: 'px-3 py-2',
        lg: 'h-11 rounded-md px-8 native:h-14',
        icon: 'h-10 w-10',
      },
    },
    compoundVariants: [
      { variant: 'soft', color: 'neutral', class: 'bg-neutral-a3 border-neutral-3' },
      { variant: 'soft', color: 'primary', class: 'bg-primary-a3 border-primary-3' },
      { variant: 'soft', color: 'secondary', class: 'bg-secondary-a3 border-secondary-3' },
      { variant: 'soft', color: 'error', class: 'bg-error-a3 border-error-3' },
      { variant: 'soft', color: 'warning', class: 'bg-warning-a3 border-warning-3' },
      { variant: 'soft', color: 'success', class: 'bg-success-a3 border-success-3' },
      { variant: ['outline', 'dashed', 'ghost'], class: 'bg-transparent' },
      // { variant: 'ghost', class: 'border-transparent' },
    ],
    defaultVariants: {
      variant: 'elevated',
      color: 'neutral',
      size: 'md',
    },
  }
);

// web:whitespace-nowrap text-sm native:text-base font-medium text-foreground web:transition-colors

const buttonTextVariants = cva(
  '',
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
        elevated: 'color-white',
        solid: 'color-white',
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
        sm: '',
        md: '',
        lg: '',
        icon: '',
      },
    },
    compoundVariants: [
      { variant: ['soft', 'outline', 'dashed', 'ghost'], color: 'neutral', class: 'color-neutral-a11' },
      { variant: ['soft', 'outline', 'dashed', 'ghost'], color: 'primary', class: 'color-primary-a11' },
      { variant: ['soft', 'outline', 'dashed', 'ghost'], color: 'secondary', class: 'color-secondary-a11' },
      { variant: ['soft', 'outline', 'dashed', 'ghost'], color: 'error', class: 'color-error-a11' },
      { variant: ['soft', 'outline', 'dashed', 'ghost'], color: 'warning', class: 'color-warning-a11' },
      { variant: ['soft', 'outline', 'dashed', 'ghost'], color: 'success', class: 'color-success-a11' },
      { variant: ['elevated', 'solid'], color: 'warning', class: 'color-[#21201C]' },
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

const ButtonContext = createContext<VariantProps<typeof buttonVariants> | undefined>(undefined);

type ButtonProps = React.ComponentPropsWithoutRef<typeof Pressable> &
  VariantProps<typeof buttonVariants>;

const Button = forwardRef<ElementRef<typeof Pressable>, ButtonProps>(
  ({ className, variant, color, size, ...props }, ref) => {
    return (
      <ButtonContext.Provider value={{ variant, color, size }}>
        <TextClassContext.Provider
          value={buttonTextVariants({ variant, color, size, className: 'web:pointer-events-none' })}
        >
          <Pressable
            className={cn(
              props.disabled && 'opacity-50 web:pointer-events-none',
              buttonVariants({ variant, color, size, className })
            )}
            ref={ref}
            role='button'
            {...props}
          />
        </TextClassContext.Provider>
      </ButtonContext.Provider>
    );
  }
);
Button.displayName = 'Button';

type ButtonIconProps = React.ComponentPropsWithoutRef<typeof Icon>;

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
Button.displayName = 'ButtonIcon';

export { Button, ButtonIcon, buttonTextVariants, buttonVariants };
export type { ButtonProps };