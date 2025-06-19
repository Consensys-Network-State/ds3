import * as React from 'react';
import { View } from 'react-native';
import { PortalHost } from '@rn-primitives/portal';
import type { ThemeProviderProps } from './types';
import { useTheme } from './useTheme';
import { Theme } from './Theme';
import { cn } from '../../utils';

export const ThemeProvider = React.forwardRef<View, ThemeProviderProps>(
  ({ children, config, className, ...otherProps }, ref) => {
    const { setConfig } = useTheme();

    React.useEffect(() => {
      if (config) {
        setConfig(config);
      }
    }, [config]);

    return (
      <Theme
        ref={ref}
        className={cn('flex-1', className)}
        {...otherProps}
      >
        {children}
        <PortalHost />
      </Theme>
    );
  }
);

ThemeProvider.displayName = 'ThemeProvider'; 