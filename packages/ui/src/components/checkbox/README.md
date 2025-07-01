# Checkbox Component

The `<Checkbox />` component provides a cross-platform checkbox control that adapts to both web and React Native environments while maintaining a consistent API and design.

## Installation

Import the Checkbox component from the DS3 package.

```tsx
import { Checkbox } from '@consensys/ds3';
```

## Examples

### Basic

Create a simple checkbox with default styling.

Uncontrolled:

```tsx live
<View className="flex flex-row gap-3">
  <Checkbox />
  <Checkbox checked />
</View>
```

Controlled:

```tsx live
import { useState } from 'react';

const Component = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox checked={checked} onCheckedChange={setChecked} />
  );
}

export default Component;
```

### Variants

Choose from three different visual styles to match your design system.

```tsx live
<View className="flex flex-col gap-6">
  <View className="flex flex-row items-center gap-4">
    <Checkbox variant="solid" />
    <Checkbox variant="solid" checked />
    <Text>Solid</Text>
  </View>
  <View className="flex flex-row items-center gap-4">
    <Checkbox variant="soft" />
    <Checkbox variant="soft" checked />
    <Text>Soft</Text>
  </View>
  <View className="flex flex-row items-center gap-4">
    <Checkbox variant="outline" />
    <Checkbox variant="outline" checked />
    <Text>Outline</Text>
  </View>
</View>
```

### Colors

Apply semantic color schemes for different contexts and states.

```tsx live
<View className="flex flex-col gap-6">
  <View className="flex flex-row items-center gap-4">
    <Checkbox checked />
    <Text>Neutral</Text>
  </View>
  <View className="flex flex-row items-center gap-4">
    <Checkbox color="primary" checked />
    <Text>Primary</Text>
  </View>
  <View className="flex flex-row items-center gap-4">
    <Checkbox color="secondary" checked />
    <Text>Secondary</Text>
  </View>
  <View className="flex flex-row items-center gap-4">
    <Checkbox color="error" checked />
    <Text>Error</Text>
  </View>
  <View className="flex flex-row items-center gap-4">
    <Checkbox color="warning" checked />
    <Text>Warning</Text>
  </View>
  <View className="flex flex-row items-center gap-4">
    <Checkbox color="success" checked />
    <Text>Success</Text>
  </View>
</View>
```

### Sizes

Scale checkboxes to fit different UI contexts and hierarchy levels.

```tsx live
<View className="flex flex-col gap-6">
  <View className="flex flex-row items-center gap-4">
    <Checkbox size="sm" />
    <Checkbox size="sm" checked />
    <Text>Small</Text>
  </View>
  <View className="flex flex-row items-center gap-4">
    <Checkbox size="md" />
    <Checkbox size="md" checked />
    <Text>Medium</Text>
  </View>
  <View className="flex flex-row items-center gap-4">
    <Checkbox size="lg" />
    <Checkbox size="lg" checked />
    <Text>Large</Text>
  </View>
</View>
```

### Icons

Add visual context with custom icons to replace the default checkmark.

```tsx live
<View className="flex flex-row gap-3">
  <Checkbox checked>
    <Checkbox.Icon icon={Check} />
  </Checkbox>
  <Checkbox variant="soft" checked>
    <Checkbox.Icon icon={Minus} />
  </Checkbox>
  <Checkbox variant="outline" checked>
    <Checkbox.Icon icon={X} />
  </Checkbox>
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
      <Checkbox disabled />
      <Checkbox checked disabled />
    </View>
  </View>
</View>
```

### Indeterminate Example

Show partial selection state when some but not all child items are selected.

```tsx live
import { useState } from 'react';
import { Minus } from 'lucide-react-native';

const Component = () => {
  const [child1, setChild1] = useState(false);
  const [child2, setChild2] = useState(true);
  
  const allChecked = child1 && child2;
  const someChecked = child1 || child2;
  
  return (
    <View className="flex flex-col gap-4">
      <View className="flex flex-row items-center gap-4">
        <Checkbox
          checked={someChecked}
          onCheckedChange={(checked) => {
            const newValue = allChecked ? false : true;
            setChild1(newValue);
            setChild2(newValue);
          }}
        >
          {!allChecked && someChecked && <Checkbox.Icon icon={Minus} />}
        </Checkbox>
        <Text className="text-sm text-neutral-11">Select All Colors</Text>
      </View>
      <View className="flex flex-col gap-2 pl-8">
        <View className="flex flex-row items-center gap-4">
          <Checkbox
            color="primary"
            checked={child1}
            onCheckedChange={setChild1}
          />
          <Text className="text-sm text-neutral-11">Primary</Text>
        </View>
        <View className="flex flex-row items-center gap-4">
          <Checkbox
            color="success"
            checked={child2}
            onCheckedChange={setChild2}
          />
          <Text className="text-sm text-neutral-11">Success</Text>
        </View>
      </View>
    </View>
  );
}

export default Component;
```

## API Reference

Complete reference of all available props and their configurations.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'solid' \| 'soft' \| 'outline'` | `'solid'` | The visual style of the checkbox |
| `color` | `'neutral' \| 'primary' \| 'secondary' \| 'error' \| 'warning' \| 'success'` | `'neutral'` | The color scheme of the checkbox |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the checkbox |
| `checked` | `boolean` | `false` | Whether the checkbox is checked |
| `disabled` | `boolean` | `false` | Whether the checkbox is disabled |
| `asChild` | `boolean` | `false` | Whether to replace the checkbox with a different component |
| `className` | `string` | - | Additional class names |
| `onCheckedChange` | `(checked: boolean) => void` | - | Callback fired when the checkbox state changes |

## Accessibility

The Checkbox component provides built-in accessibility support that automatically handles:

- **Role**: Proper checkbox role for screen readers
- **State**: Checked/unchecked state announcements
- **Disabled**: Disabled state when the `disabled` prop is true
- **Focus**: Keyboard navigation and focus management

For custom accessibility needs, you can pass additional accessibility props directly to the component:

```tsx
<Checkbox 
  accessibilityLabel="Accept terms and conditions"
  accessibilityHint="Double tap to toggle"
  checked={checked}
  onCheckedChange={setChecked}
/>
```