import type { View } from 'react-native';
import type { ColorMode, ThemeName, Config } from "@consensys/ds3-theme";

export interface ThemeProps {
  children?: React.ReactNode;
  theme?: ThemeName;
  mode?: ColorMode;
  className?: string;
  useClass?: boolean;
}

export interface ThemeBaseProps extends ThemeProps {
  config: Config;
}

export type ThemeContextType = {
  theme: ThemeName;
  mode: ColorMode;
  setTheme: (theme: ThemeName) => void;
  setMode: (mode: ColorMode) => void;
  config: Config;
  containerRef: React.RefObject<View>;
};

export type ThemeProviderProps = ThemeProps & {
  config: Config;
};

export type ThemeSwitcherProps = {
  className?: string;
};

export type ModeToggleProps = {
  className?: string;
}; 