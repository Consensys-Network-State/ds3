# Menu Navigation Component

The `<Menu />` component provides a flexible, accessible navigation menu that uses accordions for nested navigation. It's perfect for drawer layouts, left panels, and any sidebar navigation needs.

## Installation

Import the Menu component from the DS3 package.

```tsx
import { Menu } from '@consensys/ds3';
```

## Examples

### Basic Navigation

Create a simple side menu with navigation items.

```tsx live
const Component = () => {
  const menuItems = [
    {
      id: 'home',
      label: 'Home',
      icon: Home,
      isActive: true,
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: User,
    },
    {
      id: 'documents',
      label: 'Documents',
      icon: FileText,
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
    },
  ];

  return (
    <View className="w-80 bg-neutral-1 p-4 rounded-lg">
      <Menu>
        {menuItems.map((item) => (
          <Menu.Item
            key={item.id}
            item={item}
            isActive={item.isActive}
            onPress={(item) => console.log('Pressed:', item.label)}
          />
        ))}
      </Menu>
    </View>
  );
}
```

### Nested Navigation with Groups

Create hierarchical navigation using accordion groups.

```tsx live
const Component = () => {
  const nestedMenuItems = [
    {
      id: 'home',
      label: 'Home',
      icon: Home,
      isActive: true,
    },
    {
      id: 'user',
      type: 'group',
      label: 'User Management',
      icon: User,
      items: [
        {
          id: 'profile',
          label: 'Profile',
          description: 'Manage your profile settings',
        },
        {
          id: 'preferences',
          label: 'Preferences',
          description: 'Customize your experience',
        },
        {
          id: 'security',
          type: 'group',
          label: 'Security',
          icon: Shield,
          description: 'Security and privacy settings',
          items: [
            {
              id: 'password',
              label: 'Password',
              description: 'Change your password',
            },
            {
              id: 'two-factor',
              label: 'Two-Factor Auth',
              description: 'Enable 2FA protection',
              badge: { text: 'New', color: 'secondary' },
            },
            {
              id: 'sessions',
              label: 'Active Sessions',
              description: 'Manage login sessions',
            },
          ],
        },
      ],
    },
    {
      id: 'content',
      type: 'group',
      label: 'Content',
      icon: FileText,
      items: [
        {
          id: 'documents',
          type: 'group',
          label: 'Documents',
          description: 'Manage your documents',
          items: [
            {
              id: 'recent',
              label: 'Recent Files',
              description: 'Recently accessed documents',
            },
            {
              id: 'shared',
              label: 'Shared Documents',
              description: 'Documents shared with you',
              badge: { text: '5', color: 'default' },
            },
            {
              id: 'templates',
              label: 'Templates',
              description: 'Document templates',
            },
          ],
        },
        {
          id: 'media',
          type: 'group',
          label: 'Media Library',
          description: 'Photos, videos, and files',
          items: [
            {
              id: 'photos',
              label: 'Photos',
              description: 'Image files',
            },
            {
              id: 'videos',
              label: 'Videos',
              description: 'Video files',
            },
            {
              id: 'audio',
              label: 'Audio',
              description: 'Audio files',
            },
          ],
        },
      ],
    },
    {
      id: 'system',
      type: 'group',
      label: 'System',
      icon: Settings,
      items: [
        {
          id: 'database',
          type: 'group',
          label: 'Database',
          icon: Database,
          description: 'Database management',
          items: [
            {
              id: 'backups',
              label: 'Backups',
              description: 'Database backups',
            },
            {
              id: 'migrations',
              label: 'Migrations',
              description: 'Database migrations',
            },
            {
              id: 'logs',
              label: 'Logs',
              description: 'Database logs',
            },
          ],
        },
        {
          id: 'notifications',
          label: 'Notifications',
          icon: Bell,
          description: 'Notification settings',
          badge: { text: '3', color: 'destructive' },
        },
      ],
    },
  ];

  return (
    <View className="w-80 bg-neutral-1 p-4 rounded-lg">
      <Menu>
        {nestedMenuItems.map((item) => {
          if (item.type === 'group') {
            return (
              <Menu.Group
                key={item.id}
                group={item}
                isActive={item.isActive}
                onItemPress={(item) => console.log('Pressed:', item.label)}
              />
            );
          }
          return (
            <Menu.Item
              key={item.id}
              item={item}
              isActive={item.isActive}
              onPress={(item) => console.log('Pressed:', item.label)}
            />
          );
        })}
      </Menu>
    </View>
  );
}
```

### Controlled State

Manage the active state programmatically.

```tsx live
const Component = () => {
  const [activeItem, setActiveItem] = React.useState('home');
  
  const items = [
    { id: 'home', label: 'Home', icon: Home, isActive: activeItem === 'home' },
    { id: 'profile', label: 'Profile', icon: User, isActive: activeItem === 'profile' },
    { id: 'settings', label: 'Settings', icon: Settings, isActive: activeItem === 'settings' },
  ];
  
  const handleItemPress = (item) => {
    setActiveItem(item.id);
    console.log('Active item:', item.label);
  };
  
  return (
    <View className="space-y-4">
      <View className="flex flex-row gap-2">
        <Button 
          size="sm" 
          onPress={() => setActiveItem('home')}
          variant={activeItem === 'home' ? 'solid' : 'outline'}
        >
          Home
        </Button>
        <Button 
          size="sm" 
          onPress={() => setActiveItem('profile')}
          variant={activeItem === 'profile' ? 'solid' : 'outline'}
        >
          Profile
        </Button>
        <Button 
          size="sm" 
          onPress={() => setActiveItem('settings')}
          variant={activeItem === 'settings' ? 'solid' : 'outline'}
        >
          Settings
        </Button>
      </View>
      
      <Menu className="w-64">
        {items.map((item) => (
          <Menu.Item
            key={item.id}
            item={item}
            isActive={item.isActive}
            onPress={handleItemPress}
          />
        ))}
      </Menu>
    </View>
  );
}
```

