import type { ButtonVariant, ButtonColors, ButtonSizes } from "@consensys/ds3";

// Get the actual variant, color, and size values from the component
const variants: ButtonVariant[] = ['elevated', 'solid', 'soft', 'outline', 'dashed', 'ghost'];
const colors: ButtonColors[] = ['neutral', 'primary', 'secondary', 'error', 'warning', 'success'];
const sizes: ButtonSizes[] = ['sm', 'md', 'lg'];

// Helper function to generate JSX for a single button
const generateButtonJSX = (variant: ButtonVariant, color?: ButtonColors, size?: ButtonSizes, text = 'Button') => {
  const colorProp = color && color !== 'neutral' ? ` color="${color}"` : '';
  const sizeProp = size && size !== 'md' ? ` size="${size}"` : '';
  
  return `<Button variant="${variant}"${colorProp}${sizeProp}>
  <Text>${text}</Text>
</Button>`;
};

// Helper function to generate JSX for button with icon
const generateButtonWithIconJSX = (variant: ButtonVariant, iconPosition: 'start' | 'end' | 'both', color?: ButtonColors, size?: ButtonSizes, text = 'Button') => {
  const colorProp = color && color !== 'neutral' ? ` color="${color}"` : '';
  const sizeProp = size && size !== 'md' ? ` size="${size}"` : '';
  
  let iconJSX = '';
  if (iconPosition === 'start' || iconPosition === 'both') {
    iconJSX += `  <Icon icon={Figma} />\n`;
  }
  iconJSX += `  <Text>${text}</Text>\n`;
  if (iconPosition === 'end' || iconPosition === 'both') {
    iconJSX += `  <Icon icon={Figma} />\n`;
  }
  
  return `<Button variant="${variant}"${colorProp}${sizeProp}>
${iconJSX}</Button>`;
};

// Helper function to generate JSX for icon button
const generateIconButtonJSX = (variant: ButtonVariant, color?: ButtonColors, size?: ButtonSizes) => {
  const colorProp = color && color !== 'neutral' ? ` color="${color}"` : '';
  const sizeProp = size && size !== 'md' ? ` size="${size}"` : '';
  
  return `<Button variant="${variant}"${colorProp}${sizeProp} square><Icon icon={Figma} /></Button>`;
};

export const buttonExamples = {
  "variants": {
    name: "Variants",
    jsx: `<View className="flex flex-row flex-wrap gap-4">
${variants.map(variant => `  ${generateButtonJSX(variant, undefined, undefined, variant.charAt(0).toUpperCase() + variant.slice(1))}`).join('\n')}
</View>`
  },
  "colors": {
    name: "Colors",
    jsx: `<View className="flex flex-col gap-4">
${colors.map(color => `  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">${color.charAt(0).toUpperCase() + color.slice(1)}</Text>
${variants.map(variant => `    ${generateButtonJSX(variant, color, undefined, variant.charAt(0).toUpperCase() + variant.slice(1))}`).join('\n')}
  </View>`).join('\n')}
</View>`
  },
  "accent-colors": {
    name: "Accent Colors",
    jsx: `<View className="flex flex-row flex-wrap gap-4">
  <Button variant="soft" color="neutral" toColor="primary">
    <Text>Neutral to Primary</Text>
  </Button>

  <Button variant="outline" color="primary" toColor="secondary">
    <Text>Primary to Secondary</Text>
  </Button>

  <Button variant="ghost" color="secondary" toColor="success">
    <Text>Secondary to Success</Text>
  </Button>

  <Button variant="dashed" color="success" toColor="error">
    <Text>Success to Error</Text>
  </Button>
</View>`
  },
  "sizes": {
    name: "Sizes",
    jsx: `<View className="flex flex-col gap-4">
${sizes.map(size => `  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">${size.charAt(0).toUpperCase() + size.slice(1)}</Text>
${variants.map((variant, index) => `    ${generateButtonJSX(variant, colors[index], size, variant.charAt(0).toUpperCase() + variant.slice(1))}`).join('\n')}
  </View>`).join('\n')}
</View>`
  },
  "icons": {
    name: "Icons",
    jsx: `<View className="flex flex-col gap-4">
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">Prefix</Text>
${variants.map((variant, index) => `    ${generateButtonWithIconJSX(variant, 'start', colors[index], undefined, variant.charAt(0).toUpperCase() + variant.slice(1))}`).join('\n')}
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">Suffix</Text>
${variants.map((variant, index) => `    ${generateButtonWithIconJSX(variant, 'end', colors[index], undefined, variant.charAt(0).toUpperCase() + variant.slice(1))}`).join('\n')}
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">Both</Text>
${variants.map((variant, index) => `    ${generateButtonWithIconJSX(variant, 'both', colors[index], undefined, variant.charAt(0).toUpperCase() + variant.slice(1))}`).join('\n')}
  </View>
</View>`
  },
  "icon-buttons": {
    name: "Icon Buttons",
    jsx: `<View className="flex flex-col gap-4">
${sizes.map(size => `  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">${size.charAt(0).toUpperCase() + size.slice(1)}</Text>
${variants.map((variant, index) => `    ${generateIconButtonJSX(variant, colors[index], size)}`).join('\n')}
  </View>`).join('\n')}
</View>`
  },
  "loading": {
    name: "Loading",
    jsx: `<View className="flex flex-row flex-wrap gap-4">
  <Button variant="elevated" loading>
    <Spinner />
    <Text>Loading</Text>
  </Button>
  <Button variant="solid" color="primary" loading>
    <Text>Loading</Text>
    <Spinner spinner={Loader} />
  </Button>
  <Button variant="soft" color="secondary" loading>
    <Spinner spinner={LoaderPinwheel} />
    <Text>Loading</Text>
  </Button>
  <Button variant="outline" color="error" loading>
    <Text>Loading</Text>
    <Spinner />
  </Button>
  <Button variant="dashed" color="warning" loading>
    <Spinner spinner={Loader} />
    <Text>Loading</Text>
  </Button>
  <Button variant="ghost" color="success" loading>
    <Text>Loading</Text>
    <Spinner spinner={LoaderPinwheel} />
  </Button>
</View>`
  },
  "disabled": {
    name: "Disabled",
    jsx: `<View className="flex flex-col gap-4">
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">Regular Buttons</Text>
${variants.map((variant, index) => `    <Button variant="${variant}" color="${colors[index]}" disabled>
      <Text>${variant.charAt(0).toUpperCase() + variant.slice(1)}</Text>
    </Button>`).join('\n')}
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">Square</Text>
${variants.map((variant, index) => `    <Button variant="${variant}" color="${colors[index]}" disabled square><Icon icon={Figma} /></Button>`).join('\n')}
  </View>
</View>`
  }
};