import * as React from 'react';
import { View, Text, Platform, useWindowDimensions } from 'react-native';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  Button
} from '@consensys/ds3';
import { Settings } from 'lucide-react-native';
import { ThemeToggle, ThemeSwitcher } from '@consensys/ds3';

export function ThemeControls() {
  const { width } = useWindowDimensions();
  
  const isWeb = Platform.OS === 'web';
  const isLargeScreen = React.useMemo(() => width > 640, [width]);
  
  return (
    <View className="flex-row gap-4 mr-4 items-center px-3 py-2">
      {isWeb && isLargeScreen ? (
        // Desktop: Show original layout
        <>
          <View className="flex-row items-center gap-2">
            <Text className="text-xs text-neutral-10">Mode:</Text>
            <ThemeToggle />
          </View>
          <View className="flex-row items-center gap-2">
            <Text className="text-xs text-neutral-10">Theme:</Text>
            <ThemeSwitcher />
          </View>
        </>
      ) : (
        // Mobile/Tablet: Show dropdown menu
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="md"
              className="h-9 w-9"
              square
            >
              <Button.Icon icon={Settings} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-56"
          >
            <DropdownMenuLabel>Theme Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <View className="flex-row items-center justify-between w-full">
                <Text className="text-sm">Color Mode</Text>
                <ThemeToggle />
              </View>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <View className="flex-row items-center justify-between w-full">
                <Text className="text-sm">Theme</Text>
                <ThemeSwitcher />
              </View>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </View>
  );
} 