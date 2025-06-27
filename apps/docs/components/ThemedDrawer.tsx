import { Drawer } from 'expo-router/drawer';
import { useThemeColors } from '@consensys/ds3';
import { Platform } from 'react-native';
import { ThemeControls } from './ThemeControls';

interface ThemedDrawerProps {
  children?: React.ReactNode;
}

export function ThemedDrawer({ children }: ThemedDrawerProps) {
  const colors = useThemeColors();

  return (
    <Drawer
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary1,
          borderBottomWidth: 0,
          ...(Platform.OS === 'ios' && { height: 80 }),
        },
        headerTintColor: colors.neutral12,
        headerTitleAlign: 'left',
        drawerStyle: {
          backgroundColor: colors.primary1,
        },
        drawerActiveTintColor: colors.primary11,
        drawerInactiveTintColor: colors.neutral11,
        headerRight: () => <ThemeControls />,
      }}>
      {children}
    </Drawer>
  );
}

// Expose the Drawer.Screen component
ThemedDrawer.Screen = Drawer.Screen; 