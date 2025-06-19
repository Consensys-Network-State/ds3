import * as React from 'react';
import { View } from 'react-native';
import { PortalHost } from '@rn-primitives/portal';
import type { ThemeProviderProps } from './types';
import { useTheme } from './useTheme';
import { ThemeBase } from './Theme';
import { cn } from '../../utils';

export const ThemeProvider = React.forwardRef<View, ThemeProviderProps>(
  ({ children, config, className, ...otherProps }, ref) => {
    const { currentMode, theme } = useTheme(config);

    return (
      <ThemeBase
        ref={ref}
        config={config}
        theme={theme}
        mode={currentMode}
        className={cn('flex-1', className)}
        {...otherProps}
      >
        {children}
        <PortalHost />
      </ThemeBase>
    );
  }
);

ThemeProvider.displayName = 'ThemeProvider'; 