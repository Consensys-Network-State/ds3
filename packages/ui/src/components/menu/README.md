# Menu Component

The `<Menu />` component provides a cross-platform menu control that adapts to both web and React Native environments while maintaining a consistent API and design. Menus are used to display lists of interactive items, commonly found in side navigation or dropdown menus.

## Installation

Import the Menu component from the DS3 package.

```tsx
import { Menu } from '@consensys/ds3';
```

## Examples

### Basic

Create a simple menu with default styling.

```tsx live
<Menu>
  <Menu.Item onPress={() => {}}>
    <Text>Menu Item</Text>
  </Menu.Item>
</Menu>
```

### With Icons

Add visual context with icons positioned before text.

```tsx live
<Menu>
  <Menu.Item onPress={() => {}}>
    <Icon icon={Figma} />
    <Text>Menu Item</Text>
  </Menu.Item>
  <Menu.Item onPress={() => {}}>
    <Icon icon={Settings} />
    <Text>Settings</Text>
  </Menu.Item>
  <Menu.Item onPress={() => {}}>
    <Icon icon={User} />
    <Text>Profile</Text>
  </Menu.Item>
</Menu>
```

### With Avatars

Display user avatars alongside menu items.

```tsx live
<Menu>
  <Menu.Item onPress={() => {}}>
    <Avatar source={{ uri: 'https://github.com/shadcn.png' }}>JD</Avatar>
    <Text>John Doe</Text>
  </Menu.Item>
  <Menu.Item onPress={() => {}}>
    <Avatar color="primary">AB</Avatar>
    <Text>Alice Brown</Text>
  </Menu.Item>
  <Menu.Item onPress={() => {}}>
    <Avatar icon={User} color="secondary">CD</Avatar>
    <Text>Charlie Davis</Text>
  </Menu.Item>
</Menu>
```

### Mixed Content

Combine icons, avatars, and text in various combinations.

```tsx live
<Menu>
  <Menu.Item onPress={() => {}}>
    <Icon icon={Home} />
    <Text>Home</Text>
  </Menu.Item>
  <Menu.Item onPress={() => {}}>
    <Avatar source={{ uri: 'https://github.com/shadcn.png' }}>JD</Avatar>
    <Text>Profile</Text>
  </Menu.Item>
  <Menu.Item onPress={() => {}}>
    <Icon icon={Settings} />
    <Text>Settings</Text>
  </Menu.Item>
  <Menu.Item onPress={() => {}}>
    <Avatar color="error">AB</Avatar>
    <Text>Account</Text>
  </Menu.Item>
</Menu>
```

### Sizes

Scale menus to fit different UI contexts and hierarchy levels. Avatar components automatically adapt to the menu size.

```tsx live
<View className="flex flex-col gap-6">
  <Menu size="sm">
    <Menu.Item onPress={() => {}}>
      <Icon icon={Figma} />
      <Text>Small</Text>
    </Menu.Item>
    <Menu.Item onPress={() => {}}>
      <Avatar source={{ uri: 'https://github.com/shadcn.png' }}>JD</Avatar>
      <Text>Profile</Text>
    </Menu.Item>
  </Menu>

  <Menu size="md">
    <Menu.Item onPress={() => {}}>
      <Icon icon={Figma} />
      <Text>Medium</Text>
    </Menu.Item>
    <Menu.Item onPress={() => {}}>
      <Avatar source={{ uri: 'https://github.com/shadcn.png' }}>JD</Avatar>
      <Text>Profile</Text>
    </Menu.Item>
  </Menu>

  <Menu size="lg">
    <Menu.Item onPress={() => {}}>
      <Icon icon={Figma} />
      <Text>Large</Text>
    </Menu.Item>
    <Menu.Item onPress={() => {}}>
      <Avatar source={{ uri: 'https://github.com/shadcn.png' }}>JD</Avatar>
      <Text>Profile</Text>
    </Menu.Item>
  </Menu>
</View>
```

**Avatar Size Mapping:**
- `sm` menu → `sm` avatar (24x24px)
- `md` menu → `md` avatar (32x32px) 
- `lg` menu → `md` avatar (32x32px)

### Disabled State

Prevent user interaction and provide visual feedback for unavailable actions.

```tsx live
<Menu>
  <Menu.Item onPress={() => {}}>
    <Icon icon={Figma} />
    <Text>Active Item</Text>
  </Menu.Item>
  <Menu.Item disabled>
    <Icon icon={Settings} />
    <Text>Disabled Item</Text>
  </Menu.Item>
  <Menu.Item onPress={() => {}}>
    <Icon icon={User} />
    <Text>Another Active Item</Text>
  </Menu.Item>
</Menu>
```

### Variants

Choose from six different visual styles to match your design system.

```tsx live
<Menu>
  <Menu.Item onPress={() => {}} variant="elevated">
    <Icon icon={Figma} />
    <Text>Elevated</Text>
  </Menu.Item>
  <Menu.Item onPress={() => {}} variant="solid">
    <Icon icon={Settings} />
    <Text>Solid</Text>
  </Menu.Item>
  <Menu.Item onPress={() => {}} variant="soft">
    <Icon icon={User} />
    <Text>Soft</Text>
  </Menu.Item>
  <Menu.Item onPress={() => {}} variant="outline">
    <Icon icon={HelpCircle} />
    <Text>Outline</Text>
  </Menu.Item>
  <Menu.Item onPress={() => {}} variant="dashed">
    <Icon icon={Bell} />
    <Text>Dashed</Text>
  </Menu.Item>
  <Menu.Item onPress={() => {}} variant="ghost">
    <Icon icon={Mail} />
    <Text>Ghost</Text>
  </Menu.Item>
</Menu>
```

