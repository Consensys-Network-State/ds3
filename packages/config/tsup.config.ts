import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/vite.config.ts',
    'src/tailwind.config.ts',
    'src/nativewind.config.ts',
    'src/config.ts'
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
