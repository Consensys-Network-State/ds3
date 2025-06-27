# Input Component

The `<Input />` component provides a cross-platform text input field that adapts to React Native environments while providing platform-native APIs.

## Installation

```bash
pnpm add @consensys/ds3
```

## Usage Examples

The Input component supports React Native APIs and offers flexibility through our [Compound Components](#2--compound-components).

### Native Usage

```tsx
import { Input } from '@consensys/ds3';

function NativeInputs() {
  return (
    <>
      <Input 
        onChangeText={(text) => console.log('Changed!', text)}
        keyboardType="email-address"
        placeholder="Email address"
      />

      <Input
        multiline
        numberOfLines={5}
        onChangeText={(text) => console.log('Changed!', text)}
        placeholder="Enter description"
      />
    </>
  );
}
```

## Component API

### Simple Usage

```tsx
// Single-line input
<Input variant="outline" color="primary" placeholder="Enter text" />

// Multi-line input
<Input 
  variant="outline" 
  color="primary" 
  placeholder="Enter text" 
  multiline
  numberOfLines={4}
/>
```

### Compound Usage

```tsx
// Input with icon and text
<Input variant="soft" color="primary" className="rounded-lg">
  <Input.Icon icon={Mail} />
  <Input.Field />
  <Input.Text>*</Input.Text>
  <Input.Spinner />
</Input>

// Multi-line input with icon
<Input variant="soft" color="primary" className="rounded-lg" multiline>
  <Input.Icon icon={DocumentText} />
  <Input.Field />
  <Input.Spinner />
</Input>
```

### `<Input />`

The main component with various styling options.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'soft' \| 'outline' \| 'underline' \| 'ghost'` | `'outline'` | The visual style of the input |
| `color` | `'neutral' \| 'primary' \| 'secondary' \| 'error' \| 'warning' \| 'success'` | `'neutral'` | The color scheme of the input |
| `accentColor` | Same as `color` | - | Color to switch to on focus |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the input |
| `disabled` | `boolean` | `false` | Whether the input is disabled |
| `loading` | `boolean` | `false` | Whether the input is in loading state |
| `readOnly` | `boolean` | `false` | Whether the input is read-only |
| `multiline` | `boolean` | `false` | Whether the input should support multiple lines |
| `asChild` | `boolean` | `false` | Whether to replace the input with a different component |
| `className` | `string` | - | Additional class names |

Plus all [`TextInput`](https://reactnative.dev/docs/textinput) props ([`onChangeText`](https://reactnative.dev/docs/textinput#onchangetext), [`keyboardType`](https://reactnative.dev/docs/textinput#keyboardtype), etc.)

### `<Input.Field />`

Child component for the actual input field. Allows you to construct inputs with other parts.

```tsx
<Input variant="outline" color="primary" placeholder="Enter text">
  <Input.Field />
</Input>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional class names for the input field |

### `<Input.Text />`

Used to add text elements before or after the input field.

```tsx
// Adding a prefix
<Input variant="outline" color="primary">
  <Input.Text>$</Input.Text>
  <Input.Field />
</Input>

// Adding a suffix
<Input variant="outline" color="primary">
  <Input.Field />
  <Input.Text>.00</Input.Text>
</Input>
```

#### Props

For props and styling options, see the [Text Component API](/packages/ui/src/components/text).

### `<Input.Icon />`

An icon for the input. Can be placed before and/or after the field.

```tsx
import { Search, Eye } from 'lucide-react-native';

// Simple usage with search icon
<Input variant="outline" color="primary">
  <Input.Icon icon={Search} />
  <Input.Field />
</Input>

// Password input with toggleable visibility
<Input variant="outline" color="primary" secureTextEntry>
  <Input.Field />
  <Input.Icon icon={Eye} />
</Input>
```

#### Props

For props and styling options, see the [Icon Component API](/packages/ui/src/components/icon).

### `<Input.Spinner />`

A loading spinner that automatically appears when the input's `loading` prop is true.

```tsx
import { Search, Loader } from 'lucide-react-native';

// Simple usage
<Input variant="outline" color="primary" loading>
  <Input.Field placeholder="Loading..." />
</Input>

// Custom loading icon
<Input variant="soft" color="primary" loading>
  <Input.Spinner loadingIcon={Loader} />
  <Input.Field placeholder="Loading..." />
</Input>

// With fallback icon
<Input variant="outline" color="primary" loading>
  <Input.Spinner icon={Search} />
  <Input.Field placeholder="Loading..." />
</Input>
```

#### Props

For props and styling options, see the [Spinner Component API](/packages/ui/src/components/spinner).

## Styling Options

### Variants

```tsx
<Input variant="soft">Soft</Input>
<Input variant="outline">Outline</Input>
<Input variant="underline">Underline</Input>
<Input variant="ghost">Ghost</Input>
```

### Colors

```tsx
<Input color="neutral">Neutral</Input>
<Input color="primary">Primary</Input>
<Input color="secondary">Secondary</Input>
<Input color="error">Error</Input>
<Input color="warning">Warning</Input>
<Input color="success">Success</Input>
```

### Sizes

```tsx
<Input size="sm">Small</Input>
<Input size="md">Medium</Input>
<Input size="lg">Large</Input>
```

### Accent Colors

Change the color on focus:

```tsx
<Input 
  variant="soft" 
  color="primary" 
  accentColor="secondary"
>
  <Input.Field placeholder="Tap me" />
</Input>
```

### Disabled State

```tsx
<Input disabled>
  <Input.Field placeholder="Disabled Input" />
</Input>
```

### Read-Only State

```tsx
<Input readOnly value="Read-only value">
  <Input.Field />
</Input>

<Input readOnly value="Read-only multiline text" multiline>
  <Input.Field />
</Input>
```

### Loading State

```tsx
<Input loading>
  <Input.Field placeholder="Loading..." />
</Input>

<Input loading>
  <Input.Spinner />
  <Input.Field placeholder="Loading..." />
</Input>
```

### Events

The component uses React Native event handling:

```tsx
<Input
  onChangeText={(text: string) => console.log('Changed', text)}
  onFocus={(e) => console.log('Focused', e)}
  onBlur={(e) => console.log('Blurred', e)}
>
  <Input.Field placeholder="Native Events" />
</Input>
```

The component exports typed event interfaces that match React Native equivalents:

- [`TextInput` events](https://reactnative.dev/docs/textinput) like `onChangeText`, `onChange`, `onFocus`, `onBlur`

### Using `asChild` for Custom Elements

The Input component supports the [Slot Pattern](../../../README.md#the-slot-pattern-aschild) via the `asChild` prop, allowing you to replace the input with a custom component:

```tsx
// Custom input implementation
<Input variant="outline" color="primary" asChild>
  <CustomInput placeholder="Custom input component" />
</Input>
```

## Native Props

The component uses React Native TextInput props:

- `onChangeText` - Triggered when input value changes
- `secureTextEntry` - For password fields
- `numberOfLines` - For multiline inputs
- `keyboardType` - Type of keyboard to display
- All other TextInput props

## Accessibility

The Input component automatically implements proper accessibility attributes:

### Accessibility Prop Mappings

| Property | Implementation |
|----------|----------------|
| Role | `accessibilityRole="textbox"` or `"adjustable"` |
| Disabled | `accessibilityState={{ disabled }}` |
| Loading | `accessibilityState={{ busy: loading }}` |
| ReadOnly | `accessibilityState={{ readonly: readOnly }}` |
| Multiline | Sets `accessibilityRole="adjustable"` |


