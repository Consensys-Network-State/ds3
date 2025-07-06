# Colors

DS3 provides a comprehensive color system built on semantic color naming and Radix UI's accessible color palettes. The system supports multiple configuration methods, from simple preset colors to fully custom palettes, ensuring consistent and accessible design across your application.

## Color Scales

Each semantic color generates a complete 12-step scale (1-12) with alpha variants (a1-a12) and utility colors:

### Base Scale (1-12)
```tsx live
<View className="flex flex-row flex-wrap gap-4">
  <View className="flex-col items-center gap-2">
    <Text>Primary</Text>
    <View className="w-24 h-24 bg-primary-9 rounded" />
  </View>
  <View className="flex-col items-center gap-2">
    <Text>Secondary</Text>
    <View className="w-24 h-24 bg-secondary-9 rounded" />
  </View>
  <View className="flex-col items-center gap-2">
    <Text>Neutral</Text>
    <View className="w-24 h-24 bg-neutral-9 rounded" />
  </View>
  <View className="flex-col items-center gap-2">
    <Text>Success</Text>
    <View className="w-24 h-24 bg-success-9 rounded" />
  </View>
  <View className="flex-col items-center gap-2">
    <Text>Warning</Text>
    <View className="w-24 h-24 bg-warning-9 rounded" />
  </View>
  <View className="flex-col items-center gap-2">
    <Text>Error</Text>
    <View className="w-24 h-24 bg-error-9 rounded" />
  </View>
  <View className="flex-col items-center gap-2">
    <Text>Info</Text>
    <View className="w-24 h-24 bg-info-9 rounded" />
  </View>
</View>
```

### Complete Palette

View the full 12-step scale for all semantic colors:

