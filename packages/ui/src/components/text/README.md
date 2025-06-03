# Text Component

The `<Text />` component provides a cross-platform way to render text that adapts to both web and React Native environments while maintaining consistent styling across platforms.

## Installation

```bash
pnpm add @consensys/ds3
```

## Usage Examples

```tsx
import { Text } from '@consensys/ds3';

function TextExamples() {
  return (
    <>
      {/* Basic usage */}
      <Text>Default text</Text>
      
      {/* With styling variants */}
      <Text size="lg" weight="bold" color="primary">
        Primary bold large text
      </Text>
      
      {/* In a compound component */}
      <Button>
        <Text color="neutral" weight="medium">
          Button Text
        </Text>
      </Button>
    </>
  );
}
```

## Component API

### `<Text />`

The main component for rendering text with various styling options.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'base' \| 'lg' \| 'xl' \| '2xl' \| '3xl' \| '4xl'` | `'base'` | The size of the text |
| `weight` | `'normal' \| 'medium' \| 'semibold' \| 'bold'` | `'normal'` | The font weight of the text |
| `color` | `'neutral' \| 'primary' \| 'secondary' \| 'error' \| 'warning' \| 'success'` | `'neutral'` | The color of the text |
| `className` | `string` | - | Additional class names for custom styling |
| `asChild` | `boolean` | `false` | Whether to use Slot.Text for composition |

Plus additional props from React Native's `Text` component inherited through the `SlottableTextProps` type.

## Styling Options

### Sizes

```tsx
<Text size="xs">Extra Small</Text>
<Text size="sm">Small</Text>
<Text size="base">Base (Default)</Text>
<Text size="lg">Large</Text>
<Text size="xl">Extra Large</Text>
<Text size="2xl">2X Large</Text>
<Text size="3xl">3X Large</Text>
<Text size="4xl">4X Large</Text>
```

### Weights

```tsx
<Text weight="normal">Normal weight</Text>
<Text weight="medium">Medium weight</Text>
<Text weight="semibold">Semibold weight</Text>
<Text weight="bold">Bold weight</Text>
```

### Colors

```tsx
<Text color="neutral">Neutral text</Text>
<Text color="primary">Primary text</Text>
<Text color="secondary">Secondary text</Text>
<Text color="error">Error text</Text>
<Text color="warning">Warning text</Text>
<Text color="success">Success text</Text>
```

### Custom Styling

You can apply additional styles using the `className` prop:

```tsx
<Text 
  size="lg"
  weight="bold"
  color="primary"
  className="opacity-80 underline italic"
>
  Custom styled text
</Text>
```

## Composition with `asChild`

The Text component supports composition with other components using the `asChild` prop:

```tsx
import { Pressable } from 'react-native';

<Text
  asChild
  size="lg"
  weight="medium"
  color="primary"
>
  <Pressable onPress={() => console.log('Pressed')}>
    Pressable Text
  </Pressable>
</Text>
```

## Context Provider

The Text component can receive default styling from a parent context:

```tsx
import { TextClassContext } from '@consensys/ds3';

<TextClassContext.Provider value="italic text-primary-9">
  <Text>This will inherit the context styles</Text>
  <Text className="underline">This will merge with context styles</Text>
</TextClassContext.Provider>
```

## Cross-Platform Implementation

The Text component works consistently across platforms:

- **Web**: Renders as a styled `span` element
- **Native**: Renders as a styled React Native `Text` component

Both implementations maintain the same API and styling options while adapting to platform-specific requirements. 