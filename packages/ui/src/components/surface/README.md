# Surface Component

The `<Surface />` component is a foundational design primitive that provides consistent color schemes, variants, and styling patterns. It serves as the building block for other UI components like Button, Label, Badge, and Card, ensuring design system consistency across your application.

## Core Concept

Surface provides the **styling foundation** - colors, variants, and text/icon treatments - while remaining **layout-agnostic**. This allows you to build components with different layouts (buttons, badges, cards) while maintaining consistent visual design.

## Installation

Import the Surface component from the DS3 package.

```tsx
import { Surface } from '@consensys/ds3';
```

## Examples

### Basic Usage

Surface provides styling without imposing layout. You control the layout and content:

```tsx live
<Surface className="p-4">
  <Text>Basic Surface</Text>
</Surface>
```

### Variants

Choose from six different visual styles to match your design system.

```tsx live
<View className="flex flex-row gap-3">
  <Surface variant="elevated" className="p-4 flex-1">
    <Text>Elevated</Text>
  </Surface>
  <Surface variant="solid" className="p-4 flex-1">
    <Text>Solid</Text>
  </Surface>
  <Surface variant="soft" className="p-4 flex-1">
    <Text>Soft</Text>
  </Surface>
  <Surface variant="outline" className="p-4 flex-1">
    <Text>Outline</Text>
  </Surface>
  <Surface variant="dashed" className="p-4 flex-1">
    <Text>Dashed</Text>
  </Surface>
  <Surface variant="ghost" className="p-4 flex-1">
    <Text>Ghost</Text>
  </Surface>
</View>
```

### Colors