```tsx live
<View>
<ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-1">
  <View className="space-y-2">
    <View className="flex flex-row gap-2" style={{ marginLeft: '94px' }}>
      <View className="w-16"><Text className="text-center text-neutral-11">1</Text></View>
      <View className="w-16"><Text className="text-center text-neutral-11">2</Text></View>
      <View className="w-16"><Text className="text-center text-neutral-11">3</Text></View>
      <View className="w-16"><Text className="text-center text-neutral-11">4</Text></View>
      <View className="w-16"><Text className="text-center text-neutral-11">5</Text></View>
      <View className="w-16"><Text className="text-center text-neutral-11">6</Text></View>
      <View className="w-16"><Text className="text-center text-neutral-11">7</Text></View>
      <View className="w-16"><Text className="text-center text-neutral-11">8</Text></View>
      <View className="w-16"><Text className="text-center text-neutral-11">9</Text></View>
      <View className="w-16"><Text className="text-center text-neutral-11">10</Text></View>
      <View className="w-16"><Text className="text-center text-neutral-11">11</Text></View>
      <View className="w-16"><Text className="text-center text-neutral-11">12</Text></View>
    </View>
    <View className="flex flex-row items-center">
      <Text className="w-24 shrink-0 capitalize text-right pr-4">primary</Text>
      <View className="flex flex-row gap-2">
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
    <View className="flex flex-row items-center">
      <Text className="w-24 shrink-0 capitalize text-right pr-4">secondary</Text>
      <View className="flex flex-row gap-2">
        <View className="bg-secondary-1 w-16 h-16 rounded" />
        <View className="bg-secondary-2 w-16 h-16 rounded" />
        <View className="bg-secondary-3 w-16 h-16 rounded" />
        <View className="bg-secondary-4 w-16 h-16 rounded" />
        <View className="bg-secondary-5 w-16 h-16 rounded" />
        <View className="bg-secondary-6 w-16 h-16 rounded" />
        <View className="bg-secondary-7 w-16 h-16 rounded" />
        <View className="bg-secondary-8 w-16 h-16 rounded" />
        <View className="bg-secondary-9 w-16 h-16 rounded" />
        <View className="bg-secondary-10 w-16 h-16 rounded" />
        <View className="bg-secondary-11 w-16 h-16 rounded" />
        <View className="bg-secondary-12 w-16 h-16 rounded" />
      </View>
    </View>
    <View className="flex flex-row items-center">
      <Text className="w-24 shrink-0 capitalize text-right pr-4">neutral</Text>
      <View className="flex flex-row gap-2">
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
    <View className="flex flex-row items-center">
      <Text className="w-24 shrink-0 capitalize text-right pr-4">success</Text>
      <View className="flex flex-row gap-2">
        <View className="bg-success-1 w-16 h-16 rounded" />
        <View className="bg-success-2 w-16 h-16 rounded" />
        <View className="bg-success-3 w-16 h-16 rounded" />
        <View className="bg-success-4 w-16 h-16 rounded" />
        <View className="bg-success-5 w-16 h-16 rounded" />
        <View className="bg-success-6 w-16 h-16 rounded" />
        <View className="bg-success-7 w-16 h-16 rounded" />
        <View className="bg-success-8 w-16 h-16 rounded" />
        <View className="bg-success-9 w-16 h-16 rounded" />
        <View className="bg-success-10 w-16 h-16 rounded" />
        <View className="bg-success-11 w-16 h-16 rounded" />
        <View className="bg-success-12 w-16 h-16 rounded" />
      </View>
    </View>
    <View className="flex flex-row items-center">
      <Text className="w-24 shrink-0 capitalize text-right pr-4">warning</Text>
      <View className="flex flex-row gap-2">
        <View className="bg-warning-1 w-16 h-16 rounded" />
        <View className="bg-warning-2 w-16 h-16 rounded" />
        <View className="bg-warning-3 w-16 h-16 rounded" />
        <View className="bg-warning-4 w-16 h-16 rounded" />
        <View className="bg-warning-5 w-16 h-16 rounded" />
        <View className="bg-warning-6 w-16 h-16 rounded" />
        <View className="bg-warning-7 w-16 h-16 rounded" />
        <View className="bg-warning-8 w-16 h-16 rounded" />
        <View className="bg-warning-9 w-16 h-16 rounded" />
        <View className="bg-warning-10 w-16 h-16 rounded" />
        <View className="bg-warning-11 w-16 h-16 rounded" />
        <View className="bg-warning-12 w-16 h-16 rounded" />
      </View>
    </View>
    <View className="flex flex-row items-center">
      <Text className="w-24 shrink-0 capitalize text-right pr-4">error</Text>
      <View className="flex flex-row gap-2">
        <View className="bg-error-1 w-16 h-16 rounded" />
        <View className="bg-error-2 w-16 h-16 rounded" />
        <View className="bg-error-3 w-16 h-16 rounded" />
        <View className="bg-error-4 w-16 h-16 rounded" />
        <View className="bg-error-5 w-16 h-16 rounded" />
        <View className="bg-error-6 w-16 h-16 rounded" />
        <View className="bg-error-7 w-16 h-16 rounded" />
        <View className="bg-error-8 w-16 h-16 rounded" />
        <View className="bg-error-9 w-16 h-16 rounded" />
        <View className="bg-error-10 w-16 h-16 rounded" />
        <View className="bg-error-11 w-16 h-16 rounded" />
        <View className="bg-error-12 w-16 h-16 rounded" />
      </View>
    </View>
    <View className="flex flex-row items-center">
      <Text className="w-24 shrink-0 capitalize text-right pr-4">info</Text>
      <View className="flex flex-row gap-2">
        <View className="bg-info-1 w-16 h-16 rounded" />
        <View className="bg-info-2 w-16 h-16 rounded" />
        <View className="bg-info-3 w-16 h-16 rounded" />
        <View className="bg-info-4 w-16 h-16 rounded" />
        <View className="bg-info-5 w-16 h-16 rounded" />
        <View className="bg-info-6 w-16 h-16 rounded" />
        <View className="bg-info-7 w-16 h-16 rounded" />
        <View className="bg-info-8 w-16 h-16 rounded" />
        <View className="bg-info-9 w-16 h-16 rounded" />
        <View className="bg-info-10 w-16 h-16 rounded" />
        <View className="bg-info-11 w-16 h-16 rounded" />
        <View className="bg-info-12 w-16 h-16 rounded" />
      </View>
    </View>
  </View>
</ScrollView>
</View>
```

### Utility Colors

Each semantic color includes utility colors for common use cases:

