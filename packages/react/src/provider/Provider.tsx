import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from "./ThemeProvider";
import React from "react";

interface ProviderProps {
  children: React.ReactNode;
}

export const Provider: React.FC<ProviderProps> = ({ children }) => (
  <SafeAreaProvider>
    <ThemeProvider>
      {children}
    </ThemeProvider>
  </SafeAreaProvider>
)

export default Provider