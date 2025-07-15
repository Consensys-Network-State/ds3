# Markdown Component

The `<Markdown />` component provides a comprehensive markdown rendering solution with syntax highlighting, live code previews, and custom styling that integrates seamlessly with the DS3 design system. It's perfect for documentation, content management, and dynamic text rendering.

## Installation

Import the Markdown component from the DS3 playground package.

```tsx
import { Markdown } from '@consensys/ds3-playground';
```

## Examples

### Basic

Render simple markdown content with default styling.

```tsx live
<Markdown 
  content={`# Welcome to DS3

This is a **bold** paragraph with *italic* text and \`inline code\`.

## Features

- Syntax highlighting
- Live code previews
- Custom styling
- Responsive design`}
/>
```

### Custom Renderer

Override specific markdown renderer methods to customize how elements are rendered while maintaining default behavior for others.

```tsx live
// Custom renderer that overrides specific methods
<Markdown 
  content={`# Custom Styled Heading

This heading uses a custom card-based renderer.

\`\`\`warning
This is a warning code block with custom styling
\`\`\`

Inline \`code\` uses custom badge styling.

[Custom Link](https://example.com) with enhanced styling.

## Variable Substitution

Hello,

\$\{name\}!

This text contains a variable that gets replaced with an input field.

## Regular Heading

This heading uses the default renderer.`}
  customRenderer={{
  // Custom heading with special styling for H1
  heading: (text, styles, depth) => {
    if (depth === 1) {
      return (
        <Card key="custom-h1" className="mb-6 p-4 bg-gradient-to-r from-primary-3 to-primary-4">
          <Text size="4xl" weight="bold" className="text-primary-12">
            {text}
          </Text>
        </Card>
      );
    }
    // For other headings, use the default renderer
    return null; // This will fall back to default behavior
  },

  // Custom code blocks with enhanced styling
  code: (code, lang, containerStyle, textStyle) => {
    if (lang === 'warning') {
      return (
        <Alert key="warning-code" variant="warning" className="mb-4">
          <Text weight="semibold">Warning Code:</Text>
          <Text className="mt-2 font-mono text-sm">{code}</Text>
        </Alert>
      );
    }
    // For other code blocks, use the default renderer
    return null;
  },

  // Custom inline code with badge styling
  codespan: (text, styles) => {
    return (
      <Badge key="custom-code" variant="outline" size="sm" className="mx-1">
        {text}
      </Badge>
    );
  },

  // Custom links with enhanced styling
  link: (children, href, styles) => {
    return (
      <Text 
        key="custom-link"
        className="text-primary-9 underline decoration-primary-6 hover:decoration-primary-8"
        onPress={() => {
          // Handle link press
          console.log('Link pressed:', href);
        }}
      >
        {children} 🔗
      </Text>
    );
  },

  // Variable substitution for ${name} patterns
  text: (text, styles) => {
    
    if (typeof text === 'string' && text.includes('${name}')) {
      return (
        <Input 
          key="name-input"
          defaultValue="Alice"
          size="sm"
          className="inline-block w-24 mx-1"
        />
      );
    }
    
    return <Text style={styles}>{text}</Text>;
  }
}}
  scope={{ React, Card, Badge, Alert, Text, Input }}
/>
```

### Elements

The Markdown component supports all standard markdown elements with custom DS3 styling:

#### Text Formatting

Support for bold, italic, strikethrough, and other text formatting.

```tsx live
<Markdown 
  content={`**Bold text** makes important information stand out.

*Italic text* is used for emphasis or foreign words.

~~Strikethrough text~~ shows deleted or deprecated content.

You can combine **bold** and *italic* formatting together.`}
/>
```

#### Inline Code

Inline code is styled as tags.

```tsx live
<Markdown 
  content={`Use the \`Button\` component to create interactive elements.

You can also use \`code\` in the middle of sentences.`}
/>
```

#### Headings

All heading levels (H1-H6) are styled with DS3 heading components.

```tsx live
<Markdown 
  content={`# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6`}
