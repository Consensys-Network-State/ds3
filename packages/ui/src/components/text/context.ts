import * as React from 'react';
import type { TextProps } from './types';

export const TextContextProvider = React.createContext<Partial<TextProps> | undefined>(undefined);

export const useTextContent = () => {
  const context = React.useContext(TextContextProvider);
  return context;
}; 