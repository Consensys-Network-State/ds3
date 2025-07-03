import * as React from 'react';
import type { AvatarContext as AvatarContextType } from './types';

export const AvatarContextProvider = React.createContext<AvatarContextType | undefined>(undefined);

export const useAvatarContext = () => {
  const context = React.useContext(AvatarContextProvider);
  if (!context) {
    throw new Error('Avatar components must be used within an Avatar');
  }
  return context;
}; 