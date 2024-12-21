import { FC, ElementRef, forwardRef } from 'react';
import { useId } from 'react';
import { View } from 'react-native';
import { Label } from "./Label";
import { RadioGroup, RadioGroupItem } from "./RadioGroup";
import { Text } from "./Text";
import Animated, { FadeInDown } from 'react-native-reanimated';
import { RootProps as RadioGroupProps } from '@rn-primitives/radio-group';

interface RadioGroupFieldProps extends RadioGroupProps {
  label?: string;
  description?: string;
  error?: string;
}

const RadioGroupField = forwardRef<ElementRef<typeof RadioGroup>, RadioGroupFieldProps>(
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

        <RadioGroup
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

RadioGroupField.displayName = 'RadioGroupField';

interface RadioGroupFieldItemProps {
  value: string;
  onLabelPress?: () => void;
}

// todo: try to use a ref to set the value on label click
const RadioGroupFieldItem: FC<RadioGroupFieldItemProps> = ({ value, onLabelPress }) => {
  return (
    <View className="flex-row gap-2 items-center">
      <RadioGroupItem aria-labelledby={`label-for-${value}`} value={value} />
      <Label nativeID={`label-for-${value}`} onPress={onLabelPress}>
        {value}
      </Label>
    </View>
  );
};

RadioGroupFieldItem.displayName = 'RadioGroupFieldItem';

export { RadioGroupField, RadioGroupFieldItem };
