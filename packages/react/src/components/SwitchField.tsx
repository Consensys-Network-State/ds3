import {
  ElementRef,
  forwardRef,
  useImperativeHandle,
  useRef,
  ComponentRef
} from 'react';
import { Switch } from "./Switch";
import { Field } from "./Field";
import { AlertCircle } from 'lucide-react-native';
import { RootProps as SwitchProps } from '@rn-primitives/switch';

interface SwitchFieldProps extends SwitchProps {
  error?: string | undefined;
  label?: string;
  description?: string;
}

const SwitchField = forwardRef<ElementRef<typeof Switch>, SwitchFieldProps>(
  (props, ref) => {
    const {
      error,
      label,
      description,
      onCheckedChange,
      checked,
      ...otherProps
    } = props;

    const switchRef = useRef<ComponentRef<typeof Switch>>(null);

    useImperativeHandle(
      ref,
      () => {
        if (!switchRef.current) {
          return {} as ComponentRef<typeof Switch>;
        }
        return switchRef.current;
      },
      [switchRef.current]
    );

    function handleOnLabelPress() {
      onCheckedChange?.(!checked);
    }

    return (
      <Field color={error ? "error" : "neutral"}>
        <Field.Row>
          <Switch
            ref={switchRef}
            onCheckedChange={onCheckedChange}
            checked={checked}
            {...otherProps}
          />
          {error && <Field.Icon icon={AlertCircle} />}
          {label && (
            <Field.Label onPress={handleOnLabelPress}>
              {label}
            </Field.Label>
          )}
        </Field.Row>

        {(description || error) && (
          <Field.Description>
            {error || description}
          </Field.Description>
        )}
      </Field>
    );
  }
);

SwitchField.displayName = 'SwitchField';

export { SwitchField };