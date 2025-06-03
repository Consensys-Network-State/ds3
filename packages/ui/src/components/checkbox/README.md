# Checkbox Component

The `<Checkbox />` component provides a cross-platform checkbox control that adapts to both web and React Native environments while maintaining a consistent API and design.

## Installation

```bash
pnpm add @consensys/ds3
```

## Usage Examples

The Checkbox component supports web and native APIs through our [Dual API](#6--dual-api) and offers flexibility through our [Compound Components](#2--compound-components).

### Basic Usage

```tsx
import { Checkbox } from '@consensys/ds3';
import { useState } from 'react';

function BasicCheckbox() {
  const [checked, setChecked] = useState(false);
  
  return (
    <Checkbox 
      checked={checked} 
      onCheckedChange={setChecked}
    />
  );
}
```

### Compound Usage with Custom Icon

```tsx
import { Checkbox } from '@consensys/ds3';
import { X } from 'lucide-react-native';
import { useState } from 'react';

function CustomIconCheckbox() {
  const [checked, setChecked] = useState(false);
  
  return (
    <Checkbox 
      variant="outline"
      color="primary"
      checked={checked}
      onCheckedChange={setChecked}
    >
      <Checkbox.Icon icon={X} />
    </Checkbox>
  );
}
```

### Indeterminate State

```tsx
import { Checkbox } from '@consensys/ds3';
import { useState } from 'react';

function IndeterminateCheckbox() {
  const [parentChecked, setParentChecked] = useState(false);
  const [child1Checked, setChild1Checked] = useState(false);
  const [child2Checked, setChild2Checked] = useState(true);
  
  // Determine parent checked state
  const allChecked = child1Checked && child2Checked;
  const someChecked = child1Checked || child2Checked;
  
  return (
    <>
      <Checkbox
        checked={allChecked}
        indeterminate={!allChecked && someChecked}
        onCheckedChange={(checked) => {
          setParentChecked(checked);
          setChild1Checked(checked);
          setChild2Checked(checked);
        }}
      />
      <Checkbox
        checked={child1Checked}
        onCheckedChange={setChild1Checked}
      />
      <Checkbox
        checked={child2Checked}
        onCheckedChange={setChild2Checked}
      />
    </>
  );
}
```

## Component API

### `<Checkbox />`

The main checkbox component with various styling options.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'solid' \| 'soft' \| 'outline'` | `'solid'` | The visual style of the checkbox |
| `color` | `'neutral' \| 'primary' \| 'secondary' \| 'error' \| 'warning' \| 'success'` | `'neutral'` | The color scheme of the checkbox |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the checkbox |
| `checked` | `boolean` | `false` | Whether the checkbox is checked |
| `disabled` | `boolean` | `false` | Whether the checkbox is disabled |
| `indeterminate` | `boolean` | `false` | Whether the checkbox is in an indeterminate state |
| `asChild` | `boolean` | `false` | Whether to replace the checkbox with a different component |
| `className` | `string` | - | Additional class names |
| `onCheckedChange` | `(checked: boolean) => void` | - | Callback fired when the checkbox state changes |

### `<Checkbox.Icon />`

Child component for customizing the checkbox icon. Allows you to replace the default checkmark with any icon.

```tsx
<Checkbox variant="solid" color="primary" checked>
  <Checkbox.Icon icon={Minus} />
</Checkbox>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `React.ComponentType<any>` | - | The icon component to render |
| `className` | `string` | - | Additional class names for the icon |

## Styling Options

### Variants

```tsx
<Checkbox variant="solid" />
<Checkbox variant="soft" />
<Checkbox variant="outline" />
```

### Colors

```tsx
<Checkbox color="neutral" />
<Checkbox color="primary" />
<Checkbox color="secondary" />
<Checkbox color="error" />
<Checkbox color="warning" />
<Checkbox color="success" />
```

### Sizes

```tsx
<Checkbox size="sm" />
<Checkbox size="md" />
<Checkbox size="lg" />
```

### Indeterminate State

The indeterminate state is used to indicate that a checkbox has both checked and unchecked child checkboxes:

```tsx
<Checkbox
  indeterminate
  checked={false}
  onCheckedChange={setChecked}
/>
```

### Disabled State

```tsx
<Checkbox disabled />
<Checkbox checked disabled />
```

### Custom Icons

You can replace the default check icon with any custom icon:

```tsx
import { X, Minus, AlertCircle } from 'lucide-react-native';

// Using X icon
<Checkbox checked>
  <Checkbox.Icon icon={X} />
</Checkbox>

// Using Minus icon (typically for indeterminate state)
<Checkbox indeterminate>
  <Checkbox.Icon icon={Minus} />
</Checkbox>

// Using custom warning icon
<Checkbox checked color="warning">
  <Checkbox.Icon icon={AlertCircle} />
</Checkbox>
```

## Accessibility

The Checkbox component automatically implements proper accessibility attributes for each platform:

### Accessibility Prop Mappings

| Property | Web Implementation | Native Implementation |
|----------|-------------------|----------------------|
| Role | `role="checkbox"` | `accessibilityRole="checkbox"` |
| Checked | `aria-checked={checked \|\| indeterminate}` | `accessibilityState={{ checked }}` |
| Disabled | `aria-disabled={disabled}` | `accessibilityState={{ disabled }}` |
| Indeterminate | `aria-checked="mixed"` | `accessibilityState={{ mixed: true }}` |

For more details on our cross-platform approach to accessibility, see the [Dual API](#6--dual-api). 