```tsx live
<View className="max-w-4xl space-y-8">
  <View>
  <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-1">
    <View className="space-y-2">
      <View className="flex flex-row gap-2" style={{ marginLeft: '94px' }}>
        <View className="w-16"><Text className="text-center text-neutral-11">Contrast</Text></View>
        <View className="w-16"><Text className="text-center text-neutral-11">Surface</Text></View>
        <View className="w-16"><Text className="text-center text-neutral-11">Indicator</Text></View>
        <View className="w-16"><Text className="text-center text-neutral-11">Track</Text></View>
      </View>
      <View className="flex flex-row items-center">
        <Text className="w-24 shrink-0 capitalize text-right pr-4">primary</Text>
        <View className="flex flex-row gap-2">
          <View className="bg-primary-contrast w-16 h-16 rounded" />
          <View className="bg-primary-surface color-primary-surface w-16 h-16 rounded border border-neutral-6" />
          <View className="bg-primary-indicator w-16 h-16 rounded border border-neutral-6" />
          <View className="bg-primary-track w-16 h-16 rounded border border-neutral-6" />
        </View>
      </View>
      <View className="flex flex-row items-center">
        <Text className="w-24 shrink-0 capitalize text-right pr-4">secondary</Text>
        <View className="flex flex-row gap-2">
          <View className="bg-secondary-contrast w-16 h-16 rounded" />
          <View className="bg-secondary-surface w-16 h-16 rounded border border-neutral-6" />
          <View className="bg-secondary-indicator w-16 h-16 rounded border border-neutral-6" />
          <View className="bg-secondary-track w-16 h-16 rounded border border-neutral-6" />
        </View>
      </View>
      <View className="flex flex-row items-center">
        <Text className="w-24 shrink-0 capitalize text-right pr-4">neutral</Text>
        <View className="flex flex-row gap-2">
          <View className="bg-neutral-contrast w-16 h-16 rounded" />
          <View className="bg-neutral-surface w-16 h-16 rounded border border-neutral-6" />
          <View className="bg-neutral-indicator w-16 h-16 rounded border border-neutral-6" />
          <View className="bg-neutral-track w-16 h-16 rounded border border-neutral-6" />
        </View>
      </View>
      <View className="flex flex-row items-center">
        <Text className="w-24 shrink-0 capitalize text-right pr-4">success</Text>
        <View className="flex flex-row gap-2">
          <View className="bg-success-contrast w-16 h-16 rounded" />
          <View className="bg-success-surface w-16 h-16 rounded border border-neutral-6" />
          <View className="bg-success-indicator w-16 h-16 rounded border border-neutral-6" />
          <View className="bg-success-track w-16 h-16 rounded border border-neutral-6" />
        </View>
      </View>
      <View className="flex flex-row items-center">
        <Text className="w-24 shrink-0 capitalize text-right pr-4">warning</Text>
        <View className="flex flex-row gap-2">
          <View className="bg-warning-contrast w-16 h-16 rounded" />
          <View className="bg-warning-surface w-16 h-16 rounded border border-neutral-6" />
          <View className="bg-warning-indicator w-16 h-16 rounded border border-neutral-6" />
          <View className="bg-warning-track w-16 h-16 rounded border border-neutral-6" />
        </View>
      </View>
      <View className="flex flex-row items-center">
        <Text className="w-24 shrink-0 capitalize text-right pr-4">error</Text>
        <View className="flex flex-row gap-2">
          <View className="bg-error-contrast w-16 h-16 rounded" />
          <View className="bg-error-surface w-16 h-16 rounded border border-neutral-6" />
          <View className="bg-error-indicator w-16 h-16 rounded border border-neutral-6" />
          <View className="bg-error-track w-16 h-16 rounded border border-neutral-6" />
        </View>
      </View>
      <View className="flex flex-row items-center">
        <Text className="w-24 shrink-0 capitalize text-right pr-4">info</Text>
        <View className="flex flex-row gap-2">
          <View className="bg-info-contrast w-16 h-16 rounded" />
          <View className="bg-info-surface w-16 h-16 rounded border border-neutral-6" />
          <View className="bg-info-indicator w-16 h-16 rounded border border-neutral-6" />
          <View className="bg-info-track w-16 h-16 rounded border border-neutral-6" />
        </View>
      </View>
    </View>
  </ScrollView>
  </View>
</View>
```

## Semantic Colors

The DS3 color system uses **semantic color names** that describe purpose rather than appearance. This approach ensures colors are used consistently and can be easily customized without breaking design patterns. Each semantic color generates a complete 12-step scale with alpha variants and utility colors.

## Semantic Color Mapping

| Semantic Color | Purpose | Common Use Cases |
|----|---|---|
| `neutral` | Base UI elements | Text, borders, backgrounds |
| `primary` | Main actions | Buttons, links, brand elements |
| `secondary` | Alternative actions | Secondary buttons, accents |
| `error` | Error states | Error messages, destructive actions |
| `warning` | Warning states | Warning messages, cautionary actions |
| `success` | Success states | Success messages, positive actions |
| `info` | Information states | Info messages, neutral actions |

## Resources

- [Radix UI Colors](https://www.radix-ui.com/colors) - Available preset colors
- [Radix Color Generator](https://www.radix-ui.com/colors/custom) - Custom color generation
- [DS3 Theme Package](https://github.com/Consensys-Network-State/ds3/tree/main/packages/theme) - Full documentation

