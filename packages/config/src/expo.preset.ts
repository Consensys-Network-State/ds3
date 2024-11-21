import { ExpoConfig } from '@expo/config';
import { Config } from "./types";

export default function ({ config, ds3Config }: { config: ExpoConfig, ds3Config: Config }): ExpoConfig {
  return {
    ...config,
    extra: {
      ...(config.extra || {}),
      DS3: ds3Config,
    },
  };
}
