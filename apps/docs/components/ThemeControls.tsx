import { View, Text, Platform, useWindowDimensions } from 'react-native';
import { ThemeToggle, ThemeSwitcher } from '@consensys/ds3';

export function ThemeControls() {
  const { width } = useWindowDimensions();
  const isWeb = Platform.OS === 'web';
  const isLargeScreen = width > 640;
  
  return (
    <View className="flex-row gap-4 mr-4 items-center px-3 py-2">
      <View className="flex-row items-center gap-2">
        {isWeb && isLargeScreen && (
          <Text className="text-xs text-neutral-10">Mode:</Text>
        )}
        <ThemeToggle />
      </View>
      <View className="flex-row items-center gap-2">
        {isWeb && isLargeScreen && (
          <Text className="text-xs text-neutral-10">Theme:</Text>
        )}
        <ThemeSwitcher />
      </View>
    </View>
  );
} 