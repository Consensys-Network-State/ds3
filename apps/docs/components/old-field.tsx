import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Card, Field, InputField, Input, SwitchField, CheckboxField, Checkbox } from '@consensys/ds3/src';
import { Figma, X, Check } from 'lucide-react-native';

const DemoComponent = () => (
  <Card className="p-4 bg-neutral-3">
    <Text className="text-neutral-11">Insert component here</Text>
  </Card>
);

const fieldColors = [
  'neutral',
  'primary',
  'secondary',
  'error',
  'warning',
  'success'
] as const;

const inputVariants = ['soft', 'outline', 'underline', 'ghost'] as const;
const switchCheckboxVariants = ['solid', 'soft', 'outline'] as const;

export default function Fields() {
  type CheckedStateKey = `checkbox-${string}` | `switch-${string}`;

  const [checkedStates, setCheckedStates] = useState<Partial<Record<CheckedStateKey, boolean>>>({
    // Checkbox variants - all checked
    ...switchCheckboxVariants.reduce((acc, variant) => ({
      ...acc,
      [`checkbox-${variant}`]: true
    }), {}),

    // Checkbox colors - all checked
    ...fieldColors.reduce((acc, color) => ({
      ...acc,
      [`checkbox-color-${color}`]: true
    }), {}),

    // Checkbox validation states - all checked
    'checkbox-valid': true,
    'checkbox-error': true,
    'checkbox-required': true,

    // Switch variants - all checked
    ...switchCheckboxVariants.reduce((acc, variant) => ({
      ...acc,
      [`switch-${variant}`]: true
    }), {}),

    // Switch colors - all checked
    ...fieldColors.reduce((acc, color) => ({
      ...acc,
      [`switch-color-${color}`]: true
    }), {}),

    // Switch validation states - all checked
    'switch-valid': true,
    'switch-error': true,
    'switch-required': true
  });

  const handleCheckedChange = (key: CheckedStateKey) => (checked: boolean) => {
    setCheckedStates(prev => ({ ...prev, [key]: checked }));
  };

  const labelPositions = [
    {
      label: 'Top Label',
      render: (
        <Field>
          <Field.Label>Top Label</Field.Label>
          <DemoComponent />
          <Field.Description>This is a description for the field</Field.Description>
        </Field>
      )
    },
    {
      label: 'Left Label',
      render: (
        <Field>
          <Field.Row>
            <Field.Label>Left Label</Field.Label>
            <DemoComponent />
          </Field.Row>
          <Field.Description>This is a description for the field</Field.Description>
        </Field>
      )
    },
    {
      label: 'Right Label',
      render: (
        <Field>
          <Field.Row>
            <DemoComponent />
            <Field.Label>Right Label</Field.Label>
          </Field.Row>
          <Field.Description>This is a description for the field</Field.Description>
        </Field>
      )
    }
  ];

  const iconLayouts = [
    {
      label: 'Start & End Icon',
      render: (
        <Field>
          <Field.Row>
            <Field.Icon icon={Figma} />
            <Field.Label>Start & End Icon</Field.Label>
            <Field.Icon icon={Figma} />
          </Field.Row>
          <DemoComponent />
          <Field.Description>Field with icons on both sides of the label</Field.Description>
        </Field>
      )
    },
    {
      label: 'Start Only Icon',
      render: (
        <Field>
          <Field.Row>
            <Field.Icon icon={Figma} />
            <Field.Label>Start Only Icon</Field.Label>
          </Field.Row>
          <DemoComponent />
          <Field.Description>Field with icon only at the start of the label</Field.Description>
        </Field>
      )
    },
    {
      label: 'End Only Icon',
      render: (
        <Field>
          <Field.Row>
            <Field.Label>End Only Icon</Field.Label>
            <Field.Icon icon={Figma} />
          </Field.Row>
          <DemoComponent />
          <Field.Description>Field with icon only at the end of the label</Field.Description>
        </Field>
      )
    }
  ];

  return (
    <ScrollView className="h-screen bg-primary-1">
      <View className="flex-1 items-center pb-4">
        <View className="w-full max-w-[1200px] px-4 h-full gap-8">
          <Text className="text-h1">Fields</Text>

          <Text className="text-h2">Base Field</Text>
          <View className="space-y-4">
            <Text className="text-h3">Position</Text>
            <View className="flex flex-row gap-8 items-center">
              {labelPositions.map(({ label, render }) => (
                <View key={label} className="w-80">
                  {render}
                </View>
              ))}
            </View>
          </View>

          <View className="space-y-4">
            <Text className="text-h3">Icons</Text>
            <View className="flex flex-row gap-8">
              {iconLayouts.map(({ label, render }) => (
                <View key={label} className="w-80">
                  {render}
                </View>
              ))}
            </View>
          </View>

          <View className="space-y-4">
            <Text className="text-h3">Colors</Text>
            <View className="flex flex-row flex-wrap gap-4">
              {fieldColors.map((color) => (
                <View key={color} className="flex-1 basis-[calc(33.333%-12px)] min-w-[250px]">
                  <Field color={color}>
                    <Field.Row>
                      <Field.Icon icon={Figma} />
                      <Field.Label>{color.charAt(0).toUpperCase() + color.slice(1)}</Field.Label>
                    </Field.Row>
                    <DemoComponent />
                    <Field.Description>Description for {color} variant</Field.Description>
                  </Field>
                </View>
              ))}
            </View>
          </View>

          <View className="space-y-8">
            <Text className="text-h2">Input Fields</Text>

            <View className="space-y-4">
              <Text className="text-h3">Variants</Text>
              <View className="flex flex-row flex-wrap gap-4">
                {inputVariants.map((variant) => (
                  <View key={variant} className="flex-1 min-w-[250px]">
                    <InputField
                      variant={variant}
                      label={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Input`}
                      description="Optional description text"
                      placeholder="Enter text..."
                    >
                      <Input.Field />
                    </InputField>
                  </View>
                ))}
              </View>
            </View>

            <View className="space-y-4">
              <Text className="text-h3">Colors</Text>
              <View className="flex flex-row flex-wrap gap-4">
                {fieldColors.map((color) => (
                  <View key={color} className="flex-1 basis-[calc(33.333%-12px)] min-w-[250px]">
                    <InputField
                      variant="soft"
                      color={color}
                      label={color.charAt(0).toUpperCase() + color.slice(1)}
                      description={`Description for ${color} variant`}
                      placeholder="Enter text..."
                    >
                      <Input.Field />
                    </InputField>
                  </View>
                ))}
              </View>
            </View>

            <View className="space-y-4">
              <Text className="text-h3">Validation States</Text>
              <View className="flex flex-row flex-wrap gap-4">
                <View className="flex-1 min-w-[250px]">
                  <InputField
                    variant="soft"
                    label="Valid Input"
                    isValid={true}
                    description="This input is valid"
                    placeholder="Valid input"
                  >
                    <Input.Field />
                  </InputField>
                </View>
                <View className="flex-1 min-w-[250px]">
                  <InputField
                    variant="soft"
                    label="Error Input"
                    error="This field has an error"
                    placeholder="Error input"
                  >
                    <Input.Field />
                  </InputField>
                </View>
                <View className="flex-1 min-w-[250px]">
                  <InputField
                    variant="soft"
                    label="Required Input"
                    required
                    description="This field is required"
                    placeholder="Required input"
                  >
                    <Input.Field />
                  </InputField>
                </View>
              </View>
            </View>
          </View>

          <Text className="text-h2">Checkbox Fields</Text>

          <View className="space-y-4">
            <Text className="text-h3">Variants</Text>
            <View className="flex flex-row flex-wrap gap-4">
              {switchCheckboxVariants.map((variant) => (
                <View key={variant} className="flex-1 min-w-[250px]">
                  <CheckboxField
                    variant={variant}
                    label={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Checkbox`}
                    description="Optional description text"
                    checked={Boolean(checkedStates[`checkbox-${variant}`])}
                    onCheckedChange={handleCheckedChange(`checkbox-${variant}`)}
                  >
                    <Checkbox.Icon icon={Check} />
                  </CheckboxField>
                </View>
              ))}
            </View>
          </View>

          <Text className="text-h2">Checkbox Fields</Text>

          <View className="space-y-4">
            <Text className="text-h3">Variants</Text>
            <View className="flex flex-row flex-wrap gap-4">
              {switchCheckboxVariants.map((variant) => (
                <View key={variant} className="flex-1 min-w-[250px]">
                  <CheckboxField
                    variant={variant}
                    label={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Checkbox`}
                    description="Optional description text"
                    checked={Boolean(checkedStates[`checkbox-${variant}`])}
                    onCheckedChange={handleCheckedChange(`checkbox-${variant}`)}
                  >
                    <Checkbox.Icon icon={Check} />
                  </CheckboxField>
                </View>
              ))}
            </View>
          </View>

          <View className="space-y-4">
            <Text className="text-h3">Colors</Text>
            <View className="flex flex-row flex-wrap gap-4">
              {fieldColors.map((color) => (
                <View key={color} className="flex-1 basis-[calc(33.333%-12px)] min-w-[250px]">
                  <CheckboxField
                    variant="soft"
                    color={color}
                    label={color.charAt(0).toUpperCase() + color.slice(1)}
                    description={`Description for ${color} variant`}
                    checked={Boolean(checkedStates[`checkbox-color-${color}`])}
                    onCheckedChange={handleCheckedChange(`checkbox-color-${color}`)}
                  />
                </View>
              ))}
            </View>
          </View>

          <View className="space-y-4">
            <Text className="text-h3">Validation States</Text>
            <View className="flex flex-row flex-wrap gap-4">
              <View className="flex-1 min-w-[250px]">
                <CheckboxField
                  variant="soft"
                  label="Valid Checkbox"
                  isValid={true}
                  description="This checkbox is valid"
                  checked={Boolean(checkedStates['checkbox-valid'])}
                  onCheckedChange={handleCheckedChange('checkbox-valid')}
                >
                  <Checkbox.Icon icon={Check} />
                </CheckboxField>
              </View>
              <View className="flex-1 min-w-[250px]">
                <CheckboxField
                  variant="soft"
                  label="Error Checkbox"
                  error="This field has an error"
                  checked={Boolean(checkedStates['checkbox-error'])}
                  onCheckedChange={handleCheckedChange('checkbox-error')}
                >
                  <Checkbox.Icon icon={X} />
                </CheckboxField>
              </View>
              <View className="flex-1 min-w-[250px]">
                <CheckboxField
                  variant="soft"
                  label="Required Checkbox"
                  required
                  description="This field is required"
                  checked={Boolean(checkedStates['checkbox-required'])}
                  onCheckedChange={handleCheckedChange('checkbox-required')}
                >
                  <Checkbox.Icon icon={Check} />
                </CheckboxField>
              </View>
            </View>
          </View>

          <View className="space-y-8">
            <Text className="text-h2">Switch Fields</Text>

            <View className="space-y-4">
              <Text className="text-h3">Variants</Text>
              <View className="flex flex-row flex-wrap gap-4">
                {switchCheckboxVariants.map((variant) => (
                  <View key={variant} className="flex-1 min-w-[250px]">
                    <SwitchField
                      variant={variant}
                      label={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Switch`}
                      description="Optional description text"
                      checked={Boolean(checkedStates[`switch-${variant}`])}
                      onCheckedChange={handleCheckedChange(`switch-${variant}`)}
                    />
                  </View>
                ))}
              </View>
            </View>

            <View className="space-y-4">
              <Text className="text-h3">Colors</Text>
              <View className="flex flex-row flex-wrap gap-4">
                {fieldColors.map((color) => (
                  <View key={color} className="flex-1 basis-[calc(33.333%-12px)] min-w-[250px]">
                    <SwitchField
                      variant="soft"
                      color={color}
                      label={color.charAt(0).toUpperCase() + color.slice(1)}
                      description={`Description for ${color} variant`}
                      checked={Boolean(checkedStates[`switch-color-${color}`])}
                      onCheckedChange={handleCheckedChange(`switch-color-${color}`)}
                    />
                  </View>
                ))}
              </View>
            </View>

            <View className="space-y-4">
              <Text className="text-h3">Validation States</Text>
              <View className="flex flex-row flex-wrap gap-4">
                <View className="flex-1 min-w-[250px]">
                  <SwitchField
                    variant="soft"
                    label="Valid Switch"
                    isValid={true}
                    description="This switch is valid"
                    checked={Boolean(checkedStates['switch-valid'])}
                    onCheckedChange={handleCheckedChange('switch-valid')}
                  />
                </View>
                <View className="flex-1 min-w-[250px]">
                  <SwitchField
                    variant="soft"
                    label="Error Switch"
                    error="This field has an error"
                    checked={Boolean(checkedStates['switch-error'])}
                    onCheckedChange={handleCheckedChange('switch-error')}
                  />
                </View>
                <View className="flex-1 min-w-[250px]">
                  <SwitchField
                    variant="soft"
                    label="Required Switch"
                    required
                    description="This field is required"
                    checked={Boolean(checkedStates['switch-required'])}
                    onCheckedChange={handleCheckedChange('switch-required')}
                  />
                </View>
              </View>
            </View>
          </View>

        </View>
      </View>
    </ScrollView>
  );
}