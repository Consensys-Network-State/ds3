import { hairlineWidth } from "nativewind/theme";
// @ts-ignore
import nativeWindPreset from 'nativewind/preset';
import tailwindConfig from './tailwind.config';
import tailwindcssAnimate from 'tailwindcss-animate';
import { Config as TailwindConfig } from 'tailwindcss';
import { Config } from "./types";

const nativewindConfig = (config: Config): TailwindConfig => ({
  content: [],
  presets: [
    tailwindcssAnimate,
    nativeWindPreset,
    tailwindConfig(config)
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

export default nativewindConfig;