import { PluginOption, transformWithEsbuild } from 'vite';
import reactNativeWeb from 'vite-plugin-react-native-web';
import react from '@vitejs/plugin-react';
import { UserConfig, generateConfig } from "@consensys/ui-theme";

function vitePlugin(command: 'serve' | 'build', userConfig: UserConfig): PluginOption[] {
  const config = generateConfig(userConfig);
  
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
      name: 'vite-plugin-cui',
      config: () => ({
        define: {
          'import.meta.env.CUI': JSON.stringify(config),
        },
        optimizeDeps: {
          include: ['@consensys/ui'],
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
