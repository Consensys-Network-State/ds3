import * as React from 'react';
import type { ButtonContext as ButtonContextType } from './types';

export const ButtonContextProvider = React.createContext<ButtonContextType | undefined>(undefined);

export const useButtonContext = () => {
  const context = React.useContext(ButtonContextProvider);
  if (!context) {
    throw new Error('Button components must be used within a Button');
  }
  return context;
}; 