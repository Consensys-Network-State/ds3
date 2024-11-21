import { withNativeWind } from 'nativewind/metro';
import { MetroConfig } from 'expo/metro-config';
import path from 'path';

export function withDs3(config: MetroConfig, options: { input?: string } = {}): MetroConfig {
  const nativeWindOptions = {
    input: options.input || './global.css',
  };

  // Apply withNativeWind to the config
  // @ts-ignore
  return withNativeWind(config, nativeWindOptions);
}

export function withDs3Workspace(
  config: MetroConfig,
  options: { input?: string, projectRoot?: string } = {}
): MetroConfig {
  const projectRoot = options.projectRoot || __dirname;
  const monorepoRoot = path.resolve(projectRoot, '../..');
  // @ts-ignore
  config.watchFolders = [monorepoRoot];
  // @ts-ignore
  config.resolver.nodeModulesPaths = [
    path.resolve(projectRoot, 'node_modules'),
    path.resolve(monorepoRoot, 'node_modules'),
  ];

  return withDs3(config, { input: options.input });
}


