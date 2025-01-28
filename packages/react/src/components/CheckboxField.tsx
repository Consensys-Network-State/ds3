import * as React from 'react';
import { Field, useField } from "./Field";
import { Checkbox } from "./Checkbox";
import { AlertCircle, CheckCircle } from 'lucide-react-native';
import { RootProps as CheckboxProps } from '@rn-primitives/checkbox';

interface CheckboxFieldProps extends CheckboxProps {
  error?: string | undefined;
  label?: string;
  description?: string;
  isValid?: boolean;
  children?: React.ReactNode;
  required?: boolean;
}

const CheckboxField = React.forwardRef<React.ElementRef<typeof Checkbox>, CheckboxFieldProps>(
  (props, ref) => {
    const {
      error,
      label,
      description,
      onCheckedChange,
      checked,
      isValid,
      children,
      required,
      ...otherProps
    } = props;

    const { fieldId, descriptionId, ariaProps } = useField({
      error,
      required
    });

    function handleOnLabelPress() {
      onCheckedChange?.(!checked);
    }

    const fieldColor = error ? "error" : isValid ? "success" : "neutral";

    return (
      <Field color={fieldColor}>
        <Field.Row>
          <Checkbox
            ref={ref}
            onCheckedChange={onCheckedChange}
            checked={checked}
            {...ariaProps}
            {...otherProps}
          >
            {children}
          </Checkbox>
          {error && <Field.Icon icon={AlertCircle} />}
          {isValid && <Field.Icon icon={CheckCircle} color="green" />}
          {label && (
            <Field.Label nativeID={fieldId} onPress={handleOnLabelPress}>
              {label}
            </Field.Label>
          )}
        </Field.Row>

        {(description || error) && (
          <Field.Description nativeID={descriptionId}>
            {error || description}
          </Field.Description>
        )}
      </Field>
    );
  }
);

CheckboxField.displayName = 'CheckboxField';

export { CheckboxField };
export type { CheckboxFieldProps };