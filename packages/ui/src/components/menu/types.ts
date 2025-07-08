import * as React from 'react';
import type { ViewProps } from 'react-native';
import type { VariantProps } from 'class-variance-authority';

// Base menu item interface
export interface MenuBaseItem {
  id?: string;
  label: string;
  description?: string;
  icon?: React.ComponentType<any>;
  disabled?: boolean;
  isActive?: boolean;
  onPress?: (item: MenuData) => void;
}

// Badge interface
export interface MenuBadge {
  text: string | number;
  color?: 'default' | 'secondary' | 'destructive' | 'outline';
}

// Simple menu item
export interface MenuItemData extends MenuBaseItem {
  type?: 'item';
  badge?: MenuBadge;
}

// Menu group with nested items
export interface MenuGroupData extends MenuBaseItem {
  type: 'group';
  badge?: MenuBadge;
  items: MenuData[];
}

// Union type for all menu items
type MenuData = MenuItemData | MenuGroupData;
export type { MenuData };

// Type guard to check if item is a group
export const isMenuGroup = (item: MenuData): item is MenuGroupData => {
  return item.type === 'group' || 'items' in item;
};

// Props for the main Menu component
export interface MenuRootProps extends ViewProps {
  className?: string;
}

// Props for individual menu items
export interface MenuItemProps extends ViewProps {
  item: MenuData;
  isActive?: boolean;
  isNested?: boolean;
  onPress?: (item: MenuData) => void;
  className?: string;
  activeClassName?: string;
}

// Props for menu groups
export interface MenuGroupProps extends ViewProps {
  group: MenuGroupData;
  isActive?: boolean;
  onItemPress?: (item: MenuData) => void;
  className?: string;
  activeClassName?: string;
}

// Props for menu triggers (used internally)
export interface MenuTriggerProps extends ViewProps {
  isActive?: boolean;
  className?: string;
}

// Variant types for styling
export type MenuItemVariants = VariantProps<typeof import('./styles').menuItemVariants>;
export type MenuTriggerVariants = VariantProps<typeof import('./styles').menuTriggerVariants>; 