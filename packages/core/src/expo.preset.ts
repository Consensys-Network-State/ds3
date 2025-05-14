import { ExpoConfig } from '@expo/config';
import { UserConfig } from "./types";
import { generateConfig } from "./utils";

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
