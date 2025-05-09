import * as React from 'react';
import type { CheckboxContextValue } from './types';

export const CheckboxContext = React.createContext<CheckboxContextValue | null>(null);

export const useCheckboxContext = () => {
  const context = React.useContext(CheckboxContext);
  if (!context) {
    throw new Error('Checkbox components must be used within a Checkbox.Root');
  }
  return context;
}; 