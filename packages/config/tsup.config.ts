import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/vite.plugin.ts',
    'src/tailwind.preset.ts',
    'src/nativewind.preset.ts',
    'src/babel.preset.ts',
    'src/expo.preset.ts',
    'src/metro.config.ts',
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
