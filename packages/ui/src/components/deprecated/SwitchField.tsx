import * as React from 'react';
import { Switch, SwitchRootProps } from "./Switch";
import { Field, useField } from "./Field";
import { AlertCircle, CheckCircle } from 'lucide-react-native';

interface SwitchFieldProps extends SwitchRootProps {
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
      color,
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

    const fieldStatusColor = error ? "error" : isValid ? "success" : "neutral";
    const fieldColor = color || fieldStatusColor;

    return (
      <Field color={fieldColor}>
        <Field.Row>
          <Switch
            ref={switchRef}
            onCheckedChange={onCheckedChange}
            checked={checked}
            color={fieldColor}
            {...ariaProps}
            {...otherProps}
          >
            {children}
          </Switch>
          {error && <Field.Icon icon={AlertCircle} />}
          {isValid && <Field.Icon icon={CheckCircle} color="success" />}
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
export type { SwitchFieldProps };