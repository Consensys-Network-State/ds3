import React from "react";
import { useTheme } from "./useTheme";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../components/Select';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Platform } from 'react-native';

export const ThemeSwitcher: React.FC = () => {
  const triggerRef = React.useRef<React.ElementRef<typeof SelectTrigger>>(null);
  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: Platform.select({ ios: insets.bottom, android: insets.bottom + 24 }),
    left: 12,
    right: 12,
  };

  const { theme, setTheme, config } = useTheme();
  const themes = config.themes;
  const themeKeys = Object.keys(themes);

  return (
    <Select
      defaultValue={{ value: theme, label: theme }}
      onValueChange={(item) => setTheme(item?.value as string)}
    >
      <SelectTrigger ref={triggerRef} className='w-[250px]'>
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
}

export default ThemeSwitcher;
