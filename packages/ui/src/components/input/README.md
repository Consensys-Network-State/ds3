# Input Component

The `<Input />` component provides a cross-platform text input field that adapts to both web and React Native environments while maintaining a consistent API and design.

## Installation

Import the Input component from the DS3 package.

```tsx
import { Input } from '@consensys/ds3';
```

## Examples

### Basic

Create a simple input with default styling.

```tsx live
<Input placeholder="Enter text" />
```

### Variants

Choose from four different visual styles to match your design system.

```tsx live
<View className="flex flex-row flex-wrap gap-3">
  <Input variant="soft" placeholder="Soft" />
  <Input variant="outline" placeholder="Outline" />
  <Input variant="underline" placeholder="Underline" />
  <Input variant="ghost" placeholder="Ghost" />
</View>
```

### Colors

Apply semantic color schemes for different contexts and states.

Basic:

```tsx live
<View className="flex flex-row flex-wrap gap-3">
  <Input color="neutral" placeholder="Neutral" />
  <Input color="primary" placeholder="Primary" />
  <Input color="secondary" placeholder="Secondary" />
  <Input color="error" placeholder="Error" />
  <Input color="warning" placeholder="Warning" />
  <Input color="success" placeholder="Success" />
</View>
```

Interaction Color:

Dynamically change colors on focus or hover for enhanced user feedback.

```tsx live
<Input color="neutral" toColor="primary" placeholder="Neutral to Primary" />
```

### Sizes

Scale inputs to fit different UI contexts and hierarchy levels.

```tsx live
<View className="flex flex-row gap-3">
  <Input size="sm" placeholder="Small" />
  <Input size="md" placeholder="Medium" />
  <Input size="lg" placeholder="Large" />
</View>
```

### Icons

Add visual context with icons positioned before, after, or on both sides of the input field.

```tsx live
<View className="flex flex-row flex-wrap gap-3">
  <Input placeholder="Icon Left">
    <Input.Icon icon={Search} />
    <Input.Field />
  </Input>

  <Input placeholder="Icon Right">
    <Input.Field />
    <Input.Icon icon={Search} />
  </Input>

  <Input placeholder="Icon Both">
    <Input.Icon icon={Search} />
    <Input.Field />
    <Input.Icon icon={Eye} />
  </Input>
</View>
```

For props and styling options, see the [Icon Component API](/packages/ui/src/components/icon).

### Text Elements

Add text elements before or after the input field for labels, currency symbols, or units.

```tsx live
<View className="flex flex-row flex-wrap gap-3">
  <Input placeholder="Currency">
    <Input.Text>$</Input.Text>
    <Input.Field />
  </Input>

  <Input placeholder="Username">
    <Input.Field />
    <Input.Text>@example.com</Input.Text>
  </Input>

  <Input placeholder="Website">
    <Input.Text>https://</Input.Text>
    <Input.Field />
  </Input>
</View>
```

For props and styling options, see the [Text Component API](/packages/ui/src/components/text).

### Multiline

Create textarea-style inputs for longer content.

```tsx live
<Input multiline numberOfLines={4} placeholder="Enter description" />
```

### Loading State

Show loading indicators during async operations with customizable spinners.

Basic:

```tsx live
<View className="flex flex-row flex-wrap gap-3">
  <Input placeholder="Loading Left" loading>
    <Input.Spinner />
    <Input.Field />
  </Input>

  <Input placeholder="Loading Right" loading>
    <Input.Field />
    <Input.Spinner />
  </Input>
</View>
```

Loading Icon:

```tsx live
<Input placeholder="Custom Icon" loading>
  <Input.Spinner loadingIcon={Loader} />
  <Input.Field />
</Input>
```

Icon Fallback:

```tsx live
import { Input } from '@consensys/ds3';
import { Search } from 'lucide-react';

const Component = () => {
  const [loading, setLoading] = useState(false);

  return (
    <Input
      onFocus={() => setLoading(true)}
      loading={loading}
      placeholder={loading ? 'Loading...' : 'Search'}
    >
      <Input.Spinner icon={Search} />
      <Input.Field />
    </Input>
  );
}

export default Component;
```

For props and styling options, see the [Spinner Component API](/packages/ui/src/components/spinner).

### Disabled State

Prevent user interaction and provide visual feedback for unavailable inputs.

```tsx live
<Input disabled placeholder="Disabled" />
```

### Read-Only State

Display non-editable content while maintaining input styling.

```tsx live
<Input readOnly value="Read-only value" />
```

### Slot

Transform inputs into other interactive elements while maintaining styling and behavior.

The Input component supports the [Slot Pattern](../../../README.md#the-slot-pattern-aschild) via the `asChild` prop.

```tsx live
import { Input } from '@consensys/ds3';
import { Link } from 'expo-router';

const Component = () => {
  return (
    <Input asChild placeholder="Search and navigate">
      <Link href="/search">
        <Input.Field />
      </Link>
    </Input>
  );
}

export default Component;
```

## API Reference

Complete reference of all available props and their configurations.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `soft` \| `outline` \| `underline` \| `ghost` | `outline` | The visual style of the input |
| `color` | `neutral` \| `primary` \| `secondary` \| `error` \| `warning` \| `success` | `neutral` | The color scheme of the input |
| `toColor` | Same as `color` | - | Color to switch to on focus |
| `size` | `sm` \| `md` \| `lg` | `md` | Size of the input |
| `disabled` | `boolean` | `false` | Whether the input is disabled |
| `loading` | `boolean` | `false` | Whether the input is in loading state |
| `readOnly` | `boolean` | `false` | Whether the input is read-only |
| `asChild` | `boolean` | `false` | Whether to replace the input with a different component |
| `className` | `string` | - | Additional class names |

Inherits all [TextInput](https://reactnative.dev/docs/textinput) props including [onChangeText](https://reactnative.dev/docs/textinput#onchangetext), [onFocus](https://reactnative.dev/docs/textinput#onfocus), [onBlur](https://reactnative.dev/docs/textinput#onblur), [multiline](https://reactnative.dev/docs/textinput#multiline), [secureTextEntry](https://reactnative.dev/docs/textinput#securetextentry), and more.

## Accessibility

Built-in accessibility support with automatic ARIA attributes and screen reader compatibility.

The Input component automatically implements proper accessibility attributes:

### Accessibility Prop Mappings

| Property | Implementation |
|----------|----------------|
| Role | `accessibilityRole="textbox"` or `"adjustable"` |
| Disabled | `accessibilityState={{ disabled }}` |
| Loading | `accessibilityState={{ busy: loading }}` |
| ReadOnly | `accessibilityState={{ readonly: readOnly }}` |
| Multiline | Sets `accessibilityRole="adjustable"` |

When using inputs with icons or text elements, ensure proper labeling:
- Use `accessibilityLabel="Description"`
- Provide `accessibilityHint` for complex inputs


