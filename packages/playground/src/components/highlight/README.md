# Highlight Component

The `<Highlight />` component provides syntax highlighting for code blocks built with Prism.js that integrates with your DS3 theme while maintaining consistent styling across platforms.

## Installation

Import the Highlight component from the DS3 package.

```tsx
import { Highlight } from '@consensys/ds3-playground';
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

## API Reference

Complete reference of all available props and their configurations.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `code` | `string` | - | The code string to highlight |
| `language` | `string` | `javascript` | The programming language for syntax highlighting |
| `theme` | `object` | DS3 theme | The Prism.js theme object to use |
| `className` | `string` | - | Additional class names for styling |
