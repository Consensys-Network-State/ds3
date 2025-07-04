# Icon Component

The `<Icon />` component provides a cross-platform way to render SVG icons that adapts to both web and React Native environments while maintaining consistent styling across platforms.

## Installation

Import the Icon component from the DS3 package.

```tsx
import { Icon } from '@consensys/ds3';
```

## Examples

### Basic

Create a simple icon with default styling.

```tsx live
<Icon icon={Figma} />
```

### Colors

Apply semantic color schemes for different contexts and states.

Text (default):

```tsx live
<View className="flex flex-row flex-wrap gap-3">
  <Icon icon={Figma} color="neutral" />
  <Icon icon={Figma} color="primary" />
  <Icon icon={Figma} color="secondary" />
  <Icon icon={Figma} color="error" />
  <Icon icon={Figma} color="warning" />
  <Icon icon={Figma} color="success" />
</View>
```

Background:

```tsx live
<View className="flex flex-row flex-wrap gap-3">
  <Icon icon={Figma} color="neutral" spectrum="bg" />
  <Icon icon={Figma} color="primary" spectrum="bg" />
  <Icon icon={Figma} color="secondary" spectrum="bg" />
  <Icon icon={Figma} color="error" spectrum="bg" />
  <Icon icon={Figma} color="warning" spectrum="bg" />
  <Icon icon={Figma} color="success" spectrum="bg" />
</View>
```

Border: 

```tsx live
<View className="flex flex-row flex-wrap gap-3">
  <Icon icon={Figma} color="neutral" spectrum="border" />
  <Icon icon={Figma} color="primary"spectrum="border" />
  <Icon icon={Figma} color="secondary" spectrum="border" />
  <Icon icon={Figma} color="error" spectrum="border" />
  <Icon icon={Figma} color="warning" spectrum="border" />
  <Icon icon={Figma} color="success" spectrum="border" />
</View>
```

Solid:

```tsx live
<View className="flex flex-row flex-wrap gap-3">
  <Icon icon={Figma} color="neutral" spectrum="solid" />
  <Icon icon={Figma} color="primary"  spectrum="solid" />
  <Icon icon={Figma} color="secondary"  spectrum="solid" />
  <Icon icon={Figma} color="error"  spectrum="solid" />
  <Icon icon={Figma} color="warning"  spectrum="solid" />
  <Icon icon={Figma} color="success"  spectrum="solid" />
</View>
```

Contrast:

```tsx live
<View className="flex flex-row flex-wrap gap-3">
  <Icon icon={Figma} color="neutral" spectrum="contrast" />
  <Icon icon={Figma} color="primary"  spectrum="contrast" />
  <Icon icon={Figma} color="secondary"  spectrum="contrast" />
  <Icon icon={Figma} color="error"  spectrum="contrast" />
  <Icon icon={Figma} color="warning"  spectrum="contrast" />
  <Icon icon={Figma} color="success"  spectrum="contrast" />
</View>
```

### Sizes

Scale icons to fit different UI contexts and hierarchy levels.

```tsx live
<View className="flex flex-row gap-3">
  <Icon icon={Figma} size="sm" />
  <Icon icon={Figma} size="md" />
  <Icon icon={Figma} size="lg" />
</View>
```

### Numeric Sizes

Use custom numeric sizes for precise control:

```tsx live
<View className="flex flex-row gap-3">
  <Icon icon={Figma} size={16} />
  <Icon icon={Figma} size={24} />
  <Icon icon={Figma} size={32} />
  <Icon icon={Figma} size={48} />
</View>
```

### Spectrum

Use different color spectrums to match your design system's color scales. The spectrum prop changes which color scale is used for the icon.

```tsx live
<View className="flex flex-row flex-wrap gap-3">
  <Icon icon={Figma} color="primary" spectrum="text" />
  <Icon icon={Figma} color="primary" spectrum="bg" />
  <Icon icon={Figma} color="primary" spectrum="border" />
  <Icon icon={Figma} color="primary" spectrum="solid" />
  <Icon icon={Figma} color="primary" spectrum="contrast" />
</View>
```

### Hover Effects

Enable hover effects that change the icon color on hover (web only).

```tsx live
<View className="flex flex-row flex-wrap gap-3">
  <Icon icon={Figma} color="primary" hover />
  <Icon icon={Figma} color="primary" spectrum="bg" hover />
  <Icon icon={Figma} color="primary" spectrum="border" hover />
  <Icon icon={Figma} color="primary" spectrum="solid" hover />
  <Icon icon={Figma} color="primary" spectrum="contrast" hover />
</View>
```

