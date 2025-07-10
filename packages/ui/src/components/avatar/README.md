# Avatar Component

The `<Avatar />` component provides a cross-platform avatar control that adapts to both web and React Native environments while maintaining a consistent API and design. Avatars are used to display user profile pictures or initials. The component is built on top of the Surface component for consistent styling and interaction patterns.

## Installation

Import the Avatar component from the DS3 package.

```tsx
import { Avatar } from '@consensys/ds3';
```

## Examples

### Basic

Create a simple avatar with initials.

```tsx live
<Avatar>DS</Avatar>
```

### Variants

Choose from different visual styles to match your design system. Avatars use Surface variants for consistent styling.

```tsx live
<View className="flex flex-row gap-4">
  <Avatar variant="elevated">DS</Avatar>
  <Avatar variant="solid">DS</Avatar>
  <Avatar variant="soft">DS</Avatar>
  <Avatar variant="outline">DS</Avatar>
  <Avatar variant="dashed">DS</Avatar>
  <Avatar variant="ghost">DS</Avatar>
</View>
```

### Colors

Apply semantic color schemes for different contexts and states. Colors primarily affect the fallback styling.

```tsx live
<View className="flex flex-row flex-wrap gap-4">
  <Avatar color="neutral">DS</Avatar>
  <Avatar color="primary">DS</Avatar>
  <Avatar color="secondary">DS</Avatar>
  <Avatar color="error">DS</Avatar>
  <Avatar color="warning">DS</Avatar>
  <Avatar color="success">DS</Avatar>
</View>
```

### Image

Use the `source` prop to add an image.

```tsx live
<Avatar source={{ uri: 'https://github.com/shadcn.png' }}>DS</Avatar>
```

### Sizes

Scale avatars to fit different UI contexts and hierarchy levels.

```tsx live
<View className="flex flex-row items-center gap-4">
  <Avatar size="sm">sm</Avatar>
  <Avatar size="md">md</Avatar>
  <Avatar size="lg">lg</Avatar>
  <Avatar size="xl">xl</Avatar>
  <Avatar size="2xl">2xl</Avatar>
</View>
```

### Icon

Display an icon instead of text or image.

```tsx live
<View className="flex flex-row gap-4">
  <Avatar icon={User} size="sm">DS</Avatar>
  <Avatar icon={Settings} color="primary">DS</Avatar>
  <Avatar icon={Bell} color="secondary" size="lg">DS</Avatar>
</View>
```

### Spinner

Add loading states with spinners that automatically scale with the avatar size.

```tsx live
<View className="flex flex-row gap-4">
  <Avatar size="sm">
    <Spinner />
  </Avatar>
  <Avatar size="md">
    <Spinner />
  </Avatar>
  <Avatar size="lg">
    <Spinner />
  </Avatar>
</View>
```

Custom Spinner Icons:

```tsx live
<View className="flex flex-row gap-4">
  <Avatar color="primary">
    <Spinner spinner={Loader}/>
  </Avatar>
  <Avatar color="secondary">
    <Spinner spinner={RefreshCw} />
  </Avatar>
  <Avatar color="error">
    <Spinner spinner={LoaderPinwheel} />
  </Avatar>
</View>
```

### Fallback

Shows how the avatar falls back with an invalid URL.

```tsx live
<View className="flex flex-row gap-4">
  <Avatar source={{ uri: 'INVALID_URL' }} icon={User}>DS</Avatar>
  <Avatar source={{ uri: 'INVALID_URL' }}>DS</Avatar>
  <Avatar source={{ uri: 'INVALID_URL' }} />
</View>
```

### Border

Use the `border` prop to add or remove the border.

```tsx live
<View className="flex flex-row gap-4">
  <Avatar border={false}>DS</Avatar>
  <Avatar border>DS</Avatar>
</View>
```

### Pressable

Create interactive avatars that respond to press and hover events.

Basic:

```tsx live
<View className="flex flex-row gap-4">
  <Avatar variant="elevated" onPress={() => console.log('Elevated pressed!')}>
    DS
  </Avatar>
  <Avatar variant="solid" onPress={() => console.log('Solid pressed!')}>
    DS
  </Avatar>
  <Avatar variant="soft" onPress={() => console.log('Soft pressed!')}>
    DS
  </Avatar>
  <Avatar variant="outline" onPress={() => console.log('Outline pressed!')}>
    DS
  </Avatar>
  <Avatar variant="dashed" onPress={() => console.log('Dashed pressed!')}>
    DS
  </Avatar>
  <Avatar variant="ghost" onPress={() => console.log('Ghost pressed!')}>
    DS
  </Avatar>
</View>
```

With Image:

