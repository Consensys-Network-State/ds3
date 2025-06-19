import { Drawer } from 'expo-router/drawer';
import { View } from 'react-native';
import { ThemeToggle, ThemeSwitcher, useThemeColors, Button, openLink } from "@consensys/ds3";
import { Github } from 'lucide-react-native';

export default function DrawerLayout() {
  const colors = useThemeColors();

  const HeaderRight = () => (
    <View className="flex-row items-center gap-2 mr-4">
      <ThemeToggle />
      <ThemeSwitcher />
    </View>
  );

  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        headerTintColor: colors.neutral12,
        headerTitleAlign: 'left',
        headerStyle: {
          backgroundColor: colors.neutral1,
          borderBottomColor: colors.neutral5,
          borderBottomWidth: 1,
        },
        headerRight: HeaderRight,
        drawerStyle: {
          backgroundColor: colors.neutral1,
        },
        drawerActiveTintColor: colors.primary11,
        drawerInactiveTintColor: colors.neutral11,
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          headerShown: true,
          title: "Home",
          drawerLabel: "Home"
        }}
      />

      <Drawer.Screen name="tokens" options={{ title: 'Tokens' }} />
      <Drawer.Screen name="typography" options={{ title: 'Typography' }} />
      <Drawer.Screen name="buttons" options={{ title: 'Buttons' }} />
      <Drawer.Screen name="inputs" options={{ title: 'Inputs' }} />
      <Drawer.Screen name="checkbox" options={{ title: 'Checkbox' }} />
      <Drawer.Screen name="switch" options={{ title: 'Switch' }} />
      <Drawer.Screen name="field" options={{ title: 'Fields' }} />
      <Drawer.Screen name="form" options={{ title: 'Form' }} />
      <Drawer.Screen name="icons" options={{ title: 'Icons' }} />
      <Drawer.Screen name="spinner" options={{ title: 'Spinner' }} />
    </Drawer>
  );
}