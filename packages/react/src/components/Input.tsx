import * as React from 'react';
import { TextInput, Pressable, KeyboardTypeOptions } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import * as Slot from '@rn-primitives/slot';
import { Icon } from './Icon';
import { Spinner, SpinnerProps } from './Spinner';
import { cn } from '../utils';
import { Text } from "./Text";
import { SlottableTextProps, TextRef } from '@rn-primitives/types';

const inputRootVariants = cva(
  'flex flex-row items-center gap-3 rounded-4',
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
      size: {
        sm: 'px-2.5 py-[0.34375rem]',
        md: 'px-3 py-2',
        lg: 'px-3.5 py-[0.65625rem]',
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

      // Hover states
      { color: 'neutral', focused: false, disabled: false, class: 'web:hover:border-neutral-a8' },
      { color: 'primary', focused: false, disabled: false, class: 'web:hover:border-primary-a8' },
      { color: 'secondary', focused: false, disabled: false, class: 'web:hover:border-secondary-a8' },
      { color: 'error', focused: false, disabled: false, class: 'web:hover:border-error-a8' },
      { color: 'warning', focused: false, disabled: false, class: 'web:hover:border-warning-a8' },
      { color: 'success', focused: false, disabled: false, class: 'web:hover:border-success-a8' },

      // Focus states
      { color: 'neutral', focused: true, disabled: false, class: 'border-neutral-a9' },
      { color: 'primary', focused: true, disabled: false, class: 'border-primary-a9' },
      { color: 'secondary', focused: true, disabled: false, class: 'border-secondary-a9' },
      { color: 'error', focused: true, disabled: false, class: 'border-error-a9' },
      { color: 'warning', focused: true, disabled: false, class: 'border-warning-a9' },
      { color: 'success', focused: true, disabled: false, class: 'border-success-a9' },
    ],
    defaultVariants: {
      variant: 'outline',
      color: 'neutral',
      size: 'md',
      disabled: false,
      focused: false,
    },
  }
);

const inputIconVariants = cva(
  'flex-shrink-0',
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
      size: {
        sm: 'h-3.5 w-3.5',
        md: 'h-4 w-4',
        lg: 'h-5 w-5',
      },
      disabled: {
        true: 'opacity-40',
        false: null,
      }
    },
    defaultVariants: {
      color: 'neutral',
      size: 'md',
      disabled: false,
    },
  }
);

const inputTextVariants = cva('', {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const InputContext = React.createContext<{
  variant?: VariantProps<typeof inputRootVariants>['variant'];
  color?: VariantProps<typeof inputRootVariants>['color'];
  size?: VariantProps<typeof inputRootVariants>['size'];
  disabled?: boolean;
  loading?: boolean;
  readOnly?: boolean; // Add readOnly to context
  focused?: boolean;
  setFocused?: (focused: boolean) => void;
  inputRef?: React.RefObject<React.ElementRef<typeof TextInput>>;
  fieldProps?: Omit<React.ComponentPropsWithoutRef<typeof TextInput>, 'className'>;
} | undefined>(undefined);

interface InputRootProps extends
  Omit<React.ComponentPropsWithoutRef<typeof TextInput>,
    keyof VariantProps<typeof inputRootVariants> |
    'editable' |
    'textAlignVertical'
  > {
  variant?: VariantProps<typeof inputRootVariants>['variant'];
  color?: VariantProps<typeof inputRootVariants>['color'];
  accentColor?: VariantProps<typeof inputRootVariants>['color'];
  size?: VariantProps<typeof inputRootVariants>['size'];
  disabled?: boolean;

  // TODO: Investigate why Vite Frontend isn't getting these types from TextInput
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  value?: string;
  multiline?: boolean;
  numberOfLines?: number;
  className?: string;
  // -----------------

  loading?: boolean;
  readOnly?: boolean; // Add readOnly prop
  asChild?: boolean;
  children?: React.ReactNode;
}

const InputRoot = React.forwardRef<React.ElementRef<typeof TextInput>, InputRootProps>(
  ({
     className,
     variant,
     color,
     accentColor,
     size,
     disabled = false,
     loading = false,
     readOnly = false,
     asChild = false,
     children,
     ...fieldProps
   }, ref) => {
    const internalInputRef = React.useRef<React.ElementRef<typeof TextInput>>(null);
    const [focused, setFocused] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);

    const inputRef = (ref as React.RefObject<React.ElementRef<typeof TextInput>>) || internalInputRef;
    const effectiveColor = (focused || isHovered) && accentColor ? accentColor : color;

    const contextValue = React.useMemo(() => ({
      variant,
      color: effectiveColor,
      size,
      disabled,
      loading,
      readOnly,
      focused,
      setFocused,
      inputRef,
      fieldProps
    }), [variant, effectiveColor, size, disabled, loading, readOnly, focused, fieldProps]);

    const Component = asChild ? Slot.Pressable : Pressable;

    const handlePress = () => {
      if (!disabled && !loading && inputRef.current) {
        inputRef.current.focus();
      }
    };

    return (
      <InputContext.Provider value={contextValue}>
        <Component
          className={cn(
            inputRootVariants({ variant, color: effectiveColor, size, disabled, focused }),
            readOnly && 'web:cursor-text',
            className,
          )}
          onPress={handlePress}
          onHoverIn={() => setIsHovered(true)}
          onHoverOut={() => setIsHovered(false)}
          tabIndex={-1}
        >
          {children || <InputField />}
        </Component>
      </InputContext.Provider>
    );
  }
);
InputRoot.displayName = 'Input';

interface InputFieldProps {
  className?: string;
}

const InputField = ({ className }: InputFieldProps) => {
  const context = React.useContext(InputContext);
  if (!context) {
    throw new Error('InputField must be used within an Input');
  }

  const { fieldProps = {}, setFocused, disabled, readOnly, size, loading, inputRef } = context;
  const { multiline, onFocus, onBlur, accessibilityState, ...otherProps } = fieldProps;

  return (
    <TextInput
      ref={inputRef}
      className={cn(
        'flex-1 bg-transparent p-0 outline-none text-neutral-a12 placeholder:text-neutral-a10',
        inputTextVariants({ size }),
        disabled && 'web:cursor-not-allowed',
        readOnly && 'web:cursor-text',
        multiline && 'native:min-h-[80px]',
        className
      )}
      multiline={multiline}
      textAlignVertical={multiline ? 'top' : 'center'}
      editable={!disabled && !readOnly}
      selectTextOnFocus={readOnly}
      onFocus={(e) => {
        setFocused?.(true);
        onFocus?.(e);
      }}
      onBlur={(e) => {
        setFocused?.(false);
        onBlur?.(e);
      }}

      // a11y web
      aria-multiline={multiline}
      aria-disabled={disabled}
      aria-busy={loading}

      // a11y native
      accessibilityState={{
        ...accessibilityState,
        disabled,
        busy: loading,
      }}

      {...otherProps}
    />
  );
};
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
            size: context.size,
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
              size: context.size,
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
              size: context.size,
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

const InputText = React.forwardRef<TextRef, SlottableTextProps>(
  (props, ref) => (
    <Text
      ref={ref}
      {...props}
    />
  )
);
InputText.displayName = 'InputText';

const Input = Object.assign(InputRoot, {
  Field: InputField,
  Text: InputText,
  Icon: InputIcon,
  Spinner: InputSpinner,
});

export { Input, inputRootVariants, inputIconVariants, inputTextVariants };
export type { InputRootProps, InputFieldProps, InputIconProps };