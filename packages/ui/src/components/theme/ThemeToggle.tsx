import * as React from 'react';
import { View } from 'react-native';
import { COLOR_MODES } from "@consensys/ds3-theme";
import { MoonStar, Sun, SunMoon } from "lucide-react-native";
import { Button } from "../button";
import { useTheme } from './useTheme';
import type { ThemeToggleProps } from './types';

export const ThemeToggle = React.forwardRef<View, ThemeToggleProps>(
  ({ className }, ref) => {
    const { mode, setMode } = useTheme();

    const cycleMode = () => {
      switch (mode) {
        case COLOR_MODES.Light:
          setMode(COLOR_MODES.Dark);
          break;
        case COLOR_MODES.Dark:
          setMode(COLOR_MODES.System);
          break;
        default:
          setMode(COLOR_MODES.Light);
      }
    };

    const getIcon = () => {
      switch (mode) {
        case COLOR_MODES.Dark:
          return MoonStar;
        case COLOR_MODES.Light:
          return Sun;
        default:
          return SunMoon;
      }
    };

    return (
      <Button
        ref={ref}
        variant="ghost"
        onPress={cycleMode}
        className={className}
        square
      >
        <Button.Icon icon={getIcon()} />
      </Button>
    );
  }
);

ThemeToggle.displayName = 'ThemeToggle';
