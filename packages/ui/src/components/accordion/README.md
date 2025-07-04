# Accordion Component

The `<Accordion />` component provides a cross-platform collapsible content control that adapts to both web and React Native environments while maintaining a consistent API and design. Accordions are used to show and hide content sections in an organized way.

## Installation

Import the Accordion component from the DS3 package.

```tsx
import { Accordion } from '@consensys/ds3';
```

## Examples

### Basic

Create a simple accordion with multiple items.

```tsx live
<Accordion collapsible>
  <Accordion.Item value="item-1">
    <Accordion.Trigger>
      <Text>Item 1</Text>
    </Accordion.Trigger>
    <Accordion.Content>
      <Text>Item 1 Content</Text>
    </Accordion.Content>
  </Accordion.Item>
</Accordion>
```

### Variants

Apply different visual styles to match your design system.

```tsx live
<View className="space-y-4">
  <Accordion variant="default" type="single" collapsible>
    <Accordion.Item value="default">
      <Accordion.Trigger>
        <Text>Default Variant</Text>
      </Accordion.Trigger>
      <Accordion.Content>
        <Text>The standard accordion style with subtle borders between items.</Text>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion>
  
  <Accordion variant="bordered" type="single" collapsible>
    <Accordion.Item value="bordered">
      <Accordion.Trigger>
        <Text>Bordered Variant</Text>
      </Accordion.Trigger>
      <Accordion.Content>
        <Text>An accordion with a border around the entire component.</Text>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion>
  
  <Accordion variant="card" type="single" collapsible>
    <Accordion.Item value="card">
      <Accordion.Trigger>
        <Text>Card Variant</Text>
      </Accordion.Trigger>
      <Accordion.Content>
        <Text>An accordion with a card-like appearance and background.</Text>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion>
  
  <Accordion variant="underline" type="single" collapsible>
    <Accordion.Item value="underline">
      <Accordion.Trigger>
        <Text>Underline Variant</Text>
      </Accordion.Trigger>
      <Accordion.Content>
        <Text>An accordion with subtle underline styling on hover.</Text>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion>
</View>
```

### Colors

Apply semantic color schemes for different contexts and states.

```tsx live
<View className="space-y-4">
  <Accordion color="neutral" type="single" collapsible>
    <Accordion.Item value="neutral">
      <Accordion.Trigger>
        <Text>Neutral Color</Text>
      </Accordion.Trigger>
      <Accordion.Content>
        <Text>Default neutral color scheme.</Text>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion>
  
  <Accordion color="primary" type="single" collapsible>
    <Accordion.Item value="primary">
      <Accordion.Trigger>
        <Text>Primary Color</Text>
      </Accordion.Trigger>
      <Accordion.Content>
        <Text>Primary brand color scheme.</Text>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion>
  
  <Accordion color="secondary" type="single" collapsible>
    <Accordion.Item value="secondary">
      <Accordion.Trigger>
        <Text>Secondary Color</Text>
      </Accordion.Trigger>
      <Accordion.Content>
        <Text>Secondary brand color scheme.</Text>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion>
  
  <Accordion color="error" type="single" collapsible>
    <Accordion.Item value="error">
      <Accordion.Trigger>
        <Text>Error Color</Text>
      </Accordion.Trigger>
      <Accordion.Content>
        <Text>Error state color scheme.</Text>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion>
</View>
```

### Sizes

Scale accordions to fit different UI contexts and hierarchy levels.

