import { View, ScrollView } from 'react-native';
import { Text, Icon, ThemeIcon, Button } from '@consensys/ds3';
import { openLink } from '@consensys/ds3';
import {
  Zap,
  Globe,
  BookOpen,
  Palette,
  Triangle,
  Waves,
  Settings,
  Github,
  Earth,
} from 'lucide-react-native';

export default function HomeScreen() {  
  return (
    <ScrollView className="flex-1 bg-primary-1" contentContainerStyle={{ flexGrow: 1 }}>
      <View className="flex-1 items-center justify-center p-6">
        <View className="max-w-4xl w-full">
          <View className="flex flex-col items-center justify-center">
            <View className="flex flex-row items-center justify-center gap-6 mb-6">
              <Icon icon={ThemeIcon} className="w-[150px] h-[150px]" />
            </View>
            
            <Text size="4xl" weight="bold" className="mb-4 text-center">
              DS3 Documentation
            </Text>
            
            <Text size="xl" color="neutral" className="max-w-2xl mx-auto mb-3 text-center text-neutral-11">
              Explore the DS3 design system components and documentation.
            </Text>
            
            <View className="border-t border-neutral-6 w-full max-w-lg mx-auto mb-8" />
            
            <View className="flex flex-row flex-wrap justify-center gap-4 mb-8 max-w-2xl mx-auto px-4">
              <View className="flex flex-row items-center gap-2 min-w-[120px]">
                <Icon icon={Globe} size="md" color="primary" />
                <Text size="base" weight="medium" color="neutral">Cross-platform</Text>
              </View>
              <View className="flex flex-row items-center gap-2 min-w-[120px]">
                <Icon icon={Waves} size="md" color="secondary" />
                <Text size="base" weight="medium" color="neutral">NativeWind styling</Text>
              </View>
              <View className="flex flex-row items-center gap-2 min-w-[120px]">
                <Icon icon={Earth} size="md" color="success" />
                <Text size="base" weight="medium" color="neutral">Accessible</Text>
              </View>
              <View className="flex flex-row items-center gap-2 min-w-[120px]">
                <Icon icon={Palette} size="md" color="warning" />
                <Text size="base" weight="medium" color="neutral">Advanced theming</Text>
              </View>
              <View className="flex flex-row items-center gap-2 min-w-[120px]">
                <Icon icon={Zap} size="md" color="error" />
                <Text size="base" weight="medium" color="neutral">Web3 ready</Text>
              </View>
              <View className="flex flex-row items-center gap-2 min-w-[120px]">
                <Icon icon={Settings} size="md" color="neutral" />
                <Text size="base" weight="medium" color="neutral">Fully Customizable</Text>
              </View>
            </View>

            <View className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="solid" 
                color="primary" 
                size="lg"
                className="self-center"
                onPress={() => openLink('https://github.com/Consensys-Network-State/ds3/tree/main/packages/ui#-component-library')}
              >
                <Button.Icon icon={BookOpen} />
                <Button.Text>Component Library</Button.Text>
              </Button>
              
              <Button 
                variant="outline" 
                color="neutral" 
                size="lg"
                className="self-center"
                onPress={() => openLink('https://github.com/Consensys-Network-State/ds3')}
              >
                <Button.Icon icon={Github} />
                <Button.Text>View on Github</Button.Text>
              </Button>
            </View>
          </View>
        </View>
      </View>

      <View className="native:pb-20 pb-4">
        <View className="max-w-4xl mx-auto flex justify-center">
          <View className="flex flex-row sm:gap-8 gap-2">
            <Button
              variant="ghost"
              color="neutral"
              className="flex items-center gap-2 text-base"
              onPress={() => openLink('https://www.nativewind.dev/docs/getting-started/installation')}
            >
              <Button.Icon icon={Waves} />
              <Button.Text>NativeWind</Button.Text>
            </Button>
            <Button
              variant="ghost"
              color="neutral"
              className="flex items-center gap-2 text-base"
              onPress={() => openLink('https://docs.expo.dev/')}
            >
              <Button.Icon icon={Triangle} />
              <Button.Text>Expo</Button.Text>
            </Button>
            <Button
              variant="ghost"
              color="neutral"
              className="flex items-center gap-2 text-base"
              onPress={() => openLink('https://reactnative.dev/docs/getting-started')}
            >
              <Button.Icon icon={Globe} />
              <Button.Text>React Native</Button.Text>
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
} 