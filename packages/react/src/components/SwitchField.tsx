import * as React from 'react';
import { Switch } from "./Switch";
import { Field, useField } from "./Field";
import { AlertCircle, CheckCircle } from 'lucide-react-native';
import { RootProps as SwitchProps } from '@rn-primitives/switch';

interface SwitchFieldProps extends SwitchProps {
  error?: string | undefined;
  label?: string;
  description?: string;
  isValid?: boolean;
  children?: React.ReactNode;
  required?: boolean;
}

const SwitchField = React.forwardRef<React.ElementRef<typeof Switch>, SwitchFieldProps>(
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
      ...otherProps
    } = props;

    const { fieldId, descriptionId, ariaProps } = useField({
      error,
      required
    });

    const switchRef = React.useRef<React.ComponentRef<typeof Switch>>(null);

    React.useImperativeHandle(
      ref,
      () => {
        if (!switchRef.current) {
          return {} as React.ComponentRef<typeof Switch>;
        }
        return switchRef.current;
      },
      []
    );

    function handleOnLabelPress() {
      onCheckedChange?.(!checked);
    }

    const fieldColor = error ? "error" : isValid ? "success" : "neutral";

    return (
      <Field color={fieldColor}>
        <Field.Row>
          <Switch
            ref={switchRef}
            onCheckedChange={onCheckedChange}
            checked={checked}
            {...ariaProps}
            {...otherProps}
          >
            {children}
          </Switch>
          {error && <Field.Icon icon={AlertCircle} />}
          {isValid && <Field.Icon icon={CheckCircle} color="green" />}
          {label && (
            <Field.Label nativeID={fieldId} onPress={handleOnLabelPress}>
              {label}
            </Field.Label>
          )}
        </Field.Row>

        {(description || error) && (
          <Field.Description nativeID={descriptionId}>
            {error || description}
          </Field.Description>
        )}
      </Field>
    );
  }
);

SwitchField.displayName = 'SwitchField';

export { SwitchField };