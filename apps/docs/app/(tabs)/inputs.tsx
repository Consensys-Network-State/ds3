import { StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Text, Input, ModeToggle } from "@ds3/react/src";
import { View } from "react-native";
import { Search, Eye, Mail, Lock, Loader, LoaderPinwheel } from 'lucide-react-native';
import { useState } from "react";

const InputClickToLoad = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onInputPress = () => {
    setIsLoading(!isLoading);
  };

  return (
    <Input variant="soft" color="warning" loading={isLoading} onPress={onInputPress} className="flex-1 min-w-[250px]">
      <Input.Spinner icon={Search} />
      <Input.Field placeholder={isLoading ? "Loading..." : "Click to load"} />
    </Input>
  );
};

type InputVariant = 'soft' | 'outline' | 'underline' | 'ghost';
type InputColor = 'neutral' | 'primary' | 'secondary' | 'error' | 'warning' | 'success';

export default function Inputs() {
  const inputVariants: Array<InputVariant> = [
    'soft',
    'outline',
    'underline',
    'ghost'
  ];

  const inputColors: Array<InputColor> = [
    'neutral',
    'primary',
    'secondary',
    'error',
    'warning',
    'success'
  ];

  const iconLayouts = [
    {
      name: 'Start & End Icon',
      render: (variant: InputVariant, color: InputColor) => (
        <Input variant={variant} color={color}>
          <Input.Icon icon={Search} />
          <Input.Field placeholder={variant} />
          <Input.Icon icon={Eye} />
        </Input>
      ),
      colors: ['primary', 'secondary', 'success', 'error'] as InputColor[]
    },
    {
      name: 'Start Only Icon',
      render: (variant: InputVariant, color: InputColor) => (
        <Input variant={variant} color={color}>
          <Input.Icon icon={Mail} />
          <Input.Field placeholder={variant} />
        </Input>
      ),
      colors: ['secondary', 'error', 'primary', 'success'] as InputColor[]
    },
    {
      name: 'End Only Icon',
      render: (variant: InputVariant, color: InputColor) => (
        <Input variant={variant} color={color}>
          <Input.Field placeholder={variant} />
          <Input.Icon icon={Lock} />
        </Input>
      ),
      colors: ['success', 'primary', 'error', 'secondary'] as InputColor[]
    }
  ];

  const commonInputExamples = [
    {
      name: 'Search Input',
      render: (variant: InputVariant, color: InputColor) => (
        <Input variant={variant} color={color}>
          <Input.Icon icon={Search} />
          <Input.Field placeholder="Search..." />
        </Input>
      )
    },
    {
      name: 'Password Input',
      render: (variant: InputVariant, color: InputColor) => (
        <Input variant={variant} color={color}>
          <Input.Icon icon={Lock} />
          <Input.Field placeholder="Enter password" secureTextEntry />
          <Input.Icon icon={Eye} />
        </Input>
      )
    },
    {
      name: 'Email Input',
      render: (variant: InputVariant, color: InputColor) => (
        <Input variant={variant} color={color}>
          <Input.Icon icon={Mail} />
          <Input.Field placeholder="Enter email" keyboardType="email-address" />
        </Input>
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
          <Text className="text-h1">Inputs</Text>

          <ModeToggle />

          <Text className="text-h2">Variants</Text>
          <View className="flex flex-row flex-wrap gap-4 ">
            {inputVariants.map((variant, index) => (
              <View key={`${variant}-${index}`} className="flex-1 min-w-[250px]">
                <Input variant={variant}>
                  <Input.Field
                    placeholder={variant.charAt(0).toUpperCase() + variant.slice(1)}
                  />
                </Input>
              </View>
            ))}
          </View>

          <Text className="text-h2">Colors</Text>
          {inputColors.map((color) => (
            <View key={color} className="flex flex-col gap-4">
              <Text>{color.charAt(0).toUpperCase() + color.slice(1)}</Text>
              <View className="flex flex-row flex-wrap gap-4">
                {inputVariants.map((variant, index) => (
                  <View key={`${variant}-${index}`} className="flex-1 min-w-[250px]">
                    <Input
                      variant={variant}
                      color={color === 'neutral' ? undefined : color}
                    >
                      <Input.Field
                        placeholder={variant.charAt(0).toUpperCase() + variant.slice(1)}
                      />
                    </Input>
                  </View>
                ))}
              </View>
            </View>
          ))}

          <Text className="text-h2">Icons</Text>
          {iconLayouts.map(({ name, render, colors }) => (
            <View key={name} className="flex flex-col gap-4">
              <Text>{name}</Text>
              <View className="flex flex-row flex-wrap gap-4">
                {inputVariants.map((variant, index) => (
                  <View key={`${variant}-${index}`} className="flex-1 basis-[calc(25%-12px)] min-w-[200px]">
                    {render(variant, colors[index])}
                  </View>
                ))}
              </View>
            </View>
          ))}

          <Text className="text-h2">Common Examples</Text>
          {commonInputExamples.map(({ name, render }) => (
            <View key={name} className="flex flex-col gap-4">
              <Text>{name}</Text>
              <View className="flex flex-row flex-wrap gap-4">
                {inputVariants.map((variant, index) => (
                  <View key={`${variant}-${index}`} className="flex-1 min-w-[250px]">
                    {render(variant, inputColors[index] as InputColor)}
                  </View>
                ))}
              </View>
            </View>
          ))}

          <Text className="text-h2">Loading</Text>
          <View className="flex flex-row flex-wrap gap-4">
            <Input variant="outline" loading className="flex-1 min-w-[250px]">
              <Input.Spinner />
              <Input.Field placeholder="Outline" />
            </Input>

            <Input variant="soft" color="primary" loading className="flex-1 min-w-[250px]">
              <Input.Field placeholder="Soft" />
              <Input.Spinner loadingIcon={Loader} />
            </Input>

            <Input variant="underline" color="secondary" loading className="flex-1 min-w-[250px]">
              <Input.Spinner loadingIcon={LoaderPinwheel} />
              <Input.Field placeholder="Underline" />
            </Input>

            <Input variant="ghost" color="error" loading className="flex-1 min-w-[250px]">
              <Input.Field placeholder="Ghost" />
              <Input.Spinner />
            </Input>

            <Input variant="outline" color="warning" loading className="flex-1 min-w-[250px]">
              <Input.Spinner loadingIcon={Loader} />
              <Input.Field placeholder="With custom loader" />
            </Input>

            <Input variant="soft" color="success" loading className="flex-1 min-w-[250px]">
              <Input.Field placeholder="With pinwheel" />
              <Input.Spinner loadingIcon={LoaderPinwheel} />
            </Input>

            <Input variant="soft" color="primary" loading disabled className="flex-1 min-w-[250px]">
              <Input.Spinner />
              <Input.Field placeholder="Disabled and loading" />
            </Input>

            <InputClickToLoad />
          </View>

          <Text className="text-h2">Disabled</Text>
          {inputColors.map((color) => (
            <View key={color} className="flex flex-col gap-4">
              <Text>{color.charAt(0).toUpperCase() + color.slice(1)}</Text>
              <View className="flex flex-row flex-wrap gap-4">
                {inputVariants.map((variant, index) => (
                  <View key={`${variant}-${index}`} className="flex-1 min-w-[250px]">
                    <Input
                      variant={variant}
                      color={color === 'neutral' ? undefined : color}
                      disabled
                    >
                      <Input.Field
                        placeholder={variant.charAt(0).toUpperCase() + variant.slice(1)}
                      />
                    </Input>
                  </View>
                ))}
              </View>
            </View>
          ))}

          <Text className="text-h2">TextArea</Text>
          {inputColors.map((color) => (
            <View key={color} className="flex flex-col gap-4">
              <Text>{color.charAt(0).toUpperCase() + color.slice(1)}</Text>
              <View className="flex flex-row flex-wrap gap-4">
                {inputVariants.map((variant) => (
                  <View key={`${variant}-${color}`} className="flex-1 min-w-[250px]">
                    <Input
                      multiline
                      numberOfLines={4}
                      variant={variant}
                      color={color === 'neutral' ? undefined : color}
                    >
                      <Input.Field placeholder={variant.charAt(0).toUpperCase() + variant.slice(1)} />
                    </Input>
                  </View>
                ))}
              </View>
            </View>
          ))}

          <View className="flex flex-row flex-wrap gap-4">
            <View className="flex-1 min-w-[250px]">
              <Input multiline numberOfLines={4} loading>
                <Input.Spinner />
                <Input.Field placeholder="Loading" />
              </Input>
            </View>

            <View className="flex-1 min-w-[250px]">
              <Input multiline numberOfLines={4} disabled>
                <Input.Field placeholder="Disabled" />
              </Input>
            </View>

            <View className="flex-1 min-w-[250px]">
              <Input multiline numberOfLines={4}>
                <Input.Icon icon={Search} />
                <Input.Field placeholder="With icon..." />
              </Input>
            </View>
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
});