import ds3Preset from "@consensys/ui-config/nativewind";
import ds3Config from "./ds3.config";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    './node_modules/@consensys/ui/**/*.{js,jsx,ts,tsx}',
    '!node_modules/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [ds3Preset(ds3Config)],
}
