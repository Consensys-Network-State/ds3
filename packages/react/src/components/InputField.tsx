import * as React from 'react';
import { TextInputProps } from 'react-native';
import { Input } from "./Input";
import { Field, useField } from "./Field";
import { AlertCircle, CheckCircle } from 'lucide-react-native';

interface InputFieldProps extends TextInputProps {
  error?: string | undefined;
  label?: string;
  description?: string;
  isValid?: boolean;
  children?: React.ReactNode;
  required?: boolean;
}

const InputField = React.forwardRef<React.ElementRef<typeof Input>, InputFieldProps>(
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

    const inputRef = React.useRef<React.ComponentRef<typeof Input>>(null);

    React.useImperativeHandle(
      ref,
      () => {
        if (!inputRef.current) {
          return {} as React.ComponentRef<typeof Input>;
        }
        return inputRef.current;
      },
      [inputRef.current]
    );

    function handleOnLabelPress() {
      if (!inputRef.current) {
        return;
      }
      if (inputRef.current.isFocused()) {
        inputRef.current.blur();
      } else {
        inputRef.current.focus();
      }
    }

    const fieldColor = error ? "error" : isValid ? "success" : "neutral";

    return (
      <Field color={fieldColor}>
        {label && (
          <Field.Row>
            {error && <Field.Icon icon={AlertCircle} />}
            {isValid && <Field.Icon icon={CheckCircle} color="green" />}
            <Field.Label onPress={handleOnLabelPress} nativeID={fieldId}>
              {label}
            </Field.Label>
          </Field.Row>
        )}

        <Input
          ref={inputRef}
          color={fieldColor}
          {...ariaProps}
          {...otherProps}
        >
          {children}
        </Input>

        {(description || error) && (
          <Field.Description nativeID={descriptionId}>
            {error || description}
          </Field.Description>
        )}
      </Field>
    );
  }
);

InputField.displayName = 'InputField';

export { InputField };
export type { InputFieldProps };