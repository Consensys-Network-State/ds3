// Helper function to generate JSX for spacing tokens
const generateSpacingJSX = (name: string, width: string) => {
  return `<View className="flex flex-row flex-wrap gap-4">
  <Text className="flex items-center w-24">${name}</Text>
  <View className="bg-neutral-6 h-4 ${width}" />
</View>`;
};

export const tokensExamples = {
  name: "Tokens",
  examples: {
    "spacing": {
      name: "Spacing",
      jsx: `<View className="space-y-4">
    ${generateSpacingJSX('space-0', 'w-0')}
    ${generateSpacingJSX('space-0.5', 'w-0.5')}
    ${generateSpacingJSX('space-1', 'w-1')}
    ${generateSpacingJSX('space-1.5', 'w-1.5')}
    ${generateSpacingJSX('space-2', 'w-2')}
    ${generateSpacingJSX('space-2.5', 'w-2.5')}
    ${generateSpacingJSX('space-3', 'w-3')}
    ${generateSpacingJSX('space-3.5', 'w-3.5')}
    ${generateSpacingJSX('space-4', 'w-4')}
    ${generateSpacingJSX('space-5', 'w-5')}
    ${generateSpacingJSX('space-6', 'w-6')}
    ${generateSpacingJSX('space-7', 'w-7')}
    ${generateSpacingJSX('space-8', 'w-8')}
    ${generateSpacingJSX('space-10', 'w-10')}
    ${generateSpacingJSX('space-12', 'w-12')}
    ${generateSpacingJSX('space-14', 'w-14')}
    ${generateSpacingJSX('space-16', 'w-16')}
    ${generateSpacingJSX('space-18', 'w-18')}
    ${generateSpacingJSX('space-20', 'w-20')}
    ${generateSpacingJSX('space-24', 'w-24')}
    ${generateSpacingJSX('space-28', 'w-28')}
    ${generateSpacingJSX('space-32', 'w-32')}
    ${generateSpacingJSX('space-36', 'w-36')}
    ${generateSpacingJSX('space-40', 'w-40')}
  </View>`
    },
    "borders": {
      name: "Borders",
      jsx: `<View className="space-y-4">
    <View className="bg-neutral-2 border-neutral-8 border-0 p-4">
      <Text>border-0</Text>
    </View>
    <View className="bg-neutral-2 border-neutral-8 border-2 p-4">
      <Text>border-2</Text>
    </View>
    <View className="bg-neutral-2 border-neutral-8 border-4 p-4">
      <Text>border-4</Text>
    </View>
    <View className="bg-neutral-2 border-neutral-8 border-8 p-4">
      <Text>border-8</Text>
    </View>
  </View>`
    },
    "radius": {
      name: "Radius",
      jsx: `<View className="flex flex-row flex-wrap gap-4">
    <View className="flex flex-col items-center space-y-2">
      <Text>rounded-none</Text>
      <View className="w-24 h-24 bg-neutral-6 rounded-none" />
    </View>
    <View className="flex flex-col items-center space-y-2">
      <Text>rounded</Text>
      <View className="w-24 h-24 bg-neutral-6 rounded" />
    </View>
    <View className="flex flex-col items-center space-y-2">
      <Text>rounded-lg</Text>
      <View className="w-24 h-24 bg-neutral-6 rounded-lg" />
    </View>
    <View className="flex flex-col items-center space-y-2">
      <Text>rounded-xl</Text>
      <View className="w-24 h-24 bg-neutral-6 rounded-xl" />
    </View>
    <View className="flex flex-col items-center space-y-2">
      <Text>rounded-full</Text>
      <View className="w-24 h-24 bg-neutral-6 rounded-full" />
    </View>
  </View>`
    }
  }
}; 