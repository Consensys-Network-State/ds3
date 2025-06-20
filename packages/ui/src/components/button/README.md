# Button Component

The `<Button />` component provides a cross-platform button that adapts to both web and React Native environments while providing platform-native APIs for each.

## Installation

```bash
pnpm add @consensys/ds3
```

## Usage Examples

The Button component supports both web and native APIs through our [Dual API](#6--dual-api) and offers flexibility through our [Compound Components](#2--compound-components).

### Web-Specific Usage

```tsx
<Button
  type="submit"
  onClick={(e) => console.log('Clicked!', e)}
>
  Press Me
</Button>
```

### Native/Hybrid Usage

```tsx
<Button 
  onPress={(e) => console.log('Pressed!', e)}
>
  <Button.Text>Press Me</Button.Text>
</Button>
```


> **Note**: Choose one API style and stick with it throughout your codebase. See the [Dual API](#6--dual-api) for more details.

## Component API

Simple Usage:

```tsx
<Button variant="solid" color="primary" icon={Figma}>
  Click Me
</Button>
```

Compound Usage:

```tsx
<Button variant="soft" color="primary" className="rounded-full">
  <Button.Icon icon={Figma} className="text-primary-9" />
  <Button.Text className="font-bold">Customized Button</Button.Text>
  <Button.Spinner className="animate-bounce" />
</Button>
```

### `<Button />`

The main Button component with various styling options.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'elevated' \| 'solid' \| 'soft' \| 'outline' \| 'dashed' \| 'ghost'` | `'elevated'` | The visual style of the button |
| `color` | `'neutral' \| 'primary' \| 'secondary' \| 'error' \| 'warning' \| 'success'` | `'neutral'` | The color scheme of the button |
| `accentColor` | Same as `color` | - | Color to switch to on hover/press |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the button |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `loading` | `boolean` | `false` | Whether the button is in loading state |
| `asChild` | `boolean` | `false` | Whether to replace the button with a different component |
| `className` | `string` | - | Additional class names |

Plus additional props based on platform:
- Web: All [`HTMLButtonElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement) props ([`onClick`](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event), [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type), etc.)
- Native: All [`Pressable`](https://reactnative.dev/docs/pressable) props ([`onPress`](https://reactnative.dev/docs/pressable#onpress), [`onPressIn`](https://reactnative.dev/docs/pressable#onpressin), etc.)

### `<Button.Text />`

Child component for button text.

```tsx
// Simple usage
<Button variant="solid" color="primary">
  Click Me
</Button>

// Compound usage
<Button variant="solid" color="primary">
  <Button.Text>Button Text</Button.Text>
</Button>
```

#### Props

For props and styling options, see the [Text Component API](/packages/ui/src/components/text).

### `<Button.Icon />`

An icon for the button. Can be placed before or after the text.

```tsx
// Simple usage
<Button variant="solid" color="primary" icon={Figma}>
  Click Me
</Button>

// Compound usage
<Button variant="solid" color="primary">
  <Button.Icon icon={Figma} />
  <Button.Text>With Icon</Button.Text>
</Button>
```

#### Props

For props and styling options, see the [Icon Component API](/packages/ui/src/components/icon).

### `<Button.Spinner />`

A loading spinner that automatically appears when the button's `loading` prop is true.

> **Note:** When the `loading` prop is set to true, a default spinner will be shown automatically. Using Button.Spinner gives you more control over customization and placement.

```tsx
// Simple usage
<Button variant="solid" color="primary" loading>
  Loading...
</Button>

// Simple usage with fallback icon
<Button variant="solid" color="primary" loading icon={Figma}>
  Loading...
</Button>

// Compound usage
<Button variant="solid" color="primary" loading>
  <Button.Spinner loadingIcon={Loader} icon={Figma} />
  <Button.Text>Loading</Button.Text>
</Button>
```

The `Button.Spinner` component:
- Shows when the parent Button has `loading={true}`
- Displays the `loadingIcon` when loading, and the `icon` when not loading
- Serves as both spinner and regular icon in one component

#### Props

For props and styling options, see the [Spinner Component API](/packages/ui/src/components/spinner).

### `<IconButton />`

For buttons with only an icon, use the IconButton component:

```tsx
// Web example
<IconButton 
  variant="solid" 
  color="primary" 
  size="md" 
  icon={Figma} 
  onClick={() => console.log('Icon clicked')}
  aria-label="Open Figma"
/>

// Native example
<IconButton 
  variant="solid" 
  color="primary" 
  size="md" 
  icon={Figma} 
  onPress={() => console.log('Icon pressed')}
  accessibilityLabel="Open Figma"
/> 
```

#### Props

IconButton is a wrapper around Button with additional styling for icon-only use cases. See the [Button](#button) section above for all available props and compound parts.

## Styling Options

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

### Accent Colors

Change the color on hover/press:

```tsx
// Web example with hover effect
<Button 
  variant="soft" 
  color="primary" 
  accentColor="secondary"
  className="transition-colors duration-200"
>
  Hover Me
</Button>

// React Native example with press effect
<Button 
  variant="soft" 
  color="primary" 
  accentColor="secondary"
>
  <Button.Text>Press Me</Button.Text>
</Button>
```

### Disabled State

```tsx
// Web example
<Button disabled>
  Disabled Button
</Button>

// React Native example
<Button disabled>
  <Button.Text>Disabled Button</Button.Text>
</Button>
```

### Events

Each platform has its own event handling system:

```tsx
<View className="flex flex-row gap-3">
  <Button onClick={(e) => console.log('Clicked', e)}>
    Web Events
  </Button>

  <Button onPress={(e) => console.log('Pressed', e)}>
    <Button.Text>Native Events</Button.Text>
  </Button>
</View>
```

The component exports typed event interfaces that match their platform equivalents:

- Web: [`HTMLButtonElement` events](https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement) like `onClick`, `onFocus`
- Native: [`Pressable` events](https://reactnative.dev/docs/pressable) like `onPress`, `onPressIn`

For details on typed events and the dual-API approach, see the [Dual API](#6--dual-api).

### Using `asChild` for Custom Elements

The Button component supports the [Slot Pattern](../../../README.md#the-slot-pattern-aschild) via the `asChild` prop, allowing you to replace the button with a custom component:
<!-- 
```tsx
<View className="flex flex-row gap-3">
  // Web example with anchor
  <Button variant="solid" color="primary" asChild>
    <a href="https://example.com">Visit Website</a>
  </Button>

  // React Navigation example (React Native)
  <Button variant="solid" color="primary" asChild>
    <TouchableOpacity onPress={() => navigation.navigate('Details')}>
      <Text>Go to Details</Text>
    </TouchableOpacity>
  </Button>
</View>
``` -->

## Prop Mapping

Button implements automatic prop mapping to support cross-platform development while maintaining platform-specific behavior:

| Native Prop | Web Prop | Description |
|-------------|----------|-------------|
| `onPress` | `onClick` | Triggered when button is pressed/clicked |
| `onPressIn` | `onMouseDown` | Triggered when press/mouse down begins |
| `onPressOut` | `onMouseUp` | Triggered when press/mouse up ends |

> While native props can be used in web environments, web props should never be used in native environments.

For more details on our cross-platform approach, see the [Dual API](#6--dual-api).

## Accessibility

The Button component automatically implements proper accessibility attributes for each platform:

### Accessibility Prop Mappings

| Property | Web Implementation | Native Implementation |
|----------|-------------------|----------------------|
| Role | `role="button"` | `accessibilityRole="button"` |
| Disabled | `aria-disabled={disabled}` | `accessibilityState={{ disabled }}` |
| Loading | `aria-busy={loading}` | `accessibilityState={{ busy: loading }}` |

When using `IconButton`, remember to provide descriptive labels:
- Web: Use `aria-label="Description"`
- Native: Use `accessibilityLabel="Description"`