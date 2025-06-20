import type { VariantProps } from 'class-variance-authority';
import { buttonVariants } from "@consensys/ds3/src/components/button/styles";

// Extract actual types from the button component
type ButtonVariant = NonNullable<VariantProps<typeof buttonVariants>['variant']>;
type ButtonColor = NonNullable<VariantProps<typeof buttonVariants>['color']>;
type ButtonSize = NonNullable<VariantProps<typeof buttonVariants>['size']>;

// Get the actual variant, color, and size values from the component
const variants: ButtonVariant[] = ['elevated', 'solid', 'soft', 'outline', 'dashed', 'ghost'];
const colors: ButtonColor[] = ['neutral', 'primary', 'secondary', 'error', 'warning', 'success'];
const sizes: ButtonSize[] = ['sm', 'md', 'lg'];

// Helper function to generate JSX for a single button
const generateButtonJSX = (variant: ButtonVariant, color?: ButtonColor, size?: ButtonSize, text = 'Button') => {
  const colorProp = color && color !== 'neutral' ? ` color="${color}"` : '';
  const sizeProp = size && size !== 'md' ? ` size="${size}"` : '';
  
  return `<Button variant="${variant}"${colorProp}${sizeProp}>
  <Button.Text>${text}</Button.Text>
</Button>`;
};

// Helper function to generate JSX for button with icon
const generateButtonWithIconJSX = (variant: ButtonVariant, iconPosition: 'start' | 'end' | 'both', color?: ButtonColor, size?: ButtonSize, text = 'Button') => {
  const colorProp = color && color !== 'neutral' ? ` color="${color}"` : '';
  const sizeProp = size && size !== 'md' ? ` size="${size}"` : '';
  
  let iconJSX = '';
  if (iconPosition === 'start' || iconPosition === 'both') {
    iconJSX += `  <Button.Icon icon={Figma} />\n`;
  }
  iconJSX += `  <Button.Text>${text}</Button.Text>\n`;
  if (iconPosition === 'end' || iconPosition === 'both') {
    iconJSX += `  <Button.Icon icon={Figma} />\n`;
  }
  
  return `<Button variant="${variant}"${colorProp}${sizeProp}>
${iconJSX}</Button>`;
};

// Helper function to generate JSX for icon button
const generateIconButtonJSX = (variant: ButtonVariant, color?: ButtonColor, size?: ButtonSize) => {
  const colorProp = color && color !== 'neutral' ? ` color="${color}"` : '';
  const sizeProp = size && size !== 'md' ? ` size="${size}"` : '';
  
  return `<IconButton variant="${variant}"${colorProp}${sizeProp} icon={Figma} />`;
};

export const buttonExamples = {
  "basic": {
    name: "Basic Buttons",
    jsx: `<View className="flex flex-row flex-wrap gap-4">
  <Button variant="solid" color="primary">
    <Button.Text>Primary</Button.Text>
  </Button>
  <Button variant="outline" color="secondary">
    <Button.Text>Secondary</Button.Text>
  </Button>
  <Button variant="soft" color="success">
    <Button.Text>Success</Button.Text>
  </Button>
</View>`
  },
  "variants": {
    name: "All Variants",
    jsx: `<View className="flex flex-row flex-wrap gap-4">
${variants.map(variant => `  ${generateButtonJSX(variant, undefined, undefined, variant.charAt(0).toUpperCase() + variant.slice(1))}`).join('\n')}
</View>`
  },
  "colors": {
    name: "All Colors",
    jsx: `<View className="flex flex-col gap-4">
${colors.map(color => `  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">${color.charAt(0).toUpperCase() + color.slice(1)}</Text>
${variants.map(variant => `    ${generateButtonJSX(variant, color, undefined, variant.charAt(0).toUpperCase() + variant.slice(1))}`).join('\n')}
  </View>`).join('\n')}
</View>`
  },
  "sizes": {
    name: "All Sizes",
    jsx: `<View className="flex flex-col gap-4">
${sizes.map(size => `  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">${size.charAt(0).toUpperCase() + size.slice(1)}</Text>
${variants.map((variant, index) => `    ${generateButtonJSX(variant, colors[index], size, variant.charAt(0).toUpperCase() + variant.slice(1))}`).join('\n')}
  </View>`).join('\n')}
</View>`
  },
  "icons": {
    name: "With Icons",
    jsx: `<View className="flex flex-col gap-4">
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">Prefix & Suffix Icon</Text>
${variants.slice(0, 3).map(variant => `    ${generateButtonWithIconJSX(variant, 'both', colors[variants.indexOf(variant)])}`).join('\n')}
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">Prefix Only Icon</Text>
${variants.slice(3).map(variant => `    ${generateButtonWithIconJSX(variant, 'start', colors[variants.indexOf(variant)])}`).join('\n')}
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">Suffix Only Icon</Text>
${variants.slice(0, 3).map(variant => `    ${generateButtonWithIconJSX(variant, 'end', colors[variants.indexOf(variant)])}`).join('\n')}
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
    name: "Loading States",
    jsx: `<View className="flex flex-row flex-wrap gap-4">
  <Button variant="outline" loading>
    <Button.Spinner />
    <Button.Text>Loading</Button.Text>
  </Button>
  <Button variant="solid" color="primary" loading>
    <Button.Text>Loading</Button.Text>
    <Button.Spinner loadingIcon={Loader} />
  </Button>
  <Button variant="soft" color="secondary" loading>
    <Button.Spinner loadingIcon={LoaderPinwheel} />
    <Button.Text>Loading</Button.Text>
  </Button>
  <Button variant="dashed" color="error" loading>
    <Button.Text>Loading</Button.Text>
    <Button.Spinner />
  </Button>
  <Button variant="ghost" color="warning" loading>
    <Button.Spinner loadingIcon={Loader} />
    <Button.Text>Loading</Button.Text>
  </Button>
  <Button variant="elevated" color="success" loading>
    <Button.Text>Loading</Button.Text>
    <Button.Spinner loadingIcon={LoaderPinwheel} />
  </Button>
</View>`
  },
  "disabled": {
    name: "Disabled States",
    jsx: `<View className="flex flex-row flex-wrap gap-4">
${variants.map((variant, index) => `  <Button variant="${variant}" color="${colors[index]}" disabled>
    <Button.Text>${variant.charAt(0).toUpperCase() + variant.slice(1)}</Button.Text>
  </Button>`).join('\n')}
</View>`
  },
  "icon-loading": {
    name: "Icon Button Loading",
    jsx: `<View className="flex flex-row flex-wrap gap-4">
  <IconButton variant="outline" loading icon={Figma} />
  <IconButton variant="solid" color="primary" loading icon={Figma} />
  <IconButton variant="soft" color="secondary" loading icon={Figma} />
  <IconButton variant="dashed" color="error" loading icon={Figma} />
  <IconButton variant="ghost" color="warning" loading icon={Figma} />
  <IconButton variant="elevated" color="success" loading icon={Figma} />
</View>`
  }
}; 