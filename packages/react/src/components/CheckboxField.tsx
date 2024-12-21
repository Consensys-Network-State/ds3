import { useId, forwardRef, ElementRef } from 'react';
import { View } from 'react-native';
import { Text } from "./Text";
import { Label } from "./Label";
import { Checkbox } from "./Checkbox";
import Animated, { FadeInDown } from 'react-native-reanimated';
import { RootProps as CheckboxProps } from '@rn-primitives/checkbox';

interface CheckboxFieldProps extends CheckboxProps {
  error?: string | undefined;
  label?: string;
  description?: string;
}

const CheckboxField = forwardRef<ElementRef<typeof Checkbox>, CheckboxFieldProps>(
  (props, ref) => {

    const {
      error,
      label,
      description,
      onCheckedChange,
      checked,
      ...otherProps
    } = props;

    const componentId = useId();
    const fieldId = `${componentId}-field`;
    const fieldErrorId = `${componentId}-field-error`;
    const fieldDescriptionId = `${componentId}-field-description`;

    function handleOnLabelPress() {
      onCheckedChange?.(!checked);
    }

    return (
      <View>
        <View className="flex-row gap-3 items-center">
          <Checkbox
            ref={ref} // Forwarding the ref to the Checkbox
            aria-labelledby={fieldId}
            aria-describedby={!error ? fieldDescriptionId : fieldErrorId}
            aria-invalid={!!error}
            onCheckedChange={onCheckedChange}
            checked={checked}
            {...otherProps}
          />

          {label && (
            <Label
              nativeID={fieldId}
              onPress={handleOnLabelPress}
            >
              {label}
            </Label>
          )}
        </View>

        {description && !error && (
          <Animated.View entering={FadeInDown}>
            <Text nativeID={fieldDescriptionId}>
              {description}
            </Text>
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

CheckboxField.displayName = 'CheckboxField';

export { CheckboxField };
