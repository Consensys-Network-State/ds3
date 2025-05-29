import * as React from 'react';
import Animated, { FadeInDown, FadeOutUp } from 'react-native-reanimated';
import { Checkbox } from "../checkbox";
import { Field, useField } from "../field";
import { AlertCircle, CheckCircle } from 'lucide-react-native';
import type { CheckboxFieldRootProps } from './types';

const CheckboxField = React.forwardRef<any, CheckboxFieldRootProps>(
  (props, ref) => {
    const {
      error,
      label,
      description,
      onCheckedChange,
      checked,
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

    const checkboxRef = React.useRef<any>(null);

    React.useImperativeHandle(
      ref,
      () => {
        if (!checkboxRef.current) {
          return {} as any;
        }
        return checkboxRef.current;
      },
      [checkboxRef.current]
    );

    function handleOnLabelPress() {
      onCheckedChange?.(!checked);
    }

    const fieldStatusColor = error ? "error" : isValid ? "success" : "neutral";
    const fieldColor = color || fieldStatusColor;

    return (
      <Field color={fieldColor}>
        <Field.Row>
          <Checkbox
            ref={checkboxRef}
            onCheckedChange={onCheckedChange}
            checked={checked}
            color={fieldColor}
            {...otherProps}
            {...ariaProps}
          >
            {children}
          </Checkbox>
          {error && <Field.Icon icon={AlertCircle} />}
          {isValid && <Field.Icon icon={CheckCircle} color="success" />}
          {label && (
            <Field.Label nativeID={fieldId} onPress={handleOnLabelPress}>
              {label}
            </Field.Label>
          )}
        </Field.Row>

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

CheckboxField.displayName = 'CheckboxField';

export { CheckboxField };