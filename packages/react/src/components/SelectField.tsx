import * as React from "react";
import { Field, useField } from "./field";
import { Select } from "./Select";
import { AlertCircle, CheckCircle } from 'lucide-react-native';
import { RootProps as SelectProps } from '@rn-primitives/select';

interface SelectFieldProps extends SelectProps {
  label?: string;
  description?: string;
  error?: string;
  isValid?: boolean;
  children?: React.ReactNode;
  required?: boolean;
}

const SelectField = React.forwardRef<React.ElementRef<typeof Select>, SelectFieldProps>(
  (props, ref) => {
    const {
      error,
      label,
      description,
      isValid,
      children,
      required,
      ...otherProps
    } = props;

    const { fieldId, descriptionId, ariaProps } = useField({
      error,
      required
    });

    const fieldColor = error ? "error" : isValid ? "success" : "neutral";

    return (
      <Field color={fieldColor}>
        {label && (
          <Field.Row>
            {error && <Field.Icon icon={AlertCircle} />}
            {isValid && <Field.Icon icon={CheckCircle} color="success" />}
            <Field.Label nativeID={fieldId}>
              {label}
            </Field.Label>
          </Field.Row>
        )}

        <Select
          ref={ref}
          {...ariaProps}
          {...otherProps}
        >
          {children}
        </Select>

        {(description || error) && (
          <Field.Description nativeID={descriptionId}>
            {error || description}
          </Field.Description>
        )}
      </Field>
    );
  }
);

SelectField.displayName = 'SelectField';

export { SelectField };
export type { SelectFieldProps };