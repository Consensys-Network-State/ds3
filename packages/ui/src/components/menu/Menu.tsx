import * as React from 'react';
import { View } from 'react-native';
import { cn } from '../../utils';
import { MenuContext } from './context';
import type { 
  MenuRootProps, 
  MenuItemProps, 
  MenuSize, 
  MenuItemData,
  MenuGroupProps,
  MenuAccordionProps,
  MenuAccordionItemProps,
  MenuAccordionTriggerProps,
  MenuAccordionContentProps
} from './types';
import { Surface } from '../surface';
import { Icon } from '../icon';
import { Avatar } from '../avatar';
import { Text } from '../text';
import { Accordion } from '../accordion';
import {
  menuVariants,
  menuItemAvatarVariants,
  menuItemVariants,
  menuItemIconVariants,
  menuItemTextVariants
} from './styles';
import { AvatarContextProvider } from '../avatar/context';

const MenuRoot = React.forwardRef<React.ElementRef<typeof Surface>, MenuRootProps>(
  ({ className, size = 'md', variant = 'ghost', color, toColor, children, disabled, ...props }, ref) => {
    const contextValue = React.useMemo(() => ({ 
      size: size as MenuSize, 
      variant, 
      color, 
      toColor,
      disabled
    }), [size, variant, color, toColor]);

    const avatarContextValue = React.useMemo(() => ({ 
      className: menuItemAvatarVariants({ size })
    }), [size]);

    return (
      <MenuContext.Provider value={contextValue}>
        <AvatarContextProvider.Provider value={avatarContextValue}>
          <View ref={ref} className={cn(menuVariants({ size }), className)} {...props}>
            {children}
          </View>
        </AvatarContextProvider.Provider>
      </MenuContext.Provider>
    );
  }
);

MenuRoot.displayName = 'Menu';

const MenuItem = React.forwardRef<React.ElementRef<typeof Surface>, MenuItemProps>(
  ({
    className,
    size,
    variant,
    color,
    toColor,
    disabled = false,
    onPress,
    children,
    label,
    icon,
    avatar,
    ...props
  }, ref) => {
    const menuContext = React.useContext(MenuContext);
    const effectiveSize = size || menuContext?.size || 'md';
    const effectiveVariant = variant || menuContext?.variant || 'ghost';
    const effectiveColor = color || menuContext?.color;
    const effectiveToColor = toColor || menuContext?.toColor;
    const effectiveDisabled = disabled || menuContext?.disabled;

    // Render content based on props or children
    const renderContent = () => {
      if (children) {
        return children;
      }

      return (
        <>
          {avatar && (
            <Avatar 
              source={avatar.source}
              icon={avatar.icon}
              size={effectiveSize === 'sm' ? 'sm' : 'md'}
            >
              {avatar.children}
            </Avatar>
          )}
          {icon && !avatar && (
            <Icon 
              icon={icon}
              className={menuItemIconVariants({ size: effectiveSize })}
            />
          )}
          {label && (
            <Text className={menuItemTextVariants({ size: effectiveSize })}>
              {label}
            </Text>
          )}
        </>
      );
    };

    return (
      <Surface
        ref={ref}
        pressable
        disabled={effectiveDisabled}
        onPress={onPress}
        variant={effectiveVariant}
        color={effectiveColor}
        toColor={effectiveToColor}
        iconContext={{ 
          className: menuItemIconVariants({ size: effectiveSize }),
        }}
        textContext={{ 
          className: menuItemTextVariants({ size: effectiveSize }),
        }}
        className={cn(
          menuItemVariants({ size: effectiveSize }),
          className,
        )}
        {...props}
      >
        {renderContent()}
      </Surface>
    );
  }
);

MenuItem.displayName = 'Menu.Item';

const MenuGroup = React.forwardRef<View, MenuGroupProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <View ref={ref} className={cn("pl-8", className)} {...props}>
        {children}
      </View>
    );
  }
);

MenuGroup.displayName = 'Menu.Group';

const MenuAccordion = React.forwardRef<React.ElementRef<typeof Accordion>, MenuAccordionProps>(
  ({ 
    children, 
    className, 
    icon,
    label,
    avatar,
    value,
    type = 'single',
    collapsible = true,
    ...props 
  }, ref) => {
    const [hasAccordionItem, setHasAccordionItem] = React.useState(false);

    React.useEffect(() => {
      const accordionItem = React.Children.toArray(children).find(
        child => React.isValidElement(child) && child.type === MenuAccordionItem
      );
      setHasAccordionItem(!!accordionItem);
    }, [children]);

    const accordionValue = typeof value === 'string' ? value : 'accordion-item';

    return (
      <Accordion
        ref={ref}
        variant="unstyled"
        type={type}
        collapsible={collapsible}
        className={className}
        {...props}
      >
        {hasAccordionItem ? (
          children
        ) : (
          <MenuAccordionItem 
            value={accordionValue}
            icon={icon}
            label={label}
            avatar={avatar}
          >
            {children}
          </MenuAccordionItem>
        )}
      </Accordion>
    );
  }
);

