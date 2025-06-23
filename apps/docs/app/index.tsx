import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Icon, ThemeIcon, Button } from '@consensys/ds3';
import { openLink } from '@consensys/ds3';
import { useNavigation } from 'expo-router';
import { CodeBlock } from '@/components/CodeBlock';
import JSXPlayground from '@/components/JSXPlayground';
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
  ChevronDown,
} from 'lucide-react-native';

export default function HomeScreen() {  
  const navigation = useNavigation();
  
  const codeExample = `import { Button, Input, Icon } from '@consensys/ds3';`;

  const scrollToPlayground = () => {
    // Scroll to playground section
    const playgroundElement = document.getElementById('playground-section');
    if (playgroundElement) {
      playgroundElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ScrollView className="flex-1 bg-primary-1">
      {/* First Section */}
      <View className="flex-1 items-center justify-center p-6 min-h-screen bg-primary-2">
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
                <Button.Text>Docs</Button.Text>
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

            {/* Scroll to Playground Button */}
            <Button 
              variant="soft" 
              color="warning" 
              size="lg"
              className="self-center"
              onPress={scrollToPlayground}
            >
              <Button.Icon icon={ChevronDown} />
              <Button.Text>Try the Playground</Button.Text>
            </Button>
          </View>
        </View>
      </View>

      {/* Playground Section */}
      <View id="playground-section" className="w-full p-6">
        <Text size="3xl" weight="bold" className="mb-6 text-center">
          Playground
        </Text>
        
        <Text size="lg" color="neutral" className="mb-8 text-center">
          Explore component variations or write your own JSX code to see live previews.
        </Text>

        <View className="max-w-5xl w-full mx-auto min-h-screen">
          <JSXPlayground />
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