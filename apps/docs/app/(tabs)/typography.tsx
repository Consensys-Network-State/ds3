import { StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Text, ModeToggle } from "@ds3/react/src";
import { View, } from "react-native";

export default function Typography() {
  const lineHeights = ['leading-tight', 'leading-normal', 'leading-loose'];

  const fontFamilies = [
    'font-inter',
    'font-roboto',
    'font-robotoCondensed',
    'font-robotoSlab',
    'font-libreFranklin'
  ];

  const fontWeights = [
    'font-light',
    'font-regular',
    'font-medium',
    'font-bold'
  ];

  const fontSizes = [
    'text-2',
    'text-2.5',
    'text-3',
    'text-3.5',
    'text-4',
    'text-4.5',
    'text-5',
    'text-5.5',
    'text-6',
    'text-7',
    'text-8',
    'text-10',
    'text-12',
    'text-14',
    'text-16'
  ];

  const textPresets = [
    'text-xl',
    'text-lg',
    'text-base',
    'text-sm',
    'text-xs'
  ];

  const headingPresets = [
    'text-h1',
    'text-h2',
    'text-h3',
    'text-h4',
    'text-h5',
    'text-h6'
  ];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
        <View className="flex-1 items-center">
          <View className="w-full max-w-[1200px] px-4 bg-neutral-1 h-full gap-4">
            <Text className="text-h1">Typography</Text>

            <ModeToggle />

            <Text className="text-h2">Font Family</Text>

            {fontFamilies.map((font) => (
              <View key={font} className="flex flex-row flex-wrap gap-4">
                <Text className="flex items-center">{font}</Text>
                <Text className={font}>The quick brown fox jumps over the lazy dog.</Text>
              </View>
            ))}

            <Text className="text-h2">Font Weight</Text>
            <Text>Refer to tailwind docs - https://tailwindcss.com/docs/font-weight</Text>

            {fontWeights.map((weight) => (
              <View key={weight} className="flex flex-row flex-wrap gap-4">
                <Text className="flex items-center">{weight}</Text>
                <Text className={weight}>The quick brown fox jumps over the lazy dog.</Text>
              </View>
            ))}

            <Text className="text-h2">Font Size</Text>

            {fontSizes.map((size) => (
              <View key={size} className="flex flex-row flex-wrap gap-4">
                <Text className="flex items-center">{size}</Text>
                <Text className={size}>The quick brown fox jumps over the lazy dog.</Text>
              </View>
            ))}

            <Text className="text-h2">Line Height</Text>

            {lineHeights.map((height) => (
              <View key={height} className="flex flex-row flex-wrap gap-4">
                <Text className="flex items-center">{height}</Text>
                <Text className={height}>The quick brown fox jumps over the lazy dog.</Text>
              </View>
            ))}

            <Text className="text-h2">Text Presets</Text>

            {textPresets.map((preset) => (
              <View key={preset} className="flex flex-row flex-wrap gap-4">
                <Text className="flex items-center">{preset}</Text>
                <Text className={preset}>The quick brown fox jumps over the lazy dog.</Text>
              </View>
            ))}

            <Text className="text-h2">Heading Presets</Text>

            {headingPresets.map((preset) => (
              <View key={preset} className="flex flex-row flex-wrap gap-4">
                <Text className="flex items-center">{preset}</Text>
                <Text className={preset}>The quick brown fox jumps over the lazy dog.</Text>
              </View>
            ))}

          </View>
        </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