MenuAccordion.displayName = 'Menu.Accordion';

const MenuAccordionItem = React.forwardRef<React.ElementRef<typeof Accordion.Item>, MenuAccordionItemProps>(
  ({ 
    children, 
    className, 
    icon,
    label,
    avatar,
    value,
    ...props 
  }, ref) => {
    const itemValue = typeof value === 'string' ? value : 'accordion-item';
    const [hasTrigger, setHasTrigger] = React.useState(false);

    React.useEffect(() => {
      const trigger = React.Children.toArray(children).find(
        child => React.isValidElement(child) && child.type === MenuAccordionTrigger
      );
      setHasTrigger(!!trigger);
    }, [children]);

    return (
      <Accordion.Item ref={ref} value={itemValue} className={className} {...props}>
        {hasTrigger ? (
          children 
        ) :
          <>
            <MenuAccordionTrigger>
              <View className="flex flex-row items-center gap-3">
                {avatar && (
                  <Avatar 
                    source={avatar.source}
                    icon={avatar.icon}
                    size="md"
                  >
                    {avatar.children}
                  </Avatar>
                )}
                {icon && !avatar && <Icon icon={icon} />}
                {label && <Text>{label}</Text>}
              </View>
              <MenuAccordionChevron />
            </MenuAccordionTrigger>
            <MenuAccordionContent>
              {children}
            </MenuAccordionContent>
          </>
        }
      </Accordion.Item>
    );
  }
);

MenuAccordionItem.displayName = 'Menu.Accordion.Item';

const MenuAccordionTrigger = React.forwardRef<React.ElementRef<typeof Accordion.Trigger>, MenuAccordionTriggerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Accordion.Trigger ref={ref} asChild className={className} {...props}>
        <Menu.Item className="justify-between">
          {children}
        </Menu.Item>
      </Accordion.Trigger>
    );
  }
);

MenuAccordionTrigger.displayName = 'Menu.Accordion.Trigger';

const MenuAccordionContent = React.forwardRef<React.ElementRef<typeof Accordion.Content>, MenuAccordionContentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Accordion.Content ref={ref} className={cn("p-0 pl-8", className)} {...props}>
        {children}
      </Accordion.Content>
    );
  }
);

MenuAccordionContent.displayName = 'Menu.Accordion.Content';

const MenuAccordionChevron = React.forwardRef<React.ElementRef<typeof Accordion.Chevron>, {}>(
  (props, ref) => {
    return <Accordion.Chevron ref={ref} {...props} />;
  }
);

MenuAccordionChevron.displayName = 'Menu.Accordion.Chevron';

// Data-driven menu renderer
const renderMenuItems = (items: MenuItemData[]): React.ReactNode => {
  return items.map((item, index) => {
    if (item.children && item.children.length > 0) {
      return (
        <MenuAccordion key={index} value={`group-${index}`} type="single" collapsible>
          <MenuAccordionItem 
            value={`group-${index}`}
            icon={item.icon}
            label={item.label}
            avatar={item.avatar}
          >
            {renderMenuItems(item.children)}
          </MenuAccordionItem>
        </MenuAccordion>
      );
    }

    return (
      <Menu.Item
        key={index}
        icon={item.icon}
        label={item.label}
        avatar={item.avatar}
        onPress={item.onPress}
        disabled={item.disabled}
      />
    );
  });
};

const MenuItems = React.forwardRef<View, { items: MenuItemData[] }>(
  ({ items }, ref) => {
    return (
      <View ref={ref}>
        {renderMenuItems(items)}
      </View>
    );
  }
);

MenuItems.displayName = 'Menu.Items';

// Assign all components to Menu
const Menu = Object.assign(MenuRoot, {
  Item: MenuItem,
  Group: MenuGroup,
  Items: MenuItems,
  Accordion: Object.assign(MenuAccordion, {
    Item: MenuAccordionItem,
    Trigger: MenuAccordionTrigger,
    Content: MenuAccordionContent,
    Chevron: MenuAccordionChevron,
  }),
});

export { Menu }; 