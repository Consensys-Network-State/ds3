import {
  ElementRef,
  forwardRef,
  useId,
  useRef,
  useImperativeHandle,
  ComponentRef
} from 'react';
import { View, TextInputProps } from 'react-native';
import { Label } from "./Label";
import { Text } from "./Text";
import { TextArea } from "./TextArea";
import Animated, { FadeInDown } from 'react-native-reanimated';

interface TextAreaFieldProps extends TextInputProps {
  error?: string | undefined;
  label?: string;
  description?: string;
}

const TextAreaField = forwardRef<ElementRef<typeof TextArea>, TextAreaFieldProps>(
  (props, ref) => {

    const { error, label, description, ...otherProps } = props;

    const textareaRef = useRef<ComponentRef<typeof TextArea>>(null);

    useImperativeHandle(
      ref,
      () => {
        if (!textareaRef.current) {
          return {} as ComponentRef<typeof TextArea>;
        }
        return textareaRef.current;
      },
      [textareaRef.current]
    );

    const componentId = useId();
    const fieldId = `${componentId}-field`;
    const fieldErrorId = `${componentId}-field-error`;
    const fieldDescriptionId = `${componentId}-field-description`;

    function handleOnLabelPress() {
      if (!textareaRef.current) {
        return;
      }
      if (textareaRef.current.isFocused()) {
        textareaRef.current.blur();
      } else {
        textareaRef.current.focus();
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

        <TextArea
          ref={textareaRef}
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
  }
);

TextAreaField.displayName = 'TextAreaField';

export { TextAreaField };
