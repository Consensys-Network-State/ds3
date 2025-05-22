import { defineConfig } from 'vite'
import cui from '@consensys/ui-config/vite';
import themeConfig from "./theme.config";

export default defineConfig(({ command }) => {
  return {
    plugins: [
      cui(command, themeConfig),
    ],
  }
});
