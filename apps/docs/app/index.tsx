import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Icon, ThemeIcon, Button } from '@consensys/ds3';
import { openLink } from '@consensys/ds3';
import { useNavigation } from 'expo-router';
import { CodeBlock } from '@/components/CodeBlock';
import {
  Globe,
  BookOpen,
  Palette,
  Github,
  Sparkles,
  Code,
  Smartphone,
  Monitor,
  Layers,
  Puzzle,
  Shield,
  Rocket,
  Star,
  Heart,
  Target,
} from 'lucide-react-native';

export default function HomeScreen() {  
  const navigation = useNavigation();
  
  const codeExample = `import { Button, Input, Icon } from '@consensys/ds3';`;

  return (
    <ScrollView className="flex-1 bg-primary-1" contentContainerStyle={{ flexGrow: 1 }}>
      <View className="flex-1 items-center justify-center p-6">
        <View className="max-w-4xl w-full">
          <View className="flex flex-col items-center justify-center">
            {/* Hero Section */}
            <View className="flex flex-row items-center justify-center gap-6 mb-6">
              <Icon icon={ThemeIcon} className="w-[150px] h-[150px]" />
            </View>
            
            <Text size="4xl" weight="bold" className="mb-6 text-center">
              Design System 3
            </Text>
            
            <Text size="xl" color="neutral" className="max-w-3xl mx-auto mb-7 text-center text-neutral-11">
              Build breathtaking interfaces for both web and React Native with a single component library that feels native everywhere. One import. Any platform. Native everywhere.
            </Text>

            <CodeBlock 
              code={codeExample}
              language="javascript"
              className="mb-8"
            />

            <CodeBlock
              code={`<Button variant="solid" color="primary">
  <Button.Text>Hello World</Button.Text>
</Button>`}
              language="tsx"
              preview
              scope={{ Button, React }}
              className="mb-8"
            />

            {/* CTA Buttons */}
            <View className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                variant="solid" 
                color="primary" 
                size="lg"
                className="self-center"
                onPress={() => (navigation as any).openDrawer?.()}
              >
                <Button.Icon icon={BookOpen} />
                <Button.Text>Explore Components</Button.Text>
              </Button>
              
              <Button 
                variant="solid" 
                color="secondary" 
                size="lg"
                className="self-center"
                onPress={() => (navigation as any).navigate?.('jsx-playground')}
              >
                <Button.Icon icon={Code} />
                <Button.Text>JSX Playground</Button.Text>
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
            
            <View className="border-t border-neutral-6 w-full max-w-lg mx-auto mb-8" />
            
            {/* Key Features Grid */}
            <View className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              {/* Cross-Platform */}
              <View className="bg-neutral-2 rounded-lg p-6 border border-neutral-5">
                <View className="flex flex-row items-center gap-3 mb-3">
                  <Icon icon={Globe} size="lg" color="primary" />
                  <Text size="lg" weight="bold" color="primary">True Cross-Platform</Text>
                </View>
                <Text size="sm" color="neutral" className="text-neutral-11">
                  Components work natively on web and React Native with platform-specific optimizations
                </Text>
              </View>

              {/* Dual API */}
              <View className="bg-neutral-2 rounded-lg p-6 border border-neutral-5">
                <View className="flex flex-row items-center gap-3 mb-3">
                  <Icon icon={Code} size="lg" color="secondary" />
                  <Text size="lg" weight="bold" color="secondary">Dual API System</Text>
                </View>
                <Text size="sm" color="neutral" className="text-neutral-11">
                  Use familiar web APIs or React Native patterns - your choice, no compromise
                </Text>
              </View>

              {/* Compound Components */}
              <View className="bg-neutral-2 rounded-lg p-6 border border-neutral-5">
                <View className="flex flex-row items-center gap-3 mb-3">
                  <Icon icon={Puzzle} size="lg" color="success" />
                  <Text size="lg" weight="bold" color="success">Compound Components</Text>
                </View>
                <Text size="sm" color="neutral" className="text-neutral-11">
                  Simple by default, infinitely customizable when needed
                </Text>
              </View>

              {/* Accessibility */}
              <View className="bg-neutral-2 rounded-lg p-6 border border-neutral-5">
                <View className="flex flex-row items-center gap-3 mb-3">
                  <Icon icon={Shield} size="lg" color="warning" />
                  <Text size="lg" weight="bold" color="warning">Accessibility Built-in</Text>
                </View>
                <Text size="sm" color="neutral" className="text-neutral-11">
                  Ship inclusive experiences without extra effort
                </Text>
              </View>

              {/* Universal SVG */}
              <View className="bg-neutral-2 rounded-lg p-6 border border-neutral-5">
                <View className="flex flex-row items-center gap-3 mb-3">
                  <Icon icon={Star} size="lg" color="error" />
                  <Text size="lg" weight="bold" color="error">Universal SVG</Text>
                </View>
                <Text size="sm" color="neutral" className="text-neutral-11">
                  Use your favorite icon libraries seamlessly on any platform
                </Text>
              </View>

              {/* Advanced Theming */}
              <View className="bg-neutral-2 rounded-lg p-6 border border-neutral-5">
                <View className="flex flex-row items-center gap-3 mb-3">
                  <Icon icon={Palette} size="lg" color="neutral" />
                  <Text size="lg" weight="bold" color="neutral">Advanced Theming</Text>
                </View>
                <Text size="sm" color="neutral" className="text-neutral-11">
                  Powerful, customizable theming with dark/light mode and color schemes
                </Text>
              </View>
            </View>

            {/* Architectural Excellence Section */}
            <View className="mb-12 max-w-4xl mx-auto">
              <Text size="2xl" weight="bold" className="mb-6 text-center">
                🏛️ Architectural Excellence
              </Text>
              <Text size="lg" color="neutral" className="mb-8 text-center text-neutral-11">
                DS3 is built on six powerful architectural patterns that work together to deliver exceptional developer and user experiences
              </Text>
              
              <View className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <View className="flex flex-row items-start gap-3 p-4">
                  <Icon icon={Target} size="md" color="primary" className="mt-1 flex-shrink-0" />
                  <View className="flex-1">
                    <Text size="base" weight="bold" color="primary" className="mb-2">Platform Adaptation</Text>
                    <Text size="sm" color="neutral" className="text-neutral-11 leading-relaxed">
                      Components intelligently adapt to their environment while maintaining consistent APIs
                    </Text>
                  </View>
                </View>
                
                <View className="flex flex-row items-start gap-3 p-4">
                  <Icon icon={Layers} size="md" color="secondary" className="mt-1 flex-shrink-0" />
                  <View className="flex-1">
                    <Text size="base" weight="bold" color="secondary" className="mb-2">Framework Integration</Text>
                    <Text size="sm" color="neutral" className="text-neutral-11 leading-relaxed">
                      Consistent experience across Vite, Expo, Next.js and more
                    </Text>
                  </View>
                </View>
                
                <View className="flex flex-row items-start gap-3 p-4">
                  <Icon icon={Heart} size="md" color="success" className="mt-1 flex-shrink-0" />
                  <View className="flex-1">
                    <Text size="base" weight="bold" color="success" className="mb-2">Accessibility By Default</Text>
                    <Text size="sm" color="neutral" className="text-neutral-11 leading-relaxed">
                      ARIA mapping, keyboard navigation, and screen reader optimization
                    </Text>
                  </View>
                </View>
                
                <View className="flex flex-row items-start gap-3 p-4">
                  <Icon icon={Sparkles} size="md" color="warning" className="mt-1 flex-shrink-0" />
                  <View className="flex-1">
                    <Text size="base" weight="bold" color="warning" className="mb-2">Unified Styling</Text>
                    <Text size="sm" color="neutral" className="text-neutral-11 leading-relaxed">
                      Tailwind CSS + NativeWind for styling that feels native everywhere
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Platform Icons */}
            <View className="flex flex-row items-center justify-center gap-8 mb-8">
              <View className="flex flex-col items-center gap-2">
                <Icon icon={Monitor} size="lg" color="primary" />
                <Text size="sm" weight="medium" color="neutral">Web</Text>
              </View>
              <View className="flex flex-col items-center gap-2">
                <Icon icon={Smartphone} size="lg" color="secondary" />
                <Text size="sm" weight="medium" color="neutral">Mobile</Text>
              </View>
              <View className="flex flex-col items-center gap-2">
                <Icon icon={Rocket} size="lg" color="success" />
                <Text size="sm" weight="medium" color="neutral">Universal</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Footer Links */}
      <View className="native:pb-20 pb-4">
        <View className="max-w-4xl mx-auto flex justify-center">
          <Text size="sm" color="neutral" className="text-neutral-11 text-center">
            Made with ❤️ by Consensys
          </Text>
        </View>
      </View>
    </ScrollView>
  );
} 