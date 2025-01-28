import * as React from 'react';
import { View } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { Icon } from './Icon';
import { Label } from './Label';
import { Text } from './Text';
import { cn } from '../utils';
import Animated, { FadeInDown } from 'react-native-reanimated';

interface UseFieldProps {
  error?: string;
  required?: boolean;
  ariaProps?: Record<string, any>;
}

export function useField({
 error,
 required,
 ariaProps: extraAriaProps = {},
}: UseFieldProps = {}) {

  const id = React.useId();

  const ids = React.useMemo(() => ({
    fieldId: `${id}-field`,
    descriptionId: `${id}-description`,
  }), [id]);

  const ariaProps = React.useMemo(() => ({
    accessible: true,
    'aria-labelledby': ids.fieldId,
    accessibilityLabelledBy: ids.fieldId,
    'aria-describedby': ids.descriptionId,
    accessibilityDescribedBy: ids.descriptionId,
    'aria-invalid': !!error,
    'aria-required': !!required,
    ...extraAriaProps
  }), [ids.fieldId, ids.descriptionId, error, required, extraAriaProps]);

  return {
    fieldId: ids.fieldId,
    descriptionId: ids.descriptionId,
    ariaProps,
  };
}

const fieldVariants = cva('', {
  variants: {
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
    color: 'neutral',
  },
});

const FieldContext = React.createContext<{
  color?: VariantProps<typeof fieldVariants>['color'];
} | undefined>(undefined);

interface FieldRootProps {
  color?: VariantProps<typeof fieldVariants>['color'];
  onLabelPress?: () => void;
  children?: React.ReactNode;
  className?: string;
}

const FieldRoot = React.forwardRef<View, FieldRootProps>(
  ({ color, children, className, ...props }, ref) => {
    const contextValue = React.useMemo(
      () => ({
        color,
      }),
      [color]
    );

    return (
      <FieldContext.Provider value={contextValue}>
        <View ref={ref} className={cn('space-y-1.5', className)} {...props}>
          {children}
        </View>
      </FieldContext.Provider>
    );
  }
);
FieldRoot.displayName = 'Field';

interface FieldIconProps extends React.ComponentPropsWithoutRef<typeof Icon> {
  icon: React.ComponentType<any>;
}

const FieldIcon = React.forwardRef<React.ElementRef<typeof Icon>, FieldIconProps>(
  ({ className, icon, ...props }, ref) => {
    const context = React.useContext(FieldContext);
    if (!context) {
      throw new Error('FieldIcon must be used within a Field');
    }

    return (
      <Icon
        ref={ref}
        icon={icon}
        className={cn(
          'h-4 w-4 flex-shrink-0',
          fieldVariants({ color: context.color }),
          className
        )}
        {...props}
      />
    );
  }
);
FieldIcon.displayName = 'Field.Icon';

const FieldLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => {
  const context = React.useContext(FieldContext);
  if (!context) {
    throw new Error('FieldLabel must be used within a Field');
  }

  return (
    <Label
      ref={ref}
      className={cn(
        'flex-1',
        fieldVariants({ color: context.color }),
        className
      )}
      {...props}
    />
  );
});
FieldLabel.displayName = 'Field.Label';

const FieldDescription = React.forwardRef<
  React.ElementRef<typeof Text>,
  React.ComponentPropsWithoutRef<typeof Text>
>(({ className, ...props }, ref) => {
  const context = React.useContext(FieldContext);
  if (!context) {
    throw new Error('FieldDescription must be used within a Field');
  }

  return (
    <Animated.View entering={FadeInDown}>
      <Text
        ref={ref}
        accessibilityRole="text"
        className={cn(
          'text-sm',
          fieldVariants({ color: context.color }),
          className
        )}
        {...props}
      />
    </Animated.View>
  );
});
FieldDescription.displayName = 'Field.Description';

interface FieldItemProps {
  id?: string;
  children?: React.ReactNode;
  className?: string;
}

const FieldRow = React.forwardRef<
  View,
  FieldItemProps
>(({ id, children, className, ...props }, ref) => {
  return (
    <View
      ref={ref}
      className={cn('flex flex-row items-center gap-2', className)}
      {...props}
    >
      {children}
    </View>
  );
});
FieldRow.displayName = 'Field.Row';

const Field = Object.assign(FieldRoot, {
  Icon: FieldIcon,
  Label: FieldLabel,
  Description: FieldDescription,
  Row: FieldRow,
});

export { Field, fieldVariants };
export type { FieldRootProps, FieldIconProps };