import { hairlineWidth } from "nativewind/theme";
// @ts-ignore
import nativeWindPreset from 'nativewind/preset';
import ds3TailwindPreset from './tailwind.preset';
import tailwindcssAnimate from 'tailwindcss-animate';
import { Config as TailwindConfig } from 'tailwindcss';
import { Config } from "./types";

const ds3Preset = (config: Config): TailwindConfig => ({
  content: [],
  presets: [
    nativeWindPreset,
    ds3TailwindPreset(config)
  ],
  plugins: [tailwindcssAnimate],
  theme: {
    extend: {
      borderWidth: {
        hairline: hairlineWidth(),
      },
    },
  },
});

export default ds3Preset;