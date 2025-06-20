import type { VariantProps } from 'class-variance-authority';
import { inputRootVariants } from "@consensys/ds3/src/components/input/styles";

// Extract actual types from the input component
type InputVariant = NonNullable<VariantProps<typeof inputRootVariants>['variant']>;
type InputColor = NonNullable<VariantProps<typeof inputRootVariants>['color']>;
type InputSize = NonNullable<VariantProps<typeof inputRootVariants>['size']>;

// Get the actual variant, color, and size values from the component
const variants: InputVariant[] = ['soft', 'outline', 'underline', 'ghost'];
const colors: InputColor[] = ['neutral', 'primary', 'secondary', 'error', 'warning', 'success'];
const sizes: InputSize[] = ['sm', 'md', 'lg'];

// Helper function to generate JSX for a single input
const generateInputJSX = (variant: InputVariant, color?: InputColor, props: any = {}) => {
  const colorProp = color && color !== 'neutral' ? ` color="${color}"` : '';
  const propsStr = Object.entries(props).map(([key, value]) => ` ${key}="${value}"`).join('');
  
  return `<Input variant="${variant}"${colorProp}${propsStr}>
  <Input.Field />
</Input>`;
};

// Helper function to generate JSX for input with icon
const generateInputWithIconJSX = (variant: InputVariant, iconPosition: 'start' | 'end' | 'both', color?: InputColor, icon = 'Figma') => {
  const colorProp = color && color !== 'neutral' ? ` color="${color}"` : '';
  const placeholder = `placeholder="${variant}"`;
  
  let iconJSX = '';
  if (iconPosition === 'start' || iconPosition === 'both') {
    iconJSX += `  <Input.Icon icon={${icon}} />\n`;
  }
  iconJSX += `  <Input.Field />\n`;
  if (iconPosition === 'end' || iconPosition === 'both') {
    iconJSX += `  <Input.Icon icon={${icon}} />\n`;
  }
  
  return `<Input variant="${variant}"${colorProp} ${placeholder}>
${iconJSX}</Input>`;
};

// Helper function to generate JSX for input with text
const generateInputWithTextJSX = (variant: InputVariant, textPosition: 'start' | 'end' | 'both', color?: InputColor, text = '*') => {
  const colorProp = color && color !== 'neutral' ? ` color="${color}"` : '';
  const placeholder = `placeholder="${variant}"`;
  
  let textJSX = '';
  if (textPosition === 'start' || textPosition === 'both') {
    textJSX += `  <Input.Text className="text-sm">${text}</Input.Text>\n`;
  }
  textJSX += `  <Input.Field />\n`;
  if (textPosition === 'end' || textPosition === 'both') {
    textJSX += `  <Input.Text className="text-sm">${text}</Input.Text>\n`;
  }
  
  return `<Input variant="${variant}"${colorProp} ${placeholder}>
${textJSX}</Input>`;
};

// Helper function to generate JSX for input with size
const generateInputWithSizeJSX = (variant: InputVariant, size: InputSize, color?: InputColor) => {
  const colorProp = color && color !== 'neutral' ? ` color="${color}"` : '';
  const placeholder = `placeholder="${variant}"`;
  
  return `<Input variant="${variant}"${colorProp} size="${size}" ${placeholder}>
  <Input.Icon icon={Figma} />
  <Input.Field />
  <Input.Text>*</Input.Text>
</Input>`;
};

// Helper function to generate JSX for textarea
const generateTextareaJSX = (variant: InputVariant, color?: InputColor, props: any = {}) => {
  const colorProp = color && color !== 'neutral' ? ` color="${color}"` : '';
  const propsStr = Object.entries(props).map(([key, value]) => ` ${key}="${value}"`).join('');
  
  return `<Textarea variant="${variant}"${colorProp}${propsStr} />`;
};

