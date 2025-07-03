import { Figma } from "lucide-react-native";
import type { VariantProps } from 'class-variance-authority';
import { switchRootVariants } from "@consensys/ds3/src/components/switch/styles";

// Extract actual types from the switch component
type SwitchVariant = NonNullable<VariantProps<typeof switchRootVariants>['variant']>;
type SwitchColor = NonNullable<VariantProps<typeof switchRootVariants>['color']>;
type SwitchSize = NonNullable<VariantProps<typeof switchRootVariants>['size']>;

// Get the actual variant, color, and size values from the component
const variants: SwitchVariant[] = ['solid', 'soft', 'outline'];
const colors: SwitchColor[] = ['neutral', 'primary', 'secondary', 'error', 'warning', 'success'];
const sizes: SwitchSize[] = ['sm', 'md', 'lg'];

// Helper function to generate JSX for a single switch with state management
const generateSwitchJSX = (key: string, variant?: SwitchVariant, color?: SwitchColor, size?: SwitchSize, checked = false, disabled = false, thumbIcon?: string) => {
  const variantProp = variant && variant !== 'solid' ? ` variant="${variant}"` : '';
  const colorProp = color && color !== 'neutral' ? ` color="${color}"` : '';
  const sizeProp = size && size !== 'md' ? ` size="${size}"` : '';
  const checkedProp = ` checked={getSwitchState("${key}", ${checked})}`;
  const disabledProp = disabled ? ' disabled' : '';
  const thumbIconProp = thumbIcon ? ` thumbIcon={${thumbIcon}}` : '';
  const handlerProp = ` onCheckedChange={createSwitchHandler("${key}")}`;
  
  return `<Switch${variantProp}${colorProp}${sizeProp}${checkedProp}${disabledProp}${thumbIconProp}${handlerProp} />`;
};

// Helper function to generate JSX for switch with label and state management
const generateSwitchWithLabelJSX = (key: string, variant?: SwitchVariant, color?: SwitchColor, label = 'Switch', checked = false) => {
  const variantProp = variant && variant !== 'solid' ? ` variant="${variant}"` : '';
  const colorProp = color && color !== 'neutral' ? ` color="${color}"` : '';
  const checkedProp = ` checked={getSwitchState("${key}", ${checked})}`;
  const handlerProp = ` onCheckedChange={createSwitchHandler("${key}")}`;
  
  return `<View className="flex flex-row items-center gap-2">
  <Switch${variantProp}${colorProp}${checkedProp}${handlerProp} />
  <Text className="text-sm text-neutral-11">${label}</Text>
</View>`;
};

