import { ExpoConfig } from '@expo/config';
import { UserConfig, generateConfig } from "@consensys/ds3-theme";

export default function (config: ExpoConfig, userConfig: UserConfig): ExpoConfig {
  const processedConfig = generateConfig({ ...userConfig, framework: 'expo' });
  
  return {
    ...config,
    extra: {
      ...(config.extra || {}),
      DS3: processedConfig,
    },
  };
}
