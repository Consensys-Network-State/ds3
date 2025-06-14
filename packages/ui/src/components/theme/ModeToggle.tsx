import * as React from 'react';
import { View } from 'react-native';
import { useThemeContext } from './context';
import { COLOR_MODES } from "@consensys/ds3-theme";
import { MoonStar, Sun, SunMoon } from "lucide-react-native";
import { IconButton } from "../button";
import type { ModeToggleProps } from './types';

export const ModeToggle = React.forwardRef<View, ModeToggleProps>(
  ({ className }, ref) => {
    const { selectedMode, setMode } = useThemeContext();

    const cycleMode = () => {
      switch (selectedMode) {
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
      switch (selectedMode) {
        case COLOR_MODES.Dark:
          return MoonStar;
        case COLOR_MODES.Light:
          return Sun;
        default:
          return SunMoon;
      }
    };

    return (
      <IconButton
        ref={ref}
        icon={getIcon()}
        variant="ghost"
        onPress={cycleMode}
        className={className}
      />
    );
  }
);

ModeToggle.displayName = 'ModeToggle';
