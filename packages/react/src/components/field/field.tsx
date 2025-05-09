import * as React from 'react';
import { View } from 'react-native';
import { Icon } from '../icon';
import { Label } from '../Label';
import { Text } from '../Text';
import { cn } from '../../utils';
import { fieldVariants } from './styles';
import { Animate } from '../animate';
import type { FieldRootProps, FieldIconProps, FieldItemProps, UseFieldProps } from './types';
import { getNativeFieldAccessibilityProps, getNativeFieldElementAccessibilityProps } from './utils';

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
    ...getNativeFieldAccessibilityProps({ error, required }),
    ...getNativeFieldElementAccessibilityProps({
      id: ids.fieldId,
      describedBy: ids.descriptionId,
      labelledBy: ids.fieldId,
    }),
    ...extraAriaProps
  }), [ids.fieldId, ids.descriptionId, error, required, extraAriaProps]);

  return {
    fieldId: ids.fieldId,
    descriptionId: ids.descriptionId,
    ariaProps,
  };
}

const FieldContext = React.createContext<{
  color?: FieldRootProps['color'];
} | undefined>(undefined);

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
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(FieldContext);
  if (!context) {
    throw new Error('FieldDescription must be used within a Field');
  }

  if (!children) return null;

  return (
    <Text
      ref={ref}
      accessibilityRole="text"
      className={cn(
        'text-sm',
        fieldVariants({ color: context.color }),
        className
      )}
      {...props}
    >
      {children}
    </Text>
  );
});
FieldDescription.displayName = 'Field.Description';

const FieldRow = React.forwardRef<View, FieldItemProps>(
  ({ id, children, className, ...props }, ref) => {
    return (
      <View
        ref={ref}
        className={cn('flex flex-row items-center gap-2', className)}
        {...props}
      >
        {children}
      </View>
    );
  }
);
FieldRow.displayName = 'Field.Row';

const Field = Object.assign(FieldRoot, {
  Icon: FieldIcon,
  Label: FieldLabel,
  Description: FieldDescription,
  Row: FieldRow,
});

export { Field }; 