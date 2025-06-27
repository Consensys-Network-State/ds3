import { Check, Minus, X } from "lucide-react-native";
import type { VariantProps } from 'class-variance-authority';
import { checkboxRootVariants } from "@consensys/ds3/src/components/checkbox/styles";

// Extract actual types from the checkbox component
type CheckboxVariant = NonNullable<VariantProps<typeof checkboxRootVariants>['variant']>;
type CheckboxColor = NonNullable<VariantProps<typeof checkboxRootVariants>['color']>;
type CheckboxSize = NonNullable<VariantProps<typeof checkboxRootVariants>['size']>;

// Get the actual variant, color, and size values from the component
const variants: CheckboxVariant[] = ['solid', 'soft', 'outline'];
const colors: CheckboxColor[] = ['neutral', 'primary', 'secondary', 'error', 'warning', 'success'];
const sizes: CheckboxSize[] = ['sm', 'md', 'lg'];

// Helper function to generate JSX for a single checkbox with state management
const generateCheckboxJSX = (key: string, variant?: CheckboxVariant, color?: CheckboxColor, size?: CheckboxSize, checked = false, disabled = false, indeterminate = false) => {
  const variantProp = variant && variant !== 'solid' ? ` variant="${variant}"` : '';
  const colorProp = color && color !== 'neutral' ? ` color="${color}"` : '';
  const sizeProp = size && size !== 'md' ? ` size="${size}"` : '';
  const checkedProp = ` checked={getCheckboxState("${key}", ${checked})}`;
  const disabledProp = disabled ? ' disabled' : '';
  const indeterminateProp = indeterminate ? ' indeterminate' : '';
  const handlerProp = ` onCheckedChange={createCheckboxHandler("${key}")}`;
  
  return `<Checkbox${variantProp}${colorProp}${sizeProp}${checkedProp}${disabledProp}${indeterminateProp}${handlerProp} />`;
};

// Helper function to generate JSX for checkbox with icon and state management
const generateCheckboxWithIconJSX = (key: string, variant: CheckboxVariant, color?: CheckboxColor, icon = 'Check', checked = false) => {
  const colorProp = color && color !== 'neutral' ? ` color="${color}"` : '';
  const checkedProp = ` checked={getCheckboxState("${key}", ${checked})}`;
  const handlerProp = ` onCheckedChange={createCheckboxHandler("${key}")}`;
  
  return `<Checkbox variant="${variant}"${colorProp}${checkedProp}${handlerProp}>
  <Checkbox.Icon icon={${icon}} />
</Checkbox>`;
};

// Helper function to generate JSX for checkbox with label and state management
const generateCheckboxWithLabelJSX = (key: string, variant?: CheckboxVariant, color?: CheckboxColor, label = 'Checkbox', checked = false) => {
  const variantProp = variant && variant !== 'solid' ? ` variant="${variant}"` : '';
  const colorProp = color && color !== 'neutral' ? ` color="${color}"` : '';
  const checkedProp = ` checked={getCheckboxState("${key}", ${checked})}`;
  const handlerProp = ` onCheckedChange={createCheckboxHandler("${key}")}`;
  
  return `<View className="flex flex-row items-center gap-2">
  <Checkbox${variantProp}${colorProp}${checkedProp}${handlerProp} />
  <Text className="text-sm text-neutral-11">${label}</Text>
</View>`;
};

