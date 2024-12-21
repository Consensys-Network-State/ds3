import { ElementRef, forwardRef, useId } from "react";
import { Text } from "./Text";
import { Label } from "./Label";
import { Select } from "./Select";
import { View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { RootProps as SelectProps } from '@rn-primitives/select';

interface SelectFieldProps extends SelectProps{
  label?: string;
  description?: string;
  error?: string;
}

// todo: get label to open select using trigger ref
const SelectField = forwardRef<ElementRef<typeof Select>, SelectFieldProps>(
  (props, ref) => {

    const {
      error,
      label,
      description,
      ...otherProps
    } = props;

    const componentId = useId();
    const fieldId = `${componentId}-field`;
    const fieldErrorId = `${componentId}-field-error`;
    const fieldDescriptionId = `${componentId}-field-description`;

    return (
      <View>
        {label && <Label nativeID={fieldId}>{label}</Label>}

        <Select
          ref={ref}
          aria-labelledby={fieldId}
          aria-describedby={!error ? fieldDescriptionId : fieldErrorId}
          aria-invalid={!!error}
          {...otherProps}
        />

        {description && !error && (
          <Animated.View entering={FadeInDown}>
            <Text nativeID={fieldDescriptionId}>{description}</Text>
          </Animated.View>
        )}

        {error && (
          <Animated.View entering={FadeInDown}>
            <Text className="text-destructive" nativeID={fieldErrorId}>
              {error}
            </Text>
          </Animated.View>
        )}
      </View>
    );
  }
);

SelectField.displayName = 'SelectField';
export { SelectField };