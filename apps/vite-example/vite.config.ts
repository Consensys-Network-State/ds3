import { defineConfig } from 'vite'
import ds3Plugin from '@ds3/config/vite';
import ds3Config from "./ds3.config";

export default defineConfig({
  plugins: [
    ds3Plugin(ds3Config),
  ],
});
