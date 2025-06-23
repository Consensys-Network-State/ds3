import React, { useState, useEffect } from 'react';
import { View, Platform, Dimensions } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import { useThemeColors } from '@consensys/ds3';
import { ThemeControls } from './ThemeControls';

interface LocalDrawerProps {
  children?: React.ReactNode;
}

export function LocalDrawer({ children }: LocalDrawerProps) {
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
          width: isDesktop ? 280 : 300, // Slightly wider on desktop
        },
        drawerActiveTintColor: colors.primary11,
        drawerInactiveTintColor: colors.neutral11,
        // Hide header on desktop, show on mobile
        headerShown: !isDesktop,
        // Open by default on desktop, closed on mobile
        drawerType: isDesktop ? 'permanent' : 'front',
        swipeEnabled: !isDesktop,
      }}>
      {children}
    </Drawer>
  );
}

// Expose the Drawer.Screen component
LocalDrawer.Screen = Drawer.Screen; 