import { Drawer } from 'expo-router/drawer';
import { View } from 'react-native';
import { ModeToggle, ThemeSwitcher, useThemeColors } from "@consensys/ds3";

export default function DrawerLayout() {
  const colors = useThemeColors();

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
        headerTintColor: colors.neutral12,
        headerTitleAlign: 'left',
        headerStyle: {
          backgroundColor: colors.neutral1,
          borderBottomColor: colors.neutral5,
          borderBottomWidth: 0.5,
        },
        headerRight: HeaderRight,
        drawerStyle: {
          backgroundColor: colors.neutral1,
        },
        drawerActiveTintColor: colors.primary11,
        drawerInactiveTintColor: colors.neutral11,
        drawerActiveBackgroundColor: colors.neutral3,
        drawerLabelStyle: {
          color: colors.neutral12,
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