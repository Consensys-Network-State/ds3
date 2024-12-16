import { hairlineWidth } from "nativewind/theme";
// @ts-ignore
import nativeWindPreset from 'nativewind/preset';
import ds3TailwindPreset from './tailwind.preset';
import { Config as TailwindConfig } from 'tailwindcss';
import { Config } from "./types";

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

export default ds3Preset;