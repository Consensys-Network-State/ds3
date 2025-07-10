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
  <Menu.Item label="Menu Item" />
</Menu>
```

### Variants

Choose from six different visual styles to match your design system.

```tsx live
<Menu>
  <Menu.Item label="Elevated" variant="elevated" />
  <Menu.Item label="Solid" variant="solid" />
  <Menu.Item label="Soft" variant="soft" />
  <Menu.Item label="Outline" variant="outline" />
  <Menu.Item label="Dashed" variant="dashed" />
  <Menu.Item label="Ghost" variant="ghost"  />
</Menu>
```

Menu level:

```tsx live
<Menu variant="outline">
  <Menu.Item label="Outline" />
</Menu>
```

### Colors

Apply semantic color schemes for different contexts and states.

```tsx live
<Menu>
  <Menu.Item label="Neutral" color="neutral"  />
  <Menu.Item label="Primary" color="primary" />
  <Menu.Item label="Secondary" color="secondary" />
  <Menu.Item label="Error" color="error" />
  <Menu.Item label="Warning" color="warning" />
  <Menu.Item label="Success" color="success" />
</Menu>
```

Menu level:

```tsx live
<Menu color="primary">
  <Menu.Item label="Primary" />
</Menu>
```

### Interaction Colors

Dynamically change colors on press or hover for enhanced user feedback.

```tsx live
<Menu>
  <Menu.Item label="Neutral to Primary" color="neutral" toColor="primary" />
  <Menu.Item label="Primary to Secondary" color="primary" toColor="secondary" />
  <Menu.Item label="Secondary to Error" color="secondary" toColor="error" />
</Menu>
```

Menu level:

```tsx live
<Menu color="neutral" toColor="primary">
  <Menu.Item label="Neutral to Primary" />
</Menu>
```

### Icons

Add visual context with icons positioned before text.

```tsx live
<Menu>
  <Menu.Item icon={Figma} label="Menu Item" />
  <Menu.Item icon={Settings} label="Settings" />
  <Menu.Item icon={User} label="Profile" />
</Menu>
```

### Avatars

Display user avatars alongside menu items.

```tsx live
<Menu>
  <Menu.Item avatar={{ source: { uri: 'https://github.com/shadcn.png' }, children: 'JD' }} label="John Doe" />
  <Menu.Item avatar={{ color: 'primary', children: 'AB' }} label="Alice Brown" />
  <Menu.Item avatar={{ icon: User, color: 'secondary', children: 'CD' }} label="Charlie Davis" />
</Menu>
```

### Sizes

Scale menus to fit different UI contexts and hierarchy levels. Avatar components automatically adapt to the menu size.

```tsx live
<View className="flex flex-col gap-6">
  <Menu size="sm">
    <Menu.Item icon={Figma} label="Small" />
    <Menu.Item avatar={{ source: { uri: 'https://github.com/shadcn.png' }, children: 'JD' }} label="Profile" />
  </Menu>

  <Menu size="md">
    <Menu.Item icon={Figma} label="Medium" />
    <Menu.Item avatar={{ source: { uri: 'https://github.com/shadcn.png' }, children: 'JD' }} label="Profile" />
  </Menu>

  <Menu size="lg">
    <Menu.Item icon={Figma} label="Large" />
    <Menu.Item avatar={{ source: { uri: 'https://github.com/shadcn.png' }, children: 'JD' }} label="Profile" />
  </Menu>
</View>
```

### Disabled State

Prevent user interaction and provide visual feedback for unavailable actions.

```tsx live
<Menu>
  <Menu.Item icon={Figma} label="Active Item" />
  <Menu.Item icon={Settings} label="Disabled Item" disabled />
  <Menu.Item icon={User} label="Another Active Item" />
</Menu>
```

Menu level:

```tsx live
<Menu disabled>
  <Menu.Item icon={Figma} label="Disabled Item" />
</Menu>
```

### Custom Styling

Apply custom styles to individual menu items and their sub-components.

```tsx live
<Menu>
  <Menu.Item className="bg-primary-a3">
    <Icon icon={Figma} />
    <Text className="font-bold">Custom Background</Text>
  </Menu.Item>
  <Menu.Item color="primary">
    <Icon icon={Settings} color="neutral" />
    <Text color="neutral">Custom Border</Text>
  </Menu.Item>
</Menu>
```

### Group

Create simple indented groups for visual hierarchy.

```tsx live
<Menu>
  <Menu.Item icon={Home} label="Dashboard" />
  
  <Menu.Group>
    <Menu.Item icon={Users} label="All Users" />
    <Menu.Item icon={Users} label="Active Users" />
    <Menu.Item icon={Users} label="Inactive Users" />
  </Menu.Group>
