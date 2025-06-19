import * as React from 'react';
import { useTheme } from './useTheme';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../Select';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Platform } from 'react-native';
import type { ThemeSwitcherProps } from './types';
import _ from 'lodash';
import { Text } from '../text';

const ThemeIndicator = ({ themeKey }: { themeKey: string }) => {
  const { config, currentMode } = useTheme();
  const currentTheme = config?.themes[themeKey];
  const colors = currentTheme?.colors[currentMode];

  return (
    <div className="flex flex-row items-center gap-2">
      <div 
        className="w-4 h-4 rounded-full"
        style={{ backgroundColor: colors?.primary['9'] }}
      />
      <Text>{_.lowerCase(themeKey)}</Text>
    </div>
  );
};

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const triggerRef = React.useRef<React.ElementRef<typeof SelectTrigger>>(null);
  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: Platform.select({ ios: insets.bottom, android: insets.bottom + 24 }),
    left: 12,
    right: 12,
  };

  const { theme, setTheme, config } = useTheme();
  const themes = config?.themes;
  const themeKeys = themes ? Object.keys(themes) : [];

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
          {themeKeys.map((key) => (
            // @ts-ignore
            <SelectItem label={<ThemeIndicator themeKey={key} />} value={key} key={key} />
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

ThemeSwitcher.displayName = 'ThemeSwitcher';
