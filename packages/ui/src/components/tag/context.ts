import * as React from 'react';
import type { TagContext } from './types';

export const TagContextProvider = React.createContext<TagContext | undefined>(undefined);

export const useTagContext = () => {
  const context = React.useContext(TagContextProvider);
  if (!context) {
    throw new Error('Tag components must be used within a Tag');
  }
  return context;
}; 