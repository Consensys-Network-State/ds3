import { defineConfig, Options } from 'tsup';

export default defineConfig((options: Options) => ({
  entry: [
    'src/index.ts',
  ],
  banner: {
    js: "'use client'",
  },
  clean: true,
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  splitting: false,
  ...options,
  esbuildOptions(options) {
    options.jsx = 'automatic';
    options.jsxImportSource = 'react';
    options.resolveExtensions = ['.web.tsx', '.web.ts', '.tsx', '.ts'];
  },
})); 