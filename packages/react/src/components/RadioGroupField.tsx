import * as React from 'react';
import { Field, useField } from "./Field";
import { RadioGroup, RadioGroupItem } from "./RadioGroup";
import { AlertCircle, CheckCircle } from 'lucide-react-native';
import { RootProps as RadioGroupProps } from '@rn-primitives/radio-group';

interface RadioGroupFieldProps extends RadioGroupProps {
  label?: string;
  description?: string;
  error?: string;
  isValid?: boolean;
  children?: React.ReactNode;
  required?: boolean;
}

const RadioGroupField = React.forwardRef<React.ElementRef<typeof RadioGroup>, RadioGroupFieldProps>(
  (props, ref) => {
    const {
      error,
      label,
      description,
      children,
      isValid,
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
            <Field.Label nativeID={fieldId}>{label}</Field.Label>
          </Field.Row>
        )}

        <RadioGroup
          ref={ref}
          {...ariaProps}
          {...otherProps}
        >
          {children}
        </RadioGroup>

        {(description || error) && (
          <Field.Description nativeID={descriptionId}>
            {error || description}
          </Field.Description>
        )}
      </Field>
    );
  }
);

RadioGroupField.displayName = 'RadioGroupField';

interface RadioGroupFieldItemProps {
  value: string;
  label: string;
  onLabelPress?: () => void;
}

const RadioGroupFieldItem: React.FC<RadioGroupFieldItemProps> = ({
                                                             label,
                                                             value,
                                                             onLabelPress
                                                           }) => {
  return (
    <Field.Row className="gap-2">
      <RadioGroupItem value={value} />
      <Field.Label onPress={onLabelPress}>
        {label || value}
      </Field.Label>
    </Field.Row>
  );
};

RadioGroupFieldItem.displayName = 'RadioGroupFieldItem';

const ComposedRadioGroupField = Object.assign(RadioGroupField, {
  Item: RadioGroupFieldItem
});

export { ComposedRadioGroupField as RadioGroupField };
export type { RadioGroupFieldProps, RadioGroupFieldItemProps };