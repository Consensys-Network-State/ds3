# Button Component

The `<Button />` component provides a cross-platform button that adapts to React Native environments while providing platform-native APIs.

## Installation

```tsx
import { Button } from '@consensys/ds3';
```

## Examples

### Basic

```tsx
<Button>
  Click Me
</Button>
```

### Variants

```tsx
<View className="flex flex-row gap-3">
  <Button variant="elevated">Elevated</Button>
  <Button variant="solid">Solid</Button>
  <Button variant="soft">Soft</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="dashed">Dashed</Button>
  <Button variant="ghost">Ghost</Button>
</View>
```

### Colors

```tsx
<View className="flex flex-row gap-3">
  <Button color="neutral">Neutral</Button>
  <Button color="primary">Primary</Button>
  <Button color="secondary">Secondary</Button>
  <Button color="error">Error</Button>
  <Button color="warning">Warning</Button>
  <Button color="success">Success</Button>
</View>
```

### Sizes

```tsx
<View className="flex flex-row gap-3">
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
</View>
```

### Icons

```tsx
<View className="flex flex-row gap-3">
  <Button variant="solid" color="primary">
    <Button.Icon icon={Figma} />
    <Button.Text>Icon Left</Button.Text>
  </Button>

  <Button variant="solid" color="primary">
    <Button.Text>Icon Right</Button.Text>
    <Button.Icon icon={Figma} />
  </Button>

  <Button variant="solid" color="primary">
    <Button.Icon icon={Figma} />
    <Button.Text>Icon Both</Button.Text>
    <Button.Icon icon={Figma} />
  </Button>
</View>
```

### Icon Buttons

```tsx
<IconButton 
  variant="solid" 
  color="primary" 
  icon={Figma} 
  accessibilityLabel="Open Figma"
/>
```

### Loading State

```tsx
<View className="flex flex-row gap-3">
  <Button variant="solid" color="primary" loading>
    <Button.Spinner />
    <Button.Text>Spinner Left</Button.Text>
  </Button>

  <Button variant="solid" color="primary" loading>
    <Button.Text>Spinner Right</Button.Text>
    <Button.Spinner />
  </Button>

  <Button variant="solid" color="primary" loading>
    <Button.Spinner loadingIcon={Loader} />
    <Button.Text>Custom Icon</Button.Text>
  </Button>

  <Button variant="solid" color="primary">
    <Button.Spinner icon={Figma} />
    <Button.Text>Icon Fallback</Button.Text>
  </Button>
</View>  
```

### Disabled State

```tsx
<Button disabled>
  <Button.Text>Disabled Button</Button.Text>
</Button>
```

### Accent Colors

```tsx
<Button variant="soft" color="primary" accentColor="secondary">
  <Button.Text>Press Me</Button.Text>
</Button>
```

### Slot

The Button component supports the [Slot Pattern](../../../README.md#the-slot-pattern-aschild) via the `asChild` prop.
Here is an example of using the `expo-router` `<Link>` component:

```tsx
<Button variant="solid" color="primary" asChild>
  <Link href="/">
    <Button.Text>Go to Home</Button.Text>
  </Link>
</Button>
```

### Events

The component uses React Native event handling:

```tsx
<Button onPress={(e) => console.log('Pressed', e)}>
  <Button.Text>Native Events</Button.Text>
</Button>
```

## API Reference

### `<Button />`

The main Button component with various styling options.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'elevated' \| 'solid' \| 'soft' \| 'outline' \| 'dashed' \| 'ghost'` | `'elevated'` | The visual style of the button |
| `color` | `'neutral' \| 'primary' \| 'secondary' \| 'error' \| 'warning' \| 'success'` | `'neutral'` | The color scheme of the button |
| `accentColor` | Same as `color` | - | Color to switch to on press |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the button |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `loading` | `boolean` | `false` | Whether the button is in loading state |
| `asChild` | `boolean` | `false` | Whether to replace the button with a different component |
| `className` | `string` | - | Additional class names |

Plus all [`Pressable`](https://reactnative.dev/docs/pressable) props ([`onPress`](https://reactnative.dev/docs/pressable#onpress), [`onPressIn`](https://reactnative.dev/docs/pressable#onpressin), etc.)

---

### `<Button.Text />`

Child component for button text.

#### Props

For props and styling options, see the [Text Component API](/packages/ui/src/components/text).

---

### `<Button.Icon />`

An icon for the button. Can be placed before or after the text.

#### Props

For props and styling options, see the [Icon Component API](/packages/ui/src/components/icon).

### `<Button.Spinner />`

A loading spinner that automatically appears when the button's `loading` prop is true.

#### Props

For props and styling options, see the [Spinner Component API](/packages/ui/src/components/spinner).

### `<IconButton />`

For buttons with only an icon, use the IconButton component:

#### Props

IconButton is a wrapper around Button with additional styling for icon-only use cases. See the [Button](#button) section above for all available props and compound parts.

## Accessibility

The Button component automatically implements proper accessibility attributes:

### Accessibility Prop Mappings

| Property | Implementation |
|----------|----------------|
| Role | `accessibilityRole="button"` |
| Disabled | `accessibilityState={{ disabled }}` |
| Loading | `accessibilityState={{ busy: loading }}` |

When using `IconButton`, remember to provide descriptive labels:
- Use `accessibilityLabel="Description"`