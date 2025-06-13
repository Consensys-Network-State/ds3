import * as React from 'react';
import { DEFAULT_MODE, DEFAULT_THEME } from "@consensys/ds3-theme";
import { cn } from "../../utils";
import { useThemeContext } from "./context";
import type { ThemeBaseProps, ThemeProps } from "./types";

export const ThemeBase = React.forwardRef<HTMLDivElement, ThemeBaseProps>((props, ref) => {
  const {
    children,
    theme = DEFAULT_THEME,
    mode = DEFAULT_MODE,
    className
  } = props;

  const themeClassName = theme === DEFAULT_THEME ? '' : theme;

  return (
    <div ref={ref} className={cn(className, themeClassName, mode)}>
      {children}
    </div>
  );
});

ThemeBase.displayName = 'ThemeBase';

export const Theme = React.forwardRef<HTMLDivElement, ThemeProps>((props, ref) => {
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