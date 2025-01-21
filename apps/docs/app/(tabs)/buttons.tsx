import { StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Text, Button, ModeToggle, ButtonIcon, ButtonSpinner, ButtonColors, ButtonVariant, ButtonSizes } from "@ds3/react/src";
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
  const buttonVariants: Array<ButtonVariant> = [
    'elevated',
    'solid',
    'soft',
    'outline',
    'dashed',
    'ghost'
  ];

  const buttonColors: Array<ButtonColors> = [
    'neutral',
    'primary',
    'secondary',
    'error',
    'warning',
    'success'
  ];

  type ButtonSizeOption = {
    size: ButtonSizes;
    label: string;
  };

  const buttonSizes: ButtonSizeOption[] = [
    { size: 'lg', label: 'Large' },
    { size: 'md', label: 'Medium' },
    { size: 'sm', label: 'Small' }
  ] as const;

  const iconLayouts = [
    {
      name: 'Prefix & Suffix Icon',
      render: (variant: string) => (
        <>
          <ButtonIcon icon={Figma} />
          <Text>{variant}</Text>
          <ButtonIcon icon={Figma} />
        </>
      )
    },
    {
      name: 'Prefix Only Icon',
      render: (variant: string) => (
        <>
          <ButtonIcon icon={Figma} />
          <Text>{variant}</Text>
        </>
      )
    },
    {
      name: 'Suffix Only Icon',
      render: (variant: string) => (
        <>
          <Text>{variant}</Text>
          <ButtonIcon icon={Figma} />
        </>
      )
    }
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
            <Text className="text-h1">Buttons</Text>

            <ModeToggle />

            <Text className="text-h2">Variants</Text>
            <View className="flex flex-row flex-wrap gap-4">
              {buttonVariants.map((variant) => (
                <Button key={variant} variant={variant}>
                  <Text>{variant.charAt(0).toUpperCase() + variant.slice(1)}</Text>
                </Button>
              ))}
            </View>

            <Text className="text-h2">Colors</Text>
            {buttonColors.map((color) => (
              <View key={color} className="flex flex-row flex-wrap gap-4">
                <Text className="flex items-center">{color.charAt(0).toUpperCase() + color.slice(1)}</Text>
                {buttonVariants.map((variant) => (
                  <Button
                    key={`${color}-${variant}`}
                    variant={variant}
                    color={color === 'neutral' ? undefined : color}
                  >
                    <Text>{variant.charAt(0).toUpperCase() + variant.slice(1)}</Text>
                  </Button>
                ))}
              </View>
            ))}

            <Text className="text-h2">Icons</Text>
            {iconLayouts.map(({ name, render }) => (
              <View key={name} className="flex flex-row flex-wrap gap-4">
                <Text className="flex items-center">{name}</Text>
                {buttonVariants.map((variant, index) => (
                  <Button
                    key={`${variant}-${index}`}
                    variant={variant}
                    color={buttonColors[index] === 'neutral' ? undefined : buttonColors[index]}
                  >
                    {render(variant.charAt(0).toUpperCase() + variant.slice(1))}
                  </Button>
                ))}
              </View>
            ))}

            <Text className="text-h2">Sizes</Text>
            {buttonSizes.map(({ size, label }) => (
              <View key={size} className="flex flex-row flex-wrap gap-4">
                <Text className="flex items-center">{label}</Text>
                {buttonVariants.map((variant, index) => (
                  <Button
                    key={`${variant}-${index}-${size}`}
                    variant={variant}
                    color={buttonColors[index] === 'neutral' ? undefined : buttonColors[index]}
                    size={size}
                  >
                    <Text>{variant.charAt(0).toUpperCase() + variant.slice(1)}</Text>
                  </Button>
                ))}
              </View>
            ))}

            <Text className="text-h2">Loading</Text>

            <View className="flex flex-row flex-wrap gap-4">
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
                <Text>Outline</Text>
                <ButtonSpinner />
              </Button>
              <Button variant="dashed" color="warning" loading>
                <Text>Dashed</Text>
                <ButtonSpinner loadingIcon={Loader} />
              </Button>
              <Button variant="ghost" color="success" loading>
                <Text>Ghost</Text>
                <ButtonSpinner loadingIcon={LoaderPinwheel} />
              </Button>

              <ButtonClickToLoad />
            </View>

            <Text className="text-h2">Disabled</Text>
            {buttonColors.map((color) => (
              <View key={color} className="flex flex-row flex-wrap gap-4">
                <Text className="flex items-center">{color.charAt(0).toUpperCase() + color.slice(1)}</Text>
                {buttonVariants.map((variant) => (
                  <Button
                    disabled
                    key={`${color}-${variant}`}
                    variant={variant}
                    color={color === 'neutral' ? undefined : color}
                  >
                    <Text>{variant.charAt(0).toUpperCase() + variant.slice(1)}</Text>
                  </Button>
                ))}
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
