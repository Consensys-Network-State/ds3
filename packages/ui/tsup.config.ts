import { defineConfig, Options } from 'tsup';

// Note: We intentionally don't build these packages to allow downstream apps (vite, expo)
// to handle the builds directly, providing better development experience and build optimizations
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
    options.jsx = 'preserve';
    // WARNING: This resolveExtensions configuration can be problematic for Expo Native
    // as it may load web files instead of using the filesystem to determine the correct platform-specific file
    options.resolveExtensions = ['.web.tsx', '.web.ts', '.tsx', '.ts'];
  },
}));