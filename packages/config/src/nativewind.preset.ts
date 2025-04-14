import { hairlineWidth } from "nativewind/theme";
// @ts-ignore
import nativeWindPreset from 'nativewind/preset';
import ds3TailwindPreset, { ds3Preset2 as ds3TailwindPreset2 } from './tailwind.preset';
import { Config as TailwindConfig } from 'tailwindcss';
import {Config, UserConfig} from "./types";

const ds3Preset = (config: Config): TailwindConfig => ({
  content: [],
  presets: [
    nativeWindPreset,
    ds3TailwindPreset(config)
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

export const ds3Preset2 = (userConfig: UserConfig): TailwindConfig => ({
  content: [],
  presets: [
    nativeWindPreset,
    ds3TailwindPreset2(userConfig)
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