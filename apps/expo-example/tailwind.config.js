import nativewindConfig from "@ds3/config/nativewind";
import ds3Config from "./ds3.config";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    './node_modules/@ds3/react/**/*.{js,jsx,ts,tsx}',
    '!node_modules/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [nativewindConfig(ds3Config)],
}
