import cui from "@consensys/ui-config/nativewind";
import themeConfig from "./theme.config";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@consensys/ui/src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [cui(themeConfig)]
}