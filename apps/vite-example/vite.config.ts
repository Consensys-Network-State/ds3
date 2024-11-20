import { defineConfig } from 'vite'
import vitePlugin from '@ds3/config/vite';
import ds3Config from "./ds3.config";

export default defineConfig(({ command }) => {
  return {
    plugins: [
      vitePlugin(command, ds3Config),
    ],
  }
});
