import { StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Text, Button, ModeToggle, ButtonIcon, ButtonSpinner } from "@ds3/react/src";
import { View, } from "react-native";
import { Figma, LoaderPinwheel, Loader } from 'lucide-react-native';
import { useState } from "react";

const ButtonClickToLoad = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onButtonPress = () => {
    setIsLoading(!isLoading);
  };

  return (
    <Button onPress={onButtonPress} loading={isLoading} variant="soft" color="warning">
      <ButtonSpinner icon={Figma} duration={400} />
      <Text>{isLoading ? "Click to stop" : "Click to load" }</Text>
    </Button>
  )
}

export default function Buttons() {
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
            <Text className="text-heading-12">Buttons</Text>

            <ModeToggle />

            <Text className="text-heading-8">Variants</Text>

            <View className="flex flex-row flex-wrap gap-4">
              <Button variant="elevated">
                <Text>Elevated</Text>
              </Button>
              <Button variant="solid">
                <Text>Solid</Text>
              </Button>
              <Button variant="soft">
                <Text>Soft</Text>
              </Button>
              <Button variant="outline">
                <Text>Outline</Text>
              </Button>
              <Button variant="dashed">
                <Text>Dashed</Text>
              </Button>
              <Button variant="ghost">
                <Text>Ghost</Text>
              </Button>
            </View>

            <Text className="text-heading-8">Colors</Text>
            <View className="flex flex-row flex-wrap gap-4">
              <Text className="flex items-center">Neutral</Text>
              <Button variant="elevated">
                <Text>Elevated</Text>
              </Button>
              <Button variant="solid">
                <Text>Solid</Text>
              </Button>
              <Button variant="soft">
                <Text>Soft</Text>
              </Button>
              <Button variant="outline">
                <Text>Outline</Text>
              </Button>
              <Button variant="dashed">
                <Text>Dashed</Text>
              </Button>
              <Button variant="ghost">
                <Text>Ghost</Text>
              </Button>
            </View>

            <View className="flex flex-row flex-wrap gap-4">
              <Text className="flex items-center">Primary</Text>
              <Button variant="elevated" color="primary">
                <Text>Elevated</Text>
              </Button>
              <Button variant="solid" color="primary">
                <Text>Solid</Text>
              </Button>
              <Button variant="soft" color="primary">
                <Text>Soft</Text>
              </Button>
              <Button variant="outline" color="primary">
                <Text>Outline</Text>
              </Button>
              <Button variant="dashed" color="primary">
                <Text>Dashed</Text>
              </Button>
              <Button variant="ghost" color="primary">
                <Text>Ghost</Text>
              </Button>
            </View>

            <View className="flex flex-row flex-wrap gap-4">
              <Text className="flex items-center">Secondary</Text>
              <Button variant="elevated" color="secondary">
                <Text>Elevated</Text>
              </Button>
              <Button variant="solid" color="secondary">
                <Text>Solid</Text>
              </Button>
              <Button variant="soft" color="secondary">
                <Text>Soft</Text>
              </Button>
              <Button variant="outline" color="secondary">
                <Text>Outline</Text>
              </Button>
              <Button variant="dashed" color="secondary">
                <Text>Dashed</Text>
              </Button>
              <Button variant="ghost" color="secondary">
                <Text>Ghost</Text>
              </Button>
            </View>

            <View className="flex flex-row flex-wrap gap-4">
              <Text className="flex items-center">Error</Text>
              <Button variant="elevated" color="error">
                <Text>Elevated</Text>
              </Button>
              <Button variant="solid" color="error">
                <Text>Solid</Text>
              </Button>
              <Button variant="soft" color="error">
                <Text>Soft</Text>
              </Button>
              <Button variant="outline" color="error">
                <Text>Outline</Text>
              </Button>
              <Button variant="dashed" color="error">
                <Text>Dashed</Text>
              </Button>
              <Button variant="ghost" color="error">
                <Text>Ghost</Text>
              </Button>
            </View>

            <View className="flex flex-row flex-wrap gap-4">
              <Text className="flex items-center">Warning</Text>
              <Button variant="elevated" color="warning">
                <Text>Elevated</Text>
              </Button>
              <Button variant="solid" color="warning">
                <Text>Solid</Text>
              </Button>
              <Button variant="soft" color="warning">
                <Text>Soft</Text>
              </Button>
              <Button variant="outline" color="warning">
                <Text>Outline</Text>
              </Button>
              <Button variant="dashed" color="warning">
                <Text>Dashed</Text>
              </Button>
              <Button variant="ghost" color="warning">
                <Text>Ghost</Text>
              </Button>
            </View>

            <View className="flex flex-row flex-wrap gap-4">
              <Text className="flex items-center">Sucess</Text>
              <Button variant="elevated" color="success">
                <Text>Elevated</Text>
              </Button>
              <Button variant="solid" color="success">
                <Text>Solid</Text>
              </Button>
              <Button variant="soft" color="success">
                <Text>Soft</Text>
              </Button>
              <Button variant="outline" color="success">
                <Text>Outline</Text>
              </Button>
              <Button variant="dashed" color="success">
                <Text>Dashed</Text>
              </Button>
              <Button variant="ghost" color="success">
                <Text>Ghost</Text>
              </Button>
            </View>

            <Text className="text-heading-8">Icons</Text>

            <View className="flex flex-row flex-wrap gap-4">
              <Text className="flex items-center">Prefix & Suffix Icon</Text>
              <Button variant="elevated">
                <ButtonIcon icon={Figma} />
                <Text>Elevated</Text>
                <ButtonIcon icon={Figma} />
              </Button>
              <Button variant="solid" color="primary">
                <ButtonIcon icon={Figma} />
                <Text>Solid</Text>
                <ButtonIcon icon={Figma} />
              </Button>
              <Button variant="soft" color="secondary">
                <ButtonIcon icon={Figma} />
                <Text>Soft</Text>
                <ButtonIcon icon={Figma} />
              </Button>
              <Button variant="outline" color="error">
                <ButtonIcon icon={Figma} />
                <Text>Outline</Text>
                <ButtonIcon icon={Figma} />
              </Button>
              <Button variant="dashed" color="warning">
                <ButtonIcon icon={Figma} />
                <Text>Dashed</Text>
                <ButtonIcon icon={Figma} />
              </Button>
              <Button variant="ghost" color="success">
                <ButtonIcon icon={Figma} />
                <Text>Ghost</Text>
                <ButtonIcon icon={Figma} />
              </Button>
            </View>

            <View className="flex flex-row flex-wrap gap-4">
              <Text className="flex items-center">Prefix Only Icon</Text>
              <Button variant="elevated">
                <ButtonIcon icon={Figma} />
                <Text>Elevated</Text>
              </Button>
              <Button variant="solid" color="primary">
                <ButtonIcon icon={Figma} />
                <Text>Solid</Text>
              </Button>
              <Button variant="soft" color="secondary">
                <ButtonIcon icon={Figma} />
                <Text>Soft</Text>
              </Button>
              <Button variant="outline" color="error">
                <ButtonIcon icon={Figma} />
                <Text>Outline</Text>
              </Button>
              <Button variant="dashed" color="warning">
                <ButtonIcon icon={Figma} />
                <Text>Dashed</Text>
              </Button>
              <Button variant="ghost" color="success">
                <ButtonIcon icon={Figma} />
                <Text>Ghost</Text>
              </Button>
            </View>

            <View className="flex flex-row flex-wrap gap-4">
              <Text className="flex items-center">Suffix Only Icon</Text>
              <Button variant="elevated">
                <Text>Elevated</Text>
                <ButtonIcon icon={Figma} />
              </Button>
              <Button variant="solid" color="primary">
                <Text>Solid</Text>
                <ButtonIcon icon={Figma} />
              </Button>
              <Button variant="soft" color="secondary">
                <Text>Soft</Text>
                <ButtonIcon icon={Figma} />
              </Button>
              <Button variant="outline" color="error">
                <Text>Outline</Text>
                <ButtonIcon icon={Figma} />
              </Button>
              <Button variant="dashed" color="warning">
                <Text>Dashed</Text>
                <ButtonIcon icon={Figma} />
              </Button>
              <Button variant="ghost" color="success">
                <Text>Ghost</Text>
                <ButtonIcon icon={Figma} />
              </Button>
            </View>

            <View className="flex flex-row flex-wrap gap-4">
              <Text className="flex items-center">Loading Prefix Icon</Text>
              <Button variant="elevated" loading>
                <ButtonSpinner />
                <Text>Elevated</Text>
              </Button>
              <Button variant="solid" color="primary" loading>
                <ButtonSpinner loadingIcon={Loader} />
                <Text>Solid</Text>
              </Button>
              <Button variant="soft" color="secondary" loading>
                <ButtonSpinner loadingIcon={LoaderPinwheel} />
                <Text>Soft</Text>
              </Button>
              <Button variant="outline" color="error" loading>
                <ButtonSpinner />
                <Text>Outline</Text>
              </Button>
              <Button variant="dashed" color="warning" loading>
                <ButtonSpinner loadingIcon={Loader} />
                <Text>Dashed</Text>
              </Button>
              <Button variant="ghost" color="success" loading>
                <ButtonSpinner loadingIcon={LoaderPinwheel} />
                <Text>Ghost</Text>
              </Button>

              <ButtonClickToLoad />
            </View>

            <Text className="text-heading-8">Sizes</Text>

            <View className="flex flex-row flex-wrap gap-4">
              <Text className="flex items-center">Large</Text>
              <Button variant="elevated" size="lg">
                <Text>Elevated</Text>
              </Button>
              <Button variant="solid" size="lg">
                <Text>Solid</Text>
              </Button>
              <Button variant="soft" size="lg">
                <Text>Soft</Text>
              </Button>
              <Button variant="outline" size="lg">
                <Text>Outline</Text>
              </Button>
              <Button variant="dashed" size="lg">
                <Text>Dashed</Text>
              </Button>
              <Button variant="ghost" size="lg">
                <Text>Ghost</Text>
              </Button>
            </View>

            <View className="flex flex-row flex-wrap gap-4">
              <Text className="flex items-center">Medium (default)</Text>
              <Button variant="elevated">
                <Text>Elevated</Text>
              </Button>
              <Button variant="solid">
                <Text>Solid</Text>
              </Button>
              <Button variant="soft">
                <Text>Soft</Text>
              </Button>
              <Button variant="outline">
                <Text>Outline</Text>
              </Button>
              <Button variant="dashed">
                <Text>Dashed</Text>
              </Button>
              <Button variant="ghost">
                <Text>Ghost</Text>
              </Button>
            </View>

            <View className="flex flex-row flex-wrap gap-4">
              <Text className="flex items-center">Small</Text>
              <Button variant="elevated" size="sm">
                <Text>Elevated</Text>
              </Button>
              <Button variant="solid" size="sm">
                <Text>Solid</Text>
              </Button>
              <Button variant="soft" size="sm">
                <Text>Soft</Text>
              </Button>
              <Button variant="outline" size="sm">
                <Text>Outline</Text>
              </Button>
              <Button variant="dashed" size="sm">
                <Text>Dashed</Text>
              </Button>
              <Button variant="ghost" size="sm">
                <Text>Ghost</Text>
              </Button>
            </View>

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
