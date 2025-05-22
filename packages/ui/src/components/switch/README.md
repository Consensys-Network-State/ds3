# Switch Component

The `<Switch />` component provides a cross-platform toggle switch that adapts to both web and React Native environments while providing platform-native APIs for each.

## Installation

```bash
pnpm add @ds3/ui
```

## Usage Examples

The component supports web and native APIs through our [Dual API](#6--dual-api) and offers flexibility through our [Compound Components](#2--compound-components).

### Basic Usage

```tsx
import { Switch } from '@ds3/ui';
import { useState } from 'react';

function BasicSwitch() {
  const [checked, setChecked] = useState(false);
  
  return (
    <Switch 
      checked={checked} 
      onCheckedChange={setChecked}
      disabled={false}
    />
  );
}
```

### With Icon

```tsx
import { Switch } from '@ds3/ui';
import { useState } from 'react';
import { Check } from 'lucide-react-native';

function IconSwitch() {
  const [checked, setChecked] = useState(false);
  
  return (
    <Switch 
      checked={checked} 
      onCheckedChange={setChecked}
      disabled={false}
      thumbIcon={Check}
    />
  );
}
```

## Component API

### `<Switch />`

The main component with various styling options.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'solid' \| 'soft' \| 'outline'` | `'solid'` | The visual style of the switch |
| `color` | `'neutral' \| 'primary' \| 'secondary' \| 'error' \| 'warning' \| 'success'` | `'neutral'` | The color scheme of the switch |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the switch |
| `checked` | `boolean` | `false` | Whether the switch is checked |
| `disabled` | `boolean` | `false` | Whether the switch is disabled |
| `thumbIcon` | `LucideIcon` | - | Icon to display in the switch thumb |
| `onCheckedChange` | `(checked: boolean) => void` | - | Callback when the checked state changes |
| `className` | `string` | - | Additional class names |

## Styling Options

### Variants

```tsx
<Switch variant="solid" checked={true} disabled={false} onCheckedChange={() => {}} />
<Switch variant="soft" checked={true} disabled={false} onCheckedChange={() => {}} />
<Switch variant="outline" checked={true} disabled={false} onCheckedChange={() => {}} />
```

### Colors

```tsx
<Switch color="neutral" checked={true} disabled={false} onCheckedChange={() => {}} />
<Switch color="primary" checked={true} disabled={false} onCheckedChange={() => {}} />
<Switch color="secondary" checked={true} disabled={false} onCheckedChange={() => {}} />
<Switch color="error" checked={true} disabled={false} onCheckedChange={() => {}} />
<Switch color="warning" checked={true} disabled={false} onCheckedChange={() => {}} />
<Switch color="success" checked={true} disabled={false} onCheckedChange={() => {}} />
```

### Sizes

```tsx
<Switch size="sm" checked={true} disabled={false} onCheckedChange={() => {}} />
<Switch size="md" checked={true} disabled={false} onCheckedChange={() => {}} />
<Switch size="lg" checked={true} disabled={false} onCheckedChange={() => {}} />
```

### States

```tsx
// Checked state
<Switch checked={true} disabled={false} onCheckedChange={() => {}} />

// Unchecked state
<Switch checked={false} disabled={false} onCheckedChange={() => {}} />

// Disabled & Checked
<Switch checked={true} disabled={true} onCheckedChange={() => {}} />

// Disabled & Unchecked
<Switch checked={false} disabled={true} onCheckedChange={() => {}} />
```

### With Icons

```tsx
import { Check, X } from 'lucide-react-native';

// Using an icon in the thumb
<Switch 
  checked={true} 
  disabled={false} 
  onCheckedChange={() => {}}
  thumbIcon={checked ? Check : X} 
/>
```

## Implementation Notes

The Switch component uses different implementations for web and React Native while maintaining the same API:

- **Web**: Uses `@rn-primitives/switch` with CSS transitions for smooth animations
- **Native**: Uses `@rn-primitives/switch` with React Native Reanimated for fluid, physics-based animations

The component automatically applies appropriate accessibility attributes for each platform.

### Accessibility

| Property | Web Implementation | Native Implementation |
|----------|-------------------|----------------------|
| Role | `role="switch"` | `accessibilityRole="switch"` |
| State | `aria-checked={checked}` | `accessibilityState={{ checked }}` |
| Disabled | `aria-disabled={disabled}` | `accessibilityState={{ disabled }}` |

For more details on our cross-platform approach, see the [Dual API](#6--dual-api). 