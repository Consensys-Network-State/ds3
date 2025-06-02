import * as React from 'react';
import type { InputContext as InputContextType } from './types';

export const InputContextProvider = React.createContext<InputContextType | undefined>(undefined);

export const useInputContext = () => {
  const context = React.useContext(InputContextProvider);
  if (!context) {
    throw new Error('Input components must be used within an Input');
  }
  return context;
}; 