```tsx live
<Avatar 
  source={{ uri: 'https://github.com/shadcn.png' }} 
  onPress={() => console.log('Avatar pressed!')}
>
  DS
</Avatar>
```

Interaction Color:

```tsx live
<Avatar 
  color="neutral" 
  toColor="primary" 
  onPress={() => console.log('Avatar pressed!')}
>
  NP
</Avatar>
```

### Multiple Avatars

Group multiple avatars together for team displays or user lists.

```tsx live
<View className="flex flex-row -space-x-2">
  <Avatar size="sm" source={{ uri: 'https://github.com/shadcn.png' }}>JD</Avatar>
  <Avatar size="sm" source={{ uri: 'https://github.com/shadcn.png' }}>AB</Avatar>
  <Avatar size="sm" source={{ uri: 'https://github.com/shadcn.png' }}>CD</Avatar>
  <Avatar size="sm">+3</Avatar>
</View>
```

### Customization

Here's how to customize using all the parts together:

```tsx live expand
<Avatar size="lg" color="primary" border className="rounded-md shadow-lg">
  <Avatar.Image 
    source={{ uri: 'https://github.com/shadcn.png' }}
    alt="User avatar"
    className="opacity-90"
  />
  <Avatar.Fallback className="bg-gradient-to-r from-primary to-secondary">
    <Text className="text-white font-bold">DS</Text>
  </Avatar.Fallback>
</Avatar>
```

## API Reference

Complete reference of all available props and their configurations.

### Avatar Root

The main Avatar component that provides the container and context. Built on top of Surface for consistent styling.

```tsx live
<Avatar size="lg" color="primary" border alt="User avatar">
  {/* Avatar content goes here */}
</Avatar>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `sm` \| `md` \| `lg` \| `xl` \| `2xl` | `md` | The size of the avatar |
| `color` | `neutral` \| `primary` \| `secondary` \| `error` \| `warning` \| `success` | `neutral` | The color scheme of the avatar fallback |
| `variant` | `elevated` \| `solid` \| `soft` \| `outline` \| `dashed` \| `ghost` | `soft` | The visual style variant |
| `className` | `string` | - | Additional class names |
| `children` | `ReactNode` | - | Avatar content (Image, Fallback, and/or Icon) |
| `border` | `boolean` | `false` | Whether the avatar has a visible border |
| `icon` | `ComponentType<any>` | - | Icon component to display in the avatar |
| `source` | `ImageSourcePropType` | - | The image source for the avatar |
| `alt` | `string` | - | Alternative text for accessibility (applied to both image and fallback) |
| `onPress` | `() => void` | - | Press handler |
| `disabled` | `boolean` | `false` | Whether avatar is disabled |
| `toColor` | Same as `color` | - | Color to switch to on press/hover |

**Note**: Avatar inherits all props from [Surface](/packages/ui/src/components/surface), including color schemes, variants, and interaction states.

### Avatar Image

Displays the user's profile picture.

```tsx live
<Avatar alt="User avatar">
  <Avatar.Image 
    source={{ uri: 'https://github.com/shadcn.png' }}
  />
</Avatar>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `source` | `ImageSourcePropType` | - | The image source |
| `size` | `sm` \| `md` \| `lg` \| `xl` \| `2xl` | `md` | The size of the image |
| `className` | `string` | - | Additional class names |

Inherits all [Image](https://reactnative.dev/docs/image) props.

### Avatar Fallback

Shows when the image fails to load or as a placeholder.

```tsx live
<Avatar>
  <Avatar.Fallback>
    <Text>DS</Text>
  </Avatar.Fallback>
</Avatar>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional class names |
| `children` | `ReactNode` | - | Fallback content (usually initials) |

The Text and Icon components automatically inherit the avatar's size and color context.

## Accessibility

Built-in accessibility support with automatic ARIA attributes and screen reader compatibility.

The Avatar component automatically implements proper accessibility attributes:

### Accessibility Features

- **Alt Text**: Pass the `alt` prop to the main Avatar component - it's automatically applied to both image and fallback
- **Fallback Content**: Fallback text provides context when images fail to load
- **Screen Reader Support**: Proper labeling and descriptions for assistive technologies

### Best Practices

```tsx
<Avatar alt="John Doe's profile picture">
  <Avatar.Image 
    source={{ uri: 'https://github.com/shadcn.png' }}
  />
  <Avatar.Fallback>
    <Text>DS</Text>
  </Avatar.Fallback>
</Avatar>
```

## Related Components

- [Surface](/packages/ui/src/components/surface) - The styling foundation used by Avatar
- [Text](/packages/ui/src/components/text) - For displaying text content within avatars
- [Icon](/packages/ui/src/components/icon) - For displaying icons within avatars
- [Spinner](/packages/ui/src/components/spinner) - For displaying loading states within avatars