import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { ThemeProvider } from "@consensys/ds3";
import ExpoConstants from 'expo-constants';
import { ThemedDrawer } from '@/components/ThemedDrawer';
import { MarkdownProvider } from '@/components/MarkdownProvider';
import 'react-native-reanimated';
import "../global.css";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider className="flex-1" config={ExpoConstants?.expoConfig?.extra?.DS3}>
      <MarkdownProvider>
        <ThemedDrawer>
          <ThemedDrawer.Screen
            name="index"
            options={{
              title: 'Home',
              headerShown: true,
            }}
          />
          <ThemedDrawer.Screen name="tokens" options={{ title: 'Tokens' }} />
          <ThemedDrawer.Screen name="typography" options={{ title: 'Typography' }} />
          <ThemedDrawer.Screen name="buttons" options={{ title: 'Buttons' }} />
          <ThemedDrawer.Screen name="inputs" options={{ title: 'Inputs' }} />
          <ThemedDrawer.Screen name="checkbox" options={{ title: 'Checkbox' }} />
          <ThemedDrawer.Screen name="switch" options={{ title: 'Switch' }} />
          <ThemedDrawer.Screen name="field" options={{ title: 'Fields' }} />
          <ThemedDrawer.Screen name="form" options={{ title: 'Form' }} />
          <ThemedDrawer.Screen name="icons" options={{ title: 'Icons' }} />
          <ThemedDrawer.Screen name="spinner" options={{ title: 'Spinner' }} />
          <ThemedDrawer.Screen name="highlight" options={{ title: 'Highlight' }} />
          <ThemedDrawer.Screen name="+not-found" options={{ title: '404' }} />
        </ThemedDrawer>
        <StatusBar style="auto" />
      </MarkdownProvider>
    </ThemeProvider>
  );
}