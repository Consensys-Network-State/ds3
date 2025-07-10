import * as React from 'react';
import type { AvatarSizes, AvatarColors } from './types';

export type AvatarContextValue = {
  size?: AvatarSizes;
  color?: AvatarColors;
  className?: string;
};

export const AvatarContextProvider = React.createContext<AvatarContextValue | undefined>(undefined);

export const useAvatarContext = () => {
  const context = React.useContext(AvatarContextProvider);
  if (!context) {
    throw new Error('Avatar components must be used within an Avatar');
  }
  return context;
}; 