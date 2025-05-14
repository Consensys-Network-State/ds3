import * as React from 'react';
import { View, Platform } from "react-native";
import { vars } from "nativewind";
import { DEFAULT_MODE, DEFAULT_THEME, generateThemeCssVars, generateShadowCssVars } from "@ds3/config";
import { cn } from "../../utils";
import { useThemeContext } from "./context";
import type { ThemeBaseProps, ThemeProps } from "./types";

export const ThemeBase = React.forwardRef<View, ThemeBaseProps>((props, ref) => {
  const {
    children,
    theme = DEFAULT_THEME,
    mode = DEFAULT_MODE,
    className,
    useClass = Platform.OS === "web",
    config,
  } = props;

  const themeClassName = theme === DEFAULT_THEME ? '' : theme;

  const themeVars = React.useMemo(() => {
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
      <View ref={ref} className={cn(className, themeClassName, mode)}>
        {children}
      </View> :
      <View ref={ref} style={vars(themeVars)} className={className}>
        {children}
      </View>
  );
});

ThemeBase.displayName = 'ThemeBase';

export const Theme = React.forwardRef<View, ThemeProps>((props, ref) => {
  const { mode, theme, config } = useThemeContext();

  return (
    <ThemeBase
      ref={ref}
      mode={mode}
      theme={theme}
      config={config}
      {...props}
    />
  );
});

Theme.displayName = 'Theme';

export default Theme;