import { ExpoConfig } from '@expo/config';
import { UserConfig, generateConfig } from "@consensys/ui-theme";

export default function (config: ExpoConfig, userConfig: UserConfig): ExpoConfig {
  const processedConfig = generateConfig(userConfig);
  
  return {
    ...config,
    extra: {
      ...(config.extra || {}),
      CUI: processedConfig,
    },
  };
}
