import * as React from 'react';
import { useThemeContext } from './context';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../Select';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Platform } from 'react-native';
import type { ThemeSwitcherProps } from './types';

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const triggerRef = React.useRef<React.ElementRef<typeof SelectTrigger>>(null);
  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: Platform.select({ ios: insets.bottom, android: insets.bottom + 24 }),
    left: 12,
    right: 12,
  };

  const { theme, setTheme, config } = useThemeContext();
  const themes = config.themes;
  const themeKeys = Object.keys(themes);

  return (
    <Select
      value={{ value: theme, label: theme }}
      onValueChange={(item) => setTheme(item?.value as string)}
    >
      <SelectTrigger ref={triggerRef} className={className}>
        <SelectValue
          className='text-foreground text-sm native:text-lg'
          placeholder='Select a theme'
        />
      </SelectTrigger>
      <SelectContent insets={contentInsets}>
        <SelectGroup>
          <SelectLabel>Themes</SelectLabel>
          {themeKeys.map((key) => (
            <SelectItem label={key} value={key} key={key}>
              {key}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

ThemeSwitcher.displayName = 'ThemeSwitcher';
