import * as React from 'react';
import type { ThemeContextType } from './types';

export const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('Theme components must be used within a ThemeProvider');
  }
  return context;
}; 