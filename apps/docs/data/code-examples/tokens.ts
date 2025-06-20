// Helper function to generate JSX for spacing tokens
const generateSpacingJSX = (name: string, width: string) => {
  return `<View className="flex flex-row flex-wrap gap-4">
  <Text className="flex items-center w-24">${name}</Text>
  <View className="bg-neutral-6 h-4 ${width}" />
</View>`;
};

export const tokensExamples = {
  "spacing": {
    name: "Spacing",
    jsx: `<View className="space-y-4">
  <Text className="text-h2">Space</Text>
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
  "spacing-usage": {
    name: "Spacing Usage",
    jsx: `<View className="space-y-6">
  <Text className="text-h2">Spacing Usage Examples</Text>
  
  <View className="space-y-4">
    <Text className="text-h3">Padding Examples</Text>
    <View className="bg-primary-6 p-2">
      <Text className="text-primary-11">p-2 (8px padding)</Text>
    </View>
    <View className="bg-secondary-6 p-4">
      <Text className="text-secondary-11">p-4 (16px padding)</Text>
    </View>
    <View className="bg-neutral-6 p-8">
      <Text className="text-neutral-11">p-8 (32px padding)</Text>
    </View>
  </View>
  
  <View className="space-y-4">
    <Text className="text-h3">Margin Examples</Text>
    <View className="bg-primary-6 m-2">
      <Text className="text-primary-11">m-2 (8px margin)</Text>
    </View>
    <View className="bg-secondary-6 m-4">
      <Text className="text-secondary-11">m-4 (16px margin)</Text>
    </View>
    <View className="bg-neutral-6 m-8">
      <Text className="text-neutral-11">m-8 (32px margin)</Text>
    </View>
  </View>
  
  <View className="space-y-4">
    <Text className="text-h3">Gap Examples</Text>
    <View className="flex flex-row gap-2">
      <View className="bg-primary-6 p-2">
        <Text className="text-primary-11">gap-2</Text>
      </View>
      <View className="bg-primary-6 p-2">
        <Text className="text-primary-11">gap-2</Text>
      </View>
      <View className="bg-primary-6 p-2">
        <Text className="text-primary-11">gap-2</Text>
      </View>
    </View>
    <View className="flex flex-row gap-4">
      <View className="bg-secondary-6 p-2">
        <Text className="text-secondary-11">gap-4</Text>
      </View>
      <View className="bg-secondary-6 p-2">
        <Text className="text-secondary-11">gap-4</Text>
      </View>
      <View className="bg-secondary-6 p-2">
        <Text className="text-secondary-11">gap-4</Text>
      </View>
    </View>
  </View>
</View>`
  },
  "colors": {
    name: "Colors",
    jsx: `<View className="space-y-6">
  <Text className="text-h2">Color Tokens</Text>
  
  <View className="space-y-4">
    <Text className="text-h3">Primary Colors</Text>
    <View className="flex flex-row flex-wrap gap-2">
      <View className="bg-primary-1 w-16 h-16 rounded" />
      <View className="bg-primary-2 w-16 h-16 rounded" />
      <View className="bg-primary-3 w-16 h-16 rounded" />
      <View className="bg-primary-4 w-16 h-16 rounded" />
      <View className="bg-primary-5 w-16 h-16 rounded" />
      <View className="bg-primary-6 w-16 h-16 rounded" />
      <View className="bg-primary-7 w-16 h-16 rounded" />
      <View className="bg-primary-8 w-16 h-16 rounded" />
      <View className="bg-primary-9 w-16 h-16 rounded" />
      <View className="bg-primary-10 w-16 h-16 rounded" />
      <View className="bg-primary-11 w-16 h-16 rounded" />
      <View className="bg-primary-12 w-16 h-16 rounded" />
    </View>
  </View>
  
  <View className="space-y-4">
    <Text className="text-h3">Neutral Colors</Text>
    <View className="flex flex-row flex-wrap gap-2">
      <View className="bg-neutral-1 w-16 h-16 rounded" />
      <View className="bg-neutral-2 w-16 h-16 rounded" />
      <View className="bg-neutral-3 w-16 h-16 rounded" />
      <View className="bg-neutral-4 w-16 h-16 rounded" />
      <View className="bg-neutral-5 w-16 h-16 rounded" />
      <View className="bg-neutral-6 w-16 h-16 rounded" />
      <View className="bg-neutral-7 w-16 h-16 rounded" />
      <View className="bg-neutral-8 w-16 h-16 rounded" />
      <View className="bg-neutral-9 w-16 h-16 rounded" />
      <View className="bg-neutral-10 w-16 h-16 rounded" />
      <View className="bg-neutral-11 w-16 h-16 rounded" />
      <View className="bg-neutral-12 w-16 h-16 rounded" />
    </View>
  </View>
  
  <View className="space-y-4">
    <Text className="text-h3">Semantic Colors</Text>
    <View className="flex flex-row flex-wrap gap-2">
      <View className="bg-success-6 w-16 h-16 rounded" />
      <View className="bg-warning-6 w-16 h-16 rounded" />
      <View className="bg-error-6 w-16 h-16 rounded" />
      <View className="bg-info-6 w-16 h-16 rounded" />
    </View>
  </View>
</View>`
  },
  "borders": {
    name: "Borders",
    jsx: `<View className="space-y-6">
  <Text className="text-h2">Border Tokens</Text>
  
  <View className="space-y-4">
    <Text className="text-h3">Border Width</Text>
    <View className="border border-0 p-4">
      <Text>border-0</Text>
    </View>
    <View className="border border-2 p-4">
      <Text>border-2</Text>
    </View>
    <View className="border border-4 p-4">
      <Text>border-4</Text>
    </View>
    <View className="border border-8 p-4">
      <Text>border-8</Text>
    </View>
  </View>
  
  <View className="space-y-4">
    <Text className="text-h3">Border Radius</Text>
    <View className="bg-primary-6 rounded-none p-4">
      <Text>rounded-none</Text>
    </View>
    <View className="bg-primary-6 rounded p-4">
      <Text>rounded</Text>
    </View>
    <View className="bg-primary-6 rounded-lg p-4">
      <Text>rounded-lg</Text>
    </View>
    <View className="bg-primary-6 rounded-xl p-4">
      <Text>rounded-xl</Text>
    </View>
    <View className="bg-primary-6 rounded-full p-4">
      <Text>rounded-full</Text>
    </View>
  </View>
</View>`
  }
}; 