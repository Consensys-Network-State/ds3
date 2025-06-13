import * as React from 'react';
import { View } from 'react-native';
import { vars } from 'nativewind';
import { DEFAULT_MODE, DEFAULT_THEME, generateThemeCssVars, generateShadowCssVars, COLOR_MODES } from '@consensys/ds3-theme';
import { useThemeContext } from './context';
import type { ThemeBaseProps, ThemeProps } from './types';

export const ThemeBase = React.forwardRef<View, ThemeBaseProps>((props, ref): React.ReactElement => {
  const {
    children,
    theme = DEFAULT_THEME,
    mode = DEFAULT_MODE,
    className,
    config,
  } = props;

  const effectiveMode = mode === COLOR_MODES.System ? COLOR_MODES.Light : mode;

  const themeVars = React.useMemo(() => {
    const currentTheme = config.themes[theme];
    const variables = {
      ...generateThemeCssVars(currentTheme.colors[effectiveMode])
    };

    // Add shadow variables if they exist
    if (currentTheme.boxShadow) {
      Object.assign(variables, generateShadowCssVars(currentTheme.boxShadow[effectiveMode]));
    }

    return variables;
  }, [theme, effectiveMode, config]);

  return (
    <View ref={ref} style={vars(themeVars)} className={className}>
      {children}
    </View>
  );
});

ThemeBase.displayName = 'ThemeBase';

export const Theme = React.forwardRef<View, ThemeProps>((props, ref): React.ReactElement => {
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