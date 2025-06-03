# Input Component

The `<Input />` and `<Textarea />` components provide cross-platform text input fields that adapt to both web and React Native environments while providing platform-native APIs for each.

## Installation

```bash
pnpm add @consensys/ds3
```

## Usage Examples

Both components support web and native APIs through our [Dual API](#6--dual-api) and offer flexibility through our [Compound Components](#2--compound-components).

### Web-Specific Usage

```tsx
import { Input, Textarea } from '@consensys/ds3';
import type { WebChangeEvent } from '@consensys/ds3';

function WebInputs() {
  // Using web-specific APIs
  return (
    <>
      <Input 
        type="email"
        onChange={(e: WebChangeEvent) => console.log('Changed!', e.target.value)}
        placeholder="Email address"
      />

      <Textarea
        onChange={(e: WebChangeEvent) => console.log('Changed!', e.target.value)}
        placeholder="Enter description"
        rows={5}
      />
    </>
  );
}
```

### Native/Hybrid Usage

```tsx
import { Input, Textarea } from '@consensys/ds3';

function NativeInputs() {
  // Using React Native APIs
  return (
    <>
      <Input 
        onChangeText={(text) => console.log('Changed!', text)}
        keyboardType="email-address"
        placeholder="Email address"
      />

      <Textarea
        onChangeText={(text) => console.log('Changed!', text)}
        placeholder="Enter description"
        numberOfLines={5}
      />
    </>
  );
}
```

> **Note**: Choose one API style and stick with it throughout your codebase. See the [Guiding Philosophy](../../../README.md#guiding-philosophy) for more details.

## Component API

### Simple Usage

```tsx
// Single-line input
<Input variant="outline" color="primary" placeholder="Enter text" />

// Multi-line input
<Textarea 
  variant="outline" 
  color="primary" 
  placeholder="Enter text" 
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

// Textarea with icon
<Textarea variant="soft" color="primary" className="rounded-lg">
  <Input.Icon icon={DocumentText} />
  <Input.Field />
  <Input.Spinner />
</Textarea>
```

### `<Input />` and `<Textarea />`

The main components with various styling options.

#### Props

Both Input and Textarea share the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'soft' \| 'outline' \| 'underline' \| 'ghost'` | `'outline'` | The visual style of the input |
| `color` | `'neutral' \| 'primary' \| 'secondary' \| 'error' \| 'warning' \| 'success'` | `'neutral'` | The color scheme of the input |
| `accentColor` | Same as `color` | - | Color to switch to on focus/hover |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the input |
| `disabled` | `boolean` | `false` | Whether the input is disabled |
| `loading` | `boolean` | `false` | Whether the input is in loading state |
| `readOnly` | `boolean` | `false` | Whether the input is read-only |
| `asChild` | `boolean` | `false` | Whether to replace the input with a different component |
| `className` | `string` | - | Additional class names |

Textarea-specific props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `numberOfLines` | `number` | `4` | Number of lines to display (approximate height) |
| `rows` | `number` | - | **(Web only)** Number of visible text lines |

Input-specific props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `multiline` | `boolean` | `false` | Whether the input should support multiple lines (consider using Textarea instead) |

Plus additional props based on platform:
- Web: All [`HTMLInputElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement) props ([`onChange`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event), [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types), etc.)
- Native: All [`TextInput`](https://reactnative.dev/docs/textinput) props ([`onChangeText`](https://reactnative.dev/docs/textinput#onchangetext), [`keyboardType`](https://reactnative.dev/docs/textinput#keyboardtype), etc.)

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

Change the color on focus/hover:

```tsx
// Web example with focus effect
<Input 
  variant="soft" 
  color="primary" 
  accentColor="secondary"
>
  <Input.Field placeholder="Focus me" />
</Input>

// React Native example
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
// Web example
<Input disabled>
  <Input.Field placeholder="Disabled Input" />
</Input>

// React Native example
<Input disabled>
  <Input.Field placeholder="Disabled Input" />
</Input>
```

### Read-Only State

```tsx
<Input readOnly value="Read-only value">
  <Input.Field />
</Input>

<Textarea readOnly value="Read-only multiline text">
  <Input.Field />
</Textarea>
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

The component supports platform-specific event handling:

```tsx
import type { WebChangeEvent, WebFocusEvent, NativeFocusEvent } from '@consensys/ds3';

// Web events
<Input
  onChange={(e: WebChangeEvent) => console.log('Changed', e.target.value)}
  onFocus={(e: WebFocusEvent) => console.log('Focused', e)}
  onBlur={(e: WebFocusEvent) => console.log('Blurred', e)}
>
  <Input.Field placeholder="Web Events" />
</Input>

// Native events
<Input
  onChangeText={(text: string) => console.log('Changed', text)}
  onFocus={(e: NativeFocusEvent) => console.log('Focused', e)}
  onBlur={(e: NativeFocusEvent) => console.log('Blurred', e)}
>
  <Input.Field placeholder="Native Events" />
</Input>
```

The component exports typed event interfaces that match their platform equivalents:

- Web: [`HTMLInputElement` events](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement) like `onChange`, `onFocus`, `onBlur`
- Native: [`TextInput` events](https://reactnative.dev/docs/textinput) like `onChangeText`, `onChange`, `onFocus`, `onBlur`

For details on typed events and the dual-API approach, see the [Dual API](#6--dual-api).

### Using `asChild` for Custom Elements

The Input component supports the [Slot Pattern](../../../README.md#the-slot-pattern-aschild) via the `asChild` prop, allowing you to replace the input with a custom component:

```tsx
// Custom input implementation
<Input variant="outline" color="primary" asChild>
  <CustomInput placeholder="Custom input component" />
</Input>
```

## Prop Mapping

Input implements automatic prop mapping to support cross-platform development while maintaining platform-specific behavior:

| Native Prop | Web Prop | Description |
|-------------|----------|-------------|
| `onChangeText` | `onChange` | Triggered when input value changes |
| `secureTextEntry` | `type="password"` | For password fields |
| `numberOfLines` | `rows` | For multiline inputs/textareas |
| `autoCorrect` | `autoCorrect` | Spelling autocorrection |

> While native props can be used in web environments (automatically converted), web props should never be used in native environments.

For more details on our cross-platform approach, see the [Dual API](#6--dual-api).

## Accessibility

The Input component automatically implements proper accessibility attributes for each platform:

### Accessibility Prop Mappings

| Property | Web Implementation | Native Implementation |
|----------|-------------------|----------------------|
| Role | `role="input"` or `role="textbox"` | `accessibilityRole="textbox"` or `"adjustable"` |
| Disabled | `aria-disabled={disabled}` | `accessibilityState={{ disabled }}` |
| Loading | `aria-busy={loading}` | `accessibilityState={{ busy: loading }}` |
| ReadOnly | `aria-readonly={readOnly}` | `accessibilityState={{ readonly: readOnly }}` |
| Multiline | `aria-multiline={multiline}` | Sets `accessibilityRole="adjustable"` |


