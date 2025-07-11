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
  MenuAccordionTriggerProps,
  MenuAccordionContentProps
} from './types';
import { Surface } from '../surface';
import { Icon } from '../icon';
import { Avatar } from '../avatar';
import { Text } from '../text';
import { Accordion } from '../accordion';
import type { AccordionChevronProps } from '../accordion/types';
import {
  menuVariants,
  menuItemAvatarVariants,
  menuItemVariants,
  menuItemIconVariants,
  menuItemTextVariants
} from './styles';
import { AvatarContextProvider } from '../avatar/context';

const renderMenuItems = (items: MenuItemData[]): React.ReactNode => {
  return items.map((item, index) => {
    const key = item.value || `menu-item-${index}`;
    const itemType = item.type || 'item';

    switch (itemType) {
      case 'group':
        return (
          <MenuGroup key={key} className={item.className}>
            {item.children && renderMenuItems(item.children)}
          </MenuGroup>
        );

      case 'accordion':
        if (!item.value) {
          console.warn('Menu.Accordion requires a value prop');
          return null;
        }
        return (
          <MenuAccordion 
            key={key} 
            value={item.value}
            icon={item.icon}
            label={item.label}
            avatar={item.avatar}
            className={item.className}
          >
            {item.children && renderMenuItems(item.children)}
          </MenuAccordion>
        );

      case 'item':
      default:
        return (
          <Menu.Item
            key={key}
            icon={item.icon}
            label={item.label}
            avatar={item.avatar}
            onPress={item.onPress}
            disabled={item.disabled}
            className={item.className}
          />
        );
    }
  });
};

const MenuRoot = React.forwardRef<React.ElementRef<typeof Surface>, MenuRootProps>(
  ({ 
    className, 
    size = 'md', 
    variant = 'ghost', 
    color, 
    toColor, 
    children, 
    items,
    disabled,
    accordion = false,
    value,
    defaultValue,
    type = 'single',
    collapsible = true,
    ...props 
  }, ref) => {
    const contextValue = React.useMemo(() => ({ 
      size: size as MenuSize, 
      variant, 
      color, 
      toColor,
      disabled
    }), [size, variant, color, toColor, disabled]);

    const avatarContextValue = React.useMemo(() => ({ 
      className: menuItemAvatarVariants({ size })
    }), [size]);

    const menuContent = items ? renderMenuItems(items) : children;

    const menuWrapper = (
      <MenuContext.Provider value={contextValue}>
        <AvatarContextProvider.Provider value={avatarContextValue}>
          {accordion ? (
            <Accordion
              ref={ref}
              variant="unstyled"
              value={value}
              defaultValue={defaultValue}
              type={type}
              collapsible={collapsible}
              className={cn(menuVariants({ size }), className)}
              {...props}
            >
              {menuContent}
            </Accordion>
          ) : (
            <View ref={ref} className={cn(menuVariants({ size }), className)} {...props}>
              {menuContent}
            </View>
          )}
        </AvatarContextProvider.Provider>
      </MenuContext.Provider>
    );

    return menuWrapper;
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

const MenuAccordion = React.forwardRef<React.ElementRef<typeof Accordion.Item>, MenuAccordionProps>(
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
    const [hasTrigger, setHasTrigger] = React.useState<boolean | null>(null);

    React.useEffect(() => {
      const trigger = React.Children.toArray(children).find(
        child => React.isValidElement(child) && child.type === MenuAccordionTrigger
      );
      setHasTrigger(!!trigger);
    }, [children]);

    return (hasTrigger === null ? null :
      <Accordion.Item ref={ref} value={itemValue} className={cn("gap-1", className)} {...props}>
        {hasTrigger ? (
          children 
        ) : (
          <>
            <MenuAccordionTrigger>
              <Menu.Item>
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
                <MenuAccordionChevron />
              </Menu.Item>
            </MenuAccordionTrigger>
            <MenuAccordionContent>
              {children}
            </MenuAccordionContent>
          </>
        )}
      </Accordion.Item>
    );
  }
);

MenuAccordion.displayName = 'Menu.Accordion';

const MenuAccordionTrigger = React.forwardRef<React.ElementRef<typeof Accordion.Trigger>, MenuAccordionTriggerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Accordion.Trigger ref={ref} asChild className={className} {...props}>
        {children}
      </Accordion.Trigger>
    );
  }
);

MenuAccordionTrigger.displayName = 'Menu.Accordion.Trigger';

const MenuAccordionContent = React.forwardRef<React.ElementRef<typeof Accordion.Content>, MenuAccordionContentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Accordion.Content ref={ref} className={cn("p-0 pl-8 gap-1", className)} {...props}>
        {children}
      </Accordion.Content>
    );
  }
);

MenuAccordionContent.displayName = 'Menu.Accordion.Content';

const MenuAccordionChevron = React.forwardRef<React.ElementRef<typeof Accordion.Chevron>, AccordionChevronProps>(
  (props, ref) => {
    return <Accordion.Chevron ref={ref} {...props} />;
  }
);

MenuAccordionChevron.displayName = 'Menu.Accordion.Chevron';

const Menu = Object.assign(MenuRoot, {
  Item: MenuItem,
  Group: MenuGroup,
  Accordion: Object.assign(MenuAccordion, {
    Trigger: MenuAccordionTrigger,
    Content: MenuAccordionContent,
    Chevron: MenuAccordionChevron,
  }),
});

export { Menu }; 