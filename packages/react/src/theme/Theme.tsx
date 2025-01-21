import { View, Platform } from "react-native";
import { vars } from "nativewind";
import type { ColorMode, ThemeName, Config } from "@ds3/config";
import { DEFAULT_MODE, DEFAULT_THEME, generateThemeCssVars, generateShadowCssVars } from "@ds3/config";
import { cn } from "../utils";
import { useMemo } from "react";
import useTheme from "./useTheme";

export interface ThemeBaseProps extends ThemeProps {
  config: Config;
}

export const ThemeBase: React.FC<ThemeBaseProps> = (props) => {
  const {
    children,
    theme = DEFAULT_THEME,
    mode = DEFAULT_MODE,
    className,
    useClass = Platform.OS === "web",
    config,
  } = props;

  const themeClassName = theme === DEFAULT_THEME ? '' : theme;

  const themeVars = useMemo(() => {
    if (useClass) return {};

    const currentTheme = config.themes[theme];
    const variables = {
      ...generateThemeCssVars(currentTheme.colors[mode])
    };

    // Add shadow variables if they exist
    if (currentTheme.boxShadow) {
      Object.assign(variables, generateShadowCssVars(currentTheme.boxShadow[mode]));
    }

    return variables;
  }, [theme, mode, useClass, config]);

  return (useClass ?
      <View className={cn(className, themeClassName, mode)}>
        {children}
      </View> :
      <View style={vars(themeVars)} className={className}>
        {children}
      </View>
  );
}

export interface ThemeProps {
  children?: React.ReactNode;
  theme?: ThemeName;
  mode?: ColorMode,
  className?: string;
  useClass?: boolean
}

export const Theme: React.FC<ThemeProps> = (props) => {
  const { mode, theme, config } = useTheme();

  return (
    <ThemeBase
      mode={mode as ColorMode}
      theme={theme}
      config={config}
      {...props}
    />
  );
}

export default Theme;