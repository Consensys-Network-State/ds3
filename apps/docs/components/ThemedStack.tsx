import * as React from 'react';
import { Stack } from 'expo-router';
import { useThemeColors } from '@consensys/ds3';

interface ThemedStackProps {
  children?: React.ReactNode;
  headerShown?: boolean;
  headerTitleAlign?: 'left' | 'center';
}

export function ThemedStack({ 
  children, 
  headerShown = true, 
  headerTitleAlign = 'left' 
}: ThemedStackProps) {
  const colors = useThemeColors();

  const screenOptions = React.useMemo(() => ({
    headerStyle: {
      backgroundColor: colors.neutral1,
    },
    headerTintColor: colors.neutral12,
    headerTitleStyle: {
      color: colors.neutral12,
    },
    headerTitleAlign,
    headerShown,
    contentStyle: {
      backgroundColor: colors.neutral1,
    },
  }), [colors, headerTitleAlign, headerShown]);

  return (
    <Stack screenOptions={screenOptions}>
      {children}
    </Stack>
  );
}

// Expose the Stack.Screen component
ThemedStack.Screen = Stack.Screen; 