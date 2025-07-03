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