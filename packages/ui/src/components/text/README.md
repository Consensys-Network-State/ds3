# Text Component

The `<Text />` component provides a cross-platform way to render text that adapts to both web and React Native environments while maintaining consistent styling across platforms.

## Installation

Import the Text component from the DS3 package.

```tsx
import { Text } from '@consensys/ds3';
```

## Examples

### Basic

Create simple text with default styling.

```tsx live
<Text>Default text with base styling</Text>
```

### Colors

Apply semantic color schemes for different contexts and states.

Text (default):

```tsx live
<View className="flex flex-col gap-2">
  <Text color="neutral">Neutral text</Text>
  <Text color="primary">Primary text</Text>
  <Text color="secondary">Secondary text</Text>
  <Text color="error">Error text</Text>
  <Text color="warning">Warning text</Text>
  <Text color="success">Success text</Text>
</View>
```

Background:

```tsx live
<View className="flex flex-col gap-2">
  <Text color="neutral" spectrum="bg">Neutral text</Text>
  <Text color="primary" spectrum="bg">Primary text</Text>
  <Text color="secondary" spectrum="bg">Secondary text</Text>
  <Text color="error" spectrum="bg">Error text</Text>
  <Text color="warning" spectrum="bg">Warning text</Text>
  <Text color="success" spectrum="bg">Success text</Text>
</View>
```

Border:

```tsx live
<View className="flex flex-col gap-2">
  <Text color="neutral" spectrum="border">Neutral text</Text>
  <Text color="primary" spectrum="border">Primary text</Text>
  <Text color="secondary" spectrum="border">Secondary text</Text>
  <Text color="error" spectrum="border">Error text</Text>
  <Text color="warning" spectrum="border">Warning text</Text>
  <Text color="success" spectrum="border">Success text</Text>
</View>
```

Solid:

```tsx live
<View className="flex flex-col gap-2">
  <Text color="neutral" spectrum="solid">Neutral text</Text>
  <Text color="primary" spectrum="solid">Primary text</Text>
  <Text color="secondary" spectrum="solid">Secondary text</Text>
  <Text color="error" spectrum="solid">Error text</Text>
  <Text color="warning" spectrum="solid">Warning text</Text>
  <Text color="success" spectrum="solid">Success text</Text>
</View>
```

Contrast:

```tsx live
<View className="flex flex-col gap-2">
  <Text color="neutral" spectrum="contrast">Neutral text</Text>
  <Text color="primary" spectrum="contrast">Primary text</Text>
  <Text color="secondary" spectrum="contrast">Secondary text</Text>
  <Text color="error" spectrum="contrast">Error text</Text>
  <Text color="warning" spectrum="contrast">Warning text</Text>
  <Text color="success" spectrum="contrast">Success text</Text>
</View>
```

### Sizes

Scale text to fit different UI contexts and hierarchy levels.

```tsx live
<View className="flex flex-col gap-2">
  <Text size="xs">Extra Small Text</Text>
  <Text size="sm">Small Text</Text>
  <Text size="base">Base Text (Default)</Text>
  <Text size="lg">Large Text</Text>
  <Text size="xl">Extra Large Text</Text>
</View>
```

### Numeric Font Sizes

Use custom numeric sizes for precise control:

```tsx live
<View className="flex flex-col gap-2">
  <Text size="2">Size 2 (0.5rem)</Text>
  <Text size="3">Size 3 (0.75rem)</Text>
  <Text size="4">Size 4 (1rem)</Text>
  <Text size="5">Size 5 (1.25rem)</Text>
  <Text size="6">Size 6 (1.5rem)</Text>
  <Text size="8">Size 8 (2rem)</Text>
  <Text size="10">Size 10 (2.5rem)</Text>
  <Text size="12">Size 12 (3rem)</Text>
  <Text size="16">Size 16 (4rem)</Text>
</View>
```

### Heading Sizes

Use semantic heading sizes with built-in line height and weight:

```tsx live
<View className="flex flex-col gap-2">
  <Text size="h1">Heading 1 (4rem, bold)</Text>
  <Text size="h2">Heading 2 (3rem, bold)</Text>
  <Text size="h3">Heading 3 (2rem, bold)</Text>
  <Text size="h4">Heading 4 (1.75rem, bold)</Text>
  <Text size="h5">Heading 5 (1.5rem, bold)</Text>
  <Text size="h6">Heading 6 (1.25rem, bold)</Text>
</View>
```

### Weights

Apply different font weights for emphasis and hierarchy.

```tsx live
<View className="flex flex-col gap-2">
  <Text weight="light">Light weight (300)</Text>
  <Text weight="normal">Normal weight (400)</Text>
  <Text weight="regular">Regular weight (400)</Text>
  <Text weight="medium">Medium weight (500)</Text>
  <Text weight="semibold">Semibold weight (600)</Text>
  <Text weight="bold">Bold weight (700)</Text>
</View>
```

### Line Heights

Control line spacing for better readability and visual hierarchy.

