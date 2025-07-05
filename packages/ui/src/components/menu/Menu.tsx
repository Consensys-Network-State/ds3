import * as React from 'react';
import { View } from 'react-native';
import { cn } from '../../utils';
import { MenuItem } from './Menu.shared';
import { MenuGroup } from './Menu.shared';
import type { MenuRootProps } from './types';
import { menuVariants } from './styles';

const MenuRoot = React.forwardRef<View, MenuRootProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <View 
        ref={ref}
        className={cn(
          menuVariants(),
          'w-full',
          className
        )}
        {...props}
      >
        {children}
      </View>
    );
  }
);

MenuRoot.displayName = 'Menu';

const Menu = Object.assign(MenuRoot, {
  Item: MenuItem,
  Group: MenuGroup,
});

export { Menu }; 