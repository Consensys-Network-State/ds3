import { ExpoConfig } from '@expo/config';
import { UserConfig, generateConfig } from "@ds3/theme";

export default function ({ config, ds3Config }: { config: ExpoConfig, ds3Config: UserConfig }): ExpoConfig {
  const processedConfig = generateConfig(ds3Config);
  
  return {
    ...config,
    extra: {
      ...(config.extra || {}),
      DS3: processedConfig,
    },
  };
}
