# Spinner Component

The `<Spinner />` component provides a cross-platform loading animation that adapts to both web and React Native environments.

## Installation

```bash
pnpm add @consensys/ds3
```

## Usage Examples

```tsx
import { Spinner } from '@consensys/ds3';
import { Loader, RefreshCw } from 'lucide-react-native';

// Basic usage
<Spinner color="primary" />

// Custom icon
<Spinner icon={Loader} color="secondary" />

// Custom animation speed
<Spinner icon={RefreshCw} speed="fast" />
```

## Component API

### `<Spinner />`

The main component with various styling and animation options.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `React.ComponentType<any>` | `LoaderCircle` | Icon component to display and animate |
| `color` | `'neutral' \| 'primary' \| 'secondary' \| 'error' \| 'warning' \| 'success'` | `'neutral'` | The color scheme of the spinner |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the spinner |
| `speed` | `'slow' \| 'normal' \| 'fast' \| number` | `'normal'` | Animation speed (ms for number) |
| `direction` | `'clockwise' \| 'counterclockwise'` | `'clockwise'` | Direction of rotation |
| `className` | `string` | - | Additional class names |

Plus all props from the [Icon component](/packages/ui/src/components/icon).

## Styling Options

### Colors

```tsx
<Spinner color="neutral" />
<Spinner color="primary" />
<Spinner color="secondary" />
<Spinner color="error" />
<Spinner color="warning" />
<Spinner color="success" />
```

### Sizes

```tsx
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
```

### Animation Speed

```tsx
<Spinner speed="slow" /> // 2000ms
<Spinner speed="normal" /> // 1000ms (default)
<Spinner speed="fast" /> // 500ms
<Spinner speed={1500} /> // Custom duration in milliseconds
```

### Animation Direction

```tsx
<Spinner direction="clockwise" /> // Default
<Spinner direction="counterclockwise" />
```

### Custom Icons

The component works with any icon from libraries like Lucide:

```tsx
import { Loader, LoaderCircle, LoaderPinwheel, RefreshCw } from 'lucide-react-native';

<Spinner icon={LoaderCircle} />
<Spinner icon={Loader} />
<Spinner icon={LoaderPinwheel} />
<Spinner icon={RefreshCw} />
```

## Implementation Details

The Spinner component uses React Native Reanimated for smooth animations across platforms:

- Uses `withRepeat` and `withTiming` for continuous rotation
- Adapts animation duration based on the `speed` prop
- Supports both clockwise and counterclockwise rotation
- Displays as an inline-block element on web for better layout integration

## Accessibility

- The component inherits accessibility features from the Icon component
- The animation is purely visual and doesn't interfere with screen readers
- Consider using with appropriate labels or ARIA attributes in your implementation 