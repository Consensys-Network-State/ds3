export const textExamples = {
  "sizes": {
    name: "Text Sizes",
    jsx: `<View className="flex flex-col gap-2">
  <Text size="xs">Extra Small Text</Text>
  <Text size="sm">Small Text</Text>
  <Text size="base">Base Text</Text>
  <Text size="lg">Large Text</Text>
  <Text size="xl">Extra Large Text</Text>
  <Text size="2xl">2XL Text</Text>
  <Text size="3xl">3XL Text</Text>
  <Text size="4xl">4XL Text</Text>
</View>`
  },
  "numeric-sizes": {
    name: "Numeric Font Sizes",
    jsx: `<View className="flex flex-col gap-2">
  <Text size="2">Size 2 (0.5rem)</Text>
  <Text size="3">Size 3 (0.75rem)</Text>
  <Text size="4">Size 4 (1rem)</Text>
  <Text size="5">Size 5 (1.25rem)</Text>
  <Text size="6">Size 6 (1.5rem)</Text>
  <Text size="8">Size 8 (2rem)</Text>
  <Text size="10">Size 10 (2.5rem)</Text>
  <Text size="12">Size 12 (3rem)</Text>
  <Text size="16">Size 16 (4rem)</Text>
</View>`
  },
  "headings": {
    name: "Heading Sizes",
    jsx: `<View className="flex flex-col gap-2">
  <Text size="h1">Heading 1 (4rem, bold)</Text>
  <Text size="h2">Heading 2 (3rem, bold)</Text>
  <Text size="h3">Heading 3 (2rem, bold)</Text>
  <Text size="h4">Heading 4 (1.75rem, bold)</Text>
  <Text size="h5">Heading 5 (1.5rem, bold)</Text>
  <Text size="h6">Heading 6 (1.25rem, bold)</Text>
</View>`
  },
  "weights": {
    name: "Text Weights",
    jsx: `<View className="flex flex-col gap-2">
  <Text weight="light">Light weight (300)</Text>
  <Text weight="normal">Normal weight (400)</Text>
  <Text weight="regular">Regular weight (400)</Text>
  <Text weight="medium">Medium weight (500)</Text>
  <Text weight="semibold">Semibold weight (600)</Text>
  <Text weight="bold">Bold weight (700)</Text>
</View>`
  },
  "colors": {
    name: "Text Colors",
    jsx: `<View className="flex flex-col gap-2">
  <Text color="neutral">Neutral text</Text>
  <Text color="primary">Primary text</Text>
  <Text color="secondary">Secondary text</Text>
  <Text color="success">Success text</Text>
  <Text color="warning">Warning text</Text>
  <Text color="error">Error text</Text>
</View>`
  },
  "spectrums": {
    name: "Color Spectrums",
    jsx: `<View className="flex flex-col gap-2">
  <Text color="primary" spectrum="text">Text spectrum (default)</Text>
  <Text color="primary" spectrum="bg">Background spectrum</Text>
  <Text color="primary" spectrum="border">Border spectrum</Text>
  <Text color="primary" spectrum="solid">Solid spectrum</Text>
  <Text color="primary" spectrum="contrast">Contrast spectrum</Text>
</View>`
  },
  "hover-effects": {
    name: "Hover Effects",
    jsx: `<View className="flex flex-col gap-2">
  <Text color="primary" hover>Primary text with hover</Text>
  <Text color="primary" spectrum="bg" hover>Background spectrum with hover</Text>
  <Text color="primary" spectrum="border" hover>Border spectrum with hover</Text>
  <Text color="primary" spectrum="solid" hover>Solid spectrum with hover</Text>
  <Text color="primary" spectrum="contrast" hover>Contrast spectrum with hover</Text>
</View>`
  },
  "line-heights": {
    name: "Line Heights",
    jsx: `<View className="flex flex-col gap-4">
  <Text lineHeight="tight" className="max-w-xs">
    Tight line height (1.25) - This text has tight line spacing for a more compact appearance.
  </Text>
  <Text lineHeight="normal" className="max-w-xs">
    Normal line height (1.5) - This text has normal line spacing for comfortable reading.
  </Text>
  <Text lineHeight="loose" className="max-w-xs">
    Loose line height (2) - This text has loose line spacing for a more spacious layout.
  </Text>
</View>`
  },
  "font-families": {
    name: "Font Families",
    jsx: `<View className="flex flex-col gap-2">
  <Text fontFamily="inter">Inter font family</Text>
  <Text fontFamily="roboto">Roboto font family</Text>
  <Text fontFamily="robotoCondensed">Roboto Condensed font family</Text>
  <Text fontFamily="robotoSlab">Roboto Slab font family</Text>
  <Text fontFamily="libreFranklin">Libre Franklin font family</Text>
</View>`
  },
  "combined": {
    name: "Combined Typography",
    jsx: `<View className="flex flex-col gap-4">
  <Text 
    size="h1" 
    weight="bold" 
    color="primary"
    lineHeight="tight"
    fontFamily="inter"
  >
    Primary Heading
  </Text>
  <Text 
    size="lg" 
    weight="medium" 
    color="secondary"
    lineHeight="normal"
    fontFamily="roboto"
  >
    Secondary subtitle with medium weight
  </Text>
  <Text 
    size="base" 
    weight="normal" 
    color="neutral"
    lineHeight="loose"
    fontFamily="libreFranklin"
  >
    Body text with loose line height for better readability
  </Text>
</View>`
  },
  "button-text": {
    name: "Text in Buttons",
    jsx: `<View className="flex flex-col gap-3">
  <Button>
    <Text>Default Button Text</Text>
  </Button>
  
  <Button variant="solid" color="primary">
    <Text>Primary Button Text</Text>
  </Button>
  
  <Button variant="outline" color="secondary">
    <Text>Secondary Button Text</Text>
  </Button>
</View>`
  },
  "button-text-hover": {
    name: "Text with Hover in Buttons",
    jsx: `<View className="flex flex-col gap-3">
  <Button>
    <Text hover>Button Text with Hover</Text>
  </Button>
  
  <Button variant="solid" color="primary">
    <Text spectrum="contrast" hover>Primary Button Text</Text>
  </Button>
  
  <Button variant="outline" color="secondary">
    <Text spectrum="border" hover>Secondary Button Text</Text>
  </Button>
</View>`
  }
}; 