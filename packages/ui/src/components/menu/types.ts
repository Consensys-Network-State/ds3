import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { menuVariants, menuItemVariants } from './styles';
import type { SurfaceRootProps } from '../surface/types';
import type { AvatarRootProps } from '../avatar/types';
import type { AccordionRootProps, AccordionTriggerProps, AccordionContentProps, AccordionItemProps } from '../accordion/types';

export type MenuItemData = {
  // Common props
  label?: string;
  icon?: React.ComponentType<any>;
  avatar?: {
    source?: AvatarRootProps['source'];
    icon?: AvatarRootProps['icon'];
    children?: React.ReactNode;
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

export type MenuRootProps = SurfaceRootProps & {
  size?: VariantProps<typeof menuVariants>['size'];
  className?: string;
  children?: React.ReactNode;
  // Data-driven rendering
  items?: MenuItemData[];
  // Accordion props when accordion is true
  accordion?: boolean;
  value?: AccordionRootProps['value'];
  defaultValue?: AccordionRootProps['defaultValue'];
  type?: AccordionRootProps['type'];
  collapsible?: AccordionRootProps['collapsible'];
};

export type MenuItemProps = SurfaceRootProps & {
  size?: VariantProps<typeof menuItemVariants>['size'];
  disabled?: boolean;
  onPress?: () => void;
  className?: string;
  children?: React.ReactNode;
  // New declarative props
  label?: string;
  icon?: React.ComponentType<any>;
  avatar?: {
    source?: AvatarRootProps['source'];
    icon?: AvatarRootProps['icon'];
    children?: React.ReactNode;
  };
};

export type MenuSize = NonNullable<MenuRootProps['size']>; 

export type MenuGroupProps = {
  children?: React.ReactNode;
  className?: string;
};

// Renamed from MenuAccordionItemProps
export type MenuAccordionProps = Omit<AccordionItemProps, 'children'> & {
  children?: React.ReactNode;
  className?: string;
  // Item props for trigger generation
  icon?: React.ComponentType<any>;
  label?: string;
  avatar?: {
    source?: AvatarRootProps['source'];
    icon?: AvatarRootProps['icon'];
    children?: React.ReactNode;
  };
};

export type MenuAccordionTriggerProps = AccordionTriggerProps & {
  children?: React.ReactNode;
  className?: string;
};

export type MenuAccordionContentProps = AccordionContentProps & {
  children?: React.ReactNode;
  className?: string;
}; 