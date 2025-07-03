# Avatar Component

The `<Avatar />` component provides a cross-platform avatar control that adapts to both web and React Native environments while maintaining a consistent API and design. Avatars are used to display user profile pictures or initials.

## Installation

Import the Avatar component from the DS3 package.

```tsx
import { Avatar } from '@consensys/ds3';
```

## Examples

### Basic

Create a simple avatar with an image.

```tsx live
<Avatar>DS</Avatar>
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
  <Avatar icon={User} size="sm">FD</Avatar>
  <Avatar icon={Settings} color="primary">FD</Avatar>
  <Avatar icon={Bell} color="secondary" size="lg">FD</Avatar>
</View>
```

### Fallback

Shows how the avatar falls back with an invalid URL.

```tsx live
<View className="flex flex-row gap-4">
  <Avatar source={{ uri: 'INVALID_URL' }} icon={User}>JD</Avatar>
  <Avatar source={{ uri: 'INVALID_URL' }}>JD</Avatar>
  <Avatar source={{ uri: 'INVALID_URL' }} />
</View>
```

### Border

Use the `border` prop to add or remove the border.

```tsx live
<Avatar border={false}>DS</Avatar>
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
    <Avatar.Text className="text-white font-bold">JD</Avatar.Text>
  </Avatar.Fallback>
</Avatar>
```

## API Reference

Complete reference of all available props and their configurations.

### Avatar Root

The main Avatar component that provides the container and context.

```tsx live
<Avatar size="lg" color="primary" border>
  {/* Avatar content goes here */}
</Avatar>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `sm` \| `md` \| `lg` \| `xl` \| `2xl` | `md` | The size of the avatar |
| `color` | `neutral` \| `primary` \| `secondary` \| `error` \| `warning` \| `success` | `neutral` | The color scheme of the avatar fallback |
| `className` | `string` | - | Additional class names |
| `children` | `ReactNode` | - | Avatar content (Image, Fallback, and/or Icon) |
| `border` | `boolean` | `false` | Whether the avatar has a visible border |
| `icon` | `ComponentType<any>` | - | Icon component to display in the avatar |
| `source` | `ImageSourcePropType` | - | The image source for the avatar |

Inherits all [View](https://reactnative.dev/docs/view) props.

### Avatar Image

Displays the user's profile picture.

```tsx live
<Avatar>
  <Avatar.Image 
    source={{ uri: 'https://github.com/shadcn.png' }}
    alt="User avatar"
  />
</Avatar>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `source` | `ImageSourcePropType` | - | The image source |
| `className` | `string` | - | Additional class names |

Inherits all [Image](https://reactnative.dev/docs/image) props.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional class names |
| `children` | `ReactNode` | - | Fallback content (usually initials) |

### Avatar Text

Displays the text content within the avatar fallback with proper styling and sizing.

```tsx live
<Avatar>
  <Avatar.Text>JD</Avatar.Text>
</Avatar>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional class names |
| `children` | `ReactNode` | - | Text content (usually initials) |

Inherits all [Text](https://reactnative.dev/docs/text) props.

### Avatar Icon

Displays an icon within the avatar with proper sizing and color.

```tsx live
<Avatar>
  <Avatar.Icon icon={User} />
</Avatar>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional class names |
| `icon` | `ComponentType<any>` | - | Icon component to display |

Inherits all [Icon](https://reactnative.dev/docs/image) props.

### Avatar Fallback

Shows when the image fails to load or as a placeholder.

```tsx live
<Avatar>
  <Avatar.Fallback>
    <Avatar.Text>JD</Avatar.Text>
  </Avatar.Fallback>
</Avatar>
```

## Accessibility

Built-in accessibility support with automatic ARIA attributes and screen reader compatibility.

The Avatar component automatically implements proper accessibility attributes:

### Accessibility Features

- **Alt Text**: Avatar images should include descriptive `alt` text
- **Fallback Content**: Fallback text provides context when images fail to load
- **Screen Reader Support**: Proper labeling and descriptions for assistive technologies

### Best Practices

```tsx
<Avatar>
  <Avatar.Image 
    source={{ uri: 'https://github.com/shadcn.png' }}
    alt="John Doe's profile picture"
  />
  <Avatar.Fallback>
    <Avatar.Text>JD</Avatar.Text>
  </Avatar.Fallback>
</Avatar>
```