import * as React from 'react';
import type { CardContextValue } from './types';

export const CardContextProvider = React.createContext<CardContextValue | undefined>(undefined);

export const useCardContext = () => {
  const context = React.useContext(CardContextProvider);
  if (!context) {
    throw new Error('Card components must be used within a Card');
  }
  return context;
}; 