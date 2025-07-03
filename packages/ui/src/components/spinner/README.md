# Spinner Component

The `<Spinner />` component provides a cross-platform loading animation that adapts to both web and React Native environments while maintaining consistent styling across platforms.

## Installation

Import the Spinner component from the DS3 package.

```tsx
import { Spinner } from '@consensys/ds3';
```

## Examples

### Basic

Create a simple spinner with default styling.

```tsx live
<View className="flex flex-row">
  <Spinner />
</View>
```

### Colors

Apply semantic color schemes for different contexts and states.

```tsx live
<View className="flex flex-row flex-wrap gap-3">
  <Spinner color="neutral" />
  <Spinner color="primary" />
  <Spinner color="secondary" />
  <Spinner color="error" />
  <Spinner color="warning" />
  <Spinner color="success" />
</View>
```

### Sizes

Scale spinners to fit different UI contexts and hierarchy levels.

```tsx live
<View className="flex flex-row gap-3">
  <Spinner size="sm" />
  <Spinner size="md" />
  <Spinner size="lg" />
</View>
```

### Animation Speeds

Control the animation speed for different loading contexts.

```tsx live
<View className="flex flex-row gap-3">
  <Spinner speed="slow" />
  <Spinner speed="normal" />
  <Spinner speed="fast" />
</View>
```

### Custom Icons

The Spinner component works seamlessly with any SVG icon library that exports React components. Here are examples from popular libraries:

#### Lucide React Native

```tsx live
import { LoaderCircle, Loader, LoaderPinwheel, RefreshCw } from 'lucide-react-native';

return (
  <View className="flex flex-row flex-wrap gap-3">
    <Spinner icon={LoaderCircle} color="primary" />
    <Spinner icon={Loader} color="secondary" />
    <Spinner icon={LoaderPinwheel} color="error" />
    <Spinner icon={RefreshCw} color="warning" />
  </View>
)
```

Simply import your preferred icon library and pass the icon components to the `icon` prop.

### Animation Direction

Control the rotation direction of the spinner animation.

```tsx live
<View className="flex flex-row gap-3">
  <Spinner direction="clockwise" />
  <Spinner direction="counterclockwise" />
</View>
```

## API Reference

Complete reference of all available props and their configurations.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `React.ComponentType<any>` | `LoaderCircle` | The SVG icon component to animate |
| `color` | `neutral` \| `primary` \| `secondary` \| `error` \| `warning` \| `success` | `neutral` | The color of the spinner |
| `size` | `sm` \| `md` \| `lg` | `md` | Size of the spinner |
| `speed` | `slow` \| `normal` \| `fast` \| `number` | `normal` | Animation speed (ms for number) |
| `direction` | `clockwise` \| `counterclockwise` | `clockwise` | Direction of rotation |
| `className` | `string` | - | Additional class names |
| `style` | `StyleProp<ViewStyle>` | - | Additional inline styles |

Plus additional SVG props that are passed to the underlying Icon component.

## Accessibility

Built-in accessibility support with automatic ARIA attributes and screen reader compatibility.

The Spinner component automatically implements proper accessibility attributes:

### Accessibility Prop Mappings

| Property | Implementation |
|----------|----------------|
| Role | `role="img"` (web) / `accessibilityRole="image"` (native) |

When using spinners purely for decoration, add appropriate accessibility props:

```tsx
<Spinner 
  aria-hidden="true" // Web
  accessibilityElementsHidden={true} // Native
/>
```

For spinners that convey loading state, provide descriptive labels:

```tsx
<Spinner 
  accessibilityLabel="Loading content" // Native
  aria-label="Loading content" // Web
/>
```

### Loading States

Use spinners to indicate loading states in your application:

```tsx
<View className="flex flex-col gap-4">
  <Spinner accessibilityLabel="Loading data" />
  <Text>Loading your content...</Text>
</View>
``` 