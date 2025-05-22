import { defineConfig } from 'vite'
import ds3Plugin from '@consensys/ui-config/vite';
import ds3Config from "./ds3.config";

export default defineConfig(({ command }) => {
  return {
    plugins: [
      ds3Plugin(command, ds3Config),
    ],
  }
});
