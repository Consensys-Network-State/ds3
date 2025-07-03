# Switch Component

The `<Switch />` component provides a cross-platform toggle switch that adapts to both web and React Native environments while maintaining a consistent API and design.

## Installation

Import the Switch component from the DS3 package.

```tsx
import { Switch } from '@consensys/ds3';
```

## Examples

### Basic

Create a simple switch with default styling.

Uncontrolled:

```tsx live
<View className="flex flex-row gap-3">
  <Switch />
  <Switch checked />
</View>
```

Controlled:

```tsx live
import { useState } from 'react';

const Component = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Switch checked={checked} onCheckedChange={setChecked} />
  );
}

export default Component;
```

### Variants

Choose from three different visual styles to match your design system.

```tsx live
<View className="flex flex-col gap-6">
  <View className="flex flex-row items-center gap-4">
    <Switch variant="solid" />
    <Switch variant="solid" checked />
    <Text>Solid</Text>
  </View>
  <View className="flex flex-row items-center gap-4">
    <Switch variant="soft" />
    <Switch variant="soft" checked />
    <Text>Soft</Text>
  </View>
  <View className="flex flex-row items-center gap-4">
    <Switch variant="outline" />
    <Switch variant="outline" checked />
    <Text>Outline</Text>
  </View>
</View>
```

### Colors

Apply semantic color schemes for different contexts and states.

```tsx live
<View className="flex flex-col gap-6">
  <View className="flex flex-row items-center gap-4">
    <Switch checked />
    <Text>Neutral</Text>
  </View>
  <View className="flex flex-row items-center gap-4">
    <Switch color="primary" checked />
    <Text>Primary</Text>
  </View>
  <View className="flex flex-row items-center gap-4">
    <Switch color="secondary" checked />
    <Text>Secondary</Text>
  </View>
  <View className="flex flex-row items-center gap-4">
    <Switch color="error" checked />
    <Text>Error</Text>
  </View>
  <View className="flex flex-row items-center gap-4">
    <Switch color="warning" checked />
    <Text>Warning</Text>
  </View>
  <View className="flex flex-row items-center gap-4">
    <Switch color="success" checked />
    <Text>Success</Text>
  </View>
</View>
```

### Sizes

Scale switches to fit different UI contexts and hierarchy levels.

```tsx live
<View className="flex flex-col gap-6">
  <View className="flex flex-row items-center gap-4">
    <Switch size="sm" />
    <Switch size="sm" checked />
    <Text>Small</Text>
  </View>
  <View className="flex flex-row items-center gap-4">
    <Switch size="md" />
    <Switch size="md" checked />
    <Text>Medium</Text>
  </View>
  <View className="flex flex-row items-center gap-4">
    <Switch size="lg" />
    <Switch size="lg" checked />
    <Text>Large</Text>
  </View>
</View>
```

### Icons

Add visual context with custom icons in the switch thumb.

```tsx live
<View className="flex flex-row gap-3">
  <Switch checked thumbIcon={Check} />
  <Switch variant="soft" checked thumbIcon={Minus} />
  <Switch variant="outline" checked thumbIcon={X} />
</View>
```

For props and styling options, see the [Icon Component API](/packages/ui/src/components/icon).

### Disabled State

Prevent user interaction and provide visual feedback for unavailable options.

```tsx live
<View className="flex flex-col gap-4">
  <View className="flex flex-col gap-4">
    <Text>Neutral</Text>
    <View className="flex flex-row flex-wrap gap-4">
      <Switch disabled />
      <Switch checked disabled />
    </View>
  </View>
</View>
```

## API Reference

Complete reference of all available props and their configurations.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'solid' \| 'soft' \| 'outline'` | `'solid'` | The visual style of the switch |
| `color` | `'neutral' \| 'primary' \| 'secondary' \| 'error' \| 'warning' \| 'success'` | `'neutral'` | The color scheme of the switch |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the switch |
| `checked` | `boolean` | `false` | Whether the switch is checked |
| `disabled` | `boolean` | `false` | Whether the switch is disabled |
| `thumbIcon` | `LucideIcon` | - | Icon to display in the switch thumb |
| `className` | `string` | - | Additional class names |
| `onCheckedChange` | `(checked: boolean) => void` | - | Callback fired when the switch state changes |

## Accessibility

The Switch component provides built-in accessibility support that automatically handles:

- **Role**: Proper switch role for screen readers
- **State**: Checked/unchecked state announcements
- **Disabled**: Disabled state when the `disabled` prop is true
- **Focus**: Keyboard navigation and focus management

For custom accessibility needs, you can pass additional accessibility props directly to the component:

```tsx
<Switch 
  accessibilityLabel="Toggle notifications"
  accessibilityHint="Double tap to toggle"
  checked={checked}
  onCheckedChange={setChecked}
/>
``` 