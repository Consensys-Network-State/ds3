import { Text, Checkbox } from "@consensys/ds3/src";
import { View, ScrollView } from "react-native";
import { useState } from "react";
import { Check, Minus, X } from 'lucide-react-native';

type CheckboxVariant = 'solid' | 'soft' | 'outline';
type CheckboxColor = 'neutral' | 'primary' | 'secondary' | 'error' | 'warning' | 'success';
type CheckboxSize = 'sm' | 'md' | 'lg';

export default function Checkboxes() {
  const checkboxVariants: Array<CheckboxVariant> = [
    'solid',
    'soft',
    'outline'
  ];

  const checkboxColors: Array<CheckboxColor> = [
    'neutral',
    'primary',
    'secondary',
    'error',
    'warning',
    'success'
  ];

  type CheckboxSizeOption = {
    size: CheckboxSize;
    label: string;
  };

  const checkboxSizes: CheckboxSizeOption[] = [
    { size: 'lg', label: 'Large' },
    { size: 'md', label: 'Medium' },
    { size: 'sm', label: 'Small' }
  ] as const;

  type CheckedStateKey = 
    | `variant-${string}` 
    | `color-${string}` 
    | `size-${string}` 
    | `disabled-${string}` 
    | `icon-${string}`
    | `parent-child-${string}`;

  const [checkedStates, setCheckedStates] = useState<Partial<Record<CheckedStateKey, boolean>>>({
    // Variants
    'variant-default-checked': true,
    'variant-solid-0-checked': true,
    'variant-soft-1-checked': true,
    'variant-outline-2-checked': true,

    // Colors - all checked
    ...checkboxColors.reduce((acc, color) => ({
      ...acc,
      ...checkboxVariants.reduce((varAcc, variant, index) => ({
        ...varAcc,
        [`color-${color}-${variant}-${index}`]: true
      }), {})
    }), {}),

    // Add initial states for parent-child checkboxes
    'parent-child-primary': true,
    'parent-child-success': true,
    'parent-child-warning': true,

    // Icons - all checked
    ...checkboxColors.reduce((acc, color) => ({
      ...acc,
      [`icon-${color}-0`]: true,
      [`icon-${color}-1`]: true,
      [`icon-${color}-2`]: true
    }), {}),

    // Disabled - alternating checked states
    ...checkboxColors.reduce((acc, color) => ({
      ...acc,
      ...checkboxVariants.reduce((varAcc, variant, index) => ({
        ...varAcc,
        [`disabled-${color}-${variant}-${index}`]: index % 2 === 0
      }), {})
    }), {})
  });

  const handleCheckedChange = (key: string) => (checked: boolean) => {
    setCheckedStates(prev => ({ ...prev, [key]: checked }));
  };

  return (
    <ScrollView className="h-screen bg-primary-1">
      <View className="flex-1 items-center pb-4">
        <View className="w-full max-w-[1200px] px-4 h-full gap-4">
          <Text className="text-h1">Checkboxes</Text>

          <Text className="text-h2 mb-4">Variants</Text>
          <View className="flex flex-col gap-6">
            <View className="flex flex-row items-center gap-4">
              <View className="w-24">
                <Text className="text-sm text-neutral-11">Default</Text>
              </View>
              <Checkbox
                checked={Boolean(checkedStates['variant-default'])}
                onCheckedChange={handleCheckedChange('variant-default')}
              />
              <Checkbox
                checked={Boolean(checkedStates['variant-default-checked'])}
                onCheckedChange={handleCheckedChange('variant-default-checked')}
              />
            </View>
            {checkboxVariants.map((variant, index) => (
              <View key={`${variant}-${index}`} className="flex flex-row items-center gap-4">
                <View className="w-24">
                  <Text className="text-sm text-neutral-11 capitalize">{variant}</Text>
                </View>
                <Checkbox
                  variant={variant}
                  checked={Boolean(checkedStates[`variant-${variant}-${index}`])}
                  onCheckedChange={handleCheckedChange(`variant-${variant}-${index}`)}
                />
                <Checkbox
                  variant={variant}
                  checked={Boolean(checkedStates[`variant-${variant}-${index}-checked`])}
                  onCheckedChange={handleCheckedChange(`variant-${variant}-${index}-checked`)}
                />
              </View>
            ))}
          </View>

          <Text className="text-h2">Colors</Text>
          {checkboxColors.map((color) => (
            <View key={color} className="flex flex-col gap-4">
              <Text>{color.charAt(0).toUpperCase() + color.slice(1)}</Text>
              <View className="flex flex-row flex-wrap gap-4">
                {checkboxVariants.map((variant, index) => (
                  <Checkbox
                    key={`${variant}-${index}`}
                    variant={variant}
                    color={color === 'neutral' ? undefined : color}
                    checked={Boolean(checkedStates[`color-${color}-${variant}-${index}`])}
                    onCheckedChange={handleCheckedChange(`color-${color}-${variant}-${index}`)}
                  />
                ))}
              </View>
            </View>
          ))}

          <Text className="text-h2">Icons</Text>
          {checkboxColors.map((color) => (
            <View key={color} className="flex flex-col gap-4">
              <Text>{color.charAt(0).toUpperCase() + color.slice(1)}</Text>
              <View className="flex flex-row flex-wrap gap-4">
                <View className="flex flex-row items-center gap-2">
                  <Checkbox
                    variant="solid"
                    color={color === 'neutral' ? undefined : color}
                    checked={Boolean(checkedStates[`icon-${color}-0`])}
                    onCheckedChange={handleCheckedChange(`icon-${color}-0`)}
                  >
                    <Checkbox.Icon icon={Check} />
                  </Checkbox>
                  <Text className="text-sm text-neutral-11">Solid + Check</Text>
                </View>
                <View className="flex flex-row items-center gap-2">
                  <Checkbox
                    variant="soft"
                    color={color === 'neutral' ? undefined : color}
                    checked={Boolean(checkedStates[`icon-${color}-1`])}
                    onCheckedChange={handleCheckedChange(`icon-${color}-1`)}
                  >
                    <Checkbox.Icon icon={Minus} />
                  </Checkbox>
                  <Text className="text-sm text-neutral-11">Soft + Minus</Text>
                </View>
                <View className="flex flex-row items-center gap-2">
                  <Checkbox
                    variant="outline"
                    color={color === 'neutral' ? undefined : color}
                    checked={Boolean(checkedStates[`icon-${color}-2`])}
                    onCheckedChange={handleCheckedChange(`icon-${color}-2`)}
                  >
                    <Checkbox.Icon icon={X} />
                  </Checkbox>
                  <Text className="text-sm text-neutral-11">Outline + X</Text>
                </View>
              </View>
            </View>
          ))}

          <Text className="text-h2 mb-4">Indeterminate</Text>
          <View className="flex flex-col gap-4">
            <View className="flex flex-row items-center gap-4">
              <Checkbox
                checked={checkboxColors.some(color => checkedStates[`parent-child-${color}`])}
                indeterminate={
                  !checkboxColors.every(color => checkedStates[`parent-child-${color}`]) &&
                  checkboxColors.some(color => checkedStates[`parent-child-${color}`])
                }
                onCheckedChange={(checked) => {
                  const newValue = !checkboxColors.every(color => checkedStates[`parent-child-${color}`]);
                  const newStates = checkboxColors.reduce((acc, color) => ({
                    ...acc,
                    [`parent-child-${color}`]: newValue
                  }), {});
                  setCheckedStates(prev => ({ ...prev, ...newStates }));
                }}
              />
              <Text className="text-sm text-neutral-11">Select All Colors</Text>
            </View>
            <View className="flex flex-col gap-2 pl-8">
              {checkboxColors.map((color) => (
                <View key={color} className="flex flex-row items-center gap-4">
                  <Checkbox
                    color={color === 'neutral' ? undefined : color}
                    checked={Boolean(checkedStates[`parent-child-${color}`])}
                    onCheckedChange={handleCheckedChange(`parent-child-${color}`)}
                  />
                  <Text className="text-sm text-neutral-11 capitalize">{color}</Text>
                </View>
              ))}
            </View>
          </View>

          <Text className="text-h2">Sizes</Text>
          {checkboxSizes.map(({ size, label }) => (
            <View key={size} className="flex flex-col gap-4">
              <Text>{label}</Text>
              <View className="flex flex-row flex-wrap gap-4">
                {checkboxVariants.map((variant, index) => (
                  <Checkbox
                    key={`${variant}-${index}`}
                    variant={variant}
                    color={checkboxColors[index] === 'neutral' ? undefined : checkboxColors[index]}
                    size={size}
                    checked={Boolean(checkedStates[`size-${size}-${variant}-${index}` as const])}
                    onCheckedChange={handleCheckedChange(`size-${size}-${variant}-${index}`)}
                  />
                ))}
              </View>
            </View>
          ))}

          <Text className="text-h2">Disabled</Text>
          {checkboxColors.map((color) => (
            <View key={color} className="flex flex-col gap-4">
              <Text>{color.charAt(0).toUpperCase() + color.slice(1)}</Text>
              <View className="flex flex-row flex-wrap gap-4">
                {checkboxVariants.map((variant, index) => (
                  <Checkbox
                    key={`${variant}-${index}`}
                    variant={variant}
                    color={color === 'neutral' ? undefined : color}
                    checked={Boolean(checkedStates[`disabled-${color}-${variant}-${index}`])}
                    onCheckedChange={handleCheckedChange(`disabled-${color}-${variant}-${index}`)}
                    disabled
                  />
                ))}
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
