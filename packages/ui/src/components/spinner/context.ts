import * as React from 'react';
import type { SpinnerContext as SpinnerContextType } from './types';

export const SpinnerContextProvider = React.createContext<SpinnerContextType | undefined>(undefined);

export const useSpinnerContext = () => {
  const context = React.useContext(SpinnerContextProvider);
  if (!context) {
    throw new Error('Spinner components must be used within a Spinner');
  }
  return context;
}; 