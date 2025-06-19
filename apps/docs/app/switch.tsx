import { Text, Switch } from "@consensys/ds3/src";
import { View, ScrollView } from "react-native";
import { Figma } from 'lucide-react-native';
import { useState } from "react";

type SwitchVariant = 'solid' | 'soft' | 'outline';
type SwitchColor = 'neutral' | 'primary' | 'secondary' | 'error' | 'warning' | 'success';
type SwitchSize = 'sm' | 'md' | 'lg';

export default function Switches() {
  const switchVariants: Array<SwitchVariant> = [
    'solid',
    'soft',
    'outline'
  ];

  const switchColors: Array<SwitchColor> = [
    'neutral',
    'primary',
    'secondary',
    'error',
    'warning',
    'success'
  ];

  type SwitchSizeOption = {
    size: SwitchSize;
    label: string;
  };

  const switchSizes: SwitchSizeOption[] = [
    { size: 'lg', label: 'Large' },
    { size: 'md', label: 'Medium' },
    { size: 'sm', label: 'Small' }
  ] as const;

  const variantSizeMap: Record<SwitchVariant, SwitchSize> = {
    solid: 'lg',
    soft: 'md',
    outline: 'sm'
  };

  type CheckedStateKey = `variant-${string}` | `color-${string}` | `size-${string}` | `disabled-${string}` | `icon-${string}`;

  const [checkedStates, setCheckedStates] = useState<Partial<Record<CheckedStateKey, boolean>>>({
    // Variants
    'variant-default-checked': true,
    'variant-solid-0-checked': true,
    'variant-soft-1-checked': true,
    'variant-outline-2-checked': true,

    // Colors - all checked
    ...switchColors.reduce((acc, color) => ({
      ...acc,
      ...switchVariants.reduce((varAcc, variant, index) => ({
        ...varAcc,
        [`color-${color}-${variant}-${index}`]: true
      }), {})
    }), {}),

    // Icons - all checked
    ...switchVariants.reduce((acc, variant) => ({
      ...acc,
      ...switchColors.reduce((colorAcc, color, colorIndex) => ({
        ...colorAcc,
        [`icon-${variant}-${color}-${colorIndex}`]: true
      }), {})
    }), {}),

    // Disabled - alternating checked states
    ...switchColors.reduce((acc, color) => ({
      ...acc,
      ...switchVariants.reduce((varAcc, variant, index) => ({
        ...varAcc,
        [`disabled-${color}-${variant}-${index}`]: index % 2 === 0 // Alternate between true and false
      }), {})
    }), {}),
  });

  const handleCheckedChange = (key: string) => (checked: boolean) => {
    setCheckedStates(prev => ({ ...prev, [key]: checked }));
  };

  return (
    <ScrollView className="h-screen bg-primary-1">
      <View className="flex-1 items-center pb-4">
        <View className="w-full max-w-[1200px] px-4 h-full gap-4">
          <Text className="text-h1">Switches</Text>

          <Text className="text-h2 mb-4">Variants</Text>
          <View className="flex flex-col gap-6">
            <View className="flex flex-row items-center gap-4">
              <View className="w-24">
                <Text className="text-sm text-neutral-11">Default</Text>
              </View>
              <Switch
                checked={Boolean(checkedStates['variant-default'])}
                onCheckedChange={handleCheckedChange('variant-default')}
              />
              <Switch
                checked={Boolean(checkedStates['variant-default-checked'])}
                onCheckedChange={handleCheckedChange('variant-default-checked')}
              />
            </View>
            {switchVariants.map((variant, index) => (
              <View key={`${variant}-${index}`} className="flex flex-row items-center gap-4">
                <View className="w-24">
                  <Text className="text-sm text-neutral-11 capitalize">{variant}</Text>
                </View>
                <Switch
                  variant={variant}
                  checked={Boolean(checkedStates[`variant-${variant}-${index}`])}
                  onCheckedChange={handleCheckedChange(`variant-${variant}-${index}`)}
                />
                <Switch
                  variant={variant}
                  checked={Boolean(checkedStates[`variant-${variant}-${index}-checked`])}
                  onCheckedChange={handleCheckedChange(`variant-${variant}-${index}-checked`)}
                />
              </View>
            ))}
          </View>

          <Text className="text-h2">Colors</Text>
          {switchColors.map((color) => (
            <View key={color} className="flex flex-col gap-4">
              <Text>{color.charAt(0).toUpperCase() + color.slice(1)}</Text>
              <View className="flex flex-row flex-wrap gap-4">
                {switchVariants.map((variant, index) => (
                  <Switch
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

          <Text className="text-h2">Sizes</Text>
          {switchSizes.map(({ size, label }) => (
            <View key={size} className="flex flex-col gap-4">
              <Text>{label}</Text>
              <View className="flex flex-row flex-wrap gap-4">
                {switchVariants.map((variant, index) => (
                  <Switch
                    key={`${variant}-${index}`}
                    variant={variant}
                    color={switchColors[index] === 'neutral' ? undefined : switchColors[index]}
                    size={size}
                    checked={Boolean(checkedStates[`size-${size}-${variant}-${index}` as const])}
                    onCheckedChange={handleCheckedChange(`size-${size}-${variant}-${index}`)}
                  />
                ))}
              </View>
            </View>
          ))}

          <Text className="text-h2">Icons</Text>
          {switchVariants.map((variant) => (
            <View key={variant} className="flex flex-col gap-4">
              <Text className="flex items-center">
                {variant.charAt(0).toUpperCase() + variant.slice(1)} ({variantSizeMap[variant]})
              </Text>
              <View className="flex flex-row flex-wrap gap-4">
                {switchColors.map((color, colorIndex) => (
                  <Switch
                    key={`${variant}-${color}-${colorIndex}`}
                    variant={variant}
                    color={color === 'neutral' ? undefined : color}
                    size={variantSizeMap[variant]}
                    checked={Boolean(checkedStates[`icon-${variant}-${color}-${colorIndex}`])}
                    onCheckedChange={handleCheckedChange(`icon-${variant}-${color}-${colorIndex}`)}
                    thumbIcon={Figma}
                  />
                ))}
              </View>
            </View>
          ))}

          <Text className="text-h2">Disabled</Text>
          {switchColors.map((color) => (
            <View key={color} className="flex flex-col gap-4">
              <Text>{color.charAt(0).toUpperCase() + color.slice(1)}</Text>
              <View className="flex flex-row flex-wrap gap-4">
                {switchVariants.map((variant, index) => (
                  <Switch
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