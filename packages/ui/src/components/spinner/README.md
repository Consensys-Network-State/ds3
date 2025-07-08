# Spinner Component

The `<Spinner />` component provides a cross-platform loading animation that adapts to both web and React Native environments while maintaining consistent styling across platforms. The Spinner can animate any element and defaults to a loading icon.

## Installation

Import the Spinner component from the DS3 package.

```tsx
import { Spinner } from '@consensys/ds3';
```

## Examples

### Basic

Create a simple spinner with default styling.

```tsx live
<Spinner />
<Spinner spin={false} />
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

### Animation Direction

Control the rotation direction of the spinner animation.

```tsx live
<View className="flex flex-row gap-3">
  <Spinner direction="clockwise" />
  <Spinner direction="counterclockwise" />
</View>
```

### Custom Spinning Icons

Use the `spinner` prop to display custom icons that will spin.

```tsx live
import { LoaderCircle, Loader, LoaderPinwheel, RefreshCw } from 'lucide-react-native';

return (
  <View className="flex flex-row flex-wrap gap-3">
    <Spinner spinner={LoaderCircle} color="primary" />
    <Spinner spinner={Loader} color="secondary" />
    <Spinner spinner={LoaderPinwheel} color="error" />
    <Spinner spinner={RefreshCw} color="warning" />
  </View>
)
```

### Fallback Behavior

The fallback only renders when `spin` is `false` and a `fallback` is provided.

```tsx live
<View className="flex flex-row gap-3">
  <Spinner spin={false} fallback={Figma} />

  <Spinner spin={false}>
    <Spinner.Fallback>
      <Text>Custom Fallback</Text>
    </Spinner.Fallback>
  </Spinner>
</View>
```

### Custom Elements

The Spinner can animate any element, not just icons. Pass children to spin custom content.

```tsx live
<View className="flex flex-row gap-3">
  <Spinner>⏳</Spinner>

  <Spinner color="primary">
    <Text className="text-lg">Spin!</Text>
  </Spinner>

  <Spinner>
    <View className="w-6 h-6 rounded-full border border-dashed" />
  </Spinner>
</View>
```

## API Reference

Complete reference of all available props and their configurations.

### Spinner Root

The main Spinner component that provides the container and context.

```tsx live expand
<Spinner speed="normal" direction="clockwise" spin={true}>
  {/* Spinner content goes here */}
</Spinner>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `speed` | `slow` \| `normal` \| `fast` \| `number` | `normal` | Animation speed (ms for number) |
| `direction` | `clockwise` \| `counterclockwise` | `clockwise` | Direction of rotation |
| `spin` | `boolean` | `true` | Whether the spinner is actively spinning |
| `spinner` | `ComponentType<any>` | `LoaderCircle` | Icon component to display when spinning |
| `fallback` | `ComponentType<any>` | - | Icon component to display when spin is false |
| `className` | `string` | - | Additional class names |
| `children` | `ReactNode` | - | Custom content to animate (overrides spinner) |

Inherits all [Icon](https://reactnative.dev/docs/image) props when no children are provided.

### Spinner Fallback

Displays the fallback content when `spin` is `false`. Can show custom content or the fallback icon.

```tsx live expand
<Spinner>
  <Spinner.Fallback className="text-primary">
    <Text>Custom Fallback</Text>
  </Spinner.Fallback>
</Spinner>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional class names |
| `children` | `ReactNode` | - | Custom fallback content |

Inherits all [Icon](https://reactnative.dev/docs/image) props when no children are provided.

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