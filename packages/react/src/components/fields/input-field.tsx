import * as React from 'react';
import { Platform } from 'react-native';
import { Input, InputRootProps } from "../input";
import { Field, useField } from "../field";
import { AlertCircle, CheckCircle } from 'lucide-react-native';
import { getAccessibilityProps, getNativeAccessibilityProps } from '../input/utils';
import { Animate } from '../animate';

interface InputFieldProps extends InputRootProps {
  error?: string | undefined;
  label?: string;
  description?: string;
  isValid?: boolean;
  children?: React.ReactNode;
  required?: boolean;
}

const InputField = React.forwardRef<any, InputFieldProps>(
  (props, ref) => {
    const {
      error,
      label,
      description,
      isValid,
      children,
      required,
      color,
      ...otherProps
    } = props;

    const { fieldId, descriptionId, ariaProps } = useField({
      error,
      required
    });

    const inputRef = React.useRef<any>(null);

    React.useImperativeHandle(
      ref,
      () => {
        if (!inputRef.current) {
          return {} as any;
        }
        return inputRef.current;
      },
      [inputRef.current]
    );

    function handleOnLabelPress() {
      if (!inputRef.current) {
        return;
      }

      debugger;
      // The Input component handles focus internally through its context
      if (Platform.OS === 'web') {
        inputRef.current.focus();
      } else {
        inputRef.current.focus();
      }
    }

    const fieldStatusColor = error ? "error" : isValid ? "success" : "neutral";
    const fieldColor = color || fieldStatusColor;

    // Get platform-specific accessibility props
    const accessibilityProps = Platform.OS === 'web' 
      ? getAccessibilityProps(otherProps as any)
      : getNativeAccessibilityProps(otherProps as any);

    return (
      <Field color={fieldColor}>
        {label && (
          <Field.Row>
            {error && <Field.Icon icon={AlertCircle} />}
            {isValid && <Field.Icon icon={CheckCircle} color="success" />}
            <Field.Label onPress={handleOnLabelPress} nativeID={fieldId}>
              {label}
            </Field.Label>
          </Field.Row>
        )}

        <Input
          ref={inputRef}
          color={fieldColor}
          {...accessibilityProps}
          {...otherProps}
        >
          {children}
        </Input>

        {(description || error) && (
          <Animate type="fadeDown" duration={200} show={true}>
            <Field.Description nativeID={descriptionId}>
              {error || description}
            </Field.Description>
          </Animate>
        )}
      </Field>
    );
  }
);

InputField.displayName = 'InputField';

export { InputField };
export type { InputFieldProps };