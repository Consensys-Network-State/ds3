import React, { useEffect, useState } from 'react';
import { Tabs } from 'expo-router';
import { Platform, Dimensions, View, TouchableOpacity } from 'react-native';
import { useThemeColors, Text, Icon, Button, ThemeIcon } from '@consensys/ds3';
import { HapticTab } from '@/components/HapticTab';
import { ThemeControls } from '@/components/ThemeControls';
import { useRouter, usePathname } from 'expo-router';
import { Home, Palette, Layers, Wallet } from 'lucide-react-native';

interface ThemedTabsProps {
  children?: React.ReactNode;
}

// DS3 Logo component
function DS3Logo() {
  const router = useRouter();
  
  return (
    <TouchableOpacity
      onPress={() => router.push('/')}
      className="flex-row items-center gap-2 ml-4 cursor-pointer"
    >
      <Icon icon={ThemeIcon} className="w-8 h-8" />
      <Text size="lg" weight="bold" color="neutral" className="text-neutral-12">
        DS3
      </Text>
    </TouchableOpacity>
  );
}

// Custom header title component
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

  const navigationItems = [
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
  ];

  // On desktop, show navigation buttons since tabs are hidden
  if (isDesktop) {
    return (
      <View className="flex-row items-center justify-center gap-2">
        {navigationItems.map((item, index) => (
          <React.Fragment key={item.path}>
            <Button
              variant={item.isActive ? 'solid' : 'ghost'}
              color={item.isActive ? 'primary' : 'neutral'}
              // size="sm"
              onPress={() => router.push(item.path as any)}
            >
              <Button.Icon icon={item.icon} />
              <Button.Text>{item.name}</Button.Text>
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