import React, { useId, useRef } from 'react';
import { View, TextInput, TextInputProps } from 'react-native';
import { Input } from "./Input";
import { Label } from "./Label";
import { Text } from "./Text";
import Animated, { FadeInDown } from 'react-native-reanimated';

interface InputFieldProps extends TextInputProps {
  error?: string | undefined;
  label?: string;
  description?: string;
}

const InputField: React.FC<InputFieldProps> = (props) => {
  const { error, label, description, ...otherProps } = props;

  const inputRef = useRef<TextInput>(null);
  const componentId = useId();
  const fieldId = `${componentId}-field`;
  const fieldErrorId = `${componentId}-field-error`;
  const fieldDescriptionId = `${componentId}-field-description`;

  function handleOnLabelPress() {
    if (!inputRef.current) {
      return;
    }
    if (inputRef.current.isFocused()) {
      inputRef.current.blur();
    } else {
      inputRef.current.focus();
    }
  }

  return (
    <View>
      {label && (
        <Label
          nativeID={fieldId}
          onPress={handleOnLabelPress}
        >
          {label}
        </Label>
      )}

      <Input
        ref={inputRef}
        aria-labelledby={fieldId}
        aria-describedby={!error ? fieldDescriptionId : fieldErrorId}
        aria-invalid={!!error}
        {...otherProps}
      />

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
};

InputField.displayName = 'InputField';

export { InputField };
