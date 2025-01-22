import * as React from 'react';
import { TextInput, Pressable } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import * as Slot from '@rn-primitives/slot';
import { Icon } from './Icon';
import { Spinner, SpinnerProps } from './Spinner';
import { cn } from '../utils';

// TODO:
//  * sizing in mobile (flex problem)

const inputRootVariants = cva(
  'flex flex-row items-center gap-3 px-3 py-2 rounded-4',
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
      multiline: {
        true: '',
        false: ''
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

      // Outline and underline variant
      { variant: ['outline', 'underline'], color: 'neutral', class: 'border-neutral-a7' },
      { variant: ['outline', 'underline'], color: 'primary', class: 'border-primary-a7' },
      { variant: ['outline', 'underline'], color: 'secondary', class: 'border-secondary-a7' },
      { variant: ['outline', 'underline'], color: 'error', class: 'border-error-a7' },
      { variant: ['outline', 'underline'], color: 'warning', class: 'border-warning-a7' },
      { variant: ['outline', 'underline'], color: 'success', class: 'border-success-a7' },

      // Hover state
      { color: 'neutral', focused: false, disabled: false, class: 'web:hover:border-primary-a8' },
      { color: 'primary', focused: false, disabled: false, class: 'web:hover:border-primary-a8' },
      { color: 'secondary', focused: false, disabled: false, class: 'web:hover:border-secondary-a8' },
      { color: 'error', focused: false, disabled: false, class: 'web:hover:border-error-a8' },
      { color: 'warning', focused: false, disabled: false, class: 'web:hover:border-warning-a8' },
      { color: 'success', focused: false, disabled: false, class: 'web:hover:border-success-a8' },

      // Focus state
      { color: 'neutral', focused: true, disabled: false, class: 'border-primary-a9' },
      { color: 'primary', focused: true, disabled: false, class: 'border-primary-a9' },
      { color: 'secondary', focused: true, disabled: false, class: 'border-secondary-a9' },
      { color: 'error', focused: true, disabled: false, class: 'border-error-a9' },
      { color: 'warning', focused: true, disabled: false, class: 'border-warning-a9' },
      { color: 'success', focused: true, disabled: false, class: 'border-success-a9' },
    ],
    defaultVariants: {
      variant: 'outline',
      color: 'neutral',
      multiline: false,
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

const InputContext = React.createContext<{
  variant?: VariantProps<typeof inputRootVariants>['variant'];
  color?: VariantProps<typeof inputRootVariants>['color'];
  disabled?: boolean;
  loading?: boolean;
  focused?: boolean;
  setFocused?: (focused: boolean) => void;
  asChild?: boolean;
  inputRef?: React.RefObject<React.ElementRef<typeof TextInput>>;
  multiline?: boolean;
  numberOfLines?: number;
} | undefined>(undefined);

interface InputRootProps extends Omit<React.ComponentPropsWithoutRef<typeof Pressable>, keyof VariantProps<typeof inputRootVariants>> {
  variant?: VariantProps<typeof inputRootVariants>['variant'];
  color?: VariantProps<typeof inputRootVariants>['color'];
  disabled?: boolean;
  loading?: boolean;
  asChild?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
}

const InputRoot = React.forwardRef<React.ElementRef<typeof Pressable>, InputRootProps>(
  ({ className, variant, color, disabled = false, loading = false, asChild = false, multiline = false, numberOfLines, ...props }, ref) => {
    const inputRef = React.useRef<React.ElementRef<typeof TextInput>>(null);
    const [focused, setFocused] = React.useState(false);

    const contextValue = React.useMemo(() => ({
      variant,
      color,
      disabled,
      loading,
      focused,
      setFocused,
      asChild,
      inputRef,
      multiline,
      numberOfLines
    }), [variant, color, disabled, loading, focused, asChild, multiline, numberOfLines]);

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
          tabIndex={-1}
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

const InputField = React.forwardRef<React.ElementRef<typeof TextInput>, InputFieldProps>(
  ({ className, onBlur, onFocus, asChild = false, ...props }, ref) => {
    const context = React.useContext(InputContext);
    if (!context) {
      throw new Error('InputField must be used within an Input');
    }

    React.useImperativeHandle(
      ref,
      () => {
        if (!context.inputRef?.current) {
          return {} as React.ComponentRef<typeof TextInput>;
        }
        return context.inputRef.current;
      },
      [context.inputRef?.current]
    );

    return (
      <TextInput
        ref={context.inputRef}
        className={cn(
          'flex-1 bg-transparent p-0 outline-none text-base text-neutral-a12',
          context.disabled && 'web:cursor-not-allowed',
          context.multiline && 'native:min-h-[80px]',
          className
        )}
        multiline={context.multiline}
        numberOfLines={context.numberOfLines}
        textAlignVertical={context.multiline ? 'top' : 'center'}
        editable={!context.disabled}
        placeholderTextColor={`var(--color-neutral-a10)`}
        onFocus={(e) => {
          context.setFocused?.(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          context.setFocused?.(false);
          onBlur?.(e);
        }}
        {...props}
      />
    );
  }
);
InputField.displayName = 'InputField';

interface InputIconProps extends React.ComponentPropsWithoutRef<typeof Icon> {
  icon: React.ComponentType<any>;
}

const InputIcon = React.forwardRef<React.ElementRef<typeof Icon>, InputIconProps>(
  ({ className, icon, ...props }, ref) => {
    const context = React.useContext(InputContext);
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
  loadingIcon?: React.ComponentType<any>;
  icon?: React.ComponentType<any>;
}

const InputSpinner = React.forwardRef<React.ElementRef<typeof Icon>, InputSpinnerProps>(
  (props, ref) => {
    const {
      className,
      icon,
      loadingIcon,
      ...otherProps
    } = props;

    const context = React.useContext(InputContext);
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