```tsx live
<View className="flex flex-col gap-4">
  <Text lineHeight="tight" className="max-w-xs">
    Tight line height (1.25) - This text has tight line spacing for a more compact appearance that works well for headings and short content.
  </Text>
  <Text lineHeight="normal" className="max-w-xs">
    Normal line height (1.5) - This text has normal line spacing for comfortable reading, which is the default for most body text.
  </Text>
  <Text lineHeight="loose" className="max-w-xs">
    Loose line height (2) - This text has loose line spacing for a more spacious layout that's great for emphasis or decorative text.
  </Text>
</View>
```

### Font Families

Use different font families to match your design system.

```tsx live
<View className="flex flex-col gap-2">
  <Text fontFamily="inter">Inter font family</Text>
  <Text fontFamily="roboto">Roboto font family</Text>
  <Text fontFamily="robotoCondensed">Roboto Condensed font family</Text>
  <Text fontFamily="robotoSlab">Roboto Slab font family</Text>
  <Text fontFamily="libreFranklin">Libre Franklin font family</Text>
</View>
```

### Combined Typography

Combine multiple typography properties for rich text styling.

```tsx live
<View className="flex flex-col gap-4">
  <Text 
    size="h1" 
    weight="bold" 
    color="primary"
    lineHeight="tight"
    fontFamily="inter"
  >
    Primary Heading
  </Text>
  <Text 
    size="lg" 
    weight="medium" 
    color="secondary"
    lineHeight="normal"
    fontFamily="roboto"
  >
    Secondary subtitle with medium weight
  </Text>
  <Text 
    size="base" 
    weight="normal" 
    color="neutral"
    lineHeight="loose"
    fontFamily="libreFranklin"
  >
    Body text with loose line height for better readability
  </Text>
</View>
```

### Context Provider

The Text component can receive default styling from a parent context:

```tsx live
<TextContextProvider.Provider value="italic text-primary-9">
  <View className="flex flex-col gap-2">
    <Text>This will inherit the context styles</Text>
    <Text className="underline">This will merge with context styles</Text>
    <Text size="lg" weight="bold">This will override context styles</Text>
  </View>
</TextContextProvider.Provider>
```

### Composition with `asChild`

The Text component supports composition with other components using the `asChild` prop:

```tsx live
<View className="flex flex-col gap-3">
  <Text
    asChild
    size="lg"
    weight="medium"
    color="primary"
    fontFamily="inter"
  >
    <Pressable onPress={() => console.log('Pressed')}>
      Pressable Text
    </Pressable>
  </Text>
  
  <Text
    asChild
    size="h3"
    weight="bold"
    color="secondary"
  >
    <Link href="https://example.com">
      Link Text
    </Link>
  </Text>
</View>
```

## API Reference

Complete reference of all available props and their configurations.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'2' \| '2.5' \| '3' \| '3.5' \| '4' \| '4.5' \| '5' \| '5.5' \| '6' \| '7' \| '8' \| '10' \| '12' \| '14' \| '16' \| 'xs' \| 'sm' \| 'base' \| 'lg' \| 'xl' \| 'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6' \| '2xl' \| '3xl' \| '4xl'` | `'base'` | The size of the text |
| `weight` | `'light' \| 'normal' \| 'regular' \| 'medium' \| 'semibold' \| 'bold'` | `'normal'` | The font weight of the text |
| `color` | `'neutral' \| 'primary' \| 'secondary' \| 'error' \| 'warning' \| 'success'` | `'neutral'` | The color of the text |
| `lineHeight` | `'tight' \| 'normal' \| 'loose'` | `'normal'` | The line height of the text |
| `fontFamily` | `'inter' \| 'roboto' \| 'robotoCondensed' \| 'robotoSlab' \| 'libreFranklin'` | - | The font family of the text |
| `spectrum` | `'text' \| 'bg' \| 'border' \| 'solid' \| 'contrast'` | `'text'` | The color spectrum to use |
| `className` | `string` | - | Additional class names for custom styling |
| `asChild` | `boolean` | `false` | Whether to use Slot.Text for composition |

Plus additional props from React Native's `Text` component inherited through the `SlottableTextProps` type.

## Accessibility

Built-in accessibility support with automatic ARIA attributes and screen reader compatibility.

The Text component automatically implements proper accessibility attributes:

### Accessibility Features
- **Semantic HTML**: Proper heading tags when using heading sizes
- **Screen Reader Support**: Text content is properly announced
- **Focus Management**: Works with keyboard navigation
- **Color Contrast**: Respects design system color accessibility

### Best Practices

```tsx
// Use semantic heading sizes for proper document structure
<Text size="h1">Main Page Title</Text>
<Text size="h2">Section Heading</Text>
<Text size="h3">Subsection Heading</Text>

// Provide context for screen readers
<Text aria-label="User's full name">John Doe</Text>

// Use appropriate color contrast
<Text color="primary" size="lg">Important information</Text>
```