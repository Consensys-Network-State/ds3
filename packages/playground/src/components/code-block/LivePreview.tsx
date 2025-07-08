import React, { useState } from "react";
import { Text, View } from "@consensys/ds3";
// @ts-ignore
import * as Babel from '@babel/standalone';

/**
 * LivePreview Component
 * 
 * Renders live previews of React components and JSX code.
 * 
 * Supports three patterns:
 * 
 * 1. Simple JSX snippets:
 *    <Button>Hello World</Button>
 * 
 * 2. Component body with hooks and return:
 *    const [count, setCount] = useState(0);
 *    
 *    return (
 *      <View className="p-4 gap-4">
 *        <Text>Count: {count}</Text>
 *        <Button onPress={() => setCount(count + 1)}>
 *          Click me! ({count})
 *        </Button>
 *      </View>
 *    );
 * 
 * 3. Full component declaration:
 *    const Component = () => {
 *      const [isVisible, setIsVisible] = useState(true);
 *      
 *      return (
 *        <View className="p-4 gap-4">
 *          {isVisible && <Text>This text can be hidden!</Text>}
 *          <Button onPress={() => setIsVisible(!isVisible)}>
 *            {isVisible ? 'Hide Text' : 'Show Text'}
 *          </Button>
 *        </View>
 *      );
 *    };
 * 
 * The scope prop should contain all imported components and dependencies.
 * Errors are displayed within the preview area but don't affect visibility.
 */

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

// New function to handle full component definitions
const extractAndExecuteComponent = (code: string, scope: Record<string, any>): React.ReactNode => {
  try {
    // Remove all import statements and rely on scope
    let cleanCode = code;
    cleanCode = cleanCode.replace(/import\s+.*from\s+['"][^'"]*['"];?/g, '');
    
    // Remove export statements
    cleanCode = cleanCode.replace(/export\s+default\s+.*;?/g, '');
    
    // Check for different patterns
    const hasReturn = cleanCode.includes('return');
    const hasConstComponent = cleanCode.includes('const Component') || cleanCode.includes('let Component') || cleanCode.includes('var Component');
    
    let codeToTransform;
    if (hasConstComponent) {
      // Full component declaration - just transform as-is
      codeToTransform = cleanCode;
    } else if (hasReturn) {
      // Component body with return statement - wrap in function before transformation
      codeToTransform = `
        const Component = () => {
          ${cleanCode}
        };
      `;
    } else {
      // Simple JSX - wrap in function with return
      codeToTransform = `
        const Component = () => {
          return ${cleanCode};
        };
      `;
    }
    
    // Transform JSX to React.createElement using Babel
    const babelResult = Babel.transform(codeToTransform, {
      presets: [['react', { runtime: 'classic' }]],
      retainLines: true,
      filename: 'component.jsx',
    });

    if (!babelResult.code) {
      throw new Error('No code generated from Babel transform');
    }

    let transformedCode = babelResult.code;
    
    // Add useState destructuring if it's used in the code
    if (transformedCode.includes('useState')) {
      transformedCode = 'const { useState } = React;\n' + transformedCode;
    }
    
    // Use react-live's approach: dynamic scope keys
    const scopeKeys = Object.keys(scope);
    const scopeValues = scopeKeys.map(key => scope[key]);
    
    // Add return statement to get the component
    const finalCode = `
      ${transformedCode}
      
      return Component;
    `;
    
    // Use react-live's evalCode approach
    let Component;
    try {
      Component = new Function(...scopeKeys, finalCode)(...scopeValues);
    } catch (error) {
      console.error('Component execution error:', error);
      throw new Error(`Component execution failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
    
    // Create a React element from the component
    return React.createElement(Component);
  } catch (error) {
    console.error('Component execution error:', error);
    throw error;
  }
};

// Export the utility function for use in other components
export { convertJSXWithWrapping, extractAndExecuteComponent };

// Custom LivePreview component that works with React Native
export interface LivePreviewProps {
  code: string;
  scope: Record<string, any>;
  className?: string;
}

export const LivePreview: React.FC<LivePreviewProps> = ({ code, scope, className }) => {
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<React.ReactNode | null>(null);

  React.useEffect(() => {
    try {
      setError(null);
      
      let result: React.ReactNode;
      
      // Check if this looks like a full component definition
      const hasImports = code.includes('import ');
      const hasExports = code.includes('export ');
      const hasComponentDef = code.includes('const ') && code.includes('=') && code.includes('()');
      const hasFunctionDef = code.includes('function ') && code.includes('()');
      
      if (hasImports || hasExports || hasComponentDef || hasFunctionDef) {
        // Handle full component definition
        result = extractAndExecuteComponent(code, scope);
      } else {
        // Handle simple JSX snippet (backward compatibility)
        let processedCode = code;
        if (code.includes('<') && code.includes('>')) {
          processedCode = convertJSXWithWrapping(code);
        }
        
        // Create a safe execution environment
        const createComponent = () => {
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
        result = jsxFunction(...Object.values(scope));
      }
      
      if (React.isValidElement(result)) {
        setPreview(result);
      } else {
        const errorMessage = "Code must return a valid React element";
        setError(errorMessage);
        setPreview(null);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
      setError(errorMessage);
      setPreview(null);
    }
  }, [code, scope]);

  return (
    <View className={`p-4 ${className || ''}`}>
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
