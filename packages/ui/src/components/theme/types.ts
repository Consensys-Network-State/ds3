import type { View } from 'react-native';
import type { ColorMode, ThemeName, Config } from "@consensys/ds3-theme";

export interface ThemeProps {
  children?: React.ReactNode;
  theme?: ThemeName;
  mode?: ColorMode;
  className?: string;
}

export interface ThemeBaseProps extends ThemeProps {
  config: Config;
}

export type ThemeProviderProps = ThemeProps & {
  config: Config;
};

export type ThemeSwitcherProps = {
  className?: string;
};

export type ModeToggleProps = {
  className?: string;
}; 