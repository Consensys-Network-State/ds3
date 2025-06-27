import { LoaderCircle, Loader, LoaderPinwheel, RefreshCw } from "lucide-react-native";
import type { VariantProps } from 'class-variance-authority';
import { iconVariants } from "@consensys/ds3/src/components/icon/styles";

// Extract actual types from the icon component (used by spinner)
type SpinnerColor = NonNullable<VariantProps<typeof iconVariants>['color']>;
type SpinnerSize = NonNullable<VariantProps<typeof iconVariants>['size']>;
type SpinnerSpeed = 'slow' | 'normal' | 'fast';
type SpinnerDirection = 'clockwise' | 'counterclockwise';

// Get the actual color and size values from the component
const colors: SpinnerColor[] = ['neutral', 'primary', 'secondary', 'error', 'warning', 'success'];
const sizes: SpinnerSize[] = ['sm', 'md', 'lg'];
const speeds: SpinnerSpeed[] = ['slow', 'normal', 'fast'];
const directions: SpinnerDirection[] = ['clockwise', 'counterclockwise'];

// Available spinner icons
const spinnerIcons = [
  { icon: 'LoaderCircle', component: LoaderCircle, label: 'LoaderCircle' },
  { icon: 'Loader', component: Loader, label: 'Loader' },
  { icon: 'LoaderPinwheel', component: LoaderPinwheel, label: 'LoaderPinwheel' },
  { icon: 'RefreshCw', component: RefreshCw, label: 'RefreshCw' }
] as const;

// Helper function to generate JSX for a single spinner
const generateSpinnerJSX = (color?: SpinnerColor, size?: SpinnerSize, speed?: SpinnerSpeed, direction?: SpinnerDirection, icon?: string) => {
  const colorProp = color && color !== 'neutral' ? ` color="${color}"` : '';
  const sizeProp = size && size !== 'md' ? ` size="${size}"` : '';
  const speedProp = speed && speed !== 'normal' ? ` speed="${speed}"` : '';
  const directionProp = direction && direction !== 'clockwise' ? ` direction="${direction}"` : '';
  const iconProp = icon ? ` icon={${icon}}` : '';
  
  return `<Spinner${colorProp}${sizeProp}${speedProp}${directionProp}${iconProp} />`;
};

// Helper function to generate JSX for spinner with label
const generateSpinnerWithLabelJSX = (label: string, color?: SpinnerColor, size?: SpinnerSize, speed?: SpinnerSpeed, direction?: SpinnerDirection, icon?: string) => {
  return `<View className="flex flex-row items-center gap-2">
  <Text>${label}</Text>
  ${generateSpinnerJSX(color, size, speed, direction, icon)}
</View>`;
};

export const spinnerExamples = {
  "icons": {
    name: "Spinner Icons",
    jsx: `<View className="flex flex-row flex-wrap gap-4">
${spinnerIcons.map(({ icon, label }) => `  ${generateSpinnerWithLabelJSX(label, 'primary', 'lg', undefined, undefined, icon)}`).join('\n')}
</View>`
  },
  "colors": {
    name: "Spinner Colors",
    jsx: `<View className="flex flex-row flex-wrap gap-4">
${colors.map(color => `  ${generateSpinnerWithLabelJSX(color.charAt(0).toUpperCase() + color.slice(1), color, 'lg')}`).join('\n')}
</View>`
  },
  "sizes": {
    name: "Spinner Sizes",
    jsx: `<View className="flex flex-col gap-4">
${sizes.map(size => `  <View className="flex flex-row flex-wrap gap-4 align-center">
    <Text>${size.charAt(0).toUpperCase() + size.slice(1)}</Text>
${colors.map(color => `    ${generateSpinnerJSX(color, size)}`).join('\n')}
  </View>`).join('\n')}
</View>`
  },
  "speeds": {
    name: "Animation Speeds",
    jsx: `<View className="flex flex-row flex-wrap gap-4">
${speeds.map(speed => `  ${generateSpinnerWithLabelJSX(speed.charAt(0).toUpperCase() + speed.slice(1), 'primary', 'lg', speed)}`).join('\n')}
</View>`
  },
  "directions": {
    name: "Animation Directions",
    jsx: `<View className="flex flex-row flex-wrap gap-4">
${directions.map(direction => `  ${generateSpinnerWithLabelJSX(direction.charAt(0).toUpperCase() + direction.slice(1), 'primary', 'lg', undefined, direction)}`).join('\n')}
</View>`
  },
  "color-variants": {
    name: "Color Variants",
    jsx: `<View className="flex flex-col gap-4">
${colors.map(color => `  <View className="flex flex-col gap-4">
    <Text>${color.charAt(0).toUpperCase() + color.slice(1)}</Text>
    <View className="flex flex-row flex-wrap gap-4">
${sizes.map(size => `      ${generateSpinnerJSX(color, size)}`).join('\n')}
    </View>
  </View>`).join('\n')}
</View>`
  },
  "icon-variants": {
    name: "Icon Variants",
    jsx: `<View className="flex flex-col gap-4">
${spinnerIcons.map(({ icon, label }) => `  <View className="flex flex-col gap-4">
    <Text>${label}</Text>
    <View className="flex flex-row flex-wrap gap-4">
${colors.map(color => `      ${generateSpinnerJSX(color, 'lg', undefined, undefined, icon)}`).join('\n')}
    </View>
  </View>`).join('\n')}
</View>`
  },
  "speed-variants": {
    name: "Speed Variants",
    jsx: `<View className="flex flex-col gap-4">
${speeds.map(speed => `  <View className="flex flex-col gap-4">
    <Text>${speed.charAt(0).toUpperCase() + speed.slice(1)}</Text>
    <View className="flex flex-row flex-wrap gap-4">
${colors.map(color => `      ${generateSpinnerJSX(color, 'lg', speed)}`).join('\n')}
    </View>
  </View>`).join('\n')}
</View>`
  },
  "mixed-examples": {
    name: "Mixed Examples",
    jsx: `<View className="flex flex-col gap-4">
  <View className="flex flex-row flex-wrap gap-4">
    <Text>Different Icons</Text>
${spinnerIcons.map(({ icon, label }) => `    ${generateSpinnerWithLabelJSX(label, 'primary', 'lg', undefined, undefined, icon)}`).join('\n')}
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text>Different Speeds</Text>
${speeds.map(speed => `    ${generateSpinnerWithLabelJSX(speed.charAt(0).toUpperCase() + speed.slice(1), 'secondary', 'lg', speed)}`).join('\n')}
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text>Different Directions</Text>
${directions.map(direction => `    ${generateSpinnerWithLabelJSX(direction.charAt(0).toUpperCase() + direction.slice(1), 'success', 'lg', undefined, direction)}`).join('\n')}
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text>Different Sizes</Text>
${sizes.map(size => `    ${generateSpinnerWithLabelJSX(size.charAt(0).toUpperCase() + size.slice(1), 'error', size)}`).join('\n')}
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text>Complex Combinations</Text>
    ${generateSpinnerJSX('primary', 'lg', 'fast', 'counterclockwise', 'LoaderPinwheel')}
    ${generateSpinnerJSX('warning', 'sm', 'slow', 'clockwise', 'RefreshCw')}
    ${generateSpinnerJSX('success', 'md', 'normal', 'clockwise', 'Loader')}
  </View>
</View>`
  }
}; 