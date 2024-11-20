import { View, Platform } from "react-native";
import { vars } from "nativewind";
import { config } from "@ds3/env";
import { ColorMode, ThemeName } from "@ds3/config";
import { DEFAULT_MODE, DEFAULT_THEME } from "@ds3/config";
import { cn } from "../utils/cn";
import { useMemo } from "react";
import useTheme from "../hooks/useTheme";

export interface ThemeProps {
  children?: React.ReactNode;
  theme?: ThemeName;
  mode?: ColorMode,
  className?: string;
  useClass?: boolean
}

export const ThemeBase: React.FC<ThemeProps> = (props) => {
  const {
    children,
    theme = DEFAULT_THEME,
    mode = DEFAULT_MODE ,
    className,
    useClass = Platform.OS === "web" ? true : false
  } = props;

  const themeClassName = theme === DEFAULT_THEME ? '' : theme;

  const colorVars = useMemo(() => !useClass ?
    config.getThemeCssVars!(theme, mode) : {}, [theme, mode, useClass]
  );

  return (useClass ?
    <View className={cn(className, themeClassName, mode)}>
      {children}
    </View> :
    <View style={vars(colorVars)} className={className}>
      {children}
    </View>
  );
}

export const Theme: React.FC<ThemeProps> = (props) => {
  const { mode, theme } = useTheme();

  return (
    <ThemeBase mode={mode as ColorMode} theme={theme} {...props} />
  );
}

export default Theme;
