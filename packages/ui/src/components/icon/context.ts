import * as React from 'react';
import type { IconProps } from './types';

export const IconContextProvider = React.createContext<Partial<IconProps> | undefined>(undefined);

// todo: consistent naming
export const useIconContent = () => {
  const context = React.useContext(IconContextProvider);
  return context;
}; 