### Disabled Items

Disable specific navigation items.

```tsx live
const Component = () => {
  const itemsWithDisabled = [
    { id: 'home', label: 'Home', icon: Home, isActive: true },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings, disabled: true },
    { id: 'admin', label: 'Admin Panel', icon: Shield, disabled: true },
  ];

  return (
    <Menu className="w-64">
      {itemsWithDisabled.map((item) => (
        <Menu.Item
          key={item.id}
          item={item}
          isActive={item.isActive}
          onPress={(item) => {
            if (!item.disabled) {
              console.log('Pressed:', item.label);
            }
          }}
        />
      ))}
    </Menu>
  );
}
```

## API Reference

Complete reference of all available props and their configurations.

### Menu Root

The main Menu component that provides the container and navigation structure.

```tsx
<Menu className="w-80">
  <Menu.Item item={item} />
  <Menu.Group group={group} />
</Menu>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional class names |

Inherits all [View](https://reactnative.dev/docs/view) props.

### MenuData

Represents a single navigation item or group.

```tsx
// Simple item
{
  id: 'home',
  label: 'Home',
  icon: Home,
  isActive: true,
  onPress: (item) => console.log(item.label),
}

// Group with nested items
{
  id: 'settings',
  type: 'group',
  label: 'Settings',
  icon: Settings,
  items: [
    { id: 'profile', label: 'Profile' },
    { id: 'security', label: 'Security' },
  ],
}
```

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | Unique identifier for the item |
| `label` | `string` | Display text for the item |
| `description` | `string` | Optional description text |
| `icon` | `React.ComponentType` | Icon component to display |
| `disabled` | `boolean` | Whether the item is disabled |
| `isActive` | `boolean` | Whether the item is currently active |
| `onPress` | `(item: MenuData) => void` | Item-specific press handler |
| `badge` | `MenuBadge` | Badge configuration |
| `type` | `'item'` \| `'group'` | Item type (defaults to 'item') |
| `items` | `MenuData[]` | Nested items (for groups only) |

### MenuBadge

Configuration for badges displayed on navigation items.

```tsx
{
  text: '3',
  color: 'destructive',
}
```

| Prop | Type | Description |
|------|------|-------------|
| `text` | `string` \| `number` | Badge text content |
| `color` | `'default'` \| `'secondary'` \| `'destructive'` \| `'outline'` | Badge color variant |

### Menu.Item

Individual navigation item component.

```tsx
<Menu.Item
  item={menuData}
  isActive={true}
  isNested={false}
  onPress={handlePress}
/>
```

| Prop | Type | Description |
|------|------|-------------|
| `item` | `MenuData` | Menu item configuration |
| `isActive` | `boolean` | Whether the item is active |
| `isNested` | `boolean` | Whether the item is nested in a group |
| `onPress` | `(item: MenuData) => void` | Press handler |
| `className` | `string` | Additional class names |
| `activeClassName` | `string` | Additional class names for active state |

### Menu.Group

Navigation group component with accordion functionality.

```tsx
<Menu.Group
  group={menuGroupData}
  isActive={false}
  onItemPress={handleItemPress}
/>
```

| Prop | Type | Description |
|------|------|-------------|
| `group` | `MenuGroupData` | Menu group configuration |
| `isActive` | `boolean` | Whether the group is active |
| `onItemPress` | `(item: MenuData) => void` | Item press handler |
| `className` | `string` | Additional class names |
| `activeClassName` | `string` | Additional class names for active state |

## Accessibility

The Menu component automatically implements proper accessibility attributes:

### Accessibility Features

- **WAI-ARIA Compliance**: Follows navigation menu patterns
- **Keyboard Navigation**: Full keyboard support with arrow keys, Enter, and Space
- **Screen Reader Support**: Proper ARIA attributes for navigation structure
- **Focus Management**: Automatic focus handling for menu items
- **Semantic Structure**: Uses proper semantic elements

### Best Practices

```tsx
<Menu>
  {navigationItems.map((item) => (
    <Menu.Item
      key={item.id}
      item={item}
      isActive={item.isActive}
      onPress={(item) => {
        // Handle navigation
        router.push(item.id);
      }}
    />
  ))}
</Menu>
```

### Menu Data Types

- `MenuData`: Union of `MenuItemData` and `MenuGroupData`.
- `MenuItemData`: Represents a single menu item.
- `MenuGroupData`: Represents a group of menu items (with nested items).
- `MenuBadge`: Badge configuration for menu items.
- `isMenuGroup`: Type guard to check if a menu item is a group.

### Example

```tsx
const items: MenuData[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'settings', type: 'group', label: 'Settings', items: [
    { id: 'profile', label: 'Profile' },
  ]},
];

if (isMenuGroup(items[1])) {
  // items[1] is a MenuGroupData
}
```