# CodeBlock Component

The `<CodeBlock />` component provides a comprehensive code display solution with syntax highlighting, copy functionality, and optional live preview capabilities. It's perfect for documentation, tutorials, and interactive code examples.

## Installation

Import the CodeBlock component from the DS3 playground package.

```tsx
import { CodeBlock } from '@consensys/ds3-playground';
```

## Examples

### Basic

Create a simple code block with syntax highlighting and copy button.

```tsx live
<CodeBlock 
  code={`const greeting = "Hello, World!";
console.log(greeting);`}
  language="javascript"
/>
```

### Live Preview

Display both the code and its live execution.

```tsx live
<CodeBlock
  code={`<Button color="primary">Click me!</Button>`}
  language="tsx"
  preview={true}
  scope={{ React, Button }}
/>
```

## Live Preview Formats

The CodeBlock component supports three intuitive patterns for writing React components when used with live preview.

### Simple JSX

Write JSX directly without any wrapper.

```tsx live expand
<Button>Hello World</Button>
```

**Best for:** Static elements and quick demos

### Component Body

Write component logic directly with hooks and return statement.

```tsx live expand
const [count, setCount] = useState(0);

return (
  <View className="p-4 gap-4">
    <Text>Count: {count}</Text>
    <Button onPress={() => setCount(count + 1)}>
      Increment
    </Button>
  </View>
);
```

**Best for:** When you need hooks and state management

### Full Component

Complete component with function declaration.

```tsx live expand
import { View, Button } from '@consensys/ds3';

const Component = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  return (
    <View className="p-4 gap-4">
      {isVisible && <Text>Hidden content!</Text>}
      <Button onPress={() => setIsVisible(!isVisible)}>
        Toggle
      </Button>
    </View>
  );
};

export default Component;
```

**Best for:** Most familiar for React developers

## API Reference

Complete reference of all available props and their configurations.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `code` | `string` | - | The code to display and optionally execute |
| `language` | `string` | `'javascript'` | The programming language for syntax highlighting |
| `className` | `string` | `''` | Additional class names for the code block container |
| `showCopyButton` | `boolean` | `true` | Whether to show the copy to clipboard button |
| `showLanguage` | `boolean` | `true` | Whether to show the language label in the header |
| `showEditButton` | `boolean` | - | Whether to show the edit button (only visible when preview is enabled) |
| `preview` | `boolean` | `false` | Whether to show a live preview of the code execution |
| `expand` | `boolean` | `false` | Whether the code is visible by default when preview is enabled |
| `scope` | `Record<string, any>` | `{}` | Object containing components and dependencies for live preview |
| `onChange` | `(code: string) => void` | - | Callback fired when the code is edited in edit mode |
| `editable` | `boolean` | `true` | Whether the code can be edited when preview is enabled |