</Menu>
```

### Accordion

Create collapsible sections with the new simplified API.

Basic:

```tsx live
<Menu accordion defaultValue="users" type="single" collapsible>
  <Menu.Item icon={Home} label="Dashboard" />
  
  <Menu.Accordion value="users" icon={Users} label="User Management">
    <Menu.Item icon={UserCheck} label="Active Users" />
    <Menu.Item icon={UserX} label="Inactive Users" />
    <Menu.Item icon={UserPlus} label="Add New User" />
  </Menu.Accordion>
</Menu>
```

Single (only one item open):

```tsx live
<Menu accordion defaultValue="settings" type="single" collapsible>
  <Menu.Item icon={Home} label="Dashboard" />
  
  <Menu.Accordion value="users" icon={Users} label="User Management">
    <Menu.Item icon={UserCheck} label="Active Users" />
    <Menu.Item icon={UserX} label="Inactive Users" />
    <Menu.Item icon={UserPlus} label="Add New User" />
  </Menu.Accordion>
  <Menu.Accordion value="settings" icon={Settings} label="Settings">
    <Menu.Item icon={Shield} label="Security" />
    <Menu.Item icon={Bell} label="Notifications" />
    <Menu.Item icon={Palette} label="Appearance" />
  </Menu.Accordion>
</Menu>
```

Multiple (many items open):

```tsx live
<Menu accordion defaultValue={["users", "settings"]} type="multiple">
  <Menu.Item icon={Home} label="Dashboard" />
  
  <Menu.Accordion value="users" icon={Users} label="User Management">
    <Menu.Item icon={UserCheck} label="Active Users" />
    <Menu.Item icon={UserX} label="Inactive Users" />
    <Menu.Item icon={UserPlus} label="Add New User" />
  </Menu.Accordion>
  <Menu.Accordion value="settings" icon={Settings} label="Settings">
    <Menu.Item icon={Shield} label="Security" />
    <Menu.Item icon={Bell} label="Notifications" />
    <Menu.Item icon={Palette} label="Appearance" />
  </Menu.Accordion>
</Menu>
```

#### Custom Triggers and Content

For complex cases, use custom trigger and content components for full control.

```tsx live
<Menu accordion defaultValue="users" type="single" collapsible>
  <Menu.Item icon={Home} label="Dashboard" />
  
  <Menu.Accordion value="users">
    <Menu.Accordion.Trigger>
      <Icon icon={Users} />
      <Text className="mr-auto">User Management</Text>
      <Menu.Accordion.Chevron />
    </Menu.Accordion.Trigger>
    <Menu.Accordion.Content>
      <Menu.Item icon={UserCheck} label="Active Users" />
      <Menu.Item icon={UserX} label="Inactive Users" />
      <Menu.Item icon={UserPlus} label="Add New User" />
    </Menu.Accordion.Content>
  </Menu.Accordion>
</Menu>
```

#### Nested Accordions

Create hierarchical navigation with nested accordion sections.

```tsx live
<Menu accordion defaultValue={["content", "media"]} type="multiple" collapsible>
  <Menu.Item icon={Home} label="Dashboard" />
  
  <Menu.Accordion value="content" icon={FileText} label="Content Management">
    <Menu.Item icon={FileText} label="Articles" />
    <Menu.Item icon={FileText} label="Pages" />
    
    <Menu.Accordion value="media" icon={FileText} label="Media Library">
      <Menu.Item icon={FileText} label="Images" />
      <Menu.Item icon={FileText} label="Videos" />
      <Menu.Item icon={FileText} label="Documents" />
    </Menu.Accordion>
  </Menu.Accordion>
  
  <Menu.Accordion value="settings" icon={Settings} label="Settings">
    <Menu.Item icon={Shield} label="Security" />
    <Menu.Item icon={Bell} label="Notifications" />
    <Menu.Item icon={Palette} label="Appearance" />
  </Menu.Accordion>
</Menu>
```

### Data-Driven Rendering

Use the `items` prop to render menus from data structures.

#### Normal Menus and Groups

```tsx live
const Component = () => {
  const menuItems = [
    {
      type: 'item',
      label: 'Dashboard',
      icon: Home,
      onPress: () => console.log('Dashboard clicked')
    },
    {
      type: 'group',
      children: [
        {
          type: 'item',
          label: 'All Users',
          icon: Users
        },
        {
          type: 'item',
          label: 'Active Users',
          icon: UserCheck
        }
      ]
    }
  ];

  return (
    <Menu items={menuItems} />
  )
}
```

#### Accordion Menus

```tsx live
const Component = () => {
  const accordionItems = [
    {
      type: 'item',
      label: 'Dashboard',
      icon: Home
    },
    {
      type: 'accordion',
      value: 'users',
      label: 'User Management',
      icon: Users,
      children: [
        {
          type: 'item',
          label: 'Active Users',
          icon: UserCheck
        },
        {
          type: 'item',
          label: 'Inactive Users',
          icon: UserX
        }
      ]
    }
  ];

  return (
    <Menu accordion defaultValue="users" type="single" collapsible items={accordionItems} />
  );
}
```

## API Reference

Complete reference of all available props and their configurations.

### Menu Root

The main Menu component that provides the container and context. When `accordion` is true, it wraps an Accordion component.

```tsx
<Menu size="md" className="w-64">
  {/* Menu items go here */}
