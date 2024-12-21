import {
  ElementRef,
  forwardRef,
  useId,
  useImperativeHandle,
  useRef,
  ComponentRef
} from 'react';
import { View } from 'react-native';
import { Text } from "./Text";
import { Label } from "./Label";
import { Switch } from "./Switch";
import Animated, { FadeInDown } from 'react-native-reanimated';
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

    const componentId = useId();
    const fieldId = `${componentId}-field`;
    const fieldErrorId = `${componentId}-field-error`;
    const fieldDescriptionId = `${componentId}-field-description`;

    function handleOnLabelPress() {
      onCheckedChange?.(!checked);
    }

    return (
      <View>
        <View className='flex-row gap-3 items-center'>
          <Switch
            ref={switchRef}
            aria-labelledby={fieldId}
            aria-describedby={!error ? fieldDescriptionId : fieldErrorId}
            aria-invalid={!!error}
            onCheckedChange={onCheckedChange}
            checked={checked}
            {...otherProps}
          />
          {!!label && (
            <Label className='pb-0' nativeID={fieldId} onPress={handleOnLabelPress}>
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

SwitchField.displayName = 'SwitchField';

export { SwitchField };
