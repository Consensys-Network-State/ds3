import React, { useState, useCallback } from "react";
import { View, ScrollView, TextInput, Platform } from "react-native";
import { Text, Button, Icon, Highlight, Input } from "@consensys/ds3/src";
import { BookOpen, Heart, Star, Zap, Settings, Play, RotateCcw, Edit3 } from "lucide-react-native";
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

// Helper function to convert JSX with automatic wrapping
const convertJSXWithWrapping = (jsxString: string): string => {
  let codeToConvert = jsxString;
  if (codeToConvert.includes('<') && codeToConvert.includes('>')) {
    const trimmedCode = codeToConvert.trim();
    codeToConvert = `<View>${trimmedCode}</View>`;
  }
  return convertJSXToCreateElement(codeToConvert);
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
        processedCode = convertJSXWithWrapping(code);
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

// Custom Syntax Highlighted Input Component
interface SyntaxHighlightedInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  multiline?: boolean;
  numberOfLines?: number;
  className?: string;
}

const SyntaxHighlightedInput: React.FC<SyntaxHighlightedInputProps> = ({
  value,
  onChangeText,
  placeholder,
  multiline = true,
  numberOfLines = 6,
  className = ""
}) => {
  const [focused, setFocused] = useState(false);
  const [selection, setSelection] = useState({ start: 0, end: 0 });
  const [scrollOffset, setScrollOffset] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const inputRef = React.useRef<TextInput>(null);

  // Blinking cursor effect
  React.useEffect(() => {
    if (!focused) return;
    
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500); // Blink every 500ms (faster than default pulse)
    
    return () => clearInterval(interval);
  }, [focused]);

  // Font metrics - match exactly with the TextInput
  const fontSize = 14;
  const lineHeight = 20;
  const fontFamily = 'monospace';
  const verticalPadding = 16; // matches padding: 16
  const minHeight = multiline ? Math.max(80, numberOfLines * lineHeight) : undefined;
  
  // Calculate actual height based on content
  const lines = value.split('\n');
  const contentHeight = Math.max(minHeight || 0, lines.length * lineHeight + verticalPadding * 2);

  // Memoize the highlight code to prevent unnecessary re-renders
  const highlightCode = React.useMemo(() => {
    return value || placeholder || "";
  }, [value, placeholder]);

  // Memoize the Highlight component to prevent re-rendering
  const highlightedCode = React.useMemo(() => (
    <Highlight 
      code={highlightCode}
      language="tsx"
      style={{ fontFamily, fontSize, lineHeight }}
    />
  ), [highlightCode, fontFamily, fontSize, lineHeight]);

  // Calculate cursor position more accurately with proper line calculations
  const getCursorPosition = () => {
    if (!focused) return null;
    
    let currentPos = 0;
    let cursorLine = 0;
    let cursorOffset = 0;
    
    // Find which line the cursor is on
    for (let i = 0; i < lines.length; i++) {
      const lineLength = lines[i].length;
      if (selection.start <= currentPos + lineLength) {
        cursorLine = i;
        cursorOffset = selection.start - currentPos;
        break;
      }
      currentPos += lineLength + 1; // +1 for newline
    }
    
    // Handle cursor at the very end
    if (cursorLine === 0 && cursorOffset === 0 && selection.start > 0) {
      cursorLine = lines.length - 1;
      cursorOffset = lines[lines.length - 1]?.length || 0;
    }
    
    // Calculate exact position
    const charWidth = 8.4; // Approximate character width - fine-tuned
    const x = verticalPadding + (cursorOffset * charWidth);
    const y = verticalPadding + (cursorLine * lineHeight) - scrollOffset;
    
    return {
      line: cursorLine,
      offset: cursorOffset,
      x,
      y,
    };
  };

  const cursorPos = getCursorPosition();

  return (
    <View className={`relative overflow-hidden ${className}`} style={{ height: contentHeight }}>
      {/* Syntax Highlighted Background (static) */}
      <View 
        className="absolute inset-0"
        style={{ 
          height: contentHeight,
          padding: verticalPadding,
        }}
      >
        <View style={{ height: contentHeight }}>
          {highlightedCode}
        </View>
      </View>
      
      {/* Custom Cursor Indicator */}
      {focused && cursorPos && Platform.OS !== 'ios' && cursorVisible && (
        <View 
          className="absolute bg-neutral-12"
          style={{
            width: 1,
            height: lineHeight, // Match the exact line height
            left: cursorPos.x,
            top: cursorPos.y,
            zIndex: 2,
          }}
        />
      )}
      
      {/* Editable Input (on top, with proper positioning) */}
      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={{ 
          height: contentHeight,
          textAlignVertical: multiline ? 'top' : 'center',
          fontFamily,
          fontSize,
          lineHeight,
          color: 'transparent', // Make text completely transparent
          padding: verticalPadding,
          backgroundColor: 'transparent',
          position: 'relative',
          zIndex: 1,
        }}
        className="flex-1 outline-none"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onSelectionChange={(event) => {
          const { start, end } = event.nativeEvent.selection;
          setSelection({ start, end });
        }}
        onScroll={(event) => {
          const contentOffset = event.nativeEvent?.contentOffset;
          if (contentOffset && typeof contentOffset.y === 'number') {
            setScrollOffset(contentOffset.y);
          }
        }}
        scrollEnabled={true}
      />
    </View>
  );
};

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
            <SyntaxHighlightedInput 
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