/>
```

#### Lists

Ordered and unordered lists with proper spacing.

```tsx live
<Markdown 
  content={`## Unordered List

- First item
- Second item
  - Nested item
  - Another nested item
- Third item

## Ordered List

1. First step
2. Second step
   1. Sub-step A
   2. Sub-step B
3. Third step`}
/>
```

#### Links

Themed link styling that matches the design system.

```tsx live
<Markdown 
  content={`Visit our [documentation](https://docs.example.com) for more information.

You can also check out the [GitHub repository](https://github.com/example/ds3) for the latest updates.`}
/>
```

#### Blockquotes

Themed quote styling for citations and important notes.

```tsx live
<Markdown 
  content={`> This is a blockquote that highlights important information or citations.

> You can have multiple paragraphs in a blockquote
> 
> And they will be properly styled together.`}
/>
```

#### Tables

Responsive table components with proper styling.

```tsx live
<Markdown 
  content={`| Component | Description | Status |
|-----------|-------------|--------|
| Button | Interactive button component | ✅ Ready |
| Input | Text input field | ✅ Ready |
| Card | Container component | 🚧 In Progress |`}
/>
```

#### Code Block

Syntax highlighting with live preview support.

Basic:

```tsx live
<Markdown 
  content={`\`\`\`tsx
<Button color="primary">Click me!</Button>
\`\`\``}
/>
```

Live Preview:

```tsx live
<Markdown 
  content={`\`\`\`tsx live
<Button color="primary">Click me!</Button>
\`\`\``}
  scope={{ React, Button }}
/>
```

Code Expanded:

```tsx live
<Markdown 
  content={`\`\`\`tsx live expand
<Button color="primary">Click me!</Button>
\`\`\``}
  scope={{ React, Button }}
/>
```

##### TSX Language Tags

The Markdown component supports special language tags for enhanced functionality.

| Tag | Description | Example |
|-----|-------------|---------|
| `live` | Execute React components | `tsx live` |
| `expand` | Show code by default | `tsx live expand` |

## API Reference

Complete reference of all available props and their configurations.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `string` | - | The markdown content to render |
| `className` | `string` | - | Additional class names for the container |
| `scope` | `Record<string, any>` | `{}` | Object containing components and dependencies for live code execution |
| `customRenderer` | `Partial<RendererInterface>` | `{}` | Custom renderer methods to override default markdown rendering |

### Custom Renderer Methods

The `customRenderer` prop accepts a partial implementation of the `RendererInterface` from `react-native-marked`. You can override any of these methods:

| Method | Parameters | Description |
|--------|------------|-------------|
| `heading` | `(text, styles, depth)` | Custom heading rendering |
| `code` | `(code, lang, containerStyle, textStyle)` | Custom code block rendering |
| `codespan` | `(text, styles)` | Custom inline code rendering |
| `table` | `(header, rows, tableStyle, rowStyle, cellStyle)` | Custom table rendering |
| `paragraph` | `(text, styles)` | Custom paragraph rendering |
| `link` | `(children, href, styles)` | Custom link rendering |
| `list` | `(ordered, li, listStyle, textStyle, startIndex)` | Custom list rendering |
| `listItem` | `(children, styles)` | Custom list item rendering |
| `blockquote` | `(children, styles)` | Custom blockquote rendering |
| `strong` | `(children, styles)` | Custom bold text rendering |
| `em` | `(children, styles)` | Custom italic text rendering |
| `hr` | `(styles)` | Custom horizontal rule rendering |
| `image` | `(uri, alt, styles)` | Custom image rendering |
| `escape` | `(text, styles)` | Custom escaped text rendering |
| `br` | `()` | Custom line break rendering |
| `del` | `(children, styles)` | Custom strikethrough text rendering |
| `text` | `(text, styles)` | Custom text rendering |
| `html` | `(text, styles)` | Custom HTML rendering |

### Renderer Interface

The custom renderer uses the official `RendererInterface` from `react-native-marked`:

```tsx
import type { RendererInterface } from 'react-native-marked';

const customRenderer: Partial<RendererInterface> = {
  // Override only the methods you need
  heading: (text, styles, depth) => {
    // Your custom heading logic
    return <CustomHeading depth={depth}>{text}</CustomHeading>;
  }
};
```

## Best Practices

### Selective Overrides
Only override the renderer methods you need. The component will use default behavior for unoverridden methods.

```tsx
// Good: Only override what you need
const customRenderer = {
  heading: (text, styles, depth) => <CustomHeading>{text}</CustomHeading>
};

// Avoid: Overriding everything unnecessarily
const customRenderer = {
  heading: (text, styles, depth) => <CustomHeading>{text}</CustomHeading>,
  paragraph: (text, styles) => <CustomParagraph>{text}</CustomParagraph>,
  // ... many more overrides
};
```

### Fallback to Default
When you need to conditionally use custom rendering, return `null` to fall back to default behavior:

```tsx
const customRenderer = {
  heading: (text, styles, depth) => {
    if (depth === 1) {
      return <SpecialH1>{text}</SpecialH1>;
    }
    return null; // Falls back to default heading renderer
  }
};
```

### Type Safety
Use the official `RendererInterface` type for full type safety and compatibility:

```tsx
import type { RendererInterface } from 'react-native-marked';

const customRenderer: Partial<RendererInterface> = {
  // TypeScript will provide full intellisense and type checking
};
```