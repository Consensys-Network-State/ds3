import type { NextConfig } from 'next';
import type { Configuration } from 'webpack';
import type { Config } from '@consensys/ds3-theme';
import { generateConfig } from '@consensys/ds3-theme';

declare global {
  var DS3: Config;
}

type WebpackConfigContext = {
  webpack: typeof import('webpack');
  buildId: string;
  dev: boolean;
  isServer: boolean;
  defaultLoaders: {
    babel: any;
  };
  dir: string;
  config: any;
  totalPages: number;
};

/**
 * Enhances Next.js configuration with DS3 specific settings
 * @param nextConfig - The base Next.js configuration
 * @param themeConfig - Optional DS3 theme configuration
 * @returns Enhanced Next.js configuration
 */
export function withDs3(
  nextConfig: NextConfig = {},
  themeConfig: Record<string, unknown> = {}
): NextConfig {
  const generatedConfig = generateConfig({ ...themeConfig, framework: 'nextjs' });

  return {
    ...nextConfig,
    reactStrictMode: true,
    swcMinify: true,
    transpilePackages: [
      'react-native',
      'react-native-web',
      'expo',
      'nativewind',
      'react-native-css-interop',
      'react-native-reanimated',
      '@consensys/ds3',
      '@consensys/ds3-config',
      '@consensys/ds3-theme',
      ...(nextConfig.transpilePackages ?? []),
    ],

    experimental: {
      forceSwcTransforms: true,
    },

    webpack(config: Configuration, options: WebpackConfigContext) {
      // Mix in aliases
      if (!config.resolve) {
        config.resolve = {};
      }

      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        // Alias direct react-native imports to react-native-web
        'react-native$': 'react-native-web',
        // Alias internal react-native modules to react-native-web
        'react-native/Libraries/EventEmitter/RCTDeviceEventEmitter$':
          'react-native-web/dist/vendor/react-native/NativeEventEmitter/RCTDeviceEventEmitter',
        'react-native/Libraries/vendor/emitter/EventEmitter$':
          'react-native-web/dist/vendor/react-native/emitter/EventEmitter',
        'react-native/Libraries/EventEmitter/NativeEventEmitter$':
          'react-native-web/dist/vendor/react-native/NativeEventEmitter',
      };

      config.resolve.extensions = [
        '.web.js',
        '.web.jsx',
        '.web.ts',
        '.web.tsx',
        ...(config.resolve?.extensions ?? []),
      ];

      if (!config.plugins) {
        config.plugins = [];
      }

      // Expose __DEV__ from Metro.
      config.plugins.push(
        new options.webpack.DefinePlugin({
          __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
          // Inject the DS3 theme config as a global variable
          'global.DS3': JSON.stringify(generatedConfig),
        })
      );

      // Handle ESM modules with export *
      config.module = config.module || {};
      config.module.rules = config.module.rules || [];
      config.module.rules.push({
        test: /\.mjs$/,
        include: /@rn-primitives/,
        type: 'javascript/auto',
      });

      // Execute the user-defined webpack config.
      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  };
}
