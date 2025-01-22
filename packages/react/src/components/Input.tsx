import { cva, type VariantProps } from 'class-variance-authority';
import { createContext, forwardRef, ElementRef, useContext, useMemo, useRef, ComponentType, useState } from 'react';
import { TextInput, Pressable } from 'react-native';
import { cn } from '../utils';
import * as Slot from '@rn-primitives/slot';
import { Icon } from './Icon';
import { Spinner, SpinnerProps } from './Spinner';

// TODO:
//  * fix disabled focus
//  * fix a11y problem outline and tab focus
//  * fix ref
//  * add textarea
//  * sizing in mobile (flex problem)

const inputRootVariants = cva(
  'flex flex-row items-center gap-3 px-3 h-10 rounded-4',
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
        soft: 'border border-transparent',
        outline: 'border',
        underline: 'border-b rounded-none',
        ghost: 'border-b rounded-none border-transparent',
      },
      focused: {
        true: '',
        false: null,
      },
      disabled: {
        true: 'opacity-40 web:cursor-not-allowed',
        false: null,
      }
    },
    compoundVariants: [
      // Soft variant
      { variant: 'soft', color: 'neutral', class: 'bg-neutral-a3' },
      { variant: 'soft', color: 'primary', class: 'bg-primary-a3' },
      { variant: 'soft', color: 'secondary', class: 'bg-secondary-a3' },
      { variant: 'soft', color: 'error', class: 'bg-error-a3' },
      { variant: 'soft', color: 'warning', class: 'bg-warning-a3' },
      { variant: 'soft', color: 'success', class: 'bg-success-a3' },

      // Outline variant
      { variant: 'outline', color: 'neutral', class: 'border-neutral-a7' },
      { variant: 'outline', color: 'primary', class: 'border-primary-a7' },
      { variant: 'outline', color: 'secondary', class: 'border-secondary-a7' },
      { variant: 'outline', color: 'error', class: 'border-error-a7' },
      { variant: 'outline', color: 'warning', class: 'border-warning-a7' },
      { variant: 'outline', color: 'success', class: 'border-success-a7' },

      // Underline variant
      { variant: 'underline', color: 'neutral', class: 'border-neutral-a7' },
      { variant: 'underline', color: 'primary', class: 'border-primary-a7' },
      { variant: 'underline', color: 'secondary', class: 'border-secondary-a7' },
      { variant: 'underline', color: 'error', class: 'border-error-a7' },
      { variant: 'underline', color: 'warning', class: 'border-warning-a7' },
      { variant: 'underline', color: 'success', class: 'border-success-a7' },

      // Hover state
      { color: 'neutral', focused: false, disabled: false, class: 'web:hover:border-primary-a8' },
      { color: 'primary', focused: false, disabled: false, class: 'web:hover:border-primary-a8' },
      { color: 'secondary', focused: false, disabled: false, class: 'web:hover:border-secondary-a8' },
      { color: 'error', focused: false, disabled: false, class: 'web:hover:border-error-a8' },
      { color: 'warning', focused: false, disabled: false, class: 'web:hover:border-warning-a8' },
      { color: 'success', focused: false, disabled: false, class: 'web:hover:border-success-a8' },

      // Focus state
      { color: 'neutral', focused: true, class: 'border-primary-a9' },
      { color: 'primary', focused: true,  class: 'border-primary-a9' },
      { color: 'secondary', focused: true,  class: 'border-secondary-a9' },
      { color: 'error', focused: true,  class: 'border-error-a9' },
      { color: 'warning', focused: true,  class: 'border-warning-a9' },
      { color: 'success', focused: true,  class: 'border-success-a9' },

      // Ghost variant hover states
      // { variant: 'ghost', color: 'neutral', class: 'web:hover:bg-neutral-a3' },
      // { variant: 'ghost', color: 'primary', class: 'web:hover:bg-primary-a3' },
      // { variant: 'ghost', color: 'secondary', class: 'web:hover:bg-secondary-a3' },
      // { variant: 'ghost', color: 'error', class: 'web:hover:bg-error-a3' },
      // { variant: 'ghost', color: 'warning', class: 'web:hover:bg-warning-a3' },
      // { variant: 'ghost', color: 'success', class: 'web:hover:bg-success-a3' },
    ],
    defaultVariants: {
      variant: 'outline',
      color: 'neutral',
      disabled: false,
      focused: false,
    },
  }
);

const inputIconVariants = cva(
  'h-4 w-4 flex-shrink-0',
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
      disabled: {
        true: 'opacity-40',
        false: null,
      }
    },
    defaultVariants: {
      color: 'neutral',
      disabled: false,
    },
  }
);