```tsx live
<View className="space-y-4">
  <Accordion size="sm" type="single" collapsible>
    <Accordion.Item value="small">
      <Accordion.Trigger>
        <Text>Small Size</Text>
      </Accordion.Trigger>
      <Accordion.Content>
        <Text>Compact size for tight spaces.</Text>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion>
  
  <Accordion size="md" type="single" collapsible>
    <Accordion.Item value="medium">
      <Accordion.Trigger>
        <Text>Medium Size</Text>
      </Accordion.Trigger>
      <Accordion.Content>
        <Text>Default size for most use cases.</Text>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion>
  
  <Accordion size="lg" type="single" collapsible>
    <Accordion.Item value="large">
      <Accordion.Trigger>
        <Text>Large Size</Text>
      </Accordion.Trigger>
      <Accordion.Content>
        <Text>Larger size for emphasis and readability.</Text>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion>
</View>
```

### Single

Allow only one item to be expanded at a time.

```tsx live
<Accordion type="single" collapsible>
  <Accordion.Item value="single-1">
    <Accordion.Trigger>
      <Text>First Item</Text>
    </Accordion.Trigger>
    <Accordion.Content>
      <Text>Only one item can be expanded at a time.</Text>
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="single-2">
    <Accordion.Trigger>
      <Text>Second Item</Text>
    </Accordion.Trigger>
    <Accordion.Content>
      <Text>Opening this will close the other item.</Text>
    </Accordion.Content>
  </Accordion.Item>
</Accordion>
```

### Multiple

Allow multiple items to be expanded simultaneously.

```tsx live
<Accordion type="multiple" collapsible defaultValue={['multi-1']}>
  <Accordion.Item value="multi-1">
    <Accordion.Trigger>
      <Text>First Item</Text>
    </Accordion.Trigger>
    <Accordion.Content>
      <Text>Multiple items can be expanded simultaneously.</Text>
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="multi-2">
    <Accordion.Trigger>
      <Text>Second Item</Text>
    </Accordion.Trigger>
    <Accordion.Content>
      <Text>This can be open while the first item is also open.</Text>
    </Accordion.Content>
  </Accordion.Item>
</Accordion>
```

### Controlled State

Manage the accordion state programmatically.

```tsx live
const Component = () => {
  const [value, setValue] = React.useState(['item-1']);
  
  return (
    <View className="space-y-4">
      <View className="flex flex-row gap-2">
        <Button 
          size="sm" 
          onPress={() => setValue(['item-1'])}
          variant={value.includes('item-1') ? 'solid' : 'outline'}
        >
          Item 1
        </Button>
        <Button 
          size="sm" 
          onPress={() => setValue(['item-2'])}
          variant={value.includes('item-2') ? 'solid' : 'outline'}
        >
          Item 2
        </Button>
        <Button 
          size="sm" 
          onPress={() => setValue([])}
          variant={value.length === 0 ? 'solid' : 'outline'}
        >
          Close All
        </Button>
      </View>
      
      <Accordion type="multiple" value={value} onValueChange={setValue}>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>
            <Text>Controlled Item 1</Text>
          </Accordion.Trigger>
          <Accordion.Content>
            <Text>This item's state is controlled externally.</Text>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>
            <Text>Controlled Item 2</Text>
          </Accordion.Trigger>
          <Accordion.Content>
            <Text>This item's state is also controlled externally.</Text>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </View>
  );
}
```

### Customization

Here's how to customize using all the parts together:

```tsx live expand
<Accordion 
  variant="card" 
  color="primary" 
  size="lg" 
  type="multiple" 
  collapsible 
  defaultValue={['custom']}
  className="shadow-lg"
>
  <Accordion.Item value="custom">
    <Accordion.Trigger className="hover:bg-primary-a3">
      <View className="flex flex-row items-center gap-2">
        <Icon icon={Figma} size="sm" />
        <Text className="font-semibold">Custom Styled Accordion</Text>
      </View>
    </Accordion.Trigger>
    <Accordion.Content className="bg-neutral-a2 rounded-b-4">
      <View className="space-y-2">
        <Text className="font-medium">Advanced Customization</Text>
        <Text className="text-sm text-neutral-a11">
          This accordion demonstrates custom styling with icons, enhanced typography, 
          and additional visual elements to create a rich user experience.
        </Text>
      </View>
    </Accordion.Content>
  </Accordion.Item>
</Accordion>
```

