import { hairlineWidth } from "nativewind/theme";
// @ts-ignore
import nativeWindPreset from 'nativewind/preset';
import { tailwindPreset, UserConfig } from '@consensys/ui-theme';
import { Config as TailwindConfig } from 'tailwindcss';

const ds3Preset = (userConfig: UserConfig): TailwindConfig => ({
  content: [],
  presets: [
    nativeWindPreset,
    tailwindPreset(userConfig)
  ],
  plugins: [],
  theme: {
    extend: {
      borderWidth: {
        hairline: hairlineWidth(),
      },
    },
  },
});

export default ds3Preset;