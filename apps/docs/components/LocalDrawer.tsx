import React, { useState, useEffect, useMemo } from 'react';
import { Platform, Dimensions } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import { useThemeColors } from '@consensys/ds3';

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

  
  const screenOptions = useMemo(() => ({
    headerStyle: {
      backgroundColor: colors.primary1,
      borderBottomWidth: 0,
      ...(Platform.OS === 'ios' && { height: 80 }),
    },
    headerTintColor: colors.neutral12,
    headerTitleAlign: 'left' as const,
    drawerStyle: {
      backgroundColor: colors.primary1,
      width: isDesktop ? 280 : 300, // Slightly wider on desktop
    },
    drawerActiveTintColor: colors.primary11,
    drawerInactiveTintColor: colors.neutral11,
    // Hide header on desktop, show on mobile
    headerShown: !isDesktop,
    // Open by default on desktop, closed on mobile
    drawerType: (isDesktop ? 'permanent' : 'front') as 'permanent' | 'front',
    swipeEnabled: !isDesktop,
    // Add performance optimizations
    animationEnabled: true,
    gestureEnabled: !isDesktop,
    detachInactiveScreens: true,
  }), [colors, isDesktop]);

  return (
    <Drawer screenOptions={screenOptions}>
      {children}
    </Drawer>
  );
}

// Expose the Drawer.Screen component
LocalDrawer.Screen = Drawer.Screen; 