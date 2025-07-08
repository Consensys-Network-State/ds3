import * as React from 'react';
import { View, Pressable } from 'react-native';
import { cn } from '../../utils';
import { Accordion } from '../accordion';
import { Icon } from '../icon';
import { Text } from '../text';
import { Badge } from '../Badge';
import { menuItemVariants, menuTriggerVariants } from './styles';
import type { 
  MenuItemProps, 
  MenuGroupProps, 
  MenuData
} from './types';
import { isMenuGroup } from './types';

// Individual menu item component
export const MenuItem = React.forwardRef<View, MenuItemProps>(
  ({ 
    item, 
    isActive = false, 
    isNested = false, 
    onPress, 
    className,
    activeClassName,
    ...props 
  }, ref) => {
    const handlePress = () => {
      if (onPress && item.onPress) {
        item.onPress(item);
      } else if (onPress) {
        onPress(item);
      }
    };

    return (
      <Pressable
        ref={ref}
        onPress={handlePress}
        className={cn(
          menuItemVariants({ 
            isActive, 
            isNested,
            disabled: item.disabled 
          }),
          isActive && activeClassName,
          className
        )}
        disabled={item.disabled}
        {...props}
      >
        <View className="flex flex-row items-center gap-3 flex-1">
          {item.icon && (
            <Icon 
              icon={item.icon} 
              size="sm" 
              color={isActive ? 'primary' : 'neutral'}
              className="shrink-0"
            />
          )}
          
          <View className="flex-1 min-w-0">
            <Text 
              size="sm" 
              weight={isActive ? 'medium' : 'normal'}
              color={isActive ? 'primary' : item.disabled ? 'neutral' : 'neutral'}
              className={cn(
                'truncate',
                item.disabled && 'opacity-50'
              )}
            >
              {item.label}
            </Text>
            
            {item.description && (
              <Text 
                size="xs" 
                color="neutral" 
                className="truncate opacity-70"
              >
                {item.description}
              </Text>
            )}
          </View>
          
          {item.badge && (
            <Badge 
              variant={item.badge.color || 'default'}
              className="shrink-0"
            >
              {item.badge.text}
            </Badge>
          )}
        </View>
      </Pressable>
    );
  }
);
MenuItem.displayName = 'MenuItem';

// Menu group with nested accordion
export const MenuGroup = React.forwardRef<View, MenuGroupProps & { isNested?: boolean }>(
  ({ 
    group, 
    isActive = false, 
    onItemPress, 
    className,
    activeClassName,
    isNested = false,
    ...props 
  }, ref) => {
    const hasActiveChild = group.items?.some((item: MenuData) => 
      item.isActive || (isMenuGroup(item) && item.items.some((subItem: MenuData) => subItem.isActive))
    );

    return (
      <View ref={ref} className={cn('w-full', isNested && 'ml-2', className)} {...props}>
        <Accordion 
          type="single" 
          collapsible 
          variant="unstyled"
          defaultValue={hasActiveChild ? [group.id || ''] : []}
          className="w-full"
        >
          <Accordion.Item value={group.id || 'group'}>
            <Accordion.Trigger className={cn(
              menuTriggerVariants({ isActive: isActive || hasActiveChild }),
              (isActive || hasActiveChild) && activeClassName
            )}>
              <View className="flex flex-row items-center gap-3 flex-1">
                {group.icon && (
                  <Icon 
                    icon={group.icon} 
                    size="sm" 
                    color={isActive || hasActiveChild ? 'primary' : 'neutral'}
                    className="shrink-0"
                  />
                )}
                
                <View className="flex-1 min-w-0">
                  <Text 
                    size="sm" 
                    weight={isActive || hasActiveChild ? 'medium' : 'normal'}
                    color={isActive || hasActiveChild ? 'primary' : 'neutral'}
                  >
                    {group.label}
                  </Text>
                  
                  {group.description && (
                    <Text 
                      size="xs" 
                      color="neutral" 
                      className="truncate opacity-70"
                    >
                      {group.description}
                    </Text>
                  )}
                </View>
                
                {group.badge && (
                  <Badge 
                    variant={group.badge.color || 'default'}
                    className="shrink-0"
                  >
                    {group.badge.text}
                  </Badge>
                )}
              </View>
            </Accordion.Trigger>
            
            <Accordion.Content>
              <View className="space-y-1 pl-4">
                {group.items?.map((item, index) => {
                  if (isMenuGroup(item)) {
                    return (
                      <MenuGroup
                        key={item.id || index}
                        group={item}
                        isActive={item.isActive}
                        onItemPress={onItemPress}
                        activeClassName={activeClassName}
                        isNested={true}
                      />
                    );
                  }
                  
                  return (
                    <MenuItem
                      key={item.id || index}
                      item={item}
                      isActive={item.isActive}
                      isNested={true}
                      onPress={onItemPress}
                      activeClassName={activeClassName}
                    />
                  );
                })}
              </View>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </View>
    );
  }
);
MenuGroup.displayName = 'MenuGroup'; 