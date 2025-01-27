import { ElementRef, forwardRef } from "react";
import { Field } from "./Field";
import { Select } from "./Select";
import { AlertCircle } from 'lucide-react-native';
import { RootProps as SelectProps } from '@rn-primitives/select';

interface SelectFieldProps extends SelectProps {
  label?: string;
  description?: string;
  error?: string;
}

const SelectField = forwardRef<ElementRef<typeof Select>, SelectFieldProps>(
  (props, ref) => {
    const {
      error,
      label,
      description,
      ...otherProps
    } = props;

    return (
      <Field color={error ? "error" : "neutral"}>
        {label && (
          <Field.Row>
            {error && <Field.Icon icon={AlertCircle} />}
            <Field.Label>
              {label}
            </Field.Label>
          </Field.Row>
        )}

        <Select
          ref={ref}
          {...otherProps}
        />

        {(description || error) && (
          <Field.Description>
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