</Menu>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `sm` \| `md` \| `lg` | `md` | The size of the menu and its items |
| `className` | `string` | - | Additional class names |
| `children` | `ReactNode` | - | Menu items (Menu.Item components) |
| `items` | `MenuItemData[]` | - | Data-driven menu items |
| `accordion` | `boolean` | `false` | Whether to wrap the menu in an Accordion |
| `value` | `string` \| `string[]` | - | Controlled value for accordion (when accordion is true) |
| `defaultValue` | `string` \| `string[]` | - | Default value for accordion (when accordion is true) |
| `type` | `single` \| `multiple` | `single` | Accordion type (when accordion is true) |
| `collapsible` | `boolean` | `true` | Whether accordion can be collapsed (when accordion is true) |

Inherits all [View](https://reactnative.dev/docs/view) props.

### Menu Item

Individual menu items that can be pressed and contain various content types.

```tsx live
<Menu.Item disabled={false}>
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
| `label` | `string` | - | Text label for the menu item |
| `icon` | `ComponentType<any>` | - | Icon component to display |
| `avatar` | `object` | - | Avatar configuration (source, icon, children) |

Inherits all [View](https://reactnative.dev/docs/view) props.

### Menu Group

Creates a simple indented group for visual hierarchy.

```tsx
<Menu.Group>
  <Menu.Item icon={Users} label="All Users" />
</Menu.Group>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional class names |
| `children` | `ReactNode` | - | Menu items within the group |

### Menu Accordion

Individual accordion item with optional auto-generated trigger.

```tsx
<Menu.Accordion value="users" icon={Users} label="User Management">
  <Menu.Item icon={UserCheck} label="Active Users" />
</Menu.Accordion>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | **Required** | Unique identifier for the accordion item |
| `icon` | `ComponentType<any>` | - | Icon for auto-generated trigger |
| `label` | `string` | - | Label for auto-generated trigger |
| `avatar` | `object` | - | Avatar for auto-generated trigger |
| `className` | `string` | - | Additional class names |
| `children` | `ReactNode` | - | Menu items or custom trigger/content |

### Menu Accordion Trigger

Custom trigger for accordion groups with full control over content.

```tsx
<Menu.Accordion.Trigger>
  <Icon icon={Users} />
  <Text>Users</Text>
  <Menu.Accordion.Chevron />
</Menu.Accordion.Trigger>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional class names |
| `children` | `ReactNode` | - | Custom trigger content |

### Menu Accordion Content

Container for accordion content with proper padding and styling.

```tsx
<Menu.Accordion.Content>
  <Menu.Item icon={Users} label="All Users" />
</Menu.Accordion.Content>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional class names |
| `children` | `ReactNode` | - | Menu items within the content |

### Menu Accordion Chevron

Animated chevron icon for accordion triggers.

```tsx
<Menu.Accordion.Chevron />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| Inherits all chevron props from Accordion.Chevron | - | - | - |

### MenuItemData Type

```tsx
type MenuItemData = {
  // Common props
  label?: string;
  icon?: ComponentType<any>;
  avatar?: {
    source?: ImageSourcePropType;
    icon?: ComponentType<any>;
    children?: ReactNode;
  };
  disabled?: boolean;
  className?: string;
  
  // For regular items
  onPress?: () => void;
  
  // For groups and accordions
  children?: MenuItemData[];
  
  // Type discriminator
  type?: 'item' | 'group' | 'accordion';
  
  // Accordion-specific props
  value?: string; // Required for accordions
};
```

## Design Principles

The Menu component follows these design principles:

- **Consistent Sizing**: All items within a menu share the same size context
- **Flexible Content**: Supports Icon, Text, and Avatar components in any combination
- **Surface Integration**: Uses Surface component for consistent styling and interactions
- **Accessibility**: Proper accessibility roles and states for interactive elements
- **Cross-Platform**: Works consistently across web and React Native platforms
- **Dual API**: Supports both declarative composition and data-driven approaches
- **Hierarchical Navigation**: Supports both simple indentation and collapsible accordions
- **Flexible Triggers**: Auto-generated or custom triggers for accordion sections
- **Simplified Accordion API**: Streamlined accordion integration with Menu root
- **Data-Driven Rendering**: Render complex menu structures from data arrays

## Related Components

- [Surface](/packages/ui/src/components/surface) - The styling foundation used by Menu.Item
- [Icon](/packages/ui/src/components/icon) - For adding visual context to menu items
- [Text](/packages/ui/src/components/text) - For displaying text content
- [Avatar](/packages/ui/src/components/avatar) - For displaying user avatars
- [Accordion](/packages/ui/src/components/accordion) - The underlying component for Menu accordion functionality 