export const switchExamples = {
  "variants": {
    name: "Switch Variants",
    jsx: `<View className="flex flex-col gap-6">
  <View className="flex flex-row items-center gap-4">
    <View className="w-24">
      <Text className="text-sm text-neutral-11">Default</Text>
    </View>
    ${generateSwitchJSX('variant-default')}
    ${generateSwitchJSX('variant-default-checked', undefined, undefined, undefined, true)}
  </View>
${variants.map((variant, index) => `  <View className="flex flex-row items-center gap-4">
    <View className="w-24">
      <Text className="text-sm text-neutral-11 capitalize">${variant}</Text>
    </View>
    ${generateSwitchJSX(`variant-${variant}-${index}`)}
    ${generateSwitchJSX(`variant-${variant}-${index}-checked`, variant, undefined, undefined, true)}
  </View>`).join('\n')}
</View>`
  },
  "colors": {
    name: "Switch Colors",
    jsx: `<View className="flex flex-col gap-4">
${colors.map(color => `  <View className="flex flex-col gap-4">
    <Text>${color.charAt(0).toUpperCase() + color.slice(1)}</Text>
    <View className="flex flex-row flex-wrap gap-4">
${variants.map((variant, index) => `      ${generateSwitchJSX(`color-${color}-${variant}-${index}`, variant, color, undefined, true)}`).join('\n')}
    </View>
  </View>`).join('\n')}
</View>`
  },
  "sizes": {
    name: "Switch Sizes",
    jsx: `<View className="flex flex-col gap-4">
${sizes.map(size => `  <View className="flex flex-col gap-4">
    <Text>${size.charAt(0).toUpperCase() + size.slice(1)}</Text>
    <View className="flex flex-row flex-wrap gap-4">
${variants.map((variant, index) => `      ${generateSwitchJSX(`size-${size}-${variant}-${index}`, variant, colors[index], size)}`).join('\n')}
    </View>
  </View>`).join('\n')}
</View>`
  },
  "icons": {
    name: "With Icons",
    jsx: `<View className="flex flex-col gap-4">
${variants.map(variant => `  <View className="flex flex-col gap-4">
    <Text className="flex items-center">
      ${variant.charAt(0).toUpperCase() + variant.slice(1)} (${variant === 'solid' ? 'lg' : variant === 'soft' ? 'md' : 'sm'})
    </Text>
    <View className="flex flex-row flex-wrap gap-4">
${colors.map((color, colorIndex) => `      ${generateSwitchJSX(`icon-${variant}-${color}-${colorIndex}`, variant, color, variant === 'solid' ? 'lg' : variant === 'soft' ? 'md' : 'sm', true, false, 'Figma')}`).join('\n')}
    </View>
  </View>`).join('\n')}
</View>`
  },
  "disabled": {
    name: "Disabled States",
    jsx: `<View className="flex flex-col gap-4">
${colors.map(color => `  <View className="flex flex-col gap-4">
    <Text>${color.charAt(0).toUpperCase() + color.slice(1)}</Text>
    <View className="flex flex-row flex-wrap gap-4">
${variants.map(variant => `      ${generateSwitchJSX(`disabled-${color}-${variant}`, variant, color, undefined, false, true)}`).join('\n')}
    </View>
  </View>`).join('\n')}
</View>`
  },
  "disabled-checked": {
    name: "Disabled Checked States",
    jsx: `<View className="flex flex-col gap-4">
${colors.map(color => `  <View className="flex flex-col gap-4">
    <Text>${color.charAt(0).toUpperCase() + color.slice(1)}</Text>
    <View className="flex flex-row flex-wrap gap-4">
${variants.map(variant => `      ${generateSwitchJSX(`disabled-checked-${color}-${variant}`, variant, color, undefined, true, true)}`).join('\n')}
    </View>
  </View>`).join('\n')}
</View>`
  },
  "with-labels": {
    name: "With Labels",
    jsx: `<View className="flex flex-col gap-4">
${colors.map(color => `  <View className="flex flex-col gap-4">
    <Text>${color.charAt(0).toUpperCase() + color.slice(1)}</Text>
    <View className="flex flex-row flex-wrap gap-4">
${variants.map(variant => `      ${generateSwitchWithLabelJSX(`label-${color}-${variant}`, variant, color, `${variant.charAt(0).toUpperCase() + variant.slice(1)} ${color.charAt(0).toUpperCase() + color.slice(1)}`)}`).join('\n')}
    </View>
  </View>`).join('\n')}
</View>`
  },
  "mixed-examples": {
    name: "Mixed Examples",
    jsx: `<View className="flex flex-col gap-4">
  <View className="flex flex-row flex-wrap gap-4">
    <View className="flex flex-row items-center gap-2">
      ${generateSwitchJSX('mixed-solid-primary', 'solid', 'primary', undefined, true)}
      <Text className="text-sm text-neutral-11">Solid Primary</Text>
    </View>
    <View className="flex flex-row items-center gap-2">
      ${generateSwitchJSX('mixed-soft-success', 'soft', 'success', undefined, true)}
      <Text className="text-sm text-neutral-11">Soft Success</Text>
    </View>
    <View className="flex flex-row items-center gap-2">
      ${generateSwitchJSX('mixed-outline-error', 'outline', 'error', undefined, true)}
      <Text className="text-sm text-neutral-11">Outline Error</Text>
    </View>
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <View className="flex flex-row items-center gap-2">
      ${generateSwitchJSX('mixed-icon-solid', 'solid', 'primary', 'lg', true, false, 'Figma')}
      <Text className="text-sm text-neutral-11">Solid with Icon</Text>
    </View>
    <View className="flex flex-row items-center gap-2">
      ${generateSwitchJSX('mixed-icon-soft', 'soft', 'secondary', 'md', true, false, 'Figma')}
      <Text className="text-sm text-neutral-11">Soft with Icon</Text>
    </View>
    <View className="flex flex-row items-center gap-2">
      ${generateSwitchJSX('mixed-icon-outline', 'outline', 'warning', 'sm', true, false, 'Figma')}
      <Text className="text-sm text-neutral-11">Outline with Icon</Text>
    </View>
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <View className="flex flex-row items-center gap-2">
      ${generateSwitchJSX('mixed-disabled', 'solid', 'neutral', undefined, false, true)}
      <Text className="text-sm text-neutral-11">Disabled</Text>
    </View>
    <View className="flex flex-row items-center gap-2">
      ${generateSwitchJSX('mixed-disabled-checked', 'soft', 'error', undefined, true, true)}
      <Text className="text-sm text-neutral-11">Disabled Checked</Text>
    </View>
    <View className="flex flex-row items-center gap-2">
      ${generateSwitchJSX('mixed-small', 'outline', 'success', 'sm', true)}
      <Text className="text-sm text-neutral-11">Small Size</Text>
    </View>
  </View>
</View>`
  }
}; 