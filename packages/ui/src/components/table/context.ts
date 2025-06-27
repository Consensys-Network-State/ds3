import * as React from 'react';
import type { TableContext } from './types';

export const TableContextProvider = React.createContext<TableContext | undefined>(undefined);

export const useTableContext = () => {
  const context = React.useContext(TableContextProvider);
  if (!context) {
    throw new Error('Table components must be used within a Table');
  }
  return context;
}; 