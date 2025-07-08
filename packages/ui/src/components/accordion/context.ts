import * as React from 'react';
import type { AccordionContext as AccordionContextType } from './types';

export const AccordionContextProvider = React.createContext<AccordionContextType | undefined>(undefined);

export const useAccordionContext = () => {
  const context = React.useContext(AccordionContextProvider);
  if (!context) {
    throw new Error('Accordion components must be used within an Accordion');
  }
  return context;
}; 