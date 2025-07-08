# Card Component

The `<Card />` component provides a cross-platform card container that adapts to both web and React Native environments while maintaining a consistent API and design. Cards are used to group related content and actions.

## Installation

Import the Card component from the DS3 package.

```tsx
import { Card } from '@consensys/ds3';
```

## Examples

### Basic Usage

The simplest way to use Card is with a string.

```tsx live
<Card>This is a simple card with text content.</Card>
```

### Colors

The `color` prop controls the color scheme of the card.

```tsx live
<View className="flex flex-row flex-wrap gap-4">
  <Card color="neutral">Neutral card</Card>
  <Card color="primary">Primary card</Card>
  <Card color="secondary">Secondary card</Card>
  <Card color="error">Error card</Card>
  <Card color="warning">Warning card</Card>
  <Card color="success">Success card</Card>
</View>
```

### Border Options

The `border` prop controls the border visibility.

```tsx live
<View className="flex flex-row flex-wrap gap-4">
  <Card border>With border</Card>
  <Card border={false}>Without border</Card>
</View>
```

### Colors with Borders

Combine the `color` and `border` props for different visual styles.

```tsx live
<View className="flex flex-row flex-wrap gap-4">
  <Card color="neutral" border>Neutral with border</Card>
  <Card color="primary" border>Primary with border</Card>
  <Card color="secondary" border>Secondary with border</Card>
  <Card color="error" border>Error with border</Card>
  <Card color="warning" border>Warning with border</Card>
  <Card color="success" border>Success with border</Card>
</View>
```

## Parts

For more complex layouts, use the Card parts to build structured content.

### With Header

Add a header section with `Card.Header`, `Card.Title`, and `Card.Description`.

```tsx live
<Card>
  <Card.Header>
    <Card.Title>Card Title</Card.Title>
    <Card.Description>This is a description of the card content.</Card.Description>
  </Card.Header>
  <Card.Content>
    <Card.Text>This is the main content of the card.</Card.Text>
  </Card.Content>
</Card>
```

### With Footer

Add a footer section with `Card.Footer` for actions or additional information.

```tsx live
<Card>
  <Card.Header>
    <Card.Title>Card with Footer</Card.Title>
    <Card.Description>This card includes a footer section.</Card.Description>
  </Card.Header>
  <Card.Content>
    <Card.Text>Main content goes here.</Card.Text>
  </Card.Content>
  <Card.Footer>
    <Button size="sm">Action</Button>
  </Card.Footer>
</Card>
```

### Text Component

Use `Card.Text` for consistent text coloring that adapts to the card's `color` prop.

```tsx live
<View className="flex flex-row flex-wrap gap-4">
  <Card color="primary">
    <Card.Content>
      <Card.Text>This text uses Card.Text for consistent coloring.</Card.Text>
    </Card.Content>
  </Card>
  
  <Card color="secondary">
    <Card.Content>
      <Card.Text>This text adapts to different colors.</Card.Text>
    </Card.Content>
  </Card>
</View>
```

### Complete Card

A fully featured card with all sections and props.

```tsx live
<Card border>
  <Card.Header>
    <Card.Title>Complete Card</Card.Title>
    <Card.Description>This card demonstrates all available sections.</Card.Description>
  </Card.Header>
  <Card.Content>
    <Card.Text>This is the main content area where you can place any content including forms, lists, or other components.</Card.Text>
  </Card.Content>
  <Card.Footer>
    <View className="flex flex-row gap-2">
      <Button variant="outline" size="sm">Cancel</Button>
      <Button size="sm" color="primary">Save</Button>
    </View>
  </Card.Footer>
</Card>
```

## API Reference

Complete reference of all available props and their configurations.

### Card Root

The main Card component. When passed a string as children, it automatically wraps the content in `CardContent` and `CardText`.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `solid` \| `soft` | `solid` | The visual style of the card |
| `color` | `neutral` \| `primary` \| `secondary` \| `error` \| `warning` \| `success` | `neutral` | The color scheme of the card |
| `border` | `boolean` | `true` | Whether the card has a visible border |
| `className` | `string` | - | Additional class names |
| `children` | `string` \| `ReactNode` | - | Content to render. Strings are automatically wrapped in CardContent and CardText |

Inherits all [View](https://reactnative.dev/docs/view) props.

## Accessibility

Built-in accessibility support with automatic ARIA attributes and screen reader compatibility.

The Card component automatically implements proper accessibility attributes:

### Accessibility Prop Mappings

| Property | Implementation |
|----------|----------------|
| Card Title Role | `role="heading"` |
| Card Title Level | `aria-level={3}` |