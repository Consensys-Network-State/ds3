import { FC, ElementRef, forwardRef } from 'react';
import { Field } from "./Field";
import { RadioGroup, RadioGroupItem } from "./RadioGroup";
import { AlertCircle } from 'lucide-react-native';
import { RootProps as RadioGroupProps } from '@rn-primitives/radio-group';

interface RadioGroupFieldProps extends RadioGroupProps {
  label?: string;
  description?: string;
  error?: string;
}

const RadioGroupField = forwardRef<ElementRef<typeof RadioGroup>, RadioGroupFieldProps>(
  (props, ref) => {
    const {
      error,
      label,
      description,
      children,
      ...otherProps
    } = props;

    return (
      <Field color={error ? "error" : "neutral"}>
        {label && (
          <Field.Row>
            {error && <Field.Icon icon={AlertCircle} />}
            <Field.Label>{label}</Field.Label>
          </Field.Row>
        )}

        <RadioGroup
          ref={ref}
          {...otherProps}
        >
          {children}
        </RadioGroup>

        {(description || error) && (
          <Field.Description>
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

const RadioGroupFieldItem: FC<RadioGroupFieldItemProps> = ({
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