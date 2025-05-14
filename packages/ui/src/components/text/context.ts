import * as React from 'react';

export const TextClassContext = React.createContext<string | undefined>(undefined);
 
// todo: consistent naming
export const useTextClass = () => {
  const context = React.useContext(TextClassContext);
  return context;
}; 