import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ThemeProvider } from "@consensys/ui";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SafeAreaProvider>
      <ThemeProvider config={import.meta.env.CUI}>
        <App />
      </ThemeProvider>
    </SafeAreaProvider>
  </StrictMode>,
)