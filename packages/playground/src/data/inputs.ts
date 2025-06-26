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
const generateInputJSX = (variant: InputVariant, color?: InputColor, size?: InputSize, props: any = {}) => {
  const colorProp = color && color !== 'neutral' ? ` color="${color}"` : '';
  const sizeProp = size && size !== 'md' ? ` size="${size}"` : '';
  const propsStr = Object.entries(props).map(([key, value]) => ` ${key}="${value}"`).join('');
  
  return `<Input variant="${variant}"${colorProp}${sizeProp}${propsStr} />`;
};

// Helper function to generate JSX for multiline input
const generateMultilineInputJSX = (variant: InputVariant, color?: InputColor, props: any = {}) => {
  const colorProp = color && color !== 'neutral' ? ` color="${color}"` : '';
  const propsStr = Object.entries(props).map(([key, value]) => ` ${key}="${value}"`).join('');
  
  return `<Input variant="${variant}"${colorProp} multiline numberOfLines={5}${propsStr} />`;
};

// Helper function to generate JSX for input with icon
const generateInputWithIconJSX = (variant: InputVariant, iconPosition: 'start' | 'end' | 'both', color?: InputColor, size?: InputSize, props: any = {}) => {
  const colorProp = color && color !== 'neutral' ? ` color="${color}"` : '';
  const sizeProp = size && size !== 'md' ? ` size="${size}"` : '';
  const propsStr = Object.entries(props).map(([key, value]) => ` ${key}="${value}"`).join('');
  
  let iconJSX = '';
  if (iconPosition === 'start' || iconPosition === 'both') {
    iconJSX += `  <Input.Icon icon={Figma} />\n`;
  }
  iconJSX += `  <Input.Field />\n`;
  if (iconPosition === 'end' || iconPosition === 'both') {
    iconJSX += `  <Input.Icon icon={Figma} />\n`;
  }
  
  return `<Input variant="${variant}"${colorProp}${sizeProp}${propsStr}>
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
    name: "Variants",
    jsx: `<View className="flex flex-row flex-wrap gap-4">
${variants.map(variant => `  ${generateInputJSX(variant, undefined, undefined, { placeholder: variant.charAt(0).toUpperCase() + variant.slice(1) })}`).join('\n')}
</View>`
  },
  "colors": {
    name: "Colors",
    jsx: `<View className="flex flex-col gap-4">
${colors.map(color => `  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">${color.charAt(0).toUpperCase() + color.slice(1)}</Text>
${variants.map(variant => `    ${generateInputJSX(variant, color, undefined, { placeholder: variant.charAt(0).toUpperCase() + variant.slice(1) })}`).join('\n')}
  </View>`).join('\n')}
</View>`
  },
  "sizes": {
    name: "Sizes",
    jsx: `<View className="flex flex-col gap-4">
${sizes.map(size => `  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">${size.charAt(0).toUpperCase() + size.slice(1)}</Text>
${variants.map((variant, index) => `    ${generateInputJSX(variant, colors[index], size, { placeholder: variant.charAt(0).toUpperCase() + variant.slice(1) })}`).join('\n')}
  </View>`).join('\n')}
</View>`
  },
  "icons": {
    name: "Icons",
    jsx: `<View className="flex flex-col gap-4">
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">Prefix</Text>
${variants.map((variant, index) => `    ${generateInputWithIconJSX(variant, 'start', colors[index], undefined, { placeholder: variant.charAt(0).toUpperCase() + variant.slice(1) })}`).join('\n')}
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">Suffix</Text>
${variants.map((variant, index) => `    ${generateInputWithIconJSX(variant, 'end', colors[index], undefined, { placeholder: variant.charAt(0).toUpperCase() + variant.slice(1) })}`).join('\n')}
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">Both</Text>
${variants.map((variant, index) => `    ${generateInputWithIconJSX(variant, 'both', colors[index], undefined, { placeholder: variant.charAt(0).toUpperCase() + variant.slice(1) })}`).join('\n')}
  </View>
</View>`
  },
  "multiline": {
    name: "Multiline Input",
    jsx: `<View className="flex flex-col gap-4">
${variants.map((variant, index) => `  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">${variant.charAt(0).toUpperCase() + variant.slice(1)}</Text>
${colors.map(color => `    ${generateMultilineInputJSX(variant, color, { placeholder: variant.charAt(0).toUpperCase() + variant.slice(1) })}`).join('\n')}
  </View>`).join('\n')}
</View>`
  },
  "loading": {
    name: "Loading",
    jsx: `<View className="flex flex-row flex-wrap gap-4">
  <Input variant="elevated" loading>
    <Input.Spinner />
    <Input.Field placeholder="Loading..." />
  </Input>
  <Input variant="solid" color="primary" loading>
    <Input.Field placeholder="Loading..." />
    <Input.Spinner loadingIcon={Loader} />
  </Input>
  <Input variant="soft" color="secondary" loading>
    <Input.Spinner loadingIcon={LoaderPinwheel} />
    <Input.Field placeholder="Loading..." />
  </Input>
  <Input variant="outline" color="error" loading>
    <Input.Field placeholder="Loading..." />
    <Input.Spinner />
  </Input>
  <Input variant="dashed" color="warning" loading>
    <Input.Spinner loadingIcon={Loader} />
    <Input.Field placeholder="Loading..." />
  </Input>
  <Input variant="ghost" color="success" loading>
    <Input.Field placeholder="Loading..." />
    <Input.Spinner loadingIcon={LoaderPinwheel} />
  </Input>
</View>`
  },
  "disabled": {
    name: "Disabled",
    jsx: `<View className="flex flex-col gap-4">
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">Regular Inputs</Text>
${variants.map((variant, index) => `    <Input variant="${variant}" color="${colors[index]}" disabled placeholder="${variant.charAt(0).toUpperCase() + variant.slice(1)}" />`).join('\n')}
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">Multiline Inputs</Text>
${variants.map((variant, index) => `    <Input variant="${variant}" color="${colors[index]}" disabled multiline numberOfLines={3} placeholder="${variant.charAt(0).toUpperCase() + variant.slice(1)}" />`).join('\n')}
  </View>
</View>`
  }
}; 