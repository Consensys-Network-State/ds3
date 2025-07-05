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

### HighlightInput

The `<HighlightInput />` component provides a syntax-highlighted text input that's perfect for code editing. It's built on top of the DS3 Input component and features:

```tsx live
import { useState } from 'react';

function HighlightInputExample() {
  const [code, setCode] = useState(`<Button>
  Hello
</Button>`);

  return (
    <HighlightInput
      value={code}
      onChangeText={setCode}
      placeholder="Enter your code here..."
      multiline={true}
      numberOfLines={3}
      className="border border-neutral-6 rounded-lg"
    />
  );
}

return <HighlightInputExample />;
```

```tsx live
import { useState } from 'react';

function HighlightInputExample() {
  const [code, setCode] = useState(`<View className="flex flex-col gap-4">
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">Neutral</Text>
    <Button variant="elevated">
  <Button.Text>Elevated</Button.Text>
</Button>
    <Button variant="solid">
  <Button.Text>Solid</Button.Text>
</Button>
    <Button variant="soft">
  <Button.Text>Soft</Button.Text>
</Button>
    <Button variant="outline">
  <Button.Text>Outline</Button.Text>
</Button>
    <Button variant="dashed">
  <Button.Text>Dashed</Button.Text>
</Button>
    <Button variant="ghost">
  <Button.Text>Ghost</Button.Text>
</Button>
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">Primary</Text>
    <Button variant="elevated" color="primary">
  <Button.Text>Elevated</Button.Text>
</Button>
    <Button variant="solid" color="primary">
  <Button.Text>Solid</Button.Text>
</Button>
    <Button variant="soft" color="primary">
  <Button.Text>Soft</Button.Text>
</Button>
    <Button variant="outline" color="primary">
  <Button.Text>Outline</Button.Text>
</Button>
    <Button variant="dashed" color="primary">
  <Button.Text>Dashed</Button.Text>
</Button>
    <Button variant="ghost" color="primary">
  <Button.Text>Ghost</Button.Text>
</Button>
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">Secondary</Text>
    <Button variant="elevated" color="secondary">
  <Button.Text>Elevated</Button.Text>
</Button>
    <Button variant="solid" color="secondary">
  <Button.Text>Solid</Button.Text>
</Button>
    <Button variant="soft" color="secondary">
  <Button.Text>Soft</Button.Text>
</Button>
    <Button variant="outline" color="secondary">
  <Button.Text>Outline</Button.Text>
</Button>
    <Button variant="dashed" color="secondary">
  <Button.Text>Dashed</Button.Text>
</Button>
    <Button variant="ghost" color="secondary">
  <Button.Text>Ghost</Button.Text>
</Button>
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">Error</Text>
    <Button variant="elevated" color="error">
  <Button.Text>Elevated</Button.Text>
</Button>
    <Button variant="solid" color="error">
  <Button.Text>Solid</Button.Text>
</Button>
    <Button variant="soft" color="error">
  <Button.Text>Soft</Button.Text>
</Button>
    <Button variant="outline" color="error">
  <Button.Text>Outline</Button.Text>
</Button>
    <Button variant="dashed" color="error">
  <Button.Text>Dashed</Button.Text>
</Button>
    <Button variant="ghost" color="error">
  <Button.Text>Ghost</Button.Text>
</Button>
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">Warning</Text>
    <Button variant="elevated" color="warning">
  <Button.Text>Elevated</Button.Text>
</Button>
    <Button variant="solid" color="warning">
  <Button.Text>Solid</Button.Text>
</Button>
    <Button variant="soft" color="warning">
  <Button.Text>Soft</Button.Text>
</Button>
    <Button variant="outline" color="warning">
  <Button.Text>Outline</Button.Text>
</Button>
    <Button variant="dashed" color="warning">
  <Button.Text>Dashed</Button.Text>
</Button>
    <Button variant="ghost" color="warning">
  <Button.Text>Ghost</Button.Text>
</Button>
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center">Success</Text>
    <Button variant="elevated" color="success">
  <Button.Text>Elevated</Button.Text>
</Button>
    <Button variant="solid" color="success">
  <Button.Text>Solid</Button.Text>
</Button>
    <Button variant="soft" color="success">
  <Button.Text>Soft</Button.Text>
</Button>
    <Button variant="outline" color="success">
  <Button.Text>Outline</Button.Text>
</Button>
    <Button variant="dashed" color="success">
  <Button.Text>Dashed</Button.Text>
</Button>
    <Button variant="ghost" color="success">
  <Button.Text>Ghost</Button.Text>
</Button>
  </View>
</View>`);

  return (
    <HighlightInput
      value={code}
      onChangeText={setCode}
      placeholder="Enter your code here..."
      multiline={true}
      numberOfLines={10}
      className="border border-neutral-6 rounded-lg"
    />
  );
}

return <HighlightInputExample />;
```

```tsx live
import { useState } from 'react';

function HighlightInputExample() {
  const [code, setCode] = useState(`function greet(name) {
  return \`Hello, \${name}!\`;
}

const user = {
  name: "World",
  age: 25
};

console.log(greet(user.name));`);

  return (
    <HighlightInput
      value={code}
      onChangeText={setCode}
      placeholder="Enter your code here..."
      multiline={true}
      numberOfLines={10}
      className="border border-neutral-6 rounded-lg"
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
