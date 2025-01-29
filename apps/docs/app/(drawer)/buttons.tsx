import { ScrollView } from 'react-native';
import { Text, Button, IconButton } from "@ds3/react/src";
import type { ButtonColors, ButtonVariant, ButtonSizes } from "@ds3/react/src";
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
      <Button.Spinner icon={Figma} duration={400} />
      <Button.Text>{isLoading ? "Click to stop" : "Click to load" }</Button.Text>
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
          <Button.Icon icon={Figma} />
          <Button.Text>{variant}</Button.Text>
          <Button.Icon icon={Figma} />
        </>
      )
    },
    {
      name: 'Prefix Only Icon',
      render: (variant: string) => (
        <>
          <Button.Icon icon={Figma} />
          <Button.Text>{variant}</Button.Text>
        </>
      )
    },
    {
      name: 'Suffix Only Icon',
      render: (variant: string) => (
        <>
          <Button.Text>{variant}</Button.Text>
          <Button.Icon icon={Figma} />
        </>
      )
    }
  ];

  return (
    <ScrollView className="h-screen bg-neutral-1">
      <View className="flex-1 items-center pb-4">
        <View className="w-full max-w-[1200px] px-4 h-full gap-4">
          <Text className="text-h1">Buttons</Text>

          <Text className="text-h2">Variants</Text>
          <View className="flex flex-row flex-wrap gap-4">
            {buttonVariants.map((variant) => (
              <Button key={variant} variant={variant}>
                <Button.Text>{variant.charAt(0).toUpperCase() + variant.slice(1)}</Button.Text>
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
                  <Button.Text>{variant.charAt(0).toUpperCase() + variant.slice(1)}</Button.Text>
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
                  <Button.Text>{variant.charAt(0).toUpperCase() + variant.slice(1)}</Button.Text>
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

          <Text className="text-h2">Button Icon</Text>
          {buttonSizes.map(({ size, label }) => (
            <View key={size} className="flex flex-row flex-wrap gap-4">
              <Text className="flex items-center">{label}</Text>
              {buttonVariants.map((variant, index) => (
                <IconButton
                  key={`${variant}-${size}-icon-only`}
                  variant={variant}
                  color={buttonColors[index] === 'neutral' ? undefined : buttonColors[index]}
                  size={size}
                  icon={Figma}
                />
              ))}
            </View>
          ))}

          <Text className="text-h2">Loading</Text>

          <View className="flex flex-row flex-wrap gap-4">
            <Button variant="elevated" loading>
              <Button.Spinner />
              <Button.Text>Elevated</Button.Text>
            </Button>
            <Button variant="solid" color="primary" loading>
              <Button.Spinner loadingIcon={Loader} />
              <Button.Text>Solid</Button.Text>
            </Button>
            <Button variant="soft" color="secondary" loading>
              <Button.Spinner loadingIcon={LoaderPinwheel} />
              <Button.Text>Soft</Button.Text>
            </Button>
            <Button variant="outline" color="error" loading>
              <Button.Text>Outline</Button.Text>
              <Button.Spinner />
            </Button>
            <Button variant="dashed" color="warning" loading>
              <Button.Text>Dashed</Button.Text>
              <Button.Spinner loadingIcon={Loader} />
            </Button>
            <Button variant="ghost" color="success" loading>
              <Button.Text>Ghost</Button.Text>
              <Button.Spinner loadingIcon={LoaderPinwheel} />
            </Button>

            <Button variant="soft" color="secondary" loading disabled>
              <Button.Text>Disabled and loading</Button.Text>
              <Button.Spinner loadingIcon={LoaderPinwheel} />
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
                  <Button.Text>{variant.charAt(0).toUpperCase() + variant.slice(1)}</Button.Text>
                </Button>
              ))}
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
