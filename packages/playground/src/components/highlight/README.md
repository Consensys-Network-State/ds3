# Highlight Component

The `<Highlight />` component provides syntax highlighting for code blocks built with Prism.js that integrates with your DS3 theme while maintaining consistent styling across platforms.

## Installation

Import the Highlight component from the DS3 package.

```tsx
import { Highlight, HighlightInput } from '@consensys/ds3-playground';
```

## Examples

### Basic

Create a simple code block with syntax highlighting.

```tsx live
<Highlight 
  code="const hello = 'world';" 
  language="javascript" 
/>
```

### Languages

The component supports all languages supported by Prism.js. See the [full list of supported languages](https://prismjs.com/#supported-languages) in the Prism.js documentation. Here are examples of popular languages:

JavaScript: 

```tsx live
<Highlight 
  code="function greet(name) { return `Hello, ${name}!`; }" 
  language="javascript" 
/>
```

TypeScript: 

```tsx live
<Highlight 
  code="interface User {\n  name: string;\n  age: number;\n}" 
  language="typescript" 
/>
```

Python: 

```tsx live
<Highlight 
  code="def greet(name):\n    return f'Hello, {name}!'" 
  language="python" 
/>
```

### Themes

Use different Prism.js themes for various visual styles.

```tsx live
import { themes } from 'prism-react-renderer';

return (
  <View className="space-y-4">
    <Highlight 
      code="const theme = 'vsDark';" 
      language="javascript"
      theme={themes.vsDark}
    />
    
    <Highlight 
      code="const theme = 'vsLight';" 
      language="javascript"
      theme={themes.vsLight}
    />
  </View>
)
```

### Input

The `<HighlightInput />` component provides a syntax-highlighted text input that's perfect for code editing. It's built on top of the DS3 Input component and features automatic scrolling for long content:

```tsx live
import { useState } from 'react';

function HighlightInputExample() {
  const [code, setCode] = useState(`function greet(name) {
  return \`Hello, \${name}!\`;
}

const user = {
  name: "World",
  age: 25,
  preferences: {
    theme: "dark",
    language: "en"
  }
};

// This is a longer function that demonstrates scrolling
function processUserData(userData) {
  const { name, age, preferences } = userData;
  
  if (!name || !age) {
    throw new Error("Invalid user data");
  }
  
  const greeting = greet(name);
  const userInfo = {
    greeting,
    age,
    theme: preferences?.theme || "light",
    language: preferences?.language || "en"
  };
  
  console.log("Processed user data:", userInfo);
  return userInfo;
}

// Process the user data
const result = processUserData(user);
console.log("Final result:", result);`);

  return (
    <HighlightInput
      value={code}
      onChangeText={setCode}
      placeholder="Enter your code here..."
      multiline={true}
      numberOfLines={8}
    />
  );
}

return <HighlightInputExample />;
```

## API Reference

Complete reference of all available props and their configurations.

### Highlight Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `code` | `string` | - | The code string to highlight |
| `language` | `string` | `javascript` | The programming language for syntax highlighting |
| `theme` | `object` | DS3 theme | The Prism.js theme object to use |
| `className` | `string` | - | Additional class names for styling |

### HighlightInput Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | The current value of the input |
| `onChangeText` | `(text: string) => void` | - | Callback fired when the text changes |
| `placeholder` | `string` | - | Placeholder text to display when empty |
| `multiline` | `boolean` | `true` | Whether the input supports multiple lines |
| `numberOfLines` | `number` | `6` | Minimum number of lines to display |
| `className` | `string` | - | Additional class names for styling |