export const checkboxExamples = {
  "variants": {
    name: "Checkbox Variants",
    jsx: `<View className="flex flex-col gap-6">
  <View className="flex flex-row items-center gap-4">
    <View className="w-24">
      <Text className="text-sm text-neutral-11">Default</Text>
    </View>
    ${generateCheckboxJSX('variant-default')}
    ${generateCheckboxJSX('variant-default-checked', undefined, undefined, undefined, true)}
  </View>
${variants.map((variant, index) => `  <View className="flex flex-row items-center gap-4">
    <View className="w-24">
      <Text className="text-sm text-neutral-11 capitalize">${variant}</Text>
    </View>
    ${generateCheckboxJSX(`variant-${variant}-${index}`)}
    ${generateCheckboxJSX(`variant-${variant}-${index}-checked`, variant, undefined, undefined, true)}
  </View>`).join('\n')}
</View>`
  },
  "colors": {
    name: "Checkbox Colors",
    jsx: `<View className="flex flex-col gap-4">
${colors.map(color => `  <View className="flex flex-col gap-4">
    <Text>${color.charAt(0).toUpperCase() + color.slice(1)}</Text>
    <View className="flex flex-row flex-wrap gap-4">
${variants.map((variant, index) => `      ${generateCheckboxJSX(`color-${color}-${variant}-${index}`, variant, color, undefined, true)}`).join('\n')}
    </View>
  </View>`).join('\n')}
</View>`
  },
  "icons": {
    name: "With Icons",
    jsx: `<View className="flex flex-col gap-4">
${colors.map(color => `  <View className="flex flex-col gap-4">
    <Text>${color.charAt(0).toUpperCase() + color.slice(1)}</Text>
    <View className="flex flex-row flex-wrap gap-4">
      <View className="flex flex-row items-center gap-2">
        ${generateCheckboxWithIconJSX(`icon-${color}-0`, 'solid', color, 'Check', true)}
        <Text className="text-sm text-neutral-11">Solid + Check</Text>
      </View>
      <View className="flex flex-row items-center gap-2">
        ${generateCheckboxWithIconJSX(`icon-${color}-1`, 'soft', color, 'Minus', true)}
        <Text className="text-sm text-neutral-11">Soft + Minus</Text>
      </View>
      <View className="flex flex-row items-center gap-2">
        ${generateCheckboxWithIconJSX(`icon-${color}-2`, 'outline', color, 'X', true)}
        <Text className="text-sm text-neutral-11">Outline + X</Text>
      </View>
    </View>
  </View>`).join('\n')}
</View>`
  },
  "indeterminate": {
    name: "Indeterminate State",
    jsx: `<View className="flex flex-col gap-4">
  <View className="flex flex-row items-center gap-4">
    <Checkbox indeterminate />
    <Text className="text-sm text-neutral-11">Indeterminate</Text>
  </View>
  <View className="flex flex-row items-center gap-4">
    <Checkbox indeterminate checked />
    <Text className="text-sm text-neutral-11">Indeterminate + Checked</Text>
  </View>
  <View className="flex flex-row items-center gap-4">
    <Checkbox variant="soft" color="primary" indeterminate />
    <Text className="text-sm text-neutral-11">Soft Primary Indeterminate</Text>
  </View>
  <View className="flex flex-row items-center gap-4">
    <Checkbox variant="outline" color="success" indeterminate />
    <Text className="text-sm text-neutral-11">Outline Success Indeterminate</Text>
  </View>
</View>`
  },
  "sizes": {
    name: "Checkbox Sizes",
    jsx: `<View className="flex flex-col gap-4">
${sizes.map(size => `  <View className="flex flex-col gap-4">
    <Text>${size.charAt(0).toUpperCase() + size.slice(1)}</Text>
    <View className="flex flex-row flex-wrap gap-4">
${variants.map((variant, index) => `      ${generateCheckboxJSX(`size-${size}-${variant}-${index}`, variant, colors[index], size)}`).join('\n')}
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
${variants.map(variant => `      ${generateCheckboxJSX(`disabled-${color}-${variant}`, variant, color, undefined, false, true)}`).join('\n')}
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
${variants.map(variant => `      ${generateCheckboxJSX(`disabled-checked-${color}-${variant}`, variant, color, undefined, true, true)}`).join('\n')}
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
${variants.map(variant => `      ${generateCheckboxWithLabelJSX(`label-${color}-${variant}`, variant, color, `${variant.charAt(0).toUpperCase() + variant.slice(1)} ${color.charAt(0).toUpperCase() + color.slice(1)}`)}`).join('\n')}
    </View>
  </View>`).join('\n')}
</View>`
  },
  "mixed-states": {
    name: "Mixed States",
    jsx: `<View className="flex flex-col gap-4">
  <View className="flex flex-row items-center gap-4">
    <Checkbox 
      checked={getParentChildState(["parent-child-primary", "parent-child-success", "parent-child-warning"]).checked}
      indeterminate={getParentChildState(["parent-child-primary", "parent-child-success", "parent-child-warning"]).indeterminate}
      onCheckedChange={createParentChildHandler("parent-all", ["parent-child-primary", "parent-child-success", "parent-child-warning"])}
    />
    <Text className="text-sm text-neutral-11">Select All Colors</Text>
  </View>
  <View className="flex flex-col gap-2 pl-8">
${colors.slice(0, 3).map(color => `    <View className="flex flex-row items-center gap-4">
      ${generateCheckboxJSX(`parent-child-${color}`, undefined, color, undefined, color === 'primary')}
      <Text className="text-sm text-neutral-11 capitalize">${color}</Text>
    </View>`).join('\n')}
  </View>
</View>`
  },
  "icon-variants": {
    name: "Icon Variants",
    jsx: `<View className="flex flex-col gap-4">
  <View className="flex flex-row flex-wrap gap-4">
    <View className="flex flex-row items-center gap-2">
      ${generateCheckboxWithIconJSX('icon-variant-solid', 'solid', undefined, 'Check', true)}
      <Text className="text-sm text-neutral-11">Solid + Check</Text>
    </View>
    <View className="flex flex-row items-center gap-2">
      ${generateCheckboxWithIconJSX('icon-variant-soft', 'soft', 'primary', 'Minus', true)}
      <Text className="text-sm text-neutral-11">Soft + Minus</Text>
    </View>
    <View className="flex flex-row items-center gap-2">
      ${generateCheckboxWithIconJSX('icon-variant-outline', 'outline', 'success', 'X', true)}
      <Text className="text-sm text-neutral-11">Outline + X</Text>
    </View>
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <View className="flex flex-row items-center gap-2">
      <Checkbox variant="solid" color="error" indeterminate>
        <Checkbox.Icon icon={Minus} />
      </Checkbox>
      <Text className="text-sm text-neutral-11">Solid Error Indeterminate</Text>
    </View>
    <View className="flex flex-row items-center gap-2">
      <Checkbox variant="soft" color="warning" disabled>
        <Checkbox.Icon icon={Check} />
      </Checkbox>
      <Text className="text-sm text-neutral-11">Soft Warning Disabled</Text>
    </View>
    <View className="flex flex-row items-center gap-2">
      <Checkbox variant="outline" color="secondary" disabled checked>
        <Checkbox.Icon icon={X} />
      </Checkbox>
      <Text className="text-sm text-neutral-11">Outline Secondary Disabled Checked</Text>
    </View>
  </View>
</View>`
  }
}; 