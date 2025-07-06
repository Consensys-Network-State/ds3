# Button Component

The `<Button />` component provides a cross-platform button control that adapts to both web and React Native environments while maintaining a consistent API and design.

## Installation

Import the Button component from the DS3 package.

```tsx
import { Button } from '@consensys/ds3';
```

## Examples

### Basic

Create a simple button with default styling.

```tsx live
<Button>
  Press Me!
</Button>
```

### Variants

Choose from six different visual styles to match your design system.

```tsx live
<View className="flex flex-row flex-wrap gap-3">
  <Button variant="elevated">Elevated</Button>
  <Button variant="solid">Solid</Button>
  <Button variant="soft">Soft</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="dashed">Dashed</Button>
  <Button variant="ghost">Ghost</Button>
</View>
```

### Colors

Apply semantic color schemes for different contexts and states.

Basic:

```tsx live
<View className="flex flex-row flex-wrap gap-3">
  <Button color="neutral">Neutral</Button>
  <Button color="primary">Primary</Button>
  <Button color="secondary">Secondary</Button>
  <Button color="error">Error</Button>
  <Button color="warning">Warning</Button>
  <Button color="success">Success</Button>
</View>
```

Interaction Color:

Dynamically change colors on press or hover for enhanced user feedback.

```tsx live
<Button color="neutral" toColor="primary">
  Neutral to Primary
</Button>
```

### Sizes

Scale buttons to fit different UI contexts and hierarchy levels.

```tsx live
<View className="flex flex-row gap-3">
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
</View>
```

### Icons

Add visual context with icons positioned before, after, or on both sides of text.

```tsx live
<View className="flex flex-row flex-wrap gap-3">
  <Button>
    <Icon icon={Figma} />
    <Text>Icon Left</Text>
  </Button>

  <Button>
    <Text>Icon Right</Text>
    <Icon icon={Figma} />
  </Button>

  <Button>
    <Icon icon={Figma} />
    <Text>Icon Both</Text>
    <Icon icon={Figma} />
  </Button>
</View>
```

For props and styling options, see the [Icon Component API](/packages/ui/src/components/icon).

### Square

Create icon-only buttons with equal padding for consistent visual balance.

```tsx live
<View className="flex flex-row flex-wrap gap-3">
  <Button size="sm" square>
    <Icon icon={Figma} />
  </Button>

  <Button square>
    <Icon icon={Figma} />
  </Button>
  
  <Button size="lg" square>
    <Icon icon={Figma} />
  </Button>
</View>
```

### Loading State

Show loading indicators during async operations with customizable spinners.

Basic:

```tsx live
<View className="flex flex-row flex-wrap gap-3">
  <Button loading>
    <Button.Spinner />
    <Text>Loading Left</Text>
  </Button>

  <Button loading>
    <Text>Loading Right</Text>
    <Button.Spinner />
  </Button>
</View>
```

Loading Icon:

```tsx live
<Button loading>
  <Button.Spinner loadingIcon={Loader} />
  <Text>Custom Icon</Text>
</Button>
```

Icon Fallback:

```tsx live
import { Button } from '@consensys/ds3';
import { Figma } from 'lucide-react';

const Component = () => {
  const [loading, setLoading] = useState(false);

  return (
    <Button
      onPress={() => setLoading(true)}
      loading={loading}
    >
      <Button.Spinner icon={Figma} />
      <Text>{loading ? 'Loading...' : 'Press to load'}</Text>
    </Button>
  );
}

export default Component;
```

For props and styling options, see the [Spinner Component API](/packages/ui/src/components/spinner).

### Disabled State

Prevent user interaction and provide visual feedback for unavailable actions.

```tsx live
<Button disabled>
  <Text>Disabled</Text>
</Button>
```

### Slot

Transform buttons into other interactive elements while maintaining styling and behavior.

The Button component supports the [Slot Pattern](../../../README.md#the-slot-pattern-aschild) via the `asChild` prop.

```tsx live
import { Button } from '@consensys/ds3';
import { Link } from 'expo-router';

const Component = () => {
  return (
    <Button asChild>
      <Link href="/">
        <Text>Navigate Home</Text>
      </Link>
    </Button>
  );
}

export default Component;
```

## API Reference

Complete reference of all available props and their configurations.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `elevated` \| `solid` \| `soft` \| `outline` \| `dashed` \| `ghost` | `elevated` | The visual style of the button |
| `color` | `neutral` \| `primary` \| `secondary` \| `error` \| `warning` \| `success` | `neutral` | The color scheme of the button |
| `toColor` | Same as `color` | - | Color to switch to on press |
| `size` | `sm` \| `md` \| `lg` | `md` | Size of the button |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `loading` | `boolean` | `false` | Whether the button is in loading state |
| `square` | `boolean` | `false` | Whether the button should have equal padding (for icon-only buttons) |
| `asChild` | `boolean` | `false` | Whether to replace the button with a different component |
| `className` | `string` | - | Additional class names |

Inherits all [Pressable](https://reactnative.dev/docs/pressable) props including [onPress](https://reactnative.dev/docs/pressable#onpress), [onPressIn](https://reactnative.dev/docs/pressable#onpressin), [onPressOut](https://reactnative.dev/docs/pressable#onpressout), and more


## Accessibility

Built-in accessibility support with automatic ARIA attributes and screen reader compatibility.

The Button component automatically implements proper accessibility attributes:

### Accessibility Prop Mappings

| Property | Implementation |
|----------|----------------|
| Role | `accessibilityRole="button"` |
| Disabled | `accessibilityState={{ disabled }}` |
| Loading | `accessibilityState={{ busy: loading }}` |

When using icon-only buttons with the `square` option, remember to provide descriptive labels:
- Use `accessibilityLabel="Description"`