```tsx live
<View className="flex flex-col gap-3 w-full">
  <View className="flex flex-row gap-3">
    <View className="flex-1">
      <Text className="text-center font-medium text-sm">Neutral</Text>
    </View>
    <View className="flex-1">
      <Text className="text-center font-medium text-sm">Primary</Text>
    </View>
    <View className="flex-1">
      <Text className="text-center font-medium text-sm">Secondary</Text>
    </View>
    <View className="flex-1">
      <Text className="text-center font-medium text-sm">Error</Text>
    </View>
    <View className="flex-1">
      <Text className="text-center font-medium text-sm">Warning</Text>
    </View>
    <View className="flex-1">
      <Text className="text-center font-medium text-sm">Success</Text>
    </View>
  </View>
  <View className="flex flex-row gap-3">
    <View className="flex flex-col gap-3 flex-1">
      <Surface variant="elevated" color="neutral" className="p-4">
        <Text>Elevated</Text>
      </Surface>
      <Surface variant="solid" color="neutral" className="p-4">
        <Text>Solid</Text>
      </Surface>
      <Surface variant="soft" color="neutral" className="p-4">
        <Text>Soft</Text>
      </Surface>
      <Surface variant="outline" color="neutral" className="p-4">
        <Text>Outline</Text>
      </Surface>
      <Surface variant="dashed" color="neutral" className="p-4">
        <Text>Dashed</Text>
      </Surface>
      <Surface variant="ghost" color="neutral" className="p-4">
        <Text>Ghost</Text>
      </Surface>
    </View>
    <View className="flex flex-col gap-3 flex-1">
      <Surface variant="elevated" color="primary" className="p-4">
        <Text>Elevated</Text>
      </Surface>
      <Surface variant="solid" color="primary" className="p-4">
        <Text>Solid</Text>
      </Surface>
      <Surface variant="soft" color="primary" className="p-4">
        <Text>Soft</Text>
      </Surface>
      <Surface variant="outline" color="primary" className="p-4">
        <Text>Outline</Text>
      </Surface>
      <Surface variant="dashed" color="primary" className="p-4">
        <Text>Dashed</Text>
      </Surface>
      <Surface variant="ghost" color="primary" className="p-4">
        <Text>Ghost</Text>
      </Surface>
    </View>
    <View className="flex flex-col gap-3 flex-1">
      <Surface variant="elevated" color="secondary" className="p-4">
        <Text>Elevated</Text>
      </Surface>
      <Surface variant="solid" color="secondary" className="p-4">
        <Text>Solid</Text>
      </Surface>
      <Surface variant="soft" color="secondary" className="p-4">
        <Text>Soft</Text>
      </Surface>
      <Surface variant="outline" color="secondary" className="p-4">
        <Text>Outline</Text>
      </Surface>
      <Surface variant="dashed" color="secondary" className="p-4">
        <Text>Dashed</Text>
      </Surface>
      <Surface variant="ghost" color="secondary" className="p-4">
        <Text>Ghost</Text>
      </Surface>
    </View>
    <View className="flex flex-col gap-3 flex-1">
      <Surface variant="elevated" color="error" className="p-4">
        <Text>Elevated</Text>
      </Surface>
      <Surface variant="solid" color="error" className="p-4">
        <Text>Solid</Text>
      </Surface>
      <Surface variant="soft" color="error" className="p-4">
        <Text>Soft</Text>
      </Surface>
      <Surface variant="outline" color="error" className="p-4">
        <Text>Outline</Text>
      </Surface>
      <Surface variant="dashed" color="error" className="p-4">
        <Text>Dashed</Text>
      </Surface>
      <Surface variant="ghost" color="error" className="p-4">
        <Text>Ghost</Text>
      </Surface>
    </View>
    <View className="flex flex-col gap-3 flex-1">
      <Surface variant="elevated" color="warning" className="p-4">
        <Text>Elevated</Text>
      </Surface>
      <Surface variant="solid" color="warning" className="p-4">
        <Text>Solid</Text>
      </Surface>
      <Surface variant="soft" color="warning" className="p-4">
        <Text>Soft</Text>
      </Surface>
      <Surface variant="outline" color="warning" className="p-4">
        <Text>Outline</Text>
      </Surface>
      <Surface variant="dashed" color="warning" className="p-4">
        <Text>Dashed</Text>
      </Surface>
      <Surface variant="ghost" color="warning" className="p-4">
        <Text>Ghost</Text>
      </Surface>
    </View>
    <View className="flex flex-col gap-3 flex-1">
      <Surface variant="elevated" color="success" className="p-4">
        <Text>Elevated</Text>
      </Surface>
      <Surface variant="solid" color="success" className="p-4">
        <Text>Solid</Text>
      </Surface>
      <Surface variant="soft" color="success" className="p-4">
        <Text>Soft</Text>
      </Surface>
      <Surface variant="outline" color="success" className="p-4">
        <Text>Outline</Text>
      </Surface>
      <Surface variant="dashed" color="success" className="p-4">
        <Text>Dashed</Text>
      </Surface>
      <Surface variant="ghost" color="success" className="p-4">
        <Text>Ghost</Text>
      </Surface>
    </View>
  </View>
</View>
```

### Pressable Surfaces

Create pressable surfaces that respond to press and hover events.

