import React, { useState } from "react";
import { Text, View } from "@consensys/ds3/src";
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
    // Only wrap if it's not already a single element
    if (!trimmedCode.match(/^<[A-Z][A-Za-z]*[^>]*>.*<\/[A-Z][A-Za-z]*>$/s) && 
        !trimmedCode.match(/^<[A-Z][A-Za-z]*[^>]*\/>$/)) {
      codeToConvert = `<View>${trimmedCode}</View>`;
    } else {
      codeToConvert = trimmedCode;
    }
  }
  return convertJSXToCreateElement(codeToConvert);
};

// Export the utility function for use in other components
export { convertJSXWithWrapping };

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
      
      console.log('Processing JSX code:', code);
      
      // Process JSX with CSS injection for dynamic classes
      let processedCode = code;
      if (code.includes('<') && code.includes('>')) {
        // Then convert JSX to React.createElement
        processedCode = convertJSXWithWrapping(code);
        console.log('Processed code:', processedCode);
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
      
      console.log('JSX result:', result);
      
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

export default LivePreview; 