import React, { useState, useCallback } from "react";
import { View, ScrollView, Pressable } from "react-native";
import { Text, Button, Icon, Highlight } from "@consensys/ds3/src";
import { BookOpen, Heart, Star, Zap, Settings, Play, RotateCcw } from "lucide-react-native";
// @ts-ignore
import * as Babel from '@babel/standalone';

// JSX to React.createElement converter using Babel
const convertJSXToCreateElement = (jsxString: string): string => {
  try {
    // Transform JSX to React.createElement using Babel
    const result = Babel.transform(jsxString, {
      presets: [['react', { runtime: 'classic' }]],
      retainLines: true,
      filename: 'playground.jsx', // Helps with error messages
    });

    if (!result.code) {
      return '// Error: No code generated';
    }

    // Clean up the output - remove any imports and just return the createElement call
    let code = result.code
      .replace(/^import.*$/gm, '') // Remove import statements
      .replace(/^export.*$/gm, '') // Remove export statements
      .replace(/^const.*=.*$/gm, '') // Remove const declarations
      .replace(/^let.*=.*$/gm, '') // Remove let declarations
      .replace(/^var.*=.*$/gm, '') // Remove var declarations
      .replace(/^return\s+/, '') // Remove return statement
      .replace(/;$/, '') // Remove trailing semicolon
      .trim();

    // If the code is wrapped in a function, extract just the return value
    if (code.startsWith('(') && code.endsWith(')')) {
      code = code.slice(1, -1);
    }

    return code;
  } catch (error) {
    console.error('Babel transform error:', error);
    return `// Error converting JSX: ${error instanceof Error ? error.message : 'Unknown error'}`;
  }
};

// Custom LivePreview component that works with React Native
interface LivePreviewProps {
  code: string;
  scope: Record<string, any>;
  className?: string;
}