// Helper function to generate common input examples
const generateCommonInputJSX = (name: string, variant: InputVariant, color?: InputColor) => {
  const colorProp = color && color !== 'neutral' ? ` color="${color}"` : '';
  
  const examples: { [key: string]: string } = {
    'Search Input': `<Input variant="${variant}"${colorProp} placeholder="Search...">
  <Input.Icon icon={Search} />
  <Input.Field />
</Input>`,
    'Password Input': `<Input variant="${variant}"${colorProp} placeholder="Enter password" secureTextEntry>
  <Input.Icon icon={Lock} />
  <Input.Field />
  <Input.Icon icon={Eye} />
</Input>`,
    'Email Input': `<Input variant="${variant}"${colorProp} placeholder="Enter email" keyboardType="email-address">
  <Input.Icon icon={Mail} />
  <Input.Field />
</Input>`,
    'Currency Input': `<Input variant="${variant}"${colorProp} placeholder="0.00" keyboardType="decimal-pad">
  <Input.Text className="text-sm">$</Input.Text>
  <Input.Field />
  <Input.Icon icon={Eye} />
</Input>`,
    'Username Input': `<Input variant="${variant}"${colorProp} placeholder="username" autoCapitalize="none" autoCorrect={false}>
  <Input.Text className="text-sm">@</Input.Text>
  <Input.Field />
</Input>`,
    'Measurement Input': `<Input variant="${variant}"${colorProp} placeholder="100" keyboardType="numeric">
  <Input.Icon icon={Search} />
  <Input.Field />
  <Input.Text className="text-sm">cm</Input.Text>
</Input>`,
    'Phone Input': `<Input variant="${variant}"${colorProp} placeholder="(555) 555-5555" keyboardType="phone-pad">
  <Input.Text className="text-sm">+1</Input.Text>
  <Input.Field />
  <Input.Icon icon={Eye} />
</Input>`
  };
  
  return examples[name] || '';
};

