import { 
  Figma, 
  Heart, 
  Star, 
  Zap, 
  Settings, 
  Edit3, 
  Search, 
  Eye, 
  Mail, 
  Lock,
  BookOpen,
  RotateCcw,
  LoaderPinwheel,
  Loader,
  Minus,
  Check,
  X,
  LoaderCircle,
  RefreshCw
} from "lucide-react-native";
import type { VariantProps } from 'class-variance-authority';
import { iconVariants } from "@consensys/ds3/src/components/icon/styles";

// Extract actual types from the icon component
type IconColor = NonNullable<VariantProps<typeof iconVariants>['color']>;
type IconSize = NonNullable<VariantProps<typeof iconVariants>['size']>;

// Get the actual color and size values from the component
const colors: IconColor[] = ['neutral', 'primary', 'secondary', 'error', 'warning', 'success'];
const sizes: IconSize[] = ['sm', 'md', 'lg'];

// Available icons for examples
const availableIcons = [
  { icon: 'Figma', component: Figma, label: 'Figma' },
  { icon: 'Heart', component: Heart, label: 'Heart' },
  { icon: 'Star', component: Star, label: 'Star' },
  { icon: 'Zap', component: Zap, label: 'Zap' },
  { icon: 'Settings', component: Settings, label: 'Settings' },
  { icon: 'Edit3', component: Edit3, label: 'Edit3' },
  { icon: 'Search', component: Search, label: 'Search' },
  { icon: 'Eye', component: Eye, label: 'Eye' },
  { icon: 'Mail', component: Mail, label: 'Mail' },
  { icon: 'Lock', component: Lock, label: 'Lock' },
  { icon: 'BookOpen', component: BookOpen, label: 'BookOpen' },
  { icon: 'RotateCcw', component: RotateCcw, label: 'RotateCcw' },
  { icon: 'LoaderPinwheel', component: LoaderPinwheel, label: 'LoaderPinwheel' },
  { icon: 'Loader', component: Loader, label: 'Loader' },
  { icon: 'Minus', component: Minus, label: 'Minus' },
  { icon: 'Check', component: Check, label: 'Check' },
  { icon: 'X', component: X, label: 'X' },
  { icon: 'LoaderCircle', component: LoaderCircle, label: 'LoaderCircle' },
  { icon: 'RefreshCw', component: RefreshCw, label: 'RefreshCw' }
] as const;

// Helper function to generate JSX for a single icon
const generateIconJSX = (icon: string, color?: IconColor, size?: IconSize) => {
  const colorProp = color && color !== 'neutral' ? ` color="${color}"` : '';
  const sizeProp = size && size !== 'md' ? ` size="${size}"` : '';
  
  return `<Icon icon={${icon}}${colorProp}${sizeProp} />`;
};

// Helper function to generate JSX for icon with label
const generateIconWithLabelJSX = (label: string, icon: string, color?: IconColor, size?: IconSize) => {
  return `<View className="flex flex-row items-center gap-2">
  <Text className="flex items-center">${label}</Text>
  ${generateIconJSX(icon, color, size)}
</View>`;
};

export const iconExamples = {
  "colors": {
    name: "Icon Colors",
    jsx: `<View className="flex flex-row flex-wrap gap-4">
${colors.map(color => `  ${generateIconWithLabelJSX(color.charAt(0).toUpperCase() + color.slice(1), 'Figma', color, 'md')}`).join('\n')}
</View>`
  },
  "sizes": {
    name: "Icon Sizes",
    jsx: `<View className="flex flex-col gap-4">
${sizes.map(size => `  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center w-20">${size.charAt(0).toUpperCase() + size.slice(1)}</Text>
${colors.map(color => `    ${generateIconJSX('Figma', color, size)}`).join('\n')}
  </View>`).join('\n')}
</View>`
  },
  "all-combinations": {
    name: "All Combinations",
    jsx: `<View className="flex flex-col gap-4">
${colors.map(color => `  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center w-20">
      ${color.charAt(0).toUpperCase() + color.slice(1)}
    </Text>
${sizes.map(size => `    ${generateIconJSX('Figma', color, size)}`).join('\n')}
  </View>`).join('\n')}
</View>`
  },
  "icon-variety": {
    name: "Icon Variety",
    jsx: `<View className="flex flex-row flex-wrap gap-4">
${availableIcons.slice(0, 10).map(({ icon, label }) => `  ${generateIconWithLabelJSX(label, icon, 'primary', 'md')}`).join('\n')}
</View>`
  },
  "color-variants": {
    name: "Color Variants",
    jsx: `<View className="flex flex-col gap-4">
${colors.map(color => `  <View className="flex flex-col gap-4">
    <Text>${color.charAt(0).toUpperCase() + color.slice(1)}</Text>
    <View className="flex flex-row flex-wrap gap-4">
${sizes.map(size => `      ${generateIconJSX('Figma', color, size)}`).join('\n')}
    </View>
  </View>`).join('\n')}
</View>`
  },
  "size-variants": {
    name: "Size Variants",
    jsx: `<View className="flex flex-col gap-4">
${sizes.map(size => `  <View className="flex flex-col gap-4">
    <Text>${size.charAt(0).toUpperCase() + size.slice(1)}</Text>
    <View className="flex flex-row flex-wrap gap-4">
${colors.map(color => `      ${generateIconJSX('Figma', color, size)}`).join('\n')}
    </View>
  </View>`).join('\n')}
</View>`
  },
  "common-icons": {
    name: "Common Icons",
    jsx: `<View className="flex flex-row flex-wrap gap-4">
${availableIcons.map(({ icon, label }) => `  ${generateIconWithLabelJSX(label, icon, 'primary', 'md')}`).join('\n')}
</View>`
  },
  "icon-colors": {
    name: "Icons with Colors",
    jsx: `<View className="flex flex-col gap-4">
${availableIcons.slice(0, 6).map(({ icon, label }, index) => `  <View className="flex flex-col gap-4">
    <Text>${label}</Text>
    <View className="flex flex-row flex-wrap gap-4">
${colors.map(color => `      ${generateIconJSX(icon, color, 'md')}`).join('\n')}
    </View>
  </View>`).join('\n')}
</View>`
  },
  "mixed-examples": {
    name: "Mixed Examples",
    jsx: `<View className="flex flex-col gap-4">
  <View className="flex flex-row flex-wrap gap-4">
    <Text>Different Sizes</Text>
${sizes.map(size => `    ${generateIconWithLabelJSX(size.charAt(0).toUpperCase() + size.slice(1), 'Figma', 'primary', size)}`).join('\n')}
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text>Different Colors</Text>
${colors.map(color => `    ${generateIconWithLabelJSX(color.charAt(0).toUpperCase() + color.slice(1), 'Heart', color, 'md')}`).join('\n')}
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text>Different Icons</Text>
${availableIcons.slice(0, 8).map(({ icon, label }) => `    ${generateIconWithLabelJSX(label, icon, 'secondary', 'lg')}`).join('\n')}
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text>Complex Combinations</Text>
    ${generateIconJSX('Star', 'warning', 'lg')}
    ${generateIconJSX('Zap', 'error', 'sm')}
    ${generateIconJSX('Settings', 'success', 'md')}
    ${generateIconJSX('Edit3', 'primary', 'lg')}
    ${generateIconJSX('Search', 'secondary', 'sm')}
  </View>
</View>`
  }
}; 