### Icons in Buttons

When using icons with hover effects inside buttons, the icon will automatically respond to the button's hover state. This works because buttons have the `group` class and icons use `group-hover:` classes.

```tsx live
<View className="flex flex-row flex-wrap gap-3">
  <Button>
    <Button.Icon icon={Heart} hover />
    <Button.Text>Like</Button.Text>
  </Button>
  
  <Button variant="solid" color="primary">
    <Button.Icon icon={Settings} spectrum="contrast" hover />
    <Button.Text>Settings</Button.Text>
  </Button>
  
  <Button variant="outline" color="secondary">
    <Button.Icon icon={Star} spectrum="border" hover />
    <Button.Text>Favorite</Button.Text>
  </Button>
</View>
```

The icon's hover effect is triggered when hovering over any part of the button, providing a seamless user experience.

### Icon Libraries

The Icon component works seamlessly with any SVG icon library that exports React components. Here are examples from popular libraries:

#### Lucide React Native

```tsx live
import { Heart, Star, Zap, Settings, Edit3, Search, Mail, Lock, Eye, BookOpen } from 'lucide-react-native';

return (
  <View className="flex flex-row flex-wrap gap-3">
    <Icon icon={Heart} color="primary" />
    <Icon icon={Star} color="warning" />
    <Icon icon={Zap} color="error" />
    <Icon icon={Settings} color="secondary" />
    <Icon icon={Edit3} color="success" />
    <Icon icon={Search} color="neutral" />
    <Icon icon={Mail} color="primary" />
    <Icon icon={Lock} color="error" />
    <Icon icon={Eye} color="secondary" />
    <Icon icon={BookOpen} color="success" />
  </View>
)
```

Simply import your preferred icon library and pass the icon components to the `icon` prop.

## API Reference

Complete reference of all available props and their configurations.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `React.ComponentType<any>` | **Required** | The SVG icon component to render |
| `color` | `neutral` \| `primary` \| `secondary` \| `error` \| `warning` \| `success` | `neutral` | The color of the icon |
| `size` | `sm` \| `md` \| `lg` \| `number` | `md` | Size of the icon (string for predefined sizes, number for custom pixel values) |
| `spectrum` | `text` \| `bg` \| `border` \| `solid` \| `contrast` | `text` | The color spectrum to use (affects which color scale is applied) |
| `hover` | `boolean` | `false` | Enable hover effects that change color on hover (web only) |
| `className` | `string` | - | Additional class names |
| `style` | `StyleProp<ViewStyle>` | - | Additional inline styles |

Plus additional SVG props that are passed to the underlying SVG component.

## Color Spectrums

The `spectrum` prop allows you to use different color scales from the Radix color system:

- **`text`** (default): Uses the text color scale (a11-a12) - suitable for icons in text contexts
- **`bg`**: Uses the background color scale (a3-a4) - suitable for subtle background icons
- **`border`**: Uses the border color scale (a7-a8) - suitable for border and outline contexts
- **`solid`**: Uses the solid color scale (9-10) - suitable for filled/solid contexts
- **`contrast`**: Uses the contrast color scale - suitable for icons on colored backgrounds (like buttons)

## Hover Implementation

The hover functionality uses Tailwind's group hover system:

- When `hover={true}`, the icon is wrapped in a container div with `inline-block` class
- The icon receives the `group` class
- Hover effects use `group-hover:` classes that respond to parent hover states
- This allows icons to respond to hover states of parent components (like buttons) automatically

### Technical Details

```tsx
// When hover={true}, the icon structure becomes:
<div className="inline-block">
  <IconComponent className="group group-hover:text-primary-a12" />
</div>

// When used in a button:
<Button className="group"> {/* Button has group class */}
  <Button.Icon hover /> {/* Icon has group class and group-hover: classes */}
</Button>
```

This design ensures that hovering over the button triggers the icon's hover effect seamlessly.

## Accessibility

Built-in accessibility support with automatic ARIA attributes and screen reader compatibility.

The Icon component automatically implements proper accessibility attributes:

### Accessibility Prop Mappings

| Property | Implementation |
|----------|----------------|
| Role | `role="img"` (web) / `accessibilityRole="image"` (native) |

When using icons purely for decoration, add appropriate accessibility props:

```tsx
<Icon 
  icon={Decoration} 
  aria-hidden="true" // Web
  accessibilityElementsHidden={true} // Native
/>
```

For icons that convey meaning, provide descriptive labels:

```tsx
<Icon 
  icon={Heart} 
  accessibilityLabel="Favorite item" // Native
  aria-label="Favorite item" // Web
/>
```