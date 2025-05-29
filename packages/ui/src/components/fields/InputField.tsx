import * as React from 'react';
import Animated, { FadeInDown, FadeOutUp } from 'react-native-reanimated';
import { Input } from "../input";
import { Field, useField } from "../field";
import { AlertCircle, CheckCircle } from 'lucide-react-native';
import type { InputFieldRootProps } from './types';

const InputField = React.forwardRef<any, InputFieldRootProps>(
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

      inputRef.current.focus();
    }

    const fieldStatusColor = error ? "error" : isValid ? "success" : "neutral";
    const fieldColor = color || fieldStatusColor;

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
          {...otherProps}
          {...ariaProps}
        >
          {children}
        </Input>

        {(description || error) && (
          <Animated.View
            entering={FadeInDown.duration(200)}
            exiting={FadeOutUp.duration(200)}
          >
            <Field.Description nativeID={descriptionId}>
              {error || description}
            </Field.Description>
          </Animated.View>
        )}
      </Field>
    );
  }
);

InputField.displayName = 'InputField';

export { InputField };