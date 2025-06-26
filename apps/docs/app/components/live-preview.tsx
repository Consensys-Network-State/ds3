import React from 'react';
import { ScrollView } from 'react-native';
import { View, Text, Button, Highlight } from '@consensys/ds3';
import { LivePreview } from '@consensys/ds3-playground';

export default function LivePreviewDemoPage() {
  // Pattern 1: Simple JSX snippet
  const simpleJSX = `<Button>Hello World</Button>`;

  // Pattern 2: Component body with hooks
  const componentBody = `
const [count, setCount] = useState(0);

return (
  <View className="p-4 gap-4">
    <Text size="lg" color="primary">Counter Example</Text>
    <Text size="md" color="neutral">Count: {count}</Text>
    <Button variant="outline" onPress={() => setCount(count + 1)}>
      Click me! ({count})
    </Button>
  </View>
);
`;

  // Pattern 3: Full component declaration
  const fullComponent = `
const Component = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  return (
    <View className="p-4 gap-4">
      <Text size="lg" color="primary">Toggle Example</Text>
      {isVisible && (
        <Text size="md" color="neutral">This text can be hidden!</Text>
      )}
      <Button 
        variant={isVisible ? "outline" : "primary"}
        onPress={() => setIsVisible(!isVisible)}
      >
        {isVisible ? 'Hide Text' : 'Show Text'}
      </Button>
    </View>
  );
};
`;

  const scope = {
    React,
    View,
    Text,
    Button,
    Highlight,
  };

  return (
    <ScrollView className="flex-1">
      <View className="p-6 gap-8">
        <Text size="xl" color="primary" className="mb-4">
          LivePreview Component Demo
        </Text>

        <Text size="lg" color="neutral" className="mb-6">
          The LivePreview component supports three intuitive patterns for writing React components. Choose the one that feels most natural to you!
        </Text>

        {/* Pattern 1: Simple JSX */}
        <View className="gap-4">
          <Text size="lg" color="neutral" className="font-semibold">
            Pattern 1: Simple JSX
          </Text>
          <Text size="sm" color="neutral" className="text-neutral-11 mb-2">
            Perfect for quick snippets - just write JSX directly:
          </Text>
          <Highlight 
            code={simpleJSX}
            language="javascript"
            className="mb-4"
          />
          <LivePreview 
            code={simpleJSX}
            scope={scope}
            className="border border-neutral-5 rounded-lg"
          />
        </View>

        {/* Pattern 2: Component Body */}
        <View className="gap-4">
          <Text size="lg" color="neutral" className="font-semibold">
            Pattern 2: Component Body
          </Text>
          <Text size="sm" color="neutral" className="text-neutral-11 mb-2">
            Write component logic directly - hooks, state, and return statement:
          </Text>
          <Highlight 
            code={componentBody}
            language="javascript"
            className="mb-4"
          />
          <LivePreview 
            code={componentBody}
            scope={scope}
            className="border border-neutral-5 rounded-lg"
          />
        </View>

        {/* Pattern 3: Full Component */}
        <View className="gap-4">
          <Text size="lg" color="neutral" className="font-semibold">
            Pattern 3: Full Component
          </Text>
          <Text size="sm" color="neutral" className="text-neutral-11 mb-2">
            Complete component with function declaration - most traditional:
          </Text>
          <Highlight 
            code={fullComponent}
            language="javascript"
            className="mb-4"
          />
          <LivePreview 
            code={fullComponent}
            scope={scope}
            className="border border-neutral-5 rounded-lg"
          />
        </View>

        {/* Quick Examples */}
        <View className="gap-4">
          <Text size="lg" color="neutral" className="font-semibold">
            Quick Examples
          </Text>
          <Text size="sm" color="neutral" className="text-neutral-11 mb-2">
            Try these patterns in your own code:
          </Text>
          
          <View className="gap-6">
            <View>
              <Text size="sm" color="neutral" className="font-medium mb-2">Simple Elements:</Text>
              <View className="flex-row gap-4">
                <View className="flex-1">
                  <Text size="xs" color="neutral" className="mb-1">Simple JSX:</Text>
                  <LivePreview 
                    code={`<Button variant="secondary">Click me</Button>`}
                    scope={scope}
                    className="border border-neutral-5 rounded-lg"
                  />
                </View>
                <View className="flex-1">
                  <Text size="xs" color="neutral" className="mb-1">With Return:</Text>
                  <LivePreview 
                    code={`return <Button variant="secondary">Click me</Button>`}
                    scope={scope}
                    className="border border-neutral-5 rounded-lg"
                  />
                </View>
              </View>
            </View>
            
            <View>
              <Text size="sm" color="neutral" className="font-medium mb-2">Multiple Elements:</Text>
              <LivePreview 
                code={`
return (
  <View className="gap-2">
    <Text size="md" color="primary">First line</Text>
    <Text size="md" color="neutral">Second line</Text>
  </View>
);
`}
                scope={scope}
                className="border border-neutral-5 rounded-lg"
              />
            </View>
            
            <View>
              <Text size="sm" color="neutral" className="font-medium mb-2">Conditional Rendering:</Text>
              <LivePreview 
                code={`
const [show, setShow] = useState(false);

return (
  <View className="gap-2">
    {show && <Text size="md">Hidden content!</Text>}
    <Button onPress={() => setShow(!show)}>
      {show ? 'Hide' : 'Show'} Content
    </Button>
  </View>
);
`}
                scope={scope}
                className="border border-neutral-5 rounded-lg"
              />
            </View>
          </View>
        </View>

        {/* Usage Tips */}
        <View className="gap-4 p-4 bg-neutral-2 rounded-lg">
          <Text size="lg" color="neutral" className="font-semibold">
            💡 Usage Tips
          </Text>
          <View className="gap-2">
            <Text size="sm" color="neutral">• <Text className="font-medium">Simple JSX</Text> - Great for static elements and quick demos</Text>
            <Text size="sm" color="neutral">• <Text className="font-medium">Component Body</Text> - Perfect when you need hooks and state</Text>
            <Text size="sm" color="neutral">• <Text className="font-medium">Full Component</Text> - Most familiar for React developers</Text>
            <Text size="sm" color="neutral">• All patterns support the same features: hooks, state, props, and complex logic</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
} 