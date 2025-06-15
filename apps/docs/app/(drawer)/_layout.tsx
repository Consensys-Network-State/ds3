import { Drawer } from 'expo-router/drawer';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { View } from 'react-native';
import { ModeToggle, ThemeSwitcher } from "@consensys/ds3";

export default function DrawerLayout() {
  const colorScheme = useColorScheme();

  const HeaderRight = () => (
    <View className="flex-row items-center gap-2 mr-4">
      <ModeToggle />
      <ThemeSwitcher />
    </View>
  );

  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        headerTintColor: Colors[colorScheme ?? 'light'].tint,
        headerTitleAlign: 'left',
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
          borderBottomColor: colorScheme === 'dark' ? '#2A2B2C' : '#E6E6E6',
          borderBottomWidth: 0.5,
        },
        headerRight: HeaderRight,
        drawerStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
        },
        drawerActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        drawerInactiveTintColor: Colors[colorScheme ?? 'light'].text,
        drawerActiveBackgroundColor: colorScheme === 'dark' ? '#2A2B2C' : '#F5F5F5',
        drawerLabelStyle: {
          color: Colors[colorScheme ?? 'light'].text,
        },
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