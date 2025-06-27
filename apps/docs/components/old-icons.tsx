import React from 'react';
import { ScrollView } from 'react-native';
import { View } from 'react-native';
import { Text, Icon } from '@consensys/ds3/src';
import { Figma } from 'lucide-react-native';

const iconColors = [
  'neutral',
  'primary',
  'secondary',
  'error',
  'warning',
  'success'
] as const;

type IconSizeOption = {
  size: 'sm' | 'md' | 'lg';
  label: string;
};

const iconSizes: IconSizeOption[] = [
  { size: 'lg', label: 'Large' },
  { size: 'md', label: 'Medium' },
  { size: 'sm', label: 'Small' }
] as const;

export default function Icons() {
  return (
    <ScrollView className="h-screen bg-primary-1">
      <View className="flex-1 items-center pb-4">
        <View className="w-full max-w-[1200px] px-4 h-full gap-4">
          <Text className="text-h1">Icons</Text>

          <Text className="text-h2">Colors</Text>
          <View className="flex flex-row flex-wrap gap-4">
            {iconColors.map((color) => (
              <View key={color} className="flex flex-row items-center gap-2">
                <Text className="flex items-center">
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </Text>
                <Icon icon={Figma} color={color} size="md" />
              </View>
            ))}
          </View>

          <Text className="text-h2">Sizes</Text>
          {iconSizes.map(({ size, label }) => (
            <View key={size} className="flex flex-row flex-wrap gap-4">
              <Text className="flex items-center w-20">{label}</Text>
              {iconColors.map((color) => (
                <Icon
                  key={`${size}-${color}`}
                  icon={Figma}
                  color={color}
                  size={size}
                />
              ))}
            </View>
          ))}

          <Text className="text-h2">All Combinations</Text>
          {iconColors.map((color) => (
            <View key={color} className="flex flex-row flex-wrap gap-4">
              <Text className="flex items-center w-20">
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </Text>
              {iconSizes.map(({ size }) => (
                <Icon
                  key={`${color}-${size}`}
                  icon={Figma}
                  color={color}
                  size={size}
                />
              ))}
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}