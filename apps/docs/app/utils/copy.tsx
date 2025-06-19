import * as React from 'react';
import { Text } from "@consensys/ds3/src";
import { View, ScrollView } from "react-native";
import { InputClipboard } from "@/components/InputClipboard";

type InputVariant = 'soft' | 'outline' | 'underline' | 'ghost';
type InputColor = 'neutral' | 'primary' | 'secondary' | 'error' | 'warning' | 'success';

export default function Inputs() {
  const inputVariants: Array<InputVariant> = [
    'soft',
    'outline',
    'underline',
    'ghost'
  ];

  const inputColors: Array<InputColor> = [
    'neutral',
    'primary',
    'secondary',
    'error',
    'warning',
    'success'
  ];

  const readOnlyExamples = [
    {
      name: 'Input',
      render: (variant: InputVariant, color: InputColor) => (
        <InputClipboard
          variant={variant}
          color={color}
          value="Click to copy this text"
        />
      )
    },
    {
      name: 'TextArea',
      render: (variant: InputVariant, color: InputColor) => (
        <InputClipboard
          variant={variant}
          color={color}
          multiline
          numberOfLines={4}
          value="This is a read only text area with multiple lines of content. You can select and copy this text, but you cannot edit it."
        />
      )
    }
  ];

  return (
    <ScrollView className="h-screen bg-primary-1">
      <View className="flex-1 items-center pb-4">
        <View className="w-full max-w-[1200px] px-4 h-full gap-4">
          <Text className="text-h1">Copy To Clipboard</Text>

          <Text className="text-h2">Inputs</Text>
          {readOnlyExamples.map(({ name, render }) => (
            <View key={name} className="flex flex-col gap-4">
              <Text>{name}</Text>
              <View className="flex flex-row flex-wrap gap-4">
                {inputVariants.map((variant, index) => (
                  <View key={`${variant}-${index}`} className="flex-1 min-w-[250px]">
                    {render(variant, inputColors[index] as InputColor)}
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}