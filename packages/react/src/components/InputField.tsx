import {
    ElementRef,
    forwardRef,
    useRef,
    ComponentRef,
    useImperativeHandle,
    ReactNode
} from 'react';
import { TextInputProps } from 'react-native';
import { Input } from "./Input";
import { Field } from "./Field";
import { AlertCircle } from 'lucide-react-native';

interface InputFieldProps extends TextInputProps {
  error?: string | undefined;
  label?: string;
  children?: ReactNode;
  description?: string;
}

const InputField = forwardRef<ElementRef<typeof Input>, InputFieldProps>(
  (props, ref) => {
    const {
      error,
      label,
      children,
      description,
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

    return (
      <Field color={error ? "error" : "neutral"}>
        {label && (
          <Field.Row>
            {error && <Field.Icon icon={AlertCircle} />}
            <Field.Label onPress={handleOnLabelPress}>
              {label}
            </Field.Label>
          </Field.Row>
        )}
        <Input
          ref={inputRef}
          color={error ? "error" : undefined}
          {...otherProps}
        >
            {children}
        </Input>

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