import * as React from 'react';
import Animated, { FadeInDown, FadeOutUp } from 'react-native-reanimated';
import { Switch } from "../switch";
import { Field, useField } from "../field";
import { AlertCircle, CheckCircle } from 'lucide-react-native';
import type { SwitchFieldRootProps } from './types';

const SwitchField = React.forwardRef<any, SwitchFieldRootProps>(
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

    const switchRef = React.useRef<any>(null);

    React.useImperativeHandle(
      ref,
      () => {
        if (!switchRef.current) {
          return {} as any;
        }
        return switchRef.current;
      },
      [switchRef.current]
    );

    function handleOnLabelPress() {
      if (!switchRef.current) {
        return;
      }
      otherProps.onCheckedChange?.(!otherProps.checked);
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

        <Switch
          ref={switchRef}
          color={fieldColor}
          {...otherProps}
          {...ariaProps}
        >
          {children}
        </Switch>

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

SwitchField.displayName = 'SwitchField';

export { SwitchField }; 