```tsx live
<View className="flex flex-col gap-3 w-full">
  <View className="flex flex-row gap-3">
    <View className="flex-1">
      <Text className="text-center font-medium text-sm">Neutral</Text>
    </View>
    <View className="flex-1">
      <Text className="text-center font-medium text-sm">Primary</Text>
    </View>
    <View className="flex-1">
      <Text className="text-center font-medium text-sm">Secondary</Text>
    </View>
    <View className="flex-1">
      <Text className="text-center font-medium text-sm">Error</Text>
    </View>
    <View className="flex-1">
      <Text className="text-center font-medium text-sm">Warning</Text>
    </View>
    <View className="flex-1">
      <Text className="text-center font-medium text-sm">Success</Text>
    </View>
  </View>
  <View className="flex flex-row gap-3">
    <View className="flex flex-col gap-3 flex-1">
      <Surface pressable variant="elevated" color="neutral" className="p-4" onPress={() => {}}>
        <Text>Elevated</Text>
      </Surface>
      <Surface pressable variant="solid" color="neutral" className="p-4" onPress={() => {}}>
        <Text>Solid</Text>
      </Surface>
      <Surface pressable variant="soft" color="neutral" className="p-4" onPress={() => {}}>
        <Text>Soft</Text>
      </Surface>
      <Surface pressable variant="outline" color="neutral" className="p-4" onPress={() => {}}>
        <Text>Outline</Text>
      </Surface>
      <Surface pressable variant="dashed" color="neutral" className="p-4" onPress={() => {}}>
        <Text>Dashed</Text>
      </Surface>
      <Surface pressable variant="ghost" color="neutral" className="p-4" onPress={() => {}}>
        <Text>Ghost</Text>
      </Surface>
    </View>
    <View className="flex flex-col gap-3 flex-1">
      <Surface pressable variant="elevated" color="primary" className="p-4" onPress={() => {}}>
        <Text>Elevated</Text>
      </Surface>
      <Surface pressable variant="solid" color="primary" className="p-4" onPress={() => {}}>
        <Text>Solid</Text>
      </Surface>
      <Surface pressable variant="soft" color="primary" className="p-4" onPress={() => {}}>
        <Text>Soft</Text>
      </Surface>
      <Surface pressable variant="outline" color="primary" className="p-4" onPress={() => {}}>
        <Text>Outline</Text>
      </Surface>
      <Surface pressable variant="dashed" color="primary" className="p-4" onPress={() => {}}>
        <Text>Dashed</Text>
      </Surface>
      <Surface pressable variant="ghost" color="primary" className="p-4" onPress={() => {}}>
        <Text>Ghost</Text>
      </Surface>
    </View>
    <View className="flex flex-col gap-3 flex-1">
      <Surface pressable variant="elevated" color="secondary" className="p-4" onPress={() => {}}>
        <Text>Elevated</Text>
      </Surface>
      <Surface pressable variant="solid" color="secondary" className="p-4" onPress={() => {}}>
        <Text>Solid</Text>
      </Surface>
      <Surface pressable variant="soft" color="secondary" className="p-4" onPress={() => {}}>
        <Text>Soft</Text>
      </Surface>
      <Surface pressable variant="outline" color="secondary" className="p-4" onPress={() => {}}>
        <Text>Outline</Text>
      </Surface>
      <Surface pressable variant="dashed" color="secondary" className="p-4" onPress={() => {}}>
        <Text>Dashed</Text>
      </Surface>
      <Surface pressable variant="ghost" color="secondary" className="p-4" onPress={() => {}}>
        <Text>Ghost</Text>
      </Surface>
    </View>
    <View className="flex flex-col gap-3 flex-1">
      <Surface pressable variant="elevated" color="error" className="p-4" onPress={() => {}}>
        <Text>Elevated</Text>
      </Surface>
      <Surface pressable variant="solid" color="error" className="p-4" onPress={() => {}}>
        <Text>Solid</Text>
      </Surface>
      <Surface pressable variant="soft" color="error" className="p-4" onPress={() => {}}>
        <Text>Soft</Text>
      </Surface>
      <Surface pressable variant="outline" color="error" className="p-4" onPress={() => {}}>
        <Text>Outline</Text>
      </Surface>
      <Surface pressable variant="dashed" color="error" className="p-4" onPress={() => {}}>
        <Text>Dashed</Text>
      </Surface>
      <Surface pressable variant="ghost" color="error" className="p-4" onPress={() => {}}>
        <Text>Ghost</Text>
      </Surface>
    </View>
    <View className="flex flex-col gap-3 flex-1">
      <Surface pressable variant="elevated" color="warning" className="p-4" onPress={() => {}}>
        <Text>Elevated</Text>
      </Surface>
      <Surface pressable variant="solid" color="warning" className="p-4" onPress={() => {}}>
        <Text>Solid</Text>
      </Surface>
      <Surface pressable variant="soft" color="warning" className="p-4" onPress={() => {}}>
        <Text>Soft</Text>
      </Surface>
      <Surface pressable variant="outline" color="warning" className="p-4" onPress={() => {}}>
        <Text>Outline</Text>
      </Surface>
      <Surface pressable variant="dashed" color="warning" className="p-4" onPress={() => {}}>
        <Text>Dashed</Text>
      </Surface>
      <Surface pressable variant="ghost" color="warning" className="p-4" onPress={() => {}}>
        <Text>Ghost</Text>
      </Surface>
    </View>
    <View className="flex flex-col gap-3 flex-1">
      <Surface pressable variant="elevated" color="success" className="p-4" onPress={() => {}}>
        <Text>Elevated</Text>
      </Surface>
      <Surface pressable variant="solid" color="success" className="p-4" onPress={() => {}}>
        <Text>Solid</Text>
      </Surface>
      <Surface pressable variant="soft" color="success" className="p-4" onPress={() => {}}>
        <Text>Soft</Text>
      </Surface>
      <Surface pressable variant="outline" color="success" className="p-4" onPress={() => {}}>
        <Text>Outline</Text>
      </Surface>
      <Surface pressable variant="dashed" color="success" className="p-4" onPress={() => {}}>
        <Text>Dashed</Text>
      </Surface>
      <Surface pressable variant="ghost" color="success" className="p-4" onPress={() => {}}>
        <Text>Ghost</Text>
      </Surface>
    </View>
  </View>
</View>
```

