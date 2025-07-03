# Tag Component

A flexible tag component for displaying labels, badges, and interactive elements.

## Features

- Multiple color variants (neutral, primary, secondary, success, warning, error)
- Different sizes (sm, md, lg)
- Multiple variants (default, outline, secondary)
- Interactive with onPress support
- Accessible and keyboard navigable
- Consistent with DS3 design system

## Usage

### Basic Tag

```tsx live
<Tag>Default Tag</Tag>
```

### Colors

```tsx live
<View className="flex flex-row flex-wrap gap-2">
  <Tag color="neutral">Neutral</Tag>
  <Tag color="primary">Primary</Tag>
  <Tag color="secondary">Secondary</Tag>
  <Tag color="success">Success</Tag>
  <Tag color="warning">Warning</Tag>
  <Tag color="error">Error</Tag>
</View>
```

### Tag Variants

```tsx live
<View className="flex flex-row gap-2">
  <Tag variant="default">Default</Tag>
  <Tag variant="outline">Outline</Tag>
  <Tag variant="secondary">Secondary</Tag>
</View>
```

### Tag Sizes

```tsx live
<View className="flex flex-row gap-2">
  <Tag size="sm">Small</Tag>
  <Tag size="md">Medium</Tag>
  <Tag size="lg">Large</Tag>
</View>
```

### Interactive Tag

```tsx live
<Tag onPress={() => console.log('Tag pressed!')}>
  Clickable Tag
</Tag>
```

### Disabled Tag

```tsx live
<Tag disabled>Disabled Tag</Tag>
```

### Custom Tag Text

```tsx live
<Tag color="primary">
  <Tag.Text>Custom styled text</Tag.Text>
</Tag>
```

## API

### Tag Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Tag content |
| `className` | `string` | `''` | Additional CSS classes |
| `style` | `ViewStyle` | - | Additional styles |
| `color` | `'neutral'` \| `'primary'` \| `'secondary'` \| `'success'` \| `'warning'` \| `'error'` | `'neutral'` | Tag color variant |
| `size` | `'sm'` \| `'md'` \| `'lg'` | `'md'` | Tag size |
| `variant` | `'default'` \| `'outline'` \| `'secondary'` | `'default'` | Tag variant |
| `onPress` | `() => void` | - | Press handler |
| `disabled` | `boolean` | `false` | Whether tag is disabled |

### TagText Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Text content |
| `className` | `string` | `''` | Additional CSS classes |
| `style` | `TextStyle` | - | Additional styles |
| `color` | `'neutral'` \| `'primary'` \| `'secondary'` \| `'success'` \| `'warning'` \| `'error'` | Inherits from parent | Text color |
| `size` | `'sm'` \| `'md'` \| `'lg'` | Inherits from parent | Text size |
