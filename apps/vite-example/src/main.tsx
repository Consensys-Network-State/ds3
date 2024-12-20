import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ThemeProvider } from "@ds3/react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SafeAreaProvider>
      <ThemeProvider config={import.meta.env.DS3}>
        <App />
      </ThemeProvider>
    </SafeAreaProvider>
  </StrictMode>,
)