export const inputExamples = {
  "variants": {
    name: "Input Variants",
    jsx: `<View className="flex flex-row flex-wrap gap-4">
${variants.map(variant => `  ${generateInputJSX(variant, undefined, { placeholder: `${variant} variant` })}`).join('\n')}
</View>`
  },
  "colors": {
    name: "Input Colors",
    jsx: `<View className="flex flex-col gap-4">
${colors.map(color => `  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">${color.charAt(0).toUpperCase() + color.slice(1)}</Text>
${variants.map(variant => `    ${generateInputJSX(variant, color, { placeholder: variant.charAt(0).toUpperCase() + variant.slice(1) })}`).join('\n')}
  </View>`).join('\n')}
</View>`
  },
  "accent-colors": {
    name: "Accent Colors",
    jsx: `<View className="flex flex-row flex-wrap gap-4">
  <Input variant="soft" color="neutral" accentColor="primary" placeholder="Neutral to Primary" />
  <Input variant="outline" color="primary" accentColor="secondary" placeholder="Primary to Secondary" />
  <Input variant="ghost" color="secondary" accentColor="success" placeholder="Secondary to Success" />
  <Input variant="underline" color="success" accentColor="error" placeholder="Success to Error" />
</View>`
  },
  "icons": {
    name: "With Icons",
    jsx: `<View className="flex flex-col gap-4">
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">Start & End Icon</Text>
${variants.map((variant, index) => `    ${generateInputWithIconJSX(variant, 'both', colors[index])}`).join('\n')}
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">Start Only Icon</Text>
${variants.map((variant, index) => `    ${generateInputWithIconJSX(variant, 'start', colors[(index + 1) % colors.length])}`).join('\n')}
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">End Only Icon</Text>
${variants.map((variant, index) => `    ${generateInputWithIconJSX(variant, 'end', colors[(index + 2) % colors.length])}`).join('\n')}
  </View>
</View>`
  },
  "text": {
    name: "With Text",
    jsx: `<View className="flex flex-col gap-4">
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">Start & End Text</Text>
${variants.map((variant, index) => `    ${generateInputWithTextJSX(variant, 'both', colors[index], '*')}`).join('\n')}
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">Start Only Text</Text>
${variants.map((variant, index) => `    ${generateInputWithTextJSX(variant, 'start', colors[(index + 1) % colors.length], '*')}`).join('\n')}
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">End Only Text</Text>
${variants.map((variant, index) => `    ${generateInputWithTextJSX(variant, 'end', colors[(index + 2) % colors.length], '*')}`).join('\n')}
  </View>
</View>`
  },
  "sizes": {
    name: "Input Sizes",
    jsx: `<View className="flex flex-col gap-4">
${sizes.map(size => `  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">${size.charAt(0).toUpperCase() + size.slice(1)}</Text>
${variants.map((variant, index) => `    ${generateInputWithSizeJSX(variant, size, colors[index])}`).join('\n')}
  </View>`).join('\n')}
</View>`
  },
  "loading": {
    name: "Loading States",
    jsx: `<View className="flex flex-row flex-wrap gap-4">
  <Input variant="outline" loading placeholder="Outline">
    <Input.Spinner />
    <Input.Field />
  </Input>
  <Input variant="soft" color="primary" loading placeholder="Soft">
    <Input.Field />
    <Input.Spinner loadingIcon={Loader} />
  </Input>
  <Input variant="underline" color="secondary" loading placeholder="Underline">
    <Input.Spinner loadingIcon={LoaderPinwheel} />
    <Input.Field />
  </Input>
  <Input variant="ghost" color="error" loading placeholder="Ghost">
    <Input.Field />
    <Input.Spinner />
  </Input>
  <Input variant="outline" color="warning" loading placeholder="With custom loader">
    <Input.Spinner loadingIcon={Loader} />
    <Input.Field />
  </Input>
  <Input variant="soft" color="success" loading placeholder="With pinwheel">
    <Input.Field />
    <Input.Spinner loadingIcon={LoaderPinwheel} />
  </Input>
  <Input variant="soft" color="primary" loading disabled placeholder="Disabled and loading">
    <Input.Spinner />
    <Input.Field />
  </Input>
</View>`
  },
  "disabled": {
    name: "Disabled States",
    jsx: `<View className="flex flex-col gap-4">
${colors.map(color => `  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">${color.charAt(0).toUpperCase() + color.slice(1)}</Text>
${variants.map(variant => `    ${generateInputJSX(variant, color, { disabled: true, placeholder: variant.charAt(0).toUpperCase() + variant.slice(1) })}`).join('\n')}
  </View>`).join('\n')}
</View>`
  },
  "textarea": {
    name: "Textarea Variants",
    jsx: `<View className="flex flex-col gap-4">
${colors.map(color => `  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">${color.charAt(0).toUpperCase() + color.slice(1)}</Text>
${variants.map(variant => `    ${generateTextareaJSX(variant, color, { placeholder: variant.charAt(0).toUpperCase() + variant.slice(1) })}`).join('\n')}
  </View>`).join('\n')}
</View>`
  },
  "textarea-examples": {
    name: "Textarea Examples",
    jsx: `<View className="flex flex-row flex-wrap gap-4">
  <Textarea loading placeholder="Loading">
    <Input.Spinner />
    <Input.Field />
  </Textarea>
  <Textarea disabled placeholder="Disabled" />
  <Textarea placeholder="With icon...">
    <Input.Icon icon={Search} />
    <Input.Field />
  </Textarea>
  <Textarea numberOfLines={5} placeholder="Custom height" />
</View>`
  },
  "readonly": {
    name: "Read Only States",
    jsx: `<View className="flex flex-col gap-4">
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">Input</Text>
${variants.map((variant, index) => `    ${generateInputJSX(variant, colors[index], { readOnly: true, value: "Read only value", placeholder: "This input is read only" })}`).join('\n')}
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">Text Area</Text>
${variants.map((variant, index) => `    ${generateTextareaJSX(variant, colors[index], { readOnly: true, value: "Read only value", placeholder: "This input is read only" })}`).join('\n')}
  </View>
</View>`
  },
  "common": {
    name: "Common Examples",
    jsx: `<View className="flex flex-col gap-4">
${['Search Input', 'Password Input', 'Email Input', 'Currency Input', 'Username Input', 'Measurement Input', 'Phone Input'].map(name => `  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">${name}</Text>
${variants.map((variant, index) => `    ${generateCommonInputJSX(name, variant, colors[index])}`).join('\n')}
  </View>`).join('\n')}
</View>`
  }
}; 