## API Reference

Complete reference of all available props and their configurations.

### Accordion Root

The main Accordion component that provides the container and context.

```tsx live
<Accordion type="single" collapsible variant="default" color="neutral" size="md">
  {/* Accordion items go here */}
</Accordion>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'single'` \| `'multiple'` | - | Whether to allow single or multiple items to be expanded |
| `collapsible` | `boolean` | - | Whether to allow all items to be collapsed |
| `defaultValue` | `string` \| `string[]` | - | The default expanded items |
| `value` | `string` \| `string[]` | - | The controlled expanded items |
| `onValueChange` | `(value: string \| string[]) => void` | - | Called when the expanded items change |
| `variant` | `'default'` \| `'bordered'` \| `'card'` \| `'underline'` | `'default'` | The visual style variant |
| `color` | `'neutral'` \| `'primary'` \| `'secondary'` \| `'error'` \| `'warning'` \| `'success'` | `'neutral'` | The color theme |
| `size` | `'sm'` \| `'md'` \| `'lg'` | `'md'` | The size of the accordion |
| `className` | `string` | - | Additional class names |
| `children` | `ReactNode` | - | Accordion items |

Inherits all [View](https://reactnative.dev/docs/view) props.

### Accordion Item

Represents a single collapsible section within the accordion.

```tsx live
<Accordion>
  <Accordion.Item value="unique-id" disabled={false}>
    {/* Trigger and Content go here */}
  </Accordion.Item>
</Accordion>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | The unique value for this item |
| `disabled` | `boolean` | `false` | Whether the item is disabled |
| `className` | `string` | - | Additional class names |

Inherits all [AccordionPrimitive.Item](https://www.radix-ui.com/primitives/docs/components/accordion#item) props.

### Accordion Trigger

The clickable element that controls the expansion state of an item.

```tsx live
<Accordion>
  <Accordion.Item value="unique-id" disabled={false}>
    <Accordion.Trigger className="custom-trigger">
      <Text>Click to expand</Text>
    </Accordion.Trigger>
  </Accordion.Item>
</Accordion>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional class names |
| `children` | `ReactNode` | - | The trigger content |

Inherits all [AccordionPrimitive.Trigger](https://www.radix-ui.com/primitives/docs/components/accordion#trigger) props.

### Accordion Content

The collapsible content that appears when an item is expanded.

```tsx live
<Accordion>
  <Accordion.Item value="unique-id" disabled={false}>
    <Accordion.Content className="custom-content">
      <Text>This content is shown when expanded</Text>
    </Accordion.Content>
  </Accordion.Item>
</Accordion>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional class names |
| `children` | `ReactNode` | - | The content to display when expanded |

Inherits all [AccordionPrimitive.Content](https://www.radix-ui.com/primitives/docs/components/accordion#content) props.

## Accessibility

Built-in accessibility support with automatic ARIA attributes and screen reader compatibility.

The Accordion component automatically implements proper accessibility attributes:

### Accessibility Features

- **WAI-ARIA Compliance**: Follows the WAI-ARIA design pattern for accordions
- **Keyboard Navigation**: Full keyboard support with arrow keys, Enter, and Space
- **Screen Reader Support**: Proper ARIA attributes (`aria-expanded`, `aria-controls`, etc.)
- **Focus Management**: Automatic focus handling and management
- **Semantic HTML**: Uses proper semantic elements for structure

### Best Practices

```tsx
<Accordion type="single" collapsible>
  <Accordion.Item value="accessibility">
    <Accordion.Trigger>
      <Text>Accessibility Features</Text>
    </Accordion.Trigger>
    <Accordion.Content>
      <Text>
        This accordion automatically includes proper ARIA attributes, 
        keyboard navigation, and screen reader support.
      </Text>
    </Accordion.Content>
  </Accordion.Item>
</Accordion>
```