import { defineConfig } from 'vite'
import cui from '@consensys/ui-config/vite';
import themeConfig from "./theme.config";

export default defineConfig({
  plugins: [
    cui(themeConfig),
  ],
});
