import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/index.ts'
  ],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  splitting: true,
  external: [
    'tailwindcss-animate',
  ],
  clean: true,
});
