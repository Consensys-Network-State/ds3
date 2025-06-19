import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { useThemeColors } from '@consensys/ds3';
import { HapticTab } from '@/components/HapticTab';

interface ThemedTabsProps {
  children?: React.ReactNode;
}

export function ThemedTabs({ children }: ThemedTabsProps) {
  const colors = useThemeColors();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary11,
        tabBarInactiveTintColor: colors.neutral11,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: colors.primary1,
          borderTopColor: colors.neutral5,
          borderTopWidth: 1,
          ...Platform.select({
            ios: {
              position: 'absolute',
            },
            default: {},
          }),
        },
      }}>
      {children}
    </Tabs>
  );
}

// Expose the Tabs.Screen component
ThemedTabs.Screen = Tabs.Screen; 