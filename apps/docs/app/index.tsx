import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Icon, ThemeIcon, Button } from '@consensys/ds3';
import { Playground } from '@consensys/ds3-playground';
import { ExpoIcon } from './components/ExpoIcon';
import { ViteIcon } from './components/ViteIcon';
import { NextJsIcon } from './components/NextJsIcon';
import {
  ChevronDown,
} from 'lucide-react-native';

export default function HomeScreen() {  
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
              Build breathtaking interfaces for web, mobile, and web3 with a single component library that feels native everywhere. Modular, universal, and ready for any platform.
            </Text>

            {/* CTA Buttons */}
            
            
            <View className="border-t border-neutral-6 w-full max-w-lg mx-auto mb-8" />
            
            {/* Template Explanation */}
            <Text size="lg" color="neutral" className="mb-6 text-center text-neutral-11">
              Select framework to get started:
            </Text>
            
            {/* Platform Icons */}
            <View className="flex flex-row items-center justify-center gap-8 mb-8">
              <Button variant="ghost" color="neutral" size="lg" className="flex flex-col items-center gap-2">
                <Button.Icon icon={ViteIcon} size={32} />
                <Button.Text>Vite</Button.Text>
              </Button>
              <Button variant="ghost" color="neutral" size="lg" className="flex flex-col items-center gap-2">
                <Button.Icon icon={NextJsIcon} size={32} className='text-neutral-12' />
                <Button.Text>Next.js</Button.Text>
              </Button>
              <Button variant="ghost" color="neutral" size="lg" className="flex flex-col items-center gap-2">
                <Button.Icon icon={ExpoIcon} size={32} />
                <Button.Text>Expo</Button.Text>
              </Button>
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
          <Playground />
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