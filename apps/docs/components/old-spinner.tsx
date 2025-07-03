import React from 'react';
import { ScrollView } from 'react-native';
import { View } from 'react-native';
import { LoaderCircle, Loader, LoaderPinwheel, RefreshCw } from 'lucide-react-native';
import { Text, Spinner } from '@consensys/ds3/src';

const spinnerColors = [
  'neutral',
  'primary',
  'secondary',
  'error',
  'warning',
  'success'
] as const;

const spinnerSizes = [
  { size: 'lg', label: 'Large' },
  { size: 'md', label: 'Medium' },
  { size: 'sm', label: 'Small' }
] as const;

const spinnerIcons = [
  { icon: LoaderCircle, label: 'LoaderCircle' },
  { icon: Loader, label: 'Loader' },
  { icon: LoaderPinwheel, label: 'LoaderPinwheel' },
  { icon: RefreshCw, label: 'RefreshCw' }
] as const;

export default function Spinners() {
  return (
    <ScrollView className="h-screen bg-primary-1">
      <View className="flex-1 items-center pb-4">
        <View className="w-full max-w-[1200px] px-4 h-full gap-4">
          <Text className="text-h1">Spinners</Text>

          <Text className="text-h2">Icons</Text>
          <View className="flex flex-row flex-wrap gap-4">
            {spinnerIcons.map(({ icon, label }) => (
              <View key={label} className="flex flex-row items-center gap-2">
                <Text>{label}</Text>
                <Spinner icon={icon} color="primary" size="lg" />
              </View>
            ))}
          </View>

          <Text className="text-h2">Colors</Text>
          <View className="flex flex-row flex-wrap gap-4">
            {spinnerColors.map((color) => (
              <View key={color} className="flex flex-row items-center gap-2">
                <Text>{color.charAt(0).toUpperCase() + color.slice(1)}</Text>
                <Spinner color={color} size="lg" />
              </View>
            ))}
          </View>

          <Text className="text-h2">Sizes</Text>
          {spinnerSizes.map(({ size, label }) => (
            <View key={size} className="flex flex-row flex-wrap gap-4 align-center">
              <Text>{label}</Text>
              {spinnerColors.map((color) => (
                <Spinner
                  key={`${size}-${color}`}
                  color={color}
                  size={size}
                />
              ))}
            </View>
          ))}

          <Text className="text-h2">Animation Speeds</Text>
          <View className="flex flex-row flex-wrap gap-4">
            <View className="flex flex-row items-center gap-2">
              <Text>Normal</Text>
              <Spinner color="primary" size="lg" />
            </View>
            <View className="flex flex-row items-center gap-2">
              <Text>Slow</Text>
              <Spinner
                color="primary"
                size="lg"
                speed="slow"
              />
            </View>
            <View className="flex flex-row items-center gap-2">
              <Text>Fast</Text>
              <Spinner
                color="primary"
                size="lg"
                speed="fast"
              />
            </View>
          </View>

          <Text className="text-h2">Direction</Text>
          <View className="flex flex-row flex-wrap gap-4">
            <View className="flex flex-row items-center gap-2">
              <Text>Clockwise</Text>
              <Spinner color="primary" size="lg" />
            </View>
            <View className="flex flex-row items-center gap-2">
              <Text>Counterclockwise</Text>
              <Spinner
                color="primary"
                size="lg"
                direction="counterclockwise"
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}