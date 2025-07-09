import * as React from 'react';
import { View } from 'react-native';
import { cn } from '../../utils';
import { MenuContext } from './context';
import type { MenuRootProps, MenuItemProps, MenuSize } from './types';
import type { AvatarSizes } from '../avatar/types';
import { Surface } from '../surface';
import {
  menuVariants,
  menuItemAvatarVariants,
  menuItemVariants,
  menuItemIconVariants,
  menuItemTextVariants
} from './styles';
import { AvatarContextProvider } from '../avatar/context';

const MenuRoot = React.forwardRef<React.ElementRef<typeof Surface>, MenuRootProps>(
  ({ className, size = 'md', variant = 'ghost', color, toColor, children, ...props }, ref) => {
    const contextValue = React.useMemo(() => ({ 
      size: size as MenuSize, 
      variant, 
      color, 
      toColor 
    }), [size, variant, color, toColor]);
    const avatarContextValue = React.useMemo(() => ({ 
      size: (size === 'sm' ? 'sm' : size === 'lg' ? 'md' : 'sm') as AvatarSizes,
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
    ...props
  }, ref) => {
    const menuContext = React.useContext(MenuContext);
    const effectiveSize = size || menuContext?.size || 'md';
    const effectiveVariant = variant || menuContext?.variant || 'ghost';
    const effectiveColor = color || menuContext?.color;
    const effectiveToColor = toColor || menuContext?.toColor;

    return (
      <Surface
        ref={ref}
        pressable={!!onPress}
        disabled={disabled}
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
        {children}
      </Surface>
    );
  }
);

MenuItem.displayName = 'MenuItem';

const Menu = Object.assign(MenuRoot, {
  Item: MenuItem,
});

export { Menu }; 