import { PluginOption, transformWithEsbuild } from 'vite';
import reactNativeWeb from 'vite-plugin-react-native-web';
import react from '@vitejs/plugin-react';
import { Config } from "./types";

function vitePlugin(command: 'serve' | 'build', config: Config): PluginOption[] {
  return [
    react({
      babel: {
        presets: ['nativewind/babel'],
      },
    }),
    // @ts-ignore
    reactNativeWeb(),
    {
      enforce: 'pre',
      name: 'vite-plugin-ds3',
      config: () => ({
        define: {
          'import.meta.env.DS3': JSON.stringify(config),
        },
        optimizeDeps: {
          include: ['@ds3/react'],
          esbuildOptions: {
            loader: {
              '.js': 'tsx',
              '.mjs': 'jsx',
            },
            jsxImportSource: 'nativewind',
          },
        },
      }),
      async transform(code: string, id: string) {
        if (command === 'build' && (id.endsWith('.js') || id.endsWith('.mjs'))) {
          return transformWithEsbuild(code, id, {
            loader: 'jsx',
            jsx: 'automatic',
            jsxImportSource: 'nativewind',
          });
        }
        return null;
      },
    },
  ];
}

export default vitePlugin;
