import * as React from 'react';
import { View } from 'react-native';
import { useThemeContext } from './context';
import { COLOR_MODES } from "@ds3/theme";
import { MoonStar, Sun } from "lucide-react-native";
import { IconButton } from "../button";
import type { ModeToggleProps } from './types';

export const ModeToggle = React.forwardRef<View, ModeToggleProps>(
  ({ className }, ref) => {
    const { mode, setMode } = useThemeContext();

    return (mode === COLOR_MODES.Dark ?
      <IconButton
        ref={ref}
        icon={MoonStar}
        variant="ghost"
        onPress={() => setMode(COLOR_MODES.Light)}
        className={className}
      /> :
      <IconButton
        ref={ref}
        icon={Sun}
        variant="ghost"
        onPress={() => setMode(COLOR_MODES.Dark)}
        className={className}
      />
    );
  }
);

ModeToggle.displayName = 'ModeToggle';
