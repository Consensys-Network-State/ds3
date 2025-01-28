import {
  ElementRef,
  forwardRef,
  useRef,
  ComponentRef,
  useImperativeHandle
} from 'react';
import { TextInputProps } from 'react-native';
import { Input } from "./Input";
import { Field } from "./Field";
import { AlertCircle, CheckCircle } from 'lucide-react-native';

interface InputFieldProps extends TextInputProps {
  error?: string | undefined;
  label?: string;
  description?: string;
  isValid?: boolean;
}

const InputField = forwardRef<ElementRef<typeof Input>, InputFieldProps>(
  (props, ref) => {
    const {
      error,
      label,
      description,
      isValid,
      ...otherProps
    } = props;

    const inputRef = useRef<ComponentRef<typeof Input>>(null);

    useImperativeHandle(
      ref,
      () => {
        if (!inputRef.current) {
          return {} as ComponentRef<typeof Input>;
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
            <Field.Label onPress={handleOnLabelPress}>
              {label}
            </Field.Label>
          </Field.Row>
        )}

        <Input
          ref={inputRef}
          color={fieldColor}
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

InputField.displayName = 'InputField';

export { InputField };