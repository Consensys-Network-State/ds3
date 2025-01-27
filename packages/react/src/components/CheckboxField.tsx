import { forwardRef, ElementRef } from 'react';
import { Field } from "./Field";
import { Checkbox } from "./Checkbox";
import { AlertCircle } from 'lucide-react-native';
import { RootProps as CheckboxProps } from '@rn-primitives/checkbox';

interface CheckboxFieldProps extends CheckboxProps {
  error?: string | undefined;
  label?: string;
  description?: string;
}

const CheckboxField = forwardRef<ElementRef<typeof Checkbox>, CheckboxFieldProps>(
  (props, ref) => {
    const {
      error,
      label,
      description,
      onCheckedChange,
      checked,
      ...otherProps
    } = props;

    function handleOnLabelPress() {
      onCheckedChange?.(!checked);
    }

    return (
      <Field color={error ? "error" : "neutral"}>
        <Field.Row>
          <Checkbox
            ref={ref}
            onCheckedChange={onCheckedChange}
            checked={checked}
            {...otherProps}
          />
          {error && <Field.Icon icon={AlertCircle} />}
          {label && (
            <Field.Label onPress={handleOnLabelPress}>
              {label}
            </Field.Label>
          )}
        </Field.Row>

        {(description || error) && (
          <Field.Description>
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