import React, { useState, useCallback } from "react";
import { ScrollView } from "react-native";
import { Text, Button, Icon, Highlight, Input, View } from "@consensys/ds3/src";
import { BookOpen, Heart, Star, Zap, Settings, Play, RotateCcw, Edit3 } from "lucide-react-native";
import LivePreview, { convertJSXWithWrapping } from "../components/LivePreview";
import HighlightInput from "../components/HighlightInput";

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
  },
}

const defaultCode = "primary-button";

export default function JSXPlayground() {
  const [selectedCode, setSelectedCode] = useState(defaultCode);
  const [customJSX, setCustomJSX] = useState("");
  const [isDirectEditing, setIsDirectEditing] = useState(false);

  const resetCode = useCallback(() => {
    setSelectedCode(defaultCode);
    setCustomJSX("");
    setIsDirectEditing(false);
  }, []);

  const currentJSX = isDirectEditing ? customJSX : (codeExamples[selectedCode as keyof typeof codeExamples]?.jsx || "");

  // Scope for the LivePreview
  const scope = {
    Button, Text, Icon, View, React, Input,
    BookOpen, Heart, Star, Zap, Settings, Edit3
  };

  return (
    <ScrollView className="flex-1 bg-primary-1" contentContainerStyle={{ flexGrow: 1 }}>
      <View className="flex-1 p-6">
        <View className="max-w-4xl w-full mx-auto">
          <Text size="3xl" weight="bold" className="mb-6 text-center">
            JSX Playground
          </Text>
          
          <Text size="lg" color="neutral" className="mb-8 text-center text-neutral-11">
            Try the predefined examples or write your own JSX code to see live previews.
          </Text>

          {/* Code Selection */}
          <View className="mb-6">
            <View className="flex flex-row items-center justify-between mb-3">
              <Text size="lg" weight="semibold">
                Code Examples:
              </Text>
              <View className="flex flex-row gap-2">
                <Button
                  variant="outline"
                  color="neutral"
                  size="sm"
                  onPress={resetCode}
                >
                  <Button.Icon icon={RotateCcw} />
                  <Button.Text>Reset</Button.Text>
                </Button>
              </View>
            </View>
            
            {/* Code Selection Dropdown */}
            <View className="bg-neutral-2 rounded-lg border border-neutral-6 overflow-hidden">
              <ScrollView horizontal showsHorizontalScrollIndicator={false} className="p-2">
                <View className="flex flex-row gap-2">
                  {Object.entries(codeExamples).map(([key, example]) => (
                    <Button
                      key={key}
                      variant={selectedCode === key && !isDirectEditing ? "soft" : "ghost"}
                      color="neutral"
                      size="sm"
                      onPress={() => {
                        setSelectedCode(key);
                        setIsDirectEditing(false);
                      }}
                    >
                      <Button.Text>{example.name}</Button.Text>
                    </Button>
                  ))}
                </View>
              </ScrollView>
            </View>
          </View>

          {/* Live Preview */}
          <View className="mb-6">
            <Text size="lg" weight="semibold" className="mb-3">
              Live Preview:
            </Text>
            <LivePreview 
              code={currentJSX} 
              scope={scope}
            />
          </View>

          {/* JSX Code */}
          <View className="mb-6">
            <Text size="lg" weight="semibold" className="mb-3">
              JSX String:
            </Text>
            <HighlightInput 
              value={currentJSX}
              onChangeText={(text) => {
                setCustomJSX(text);
                setIsDirectEditing(true);
              }}
              placeholder="Enter JSX code here..."
              numberOfLines={6}
              className="min-h-[150px] bg-neutral-2 rounded-lg border border-neutral-6"
            />
          </View>

          {/* Converted Code */}
          <View className="mb-6">
            <Text size="lg" weight="semibold" className="mb-3">
              Converted to React.createElement:
            </Text>
            <View className="bg-neutral-2 rounded-lg border border-neutral-6 overflow-hidden">
              <Highlight 
                code={convertJSXWithWrapping(currentJSX)}
                language="tsx"
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
} 