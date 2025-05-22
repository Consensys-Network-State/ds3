# Icon Component

The `<Icon />` component provides a cross-platform way to render SVG icons that adapts to both web and React Native environments while maintaining consistent styling across platforms.

## Installation

```bash
pnpm add @ds3/ui
```

## Usage Examples

The Icon component allows you to use any SVG icon library across platforms.

```tsx
import { Icon } from '@ds3/ui';
import { Mail, Heart, ArrowRight } from 'lucide-react-native';

function MyIcons() {
  return (
    <>
      <Icon icon={Mail} color="primary" size="md" />
      <Icon icon={Heart} color="error" size="lg" />
      <Icon icon={ArrowRight} color="success" size="sm" />
    </>
  );
}
```

## Component API

### `<Icon />`

The main component for rendering SVG icons with various styling options.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `React.ComponentType<any>` | **Required** | The SVG icon component to render |
| `color` | `'neutral' \| 'primary' \| 'secondary' \| 'error' \| 'warning' \| 'success'` | `'neutral'` | The color of the icon |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | The size of the icon |
| `className` | `string` | - | Additional class names for custom styling |

Plus additional SVG props that are passed to the underlying SVG component.

## Styling Options

### Colors

```tsx
<Icon icon={Heart} color="neutral" />
<Icon icon={Heart} color="primary" />
<Icon icon={Heart} color="secondary" />
<Icon icon={Heart} color="error" />
<Icon icon={Heart} color="warning" />
<Icon icon={Heart} color="success" />
```

### Sizes

```tsx
<Icon icon={Heart} size="sm" /> // Small
<Icon icon={Heart} size="md" /> // Medium
<Icon icon={Heart} size="lg" /> // Large
```

### Custom Styling

You can apply additional styles using the `className` prop:

```tsx
<Icon 
  icon={Heart} 
  color="error" 
  className="opacity-50 hover:opacity-100 transition-opacity"
/>
```

## Icon Libraries

The Icon component works with any SVG icon library that exports React components. Popular choices include:

- [Lucide Icons](https://lucide.dev/) (recommended)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Heroicons](https://heroicons.com/)
- [Feather Icons](https://feathericons.com/)

Example with different icon libraries:

```tsx
// Lucide
import { Heart, Star } from 'lucide-react-native';

// React Icons
import { FiHeart, FiStar } from 'react-icons/fi';

function IconExample() {
  return (
    <>
      <Icon icon={Heart} color="primary" />
      <Icon icon={FiHeart} color="primary" />
    </>
  );
}
```

## Cross-Platform Implementation

The Icon component has platform-specific implementations to ensure proper rendering:

- **Web**: Uses the icon directly as a React component (`Icon.web.tsx`)
- **Native**: Uses NativeWind's `cssInterop` to properly style SVG icons in React Native (`Icon.tsx`)

Both implementations maintain the same API and styling options while adapting to platform-specific requirements.

## Accessibility

The Icon component automatically implements proper accessibility attributes for each platform:

| Property | Web Implementation | Native Implementation |
|----------|-------------------|----------------------|
| Role | `role="img"` | `accessibilityRole="image"` |

For icons that represent interactive elements, consider wrapping them in appropriate components:

```tsx
// Button with icon
<Button>
  <Icon icon={Send} />
  <Button.Text>Send</Button.Text>
</Button>

// Icon as a button
<Pressable accessibilityRole="button" accessibilityLabel="Send message">
  <Icon icon={Send} />
</Pressable>
```

When using icons purely for decoration, add appropriate accessibility props:

```tsx
<Icon 
  icon={Decoration} 
  aria-hidden="true" // Web
  accessibilityElementsHidden={true} // Native
/>
``` 