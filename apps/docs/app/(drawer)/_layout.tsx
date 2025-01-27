import { Drawer } from 'expo-router/drawer';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { View } from 'react-native';
import { ModeToggle, ThemeSwitcher } from "@ds3/react/src";

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
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
        },
        headerRight: HeaderRight
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
      <Drawer.Screen name="form" options={{ title: 'Form' }} />
      <Drawer.Screen name="field" options={{ title: 'Fields' }} />
    </Drawer>
  );
}