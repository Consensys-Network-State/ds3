
# Surface

```tsx live
<View className="flex flex-col gap-3 w-full">
  <View className="flex flex-row gap-3">
    <View className="flex-1">
      <Text className="text-center font-medium text-sm">Neutral</Text>
    </View>
    <View className="flex-1">
      <Text className="text-center font-medium text-sm">Primary</Text>
    </View>
    <View className="flex-1">
      <Text className="text-center font-medium text-sm">Secondary</Text>
    </View>
    <View className="flex-1">
      <Text className="text-center font-medium text-sm">Error</Text>
    </View>
    <View className="flex-1">
      <Text className="text-center font-medium text-sm">Warning</Text>
    </View>
    <View className="flex-1">
      <Text className="text-center font-medium text-sm">Success</Text>
    </View>
  </View>
  <View className="flex flex-row gap-3">
    <View className="flex flex-col gap-3 flex-1">
      <Surface variant="elevated" color="neutral" className="p-4">
        <Text>Elevated</Text>
      </Surface>
      <Surface variant="solid" color="neutral" className="p-4">
        <Text>Solid</Text>
      </Surface>
      <Surface variant="soft" color="neutral" className="p-4">
        <Text>Soft</Text>
      </Surface>
      <Surface variant="outline" color="neutral" className="p-4">
        <Text>Outline</Text>
      </Surface>
      <Surface variant="dashed" color="neutral" className="p-4">
        <Text>Dashed</Text>
      </Surface>
      <Surface variant="ghost" color="neutral" className="p-4">
        <Text>Ghost</Text>
      </Surface>
    </View>
    <View className="flex flex-col gap-3 flex-1">
      <Surface variant="elevated" color="primary" className="p-4">
        <Text>Elevated</Text>
      </Surface>
      <Surface variant="solid" color="primary" className="p-4">
        <Text>Solid</Text>
      </Surface>
      <Surface variant="soft" color="primary" className="p-4">
        <Text>Soft</Text>
      </Surface>
      <Surface variant="outline" color="primary" className="p-4">
        <Text>Outline</Text>
      </Surface>
      <Surface variant="dashed" color="primary" className="p-4">
        <Text>Dashed</Text>
      </Surface>
      <Surface variant="ghost" color="primary" className="p-4">
        <Text>Ghost</Text>
      </Surface>
    </View>
    <View className="flex flex-col gap-3 flex-1">
      <Surface variant="elevated" color="secondary" className="p-4">
        <Text>Elevated</Text>
      </Surface>
      <Surface variant="solid" color="secondary" className="p-4">
        <Text>Solid</Text>
      </Surface>
      <Surface variant="soft" color="secondary" className="p-4">
        <Text>Soft</Text>
      </Surface>
      <Surface variant="outline" color="secondary" className="p-4">
        <Text>Outline</Text>
      </Surface>
      <Surface variant="dashed" color="secondary" className="p-4">
        <Text>Dashed</Text>
      </Surface>
      <Surface variant="ghost" color="secondary" className="p-4">
        <Text>Ghost</Text>
      </Surface>
    </View>
    <View className="flex flex-col gap-3 flex-1">
      <Surface variant="elevated" color="error" className="p-4">
        <Text>Elevated</Text>
      </Surface>
      <Surface variant="solid" color="error" className="p-4">
        <Text>Solid</Text>
      </Surface>
      <Surface variant="soft" color="error" className="p-4">
        <Text>Soft</Text>
      </Surface>
      <Surface variant="outline" color="error" className="p-4">
        <Text>Outline</Text>
      </Surface>
      <Surface variant="dashed" color="error" className="p-4">
        <Text>Dashed</Text>
      </Surface>
      <Surface variant="ghost" color="error" className="p-4">
        <Text>Ghost</Text>
      </Surface>
    </View>
    <View className="flex flex-col gap-3 flex-1">
      <Surface variant="elevated" color="warning" className="p-4">
        <Text>Elevated</Text>
      </Surface>
      <Surface variant="solid" color="warning" className="p-4">
        <Text>Solid</Text>
      </Surface>
      <Surface variant="soft" color="warning" className="p-4">
        <Text>Soft</Text>
      </Surface>
      <Surface variant="outline" color="warning" className="p-4">
        <Text>Outline</Text>
      </Surface>
      <Surface variant="dashed" color="warning" className="p-4">
        <Text>Dashed</Text>
      </Surface>
      <Surface variant="ghost" color="warning" className="p-4">
        <Text>Ghost</Text>
      </Surface>
    </View>
    <View className="flex flex-col gap-3 flex-1">
      <Surface variant="elevated" color="success" className="p-4">
        <Text>Elevated</Text>
      </Surface>
      <Surface variant="solid" color="success" className="p-4">
        <Text>Solid</Text>
      </Surface>
      <Surface variant="soft" color="success" className="p-4">
        <Text>Soft</Text>
      </Surface>
      <Surface variant="outline" color="success" className="p-4">
        <Text>Outline</Text>
      </Surface>
      <Surface variant="dashed" color="success" className="p-4">
        <Text>Dashed</Text>
      </Surface>
      <Surface variant="ghost" color="success" className="p-4">
        <Text>Ghost</Text>
      </Surface>
    </View>
  </View>
</View>
```