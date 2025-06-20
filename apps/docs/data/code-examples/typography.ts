// Helper function to generate JSX for typography examples
const generateTypographyJSX = (className: string, label: string) => {
  return `<View className="flex flex-row flex-wrap gap-4">
  <Text className="flex items-center">${label}</Text>
  <Text className="${className}">The quick brown fox jumps over the lazy dog.</Text>
</View>`;
};

export const typographyExamples = {
  "font-family": {
    name: "Font Family",
    jsx: `<View className="space-y-4">
  <Text className="text-h2">Font Family</Text>
  ${generateTypographyJSX('font-inter', 'font-inter')}
  ${generateTypographyJSX('font-roboto', 'font-roboto')}
  ${generateTypographyJSX('font-robotoCondensed', 'font-robotoCondensed')}
  ${generateTypographyJSX('font-robotoSlab', 'font-robotoSlab')}
  ${generateTypographyJSX('font-libreFranklin', 'font-libreFranklin')}
</View>`
  },
  "font-weight": {
    name: "Font Weight",
    jsx: `<View className="space-y-4">
  <Text className="text-h2">Font Weight</Text>
  ${generateTypographyJSX('font-light', 'font-light')}
  ${generateTypographyJSX('font-regular', 'font-regular')}
  ${generateTypographyJSX('font-medium', 'font-medium')}
  ${generateTypographyJSX('font-bold', 'font-bold')}
</View>`
  },
  "font-size": {
    name: "Font Size",
    jsx: `<View className="space-y-4">
  <Text className="text-h2">Font Size</Text>
  ${generateTypographyJSX('text-2', 'text-2')}
  ${generateTypographyJSX('text-2.5', 'text-2.5')}
  ${generateTypographyJSX('text-3', 'text-3')}
  ${generateTypographyJSX('text-3.5', 'text-3.5')}
  ${generateTypographyJSX('text-4', 'text-4')}
  ${generateTypographyJSX('text-4.5', 'text-4.5')}
  ${generateTypographyJSX('text-5', 'text-5')}
  ${generateTypographyJSX('text-5.5', 'text-5.5')}
  ${generateTypographyJSX('text-6', 'text-6')}
  ${generateTypographyJSX('text-7', 'text-7')}
  ${generateTypographyJSX('text-8', 'text-8')}
  ${generateTypographyJSX('text-10', 'text-10')}
  ${generateTypographyJSX('text-12', 'text-12')}
  ${generateTypographyJSX('text-14', 'text-14')}
  ${generateTypographyJSX('text-16', 'text-16')}
</View>`
  },
  "line-height": {
    name: "Line Height",
    jsx: `<View className="space-y-4">
  <Text className="text-h2">Line Height</Text>
  ${generateTypographyJSX('leading-tight', 'leading-tight')}
  ${generateTypographyJSX('leading-normal', 'leading-normal')}
  ${generateTypographyJSX('leading-loose', 'leading-loose')}
</View>`
  },
  "text-presets": {
    name: "Text Presets",
    jsx: `<View className="space-y-4">
  <Text className="text-h2">Text Presets</Text>
  ${generateTypographyJSX('text-xl', 'text-xl')}
  ${generateTypographyJSX('text-lg', 'text-lg')}
  ${generateTypographyJSX('text-base', 'text-base')}
  ${generateTypographyJSX('text-sm', 'text-sm')}
  ${generateTypographyJSX('text-xs', 'text-xs')}
</View>`
  },
  "heading-presets": {
    name: "Heading Presets",
    jsx: `<View className="space-y-4">
  <Text className="text-h2">Heading Presets</Text>
  ${generateTypographyJSX('text-h1', 'text-h1')}
  ${generateTypographyJSX('text-h2', 'text-h2')}
  ${generateTypographyJSX('text-h3', 'text-h3')}
  ${generateTypographyJSX('text-h4', 'text-h4')}
  ${generateTypographyJSX('text-h5', 'text-h5')}
  ${generateTypographyJSX('text-h6', 'text-h6')}
</View>`
  },
  "mixed": {
    name: "Mixed Examples",
    jsx: `<View className="space-y-6">
  <View className="space-y-2">
    <Text className="text-h1">Main Heading</Text>
    <Text className="text-h2">Sub Heading</Text>
    <Text className="text-h3">Section Title</Text>
  </View>
  
  <View className="space-y-2">
    <Text className="text-lg font-bold">Large Bold Text</Text>
    <Text className="text-base font-medium">Medium Weight Body Text</Text>
    <Text className="text-sm font-regular">Small Regular Text</Text>
  </View>
  
  <View className="space-y-2">
    <Text className="text-h4 font-inter">Inter Font Family</Text>
    <Text className="text-base font-roboto">Roboto Font Family</Text>
    <Text className="text-sm font-robotoCondensed">Roboto Condensed Font</Text>
  </View>
  
  <View className="space-y-2">
    <Text className="text-base leading-tight">Tight line height for compact text.</Text>
    <Text className="text-base leading-normal">Normal line height for comfortable reading.</Text>
    <Text className="text-base leading-loose">Loose line height for spacious text.</Text>
  </View>
</View>`
  }
}; 