### To Color

```tsx live
<View className="flex flex-col gap-3">
  <Surface pressable color="neutral" toColor="primary" className="p-4" onPress={() => {}}>
    <Text>Neutral → Primary</Text>
  </Surface>
<Surface pressable variant="solid" color="primary" toColor="secondary" className="p-4" onPress={() => {}}>
    <Text>Primary → Secondary</Text>
  </Surface>
<Surface pressable variant="soft" color="secondary" toColor="error" className="p-4" onPress={() => {}}>
    <Text>Secondary → Error</Text>
  </Surface>
<Surface pressable variant="outline" color="error" toColor="warning" className="p-4" onPress={() => {}}>
    <Text>Error → Warning</Text>
  </Surface>
<Surface pressable variant="dashed" color="warning" toColor="success" className="p-4" onPress={() => {}}>
    <Text>Warning → Success</Text>
  </Surface>
<Surface pressable variant="ghost" color="success" toColor="neutral" className="p-4" onPress={() => {}}>
    <Text>Success → Neutral</Text>
  </Surface>
</View>
```

### Icons

Add visual context with icons positioned before, after, or on both sides of text.

```tsx live
<View className="flex flex-row gap-3">
  <Surface variant="elevated" className="p-4 flex-1 flex-row items-center gap-2">
    <Icon icon={Figma} />
    <Text>Elevated</Text>
  </Surface>
  <Surface variant="solid" color="primary" className="p-4 flex-1 flex-row items-center gap-2">
    <Icon icon={Figma} />
    <Text>Solid</Text>
  </Surface>
  <Surface variant="soft" color="secondary" className="p-4 flex-1 flex-row items-center gap-2">
    <Icon icon={Figma} />
    <Text>Soft</Text>
  </Surface>
  <Surface variant="outline" color="error" className="p-4 flex-1 flex-row items-center gap-2">
    <Icon icon={Figma} />
    <Text>Outline</Text>
  </Surface>
  <Surface variant="dashed" color="warning" className="p-4 flex-1 flex-row items-center gap-2">
    <Icon icon={Figma} />
    <Text>Dashed</Text>
  </Surface>
  <Surface variant="ghost" color="success" className="p-4 flex-1 flex-row items-center gap-2">
    <Icon icon={Figma} />
    <Text>Ghost</Text>
  </Surface>
</View>
```

### Spinners

Spinners automatically inherit Surface styling since they use Icon internally.

```tsx live
<View className="flex flex-row gap-3">
  <Surface variant="elevated" className="p-4 flex-1 flex-row items-center gap-2">
    <Spinner />
    <Text>Loading...</Text>
  </Surface>
  <Surface variant="solid" color="primary" className="p-4 flex-1 flex-row items-center gap-2">
    <Spinner />
    <Text>Loading...</Text>
  </Surface>
  <Surface variant="soft" color="secondary" className="p-4 flex-1 flex-row items-center gap-2">
    <Spinner />
    <Text>Loading...</Text>
  </Surface>
  <Surface variant="outline" color="error" className="p-4 flex-1 flex-row items-center gap-2">
    <Spinner />
    <Text>Loading...</Text>
  </Surface>
  <Surface variant="dashed" color="warning" className="p-4 flex-1 flex-row items-center gap-2">
    <Spinner />
    <Text>Loading...</Text>
  </Surface>
  <Surface variant="ghost" color="success" className="p-4 flex-1 flex-row items-center gap-2">
    <Spinner />
    <Text>Loading...</Text>
  </Surface>
</View>
```

