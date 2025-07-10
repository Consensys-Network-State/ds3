import * as React from 'react';
import type { MenuSize, MenuRootProps } from './types';
import type { SurfaceRootProps } from '../surface/types';

export type MenuContextValue = {
  size: MenuSize;
  variant?: SurfaceRootProps['variant'];
  color?: SurfaceRootProps['color'];
  toColor?: SurfaceRootProps['toColor'];
  disabled?: MenuRootProps['disabled'];
};

export const MenuContext = React.createContext<MenuContextValue | undefined>(undefined);

export const useMenuContext = () => {
  const context = React.useContext(MenuContext);
  if (!context) {
    throw new Error('useMenuContext must be used within a Menu component');
  }
  return context;
}; 