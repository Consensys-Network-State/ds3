const semanticColors = ['primary', 'secondary', 'neutral', 'success', 'warning', 'error', 'info'];

const generateSemanticPaletteJSX = (colors: string[]) => {
  const numberHeadings = `
    <View className="flex flex-row gap-2" style={{ marginLeft: '94px' }}>
      ${[...Array(12).keys()].map(i => `<View className="w-16"><Text className="text-center text-neutral-11">${i + 1}</Text></View>`).join('')}
    </View>
  `;

  const rows = colors.map((color: string) => `
    <View className="flex flex-row items-center">
      <Text className="w-24 shrink-0 capitalize text-right pr-4">${color}</Text>
      <View className="flex flex-row gap-2">
        ${[...Array(12).keys()].map(i => `<View className="bg-${color}-${i + 1} w-16 h-16 rounded" />`).join('')}
      </View>
    </View>
  `).join('');

  return `<ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-1">
    <View className="space-y-2">${numberHeadings}${rows}</View>
  </ScrollView>`;
};

const generateUtilityColorsGridJSX = () => {
  const headers = `
    <View className="flex flex-row gap-2" style={{ marginLeft: '94px' }}>
      <View className="w-16"><Text className="text-center text-neutral-11">Contrast</Text></View>
      <View className="w-16"><Text className="text-center text-neutral-11">Surface</Text></View>
      <View className="w-16"><Text className="text-center text-neutral-11">Indicator</Text></View>
      <View className="w-16"><Text className="text-center text-neutral-11">Track</Text></View>
    </View>
  `;

  const rows = `
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
  `;

  return `<ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-1">
    <View className="space-y-2">${headers}${rows}</View>
  </ScrollView>`;
};

export const colorsExamples = {
  name: "Colors",
  examples: {
    "semantic-colors": {
      name: "Semantic Colors",
      jsx: `<View className="flex flex-row flex-wrap gap-4">
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
</View>`
    },
    "palette": {
      name: "Palette",
      jsx: `<View>${generateSemanticPaletteJSX(['primary', 'secondary', 'neutral', 'success', 'warning', 'error', 'info'])}</View>`
    },
    "utility-colors": {
      name: "Utility Colors",
      jsx: `<View className="max-w-4xl space-y-8">
  <View>
  ${generateUtilityColorsGridJSX()}
  </View>
</View>`
    }
  }
}; 