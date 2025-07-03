import React from 'react';
import { Link, Stack } from 'expo-router';
import { View } from 'react-native';
import { Text } from '@consensys/ds3';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: '404' }} />
      <View className="flex-1 items-center justify-center p-2 bg-primary-1">
        <Text>This screen doesn't exist.</Text>
        <Link href="/" className="mt-4 py-4">
          <Text color="primary">Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}