const InputContext = createContext<{
  variant?: VariantProps<typeof inputRootVariants>['variant'];
  color?: VariantProps<typeof inputRootVariants>['color'];
  disabled?: boolean;
  loading?: boolean;
  focused?: boolean;
  setFocused?: (focused: boolean) => void;
  asChild?: boolean;
  inputRef?: React.RefObject<ElementRef<typeof TextInput>>;
} | undefined>(undefined);

interface InputRootProps extends Omit<React.ComponentPropsWithoutRef<typeof Pressable>, keyof VariantProps<typeof inputRootVariants>> {
  variant?: VariantProps<typeof inputRootVariants>['variant'];
  color?: VariantProps<typeof inputRootVariants>['color'];
  disabled?: boolean;
  loading?: boolean;
  asChild?: boolean;
}

const InputRoot = forwardRef<ElementRef<typeof Pressable>, InputRootProps>(
  ({ className, variant, color, disabled = false, loading = false, asChild = false, ...props }, ref) => {
    const inputRef = useRef<ElementRef<typeof TextInput>>(null);
    const [focused, setFocused] = useState(false);

    console.log('focused', focused);

    const contextValue = useMemo(() => ({
      variant,
      color,
      disabled,
      loading,
      focused,
      setFocused,
      asChild,
      inputRef
    }), [variant, color, disabled, loading, focused, asChild]);

    const Component = asChild ? Slot.Pressable : Pressable;

    const handlePress = () => {
      if (!disabled && !loading && inputRef.current) {
        inputRef.current.focus();
      }
    };

    return (
      <InputContext.Provider value={contextValue}>
        <Component
          ref={ref}
          className={cn(
            inputRootVariants({ variant, color, disabled, focused }),
            className,
          )}
          onPress={handlePress}
          {...props}
        />
      </InputContext.Provider>
    );
  }
);
InputRoot.displayName = 'Input';

interface InputFieldProps extends Omit<React.ComponentPropsWithoutRef<typeof TextInput>, 'editable'> {
  asChild?: boolean;
}

const InputField = forwardRef<ElementRef<typeof TextInput>, InputFieldProps>(
  ({ className, onBlur, onFocus, asChild = false, ...props }, ref) => {
    const context = useContext(InputContext);
    if (!context) {
      throw new Error('InputField must be used within an Input');
    }

    return (
      <TextInput
        ref={(instance) => {
          // Handle both the forwarded ref and our internal ref
          if (typeof ref === 'function') {
            ref(instance);
          } else if (ref) {
            ref.current = instance;
          }
          if (context.inputRef) {
            context.inputRef.current = instance;
          }
        }}
        className={cn(
          'flex-1 bg-transparent p-0 outline-none',
          className
        )}
        onFocus={(e) => {
          context.setFocused?.(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          context.setFocused?.(false);
          onBlur?.(e);
        }}
        editable={!context.disabled}
        placeholderTextColor={`var(--color-neutral-9)`}
        {...props}
      />
    );
  }
);
InputField.displayName = 'InputField';

interface InputIconProps extends React.ComponentPropsWithoutRef<typeof Icon> {
  icon: React.ComponentType<any>;
}

const InputIcon = forwardRef<ElementRef<typeof Icon>, InputIconProps>(
  ({ className, icon, ...props }, ref) => {
    const context = useContext(InputContext);
    if (!context) {
      throw new Error('InputIcon must be used within an Input');
    }

    return (
      <Icon
        ref={ref}
        icon={icon}
        className={cn(
          inputIconVariants({
            color: context.color,
            disabled: context.disabled,
          }),
          className
        )}
        {...props}
      />
    );
  }
);
InputIcon.displayName = 'InputIcon';

interface InputSpinnerProps extends SpinnerProps {
  loadingIcon?: ComponentType<any>;
  icon?: ComponentType<any>;
}

const InputSpinner = forwardRef<ElementRef<typeof Icon>, InputSpinnerProps>(
  (props, ref) => {
    const {
      className,
      icon,
      loadingIcon,
      ...otherProps
    } = props;

    const context = useContext(InputContext);
    if (!context) {
      throw new Error('InputSpinner must be used within an Input');
    }

    if (icon && !context.loading) {
      return (
        <Icon
          ref={ref}
          icon={icon}
          className={cn(
            inputIconVariants({
              color: context.color,
              disabled: context.disabled,
            }),
            className
          )}
          {...otherProps}
        />
      );
    }

    if (context.loading) {
      return (
        <Spinner
          ref={ref}
          icon={loadingIcon}
          className={cn(
            inputIconVariants({
              color: context.color,
              disabled: context.disabled,
            }),
            className
          )}
          {...otherProps}
        />
      );
    }

    return null;
  }
);
InputSpinner.displayName = 'InputSpinner';

const Input = Object.assign(InputRoot, {
  Field: InputField,
  Icon: InputIcon,
  Spinner: InputSpinner,
});

export { Input, inputRootVariants, inputIconVariants };
export type { InputRootProps, InputFieldProps, InputIconProps };