const LivePreview: React.FC<LivePreviewProps> = ({ code, scope, className }) => {
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<React.ReactNode | null>(null);

  React.useEffect(() => {
    try {
      setError(null);
      
      // Convert JSX to React.createElement if needed
      let processedCode = code;
      if (code.includes('<') && code.includes('>')) {
        processedCode = convertJSXToCreateElement(code);
      }
      
      // Create a safe execution environment
      const createComponent = () => {
        // Create a function that returns the JSX
        const functionBody = `
          "use strict";
          try {
            return ${processedCode.trim()};
          } catch (e) {
            throw new Error('JSX execution failed: ' + e.message);
          }
        `;
        
        return new Function(...Object.keys(scope), functionBody);
      };

      const jsxFunction = createComponent();
      const result = jsxFunction(...Object.values(scope));
      
      if (React.isValidElement(result)) {
        setPreview(result);
      } else {
        setError("Code must return a valid React element");
        setPreview(null);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error occurred");
      setPreview(null);
    }
  }, [code, scope]);

  return (
    <View className={`p-4 bg-neutral-2 rounded-lg border border-neutral-6 min-h-[100px] items-center justify-center ${className || ''}`}>
      {error ? (
        <Text size="sm" color="error" className="text-error-11 text-center">
          {error}
        </Text>
      ) : preview ? (
        preview
      ) : (
        <Text size="sm" color="neutral" className="text-neutral-11">
          Loading preview...
        </Text>
      )}
    </View>
  );
};

// Simple JSX strings that can be used with any LivePreview component
const codeExamples = {
  "primary-button": {
    name: "Primary Button",
    jsx: `<Button variant="solid" color="primary" size="md">
  <Button.Icon icon={BookOpen} />
  <Button.Text>Primary Button</Button.Text>
</Button>`
  },
  "secondary-button": {
    name: "Secondary Button",
    jsx: `<Button variant="outline" color="secondary" size="md">
  <Button.Text>Secondary Button</Button.Text>
</Button>`
  },
  "icon-only": {
    name: "Icon Only",
    jsx: `<Icon icon={Heart} size="lg" color="error" />`
  },
  "multiple-components": {
    name: "Multiple Components",
    jsx: `<View className="flex flex-row gap-4">
  <Button variant="outline" color="secondary">
    <Button.Text>Secondary</Button.Text>
  </Button>
  <Icon icon={Heart} size="lg" color="error" />
  <Text size="lg" color="success">Hello World</Text>
</View>`
  },
  "button-variants": {
    name: "Button Variants",
    jsx: `<View className="flex flex-col gap-2">
  <Button variant="solid" color="primary">
    <Button.Text>Solid Primary</Button.Text>
  </Button>
  <Button variant="soft" color="secondary">
    <Button.Text>Soft Secondary</Button.Text>
  </Button>
  <Button variant="outline" color="success">
    <Button.Text>Outline Success</Button.Text>
  </Button>
</View>`
  },
  "form-elements": {
    name: "Form Elements",
    jsx: `<View className="flex flex-col gap-4">
  <Text size="lg" weight="bold">Form Example</Text>
  <Button variant="solid" color="primary">
    <Button.Icon icon={Settings} />
    <Button.Text>Submit Form</Button.Text>
  </Button>
  <View className="flex flex-row gap-2">
    <Icon icon={Star} size="md" color="warning" />
    <Text size="sm" color="neutral">Form validation</Text>
  </View>
</View>`
  }
};

const defaultCode = "primary-button";

export default function JSXPlayground() {
  const [selectedCode, setSelectedCode] = useState(defaultCode);
  const [showPreview, setShowPreview] = useState(false);

  const resetCode = useCallback(() => {
    setSelectedCode(defaultCode);
    setShowPreview(false);
  }, []);

  const currentJSX = codeExamples[selectedCode as keyof typeof codeExamples]?.jsx || "";

  // Scope for the LivePreview
  const scope = {
    Button, Text, Icon, View, React,
    BookOpen, Heart, Star, Zap, Settings
  };

  return (
    <ScrollView className="flex-1 bg-primary-1" contentContainerStyle={{ flexGrow: 1 }}>
      <View className="flex-1 p-6">
        <View className="max-w-4xl w-full mx-auto">
          <Text size="3xl" weight="bold" className="mb-6 text-center">
            JSX Playground
          </Text>
          
          <Text size="lg" color="neutral" className="mb-8 text-center text-neutral-11">
            Copy these JSX strings to use with your LivePreview component.
          </Text>

          {/* Code Selection */}
          <View className="mb-6">
            <View className="flex flex-row items-center justify-between mb-3">
              <Text size="lg" weight="semibold">
                Code Examples:
              </Text>
              <View className="flex flex-row gap-2">
                <Pressable
                  onPress={() => setShowPreview(!showPreview)}
                  className="flex flex-row items-center gap-2 px-3 py-2 bg-primary-9 rounded-lg"
                >
                  <Icon icon={Play} size="sm" color="primary" />
                  <Text size="sm" color="primary" weight="medium">
                    {showPreview ? 'Hide' : 'Show'} Preview
                  </Text>
                </Pressable>
                <Pressable
                  onPress={resetCode}
                  className="flex flex-row items-center gap-2 px-3 py-2 bg-neutral-9 rounded-lg"
                >
                  <Icon icon={RotateCcw} size="sm" color="neutral" />
                  <Text size="sm" color="neutral" weight="medium">Reset</Text>
                </Pressable>
              </View>
            </View>
            
            {/* Code Selection Dropdown */}
            <View className="bg-neutral-2 rounded-lg border border-neutral-6 overflow-hidden">
              <ScrollView horizontal showsHorizontalScrollIndicator={false} className="p-2">
                <View className="flex flex-row gap-2">
                  {Object.entries(codeExamples).map(([key, example]) => (
                    <Pressable
                      key={key}
                      onPress={() => setSelectedCode(key)}
                      className={`px-3 py-2 rounded-lg border ${
                        selectedCode === key 
                          ? 'bg-primary-9 border-primary-7' 
                          : 'bg-neutral-3 border-neutral-5'
                      }`}
                    >
                      <Text 
                        size="sm" 
                        color={selectedCode === key ? "primary" : "neutral"}
                        weight={selectedCode === key ? "medium" : "normal"}
                      >
                        {example.name}
                      </Text>
                    </Pressable>
                  ))}
                </View>
              </ScrollView>
            </View>
          </View>

          {/* Live Preview */}
          {showPreview && (
            <View className="mb-6">
              <Text size="lg" weight="semibold" className="mb-3">
                Live Preview:
              </Text>
              <LivePreview 
                code={currentJSX} 
                scope={scope}
              />
            </View>
          )}

          {/* JSX Code */}
          <View className="mb-6">
            <Text size="lg" weight="semibold" className="mb-3">
              JSX String:
            </Text>
            <View className="bg-neutral-2 rounded-lg border border-neutral-6 overflow-hidden">
              <Highlight 
                code={currentJSX}
                language="tsx"
              />
            </View>
          </View>

          {/* Converted Code */}
          <View className="mb-6">
            <Text size="lg" weight="semibold" className="mb-3">
              Converted to React.createElement:
            </Text>
            <View className="bg-neutral-2 rounded-lg border border-neutral-6 overflow-hidden">
              <Highlight 
                code={convertJSXToCreateElement(currentJSX)}
                language="tsx"
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
} 