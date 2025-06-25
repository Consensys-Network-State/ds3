import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { ThemeProvider } from "@consensys/ds3";
import ExpoConstants from 'expo-constants';
import { ThemedTabs } from '@/components/ThemedTabs';
import { MarkdownProvider } from '@/components/MarkdownProvider';
import { Home, Palette, Layers, Wallet } from 'lucide-react-native';
import { Platform } from 'react-native';
import { usePathname } from 'expo-router';
import 'react-native-reanimated';
import "../global.css";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const pathname = usePathname();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // Set document title based on current route
  useEffect(() => {
    if (Platform.OS === 'web' && typeof document !== 'undefined') {
      // Parse pathname to create search-optimized title
      const segments = pathname.split('/').filter(Boolean);
      
      if (segments.length === 0) {
        document.title = 'DS3 - Design System 3';
      } else {
        // Get the last segment (most specific) and title case it
        const lastSegment = segments[segments.length - 1];
        const componentName = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
        document.title = `${componentName} - DS3`;
      }

      console.log('pathname', pathname);
    }
  }, [pathname]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider className="flex-1" config={ExpoConstants?.expoConfig?.extra?.DS3}>
      <MarkdownProvider>
        <ThemedTabs>
          <ThemedTabs.Screen
            name="index"
            options={{
              title: 'Home',
              tabBarIcon: ({ color }) => <Home size={20} color={color} />,
            }}
          />
          
          <ThemedTabs.Screen 
            name="theme" 
            options={{ 
              title: 'Theme',
              tabBarIcon: ({ color }) => <Palette size={20} color={color} />,
            }} 
          />
          
          <ThemedTabs.Screen 
            name="components" 
            options={{ 
              title: 'Components',
              tabBarIcon: ({ color }) => <Layers size={20} color={color} />,
            }} 
          />
          
          <ThemedTabs.Screen 
            name="web3" 
            options={{ 
              title: 'Web3',
              tabBarIcon: ({ color }) => <Wallet size={20} color={color} />,
            }} 
          />
          
          <ThemedTabs.Screen name="+not-found" options={{ href: null }} />
          
        </ThemedTabs>
        <StatusBar style="auto" />
      </MarkdownProvider>
    </ThemeProvider>
  );
}