### Disabled State

Prevent user interaction and provide visual feedback for unavailable actions.

```tsx live
<View className="flex flex-row gap-3">
  <Surface disabled variant="elevated" className="p-4 flex-1 flex-row items-center gap-2">
    <Text>Elevated</Text>
  </Surface>
  <Surface disabled variant="solid" color="primary" className="p-4 flex-1 flex-row items-center gap-2">
    <Text>Solid</Text>
  </Surface>
  <Surface disabled variant="soft" color="secondary" className="p-4 flex-1 flex-row items-center gap-2">
    <Text>Soft</Text>
  </Surface>
  <Surface disabled variant="outline" color="error" className="p-4 flex-1 flex-row items-center gap-2">
    <Text>Outline</Text>
  </Surface>
  <Surface disabled variant="dashed" color="warning" className="p-4 flex-1 flex-row items-center gap-2">
    <Text>Dashed</Text>
  </Surface>
  <Surface disabled variant="ghost" color="success" className="p-4 flex-1 flex-row items-center gap-2">
    <Text>Ghost</Text>
  </Surface>
</View>
```

### Slot Pattern

Transform surfaces into other elements while maintaining styling and behavior.

```tsx live
import { Surface } from '@consensys/ds3';
import { Link } from 'expo-router';

const Component = () => {
  return (
    <Surface asChild pressable className="px-3 py-2 rounded-4">
      <Link href="/">
        <Text>Navigate Home</Text>
      </Link>
    </Surface>
  );
}

export default Component;
```

### Context Providers

Surface automatically provides styling context to `<Text>` and `<Icon>` components, so you can use them directly:

```tsx live
<Surface variant="solid" color="primary" className="p-4 flex-row items-center gap-2">
  <Icon icon={Figma} />
  <Text>Text with automatic styling</Text>
</Surface>
```

This works because Surface provides:
- `TextContextProvider` - Automatically provides text props (color, spectrum, etc.) to `<Text>` components
- `IconContextProvider` - Automatically provides icon props (color, spectrum, etc.) to `<Icon>` components

The context providers merge with component props, so you can still override individual properties:

```tsx live
<Surface variant="solid" color="primary" className="p-4 flex-row items-center gap-2">
  <Text size="lg" weight="bold">Custom size and weight</Text>
  <Icon icon={Figma} size="lg" />
</Surface>
```

**Note**: Any component that uses Icon internally (like `Spinner`) will automatically inherit Surface styling without additional configuration.

## API Reference

Complete reference of all available props and their configurations.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `elevated` \| `solid` \| `soft` \| `outline` \| `dashed` \| `ghost` | `elevated` | The visual style of the surface |
| `color` | `neutral` \| `primary` \| `secondary` \| `error` \| `warning` \| `success` | `neutral` | The color scheme of the surface |
| `toColor` | Same as `color` | - | Color to switch to on press/hover |
| `disabled` | `boolean` | `false` | Whether the surface is disabled |
| `hover` | `boolean` | `false` | Whether to show hover state |
| `active` | `boolean` | `false` | Whether to show active state |
| `asChild` | `boolean` | `false` | Whether to replace the surface with a different component |
| `pressable` | `boolean` | `false` | Whether the surface should be pressable (uses Pressable) |
| `className` | `string` | - | Additional class names |

### Pressable Props

When `pressable={true}`, Surface accepts all [Pressable](https://reactnative.dev/docs/pressable) props including:
- `onPress`
- `onPressIn`
- `onPressOut`
- `onHoverIn`
- `onHoverOut`

### Static Props

When `pressable={false}` (default), Surface accepts all [View](https://reactnative.dev/docs/view) props.
