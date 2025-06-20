import { PluginOption, transformWithEsbuild } from 'vite';
import reactNativeWeb from 'vite-plugin-react-native-web';
import react from '@vitejs/plugin-react';
import { UserConfig, generateConfig } from "@consensys/ds3-theme";

type FileExtension = '.js' | '.mjs' | '.tsx' | '.ts';
type LoaderType = 'jsx' | 'tsx' | 'ts';

const FILE_EXTENSIONS: FileExtension[] = ['.js', '.mjs', '.tsx', '.ts'];
const LOADER_MAP: Record<FileExtension, LoaderType> = {
  '.js': 'jsx',
  '.mjs': 'jsx',
  '.tsx': 'tsx',
  '.ts': 'ts',
};

function vitePlugin(userConfig: UserConfig): PluginOption[] {
  const config = generateConfig({ ...userConfig, framework: 'vite' });
  
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
        resolve: {
          alias: {
            // Polyfill Buffer for react-native-svg compatibility
            buffer: 'buffer/',
          },
        },
        optimizeDeps: {
          esbuildOptions: {
            loader: LOADER_MAP,
            jsxImportSource: 'nativewind',
          },
        },
      }),
      async transform(code: string, id: string) {
        if (FILE_EXTENSIONS.some(ext => id.endsWith(ext))) {
          const extension = FILE_EXTENSIONS.find(ext => id.endsWith(ext)) as FileExtension;
          return transformWithEsbuild(code, id, {
            loader: LOADER_MAP[extension],
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
