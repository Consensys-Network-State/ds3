import { createContext, useContext } from 'react';
import type { AccountContextValue } from './types';

export const AccountContext = createContext<AccountContextValue | undefined>(undefined);
 
export const useAccountContext = () => {
  const context = useContext(AccountContext);
  if (!context) throw new Error('useAccountContext must be used within AccountProvider');
  return context;
}; 