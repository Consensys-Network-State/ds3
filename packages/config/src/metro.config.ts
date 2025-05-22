import { withNativeWind } from 'nativewind/metro';
import { MetroConfig } from '@expo/metro-config';
import path from 'path';

export function withCui(config: MetroConfig, options: { input?: string } = {}): MetroConfig {
  const nativeWindOptions = {
    input: options.input || './global.css',
  };

  // Apply withNativeWind to the config
  // @ts-ignore
  return withNativeWind(config, nativeWindOptions);
}

export function withCuiWorkspace(
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

  return withCui(config, { input: options.input });
}


