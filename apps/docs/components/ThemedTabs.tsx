import React, { useEffect, useState } from 'react';
import { Tabs } from 'expo-router';
import { Platform, Dimensions, View } from 'react-native';
import { useThemeColors, Button, ThemeIcon, Icon, Text } from '@consensys/ds3';
import { HapticTab } from '@/components/HapticTab';
import { ThemeControls } from '@/components/ThemeControls';
import { useRouter, usePathname } from 'expo-router';
import { Palette, Layers, Wallet } from 'lucide-react-native';

interface ThemedTabsProps {
  children?: React.ReactNode;
}

function DS3Logo() {
  const router = useRouter();
  
  return (
    <View className="flex justify-center items-center ml-2">
      <Button
        variant="ghost"
        color="neutral"
        onPress={() => router.push('/')}
        className="pl-1 pr-1"
      >
        <Icon icon={ThemeIcon} className="w-8 h-8" />
        <Text>DS3</Text>
      </Button>
    </View>
  );
}

function CustomHeaderTitle() {
  const router = useRouter();
  const pathname = usePathname();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const { width } = Dimensions.get('window');
      setIsDesktop(width >= 768);
    };

    checkScreenSize();
    const subscription = Dimensions.addEventListener('change', checkScreenSize);
    
    return () => subscription?.remove();
  }, []);

  const navigationItems = React.useMemo(() => [
    {
      name: 'Theme',
      path: '/theme',
      icon: Palette,
      isActive: pathname.startsWith('/theme'),
    },
    {
      name: 'Components',
      path: '/components',
      icon: Layers,
      isActive: pathname.startsWith('/components'),
    },
    {
      name: 'Web3',
      path: '/web3',
      icon: Wallet,
      isActive: pathname.startsWith('/web3'),
    },
  ], [pathname]);

  // On desktop, show navigation buttons since tabs are hidden
  if (isDesktop) {
    return (
      <View className="flex-row items-center justify-center gap-2">
        {navigationItems.map((item, index) => (
          <React.Fragment key={item.path}>
            <Button
              variant={item.isActive ? 'solid' : 'ghost'}
              color={item.isActive ? 'primary' : 'neutral'}
              onPress={() => router.push(item.path as any)}
            >
              <Icon icon={item.icon} />
              <Text>{item.name}</Text>
            </Button>
            
            {/* Separator between buttons (except for last item) */}
            {index < navigationItems.length - 1 && (
              <View className="w-px h-4 bg-neutral-6" />
            )}
          </React.Fragment>
        ))}
      </View>
    );
  }

  // On mobile, show simple title since tabs are visible at bottom
  return null;
}

export function ThemedTabs({ children }: ThemedTabsProps) {
  const colors = useThemeColors();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const { width } = Dimensions.get('window');
      setIsDesktop(width >= 768); // 768px is typical tablet/desktop breakpoint
    };

    checkScreenSize();
    const subscription = Dimensions.addEventListener('change', checkScreenSize);
    
    return () => subscription?.remove();
  }, []);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary11,
        tabBarInactiveTintColor: colors.neutral11,
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.primary2,
          borderBottomWidth: 1,
          borderBottomColor: colors.neutral5,
          ...(Platform.OS === 'ios' && { height: 80 }),
        },
        headerTintColor: colors.neutral12,
        headerTitleStyle: {
          color: colors.neutral12,
        },
        headerTitleAlign: 'center',
        headerTitle: () => <CustomHeaderTitle />,
        headerLeft: () => <DS3Logo />,
        headerRight: () => <ThemeControls />,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: colors.primary1,
          borderTopColor: colors.neutral5,
          borderTopWidth: 1,
          ...(isDesktop ? {
            // Desktop: Hide tabs since navigation is in header
            display: 'none',
          } : Platform.select({
            ios: {
              position: 'absolute',
            },
            default: {},
          })),
        },
        tabBarPosition: 'bottom', // Always bottom for mobile
      }}>
      {children}
    </Tabs>
  );
}

// Expose the Tabs.Screen component
ThemedTabs.Screen = Tabs.Screen; 