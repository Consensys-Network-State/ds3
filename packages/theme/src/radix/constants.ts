import type { RadixColors } from "./types"; 

export const RADIX_COLORS: RadixColors = {
  gray: "#8d8d8d",
  mauve: "#8e8c99",
  slate: "#8b8d98",
  sage: "#868e8b",
  olive: "#898e87",
  sand: "#8d8d86",
  tomato: "#e54d2e",
  red: "#e5484d",
  ruby: "#e54666",
  crimson: "#e93d82",
  pink: "#d6409f",
  plum: "#ab4aba",
  purple: "#8e4ec6",
  violet: "#6e56cf",
  iris: "#5b5bd6",
  indigo: "#3e63dd",
  blue: "#0090ff",
  cyan: "#00a2c7",
  teal: "#12a594",
  jade: "#29a383",
  green: "#30a46c",
  grass: "#46a758",
  brown: "#ad7f58",
  bronze: "#a18072",
  gold: "#978365",
  sky: "#7ce2fe",
  mint: "#86ead4",
  lime: "#bdee63",
  yellow: "#ffe629",
  amber: "#ffc53d",
  orange: "#f76b15"
} as const;

export const RADIX_GENERATOR_DEFAULTS = {
  gray: RADIX_COLORS.gray,
  background: {
    light: '#FFFFFF',
    dark: '#111111'
  }
} as const;