### Colors

Apply semantic color schemes for different contexts and states.

```tsx live
<Menu>
  <Menu.Item onPress={() => {}} color="neutral">
    <Icon icon={Figma} />
    <Text>Neutral</Text>
  </Menu.Item>
  <Menu.Item onPress={() => {}} color="primary">
    <Icon icon={Settings} />
    <Text>Primary</Text>
  </Menu.Item>
  <Menu.Item onPress={() => {}} color="secondary">
    <Icon icon={User} />
    <Text>Secondary</Text>
  </Menu.Item>
  <Menu.Item onPress={() => {}} color="error">
    <Icon icon={AlertCircle} />
    <Text>Error</Text>
  </Menu.Item>
  <Menu.Item onPress={() => {}} color="warning">
    <Icon icon={AlertTriangle} />
    <Text>Warning</Text>
  </Menu.Item>
  <Menu.Item onPress={() => {}} color="success">
    <Icon icon={CheckCircle} />
    <Text>Success</Text>
  </Menu.Item>
</Menu>
```

### Interaction Colors

Dynamically change colors on press or hover for enhanced user feedback.

```tsx live
<Menu>
  <Menu.Item onPress={() => {}} color="neutral" toColor="primary">
    <Icon icon={Figma} />
    <Text>Neutral to Primary</Text>
  </Menu.Item>
  <Menu.Item onPress={() => {}} color="primary" toColor="secondary">
    <Icon icon={Settings} />
    <Text>Primary to Secondary</Text>
  </Menu.Item>
  <Menu.Item onPress={() => {}} color="secondary" toColor="error">
    <Icon icon={User} />
    <Text>Secondary to Error</Text>
  </Menu.Item>
</Menu>
```

### Custom Styling

Apply custom styles to individual menu items.

```tsx live
<Menu>
  <Menu.Item onPress={() => {}} className="bg-primary-a3">
    <Icon icon={Figma} />
    <Text>Custom Background</Text>
  </Menu.Item>
  <Menu.Item onPress={() => {}} className="border border-primary">
    <Icon icon={Settings} />
    <Text>Custom Border</Text>
  </Menu.Item>
  <Menu.Item onPress={() => {}} className="rounded-lg">
    <Icon icon={User} />
    <Text>Custom Border Radius</Text>
  </Menu.Item>
</Menu>
```

### Side Navigation Example

A complete side navigation menu example.

```tsx live expand
<View className="w-64 bg-neutral-1 border-r border-neutral-a6 p-4">
  <Menu>
    <Menu.Item onPress={() => {}}>
      <Icon icon={Home} />
      <Text>Dashboard</Text>
    </Menu.Item>
    
    <Menu.Item onPress={() => {}}>
      <Icon icon={Users} />
      <Text>Users</Text>
    </Menu.Item>
    
    <Menu.Item onPress={() => {}}>
      <Icon icon={Settings} />
      <Text>Settings</Text>
    </Menu.Item>
    
    <Menu.Item onPress={() => {}}>
      <Icon icon={HelpCircle} />
      <Text>Help</Text>
    </Menu.Item>
    
    <Menu.Item onPress={() => {}}>
      <Avatar source={{ uri: 'https://github.com/shadcn.png' }}>JD</Avatar>
      <Text>Profile</Text>
    </Menu.Item>
  </Menu>
</View>
```

## API Reference

Complete reference of all available props and their configurations.

### Menu Root

The main Menu component that provides the container and context.

```tsx live
<Menu size="md" className="w-64">
  {/* Menu items go here */}
</Menu>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `sm` \| `md` \| `lg` | `md` | The size of the menu and its items |
| `className` | `string` | - | Additional class names |
| `children` | `ReactNode` | - | Menu items (Menu.Item components) |

Inherits all [View](https://reactnative.dev/docs/view) props.

### Menu Item

Individual menu items that can be pressed and contain various content types.

```tsx live
<Menu.Item onPress={() => {}} disabled={false}>
  <Icon icon={Figma} />
  <Text>Menu Item</Text>
</Menu.Item>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `sm` \| `md` \| `lg` | Inherits from Menu | The size of the menu item |
| `variant` | `elevated` \| `solid` \| `soft` \| `outline` \| `dashed` \| `ghost` | `elevated` | The visual style variant |
| `color` | `neutral` \| `primary` \| `secondary` \| `error` \| `warning` \| `success` | `neutral` | The color scheme |
| `toColor` | `neutral` \| `primary` \| `secondary` \| `error` \| `warning` \| `success` | - | Color to transition to on interaction |
| `disabled` | `boolean` | `false` | Whether the item is disabled |
| `onPress` | `() => void` | - | Function called when the item is pressed |
| `className` | `string` | - | Additional class names |
| `children` | `ReactNode` | - | Item content (Icon, Text, Avatar) |

Inherits all [View](https://reactnative.dev/docs/view) props.

## Design Principles

The Menu component follows these design principles:

- **Consistent Sizing**: All items within a menu share the same size context
- **Flexible Content**: Supports Icon, Text, and Avatar components in any combination
- **Surface Integration**: Uses Surface component for consistent styling and interactions
- **Accessibility**: Proper accessibility roles and states for interactive elements
- **Cross-Platform**: Works consistently across web and React Native platforms

## Related Components

- [Surface](/packages/ui/src/components/surface) - The styling foundation used by Menu.Item
- [Icon](/packages/ui/src/components/icon) - For adding visual context to menu items
- [Text](/packages/ui/src/components/text) - For displaying text content
- [Avatar](/packages/ui/src/components/avatar) - For displaying user avatars 