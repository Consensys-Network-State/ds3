import { ScrollView, View, Pressable } from 'react-native';
import { Text, SyntaxHighlighter } from '@consensys/ds3';
import { openLink } from '@consensys/ds3';

export default function SyntaxHighlighterPage() {
  const basicExample = `import { Button } from '@consensys/ds3';

export const MyComponent = () => (
  <Button variant="solid" color="primary">
      <Button.Text>Click me</Button.Text>
  </Button>
);`;

  return (
    <ScrollView className="h-screen bg-primary-1">
      <View className="flex-1 items-center pb-4">
        <View className="w-full max-w-[1200px] px-4 h-full gap-4">
          <Text className="text-h1">Syntax Highlighter</Text>
          
          <Text className="text-h2">Basic Usage</Text>
          <Text className="text-base text-neutral-11">
            The SyntaxHighlighter component provides syntax highlighting for code snippets using prism-react-renderer.
          </Text>
          
          <View className="bg-neutral-3 p-4 rounded-lg">
            <SyntaxHighlighter code={basicExample} language="tsx" />
          </View>

          <Text className="text-h2">Language Support</Text>
          <Text className="text-base text-neutral-11">
            We support all languages available in prism-react-renderer. For a complete list of supported languages and how to add custom language support, see the{' '}
            <Pressable onPress={() => openLink('https://github.com/FormidableLabs/prism-react-renderer')}>
              <Text className="text-primary-11 underline hover:text-primary-10 cursor-pointer">
                prism-react-renderer documentation
              </Text>
            </Pressable>.
          </Text>

          <Text className="text-h2">Props</Text>
          <Text className="text-base text-neutral-11">
            The SyntaxHighlighter component supports all props from prism-react-renderer's Highlight component, including:
          </Text>
          
          <View className="bg-neutral-3 p-4 rounded-lg">
            <SyntaxHighlighter 
              code={`interface SyntaxHighlighterProps {
  code: string;
  language?: string;
  className?: string;
  theme?: PrismTheme;
  // ... all other prism-react-renderer props
}`} 
              language="typescript" 
            />
          </View>

          <Text className="text-base text-neutral-11">
            For complete API documentation and advanced usage examples, refer to the{' '}
            <Pressable onPress={() => openLink('https://github.com/FormidableLabs/prism-react-renderer')}>
              <Text className="text-primary-11 underline hover:text-primary-10 cursor-pointer">
                prism-react-renderer GitHub repository
              </Text>
            </Pressable>.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
} 