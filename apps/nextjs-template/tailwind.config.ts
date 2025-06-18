import ds3 from "@consensys/ds3-config/nativewind";
import themeConfig from "./theme.config";

const config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@consensys/ds3/src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [ds3(themeConfig)],
};
export default config;
