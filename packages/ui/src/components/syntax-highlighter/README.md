# SyntaxHighlighter Component

The `<SyntaxHighlighter />` component provides syntax highlighting for code blocks with a custom DS3 theme that adapts to your design system colors.

## Installation

```bash
pnpm add @consensys/ds3
```

## Usage Examples

```tsx
import { SyntaxHighlighter, useSyntaxTheme, createDs3Theme } from '@consensys/ds3';

// Basic usage
<SyntaxHighlighter 
  code="const hello = 'world';" 
  language="javascript" 
/>

// With custom styling
<SyntaxHighlighter 
  code={`
function greet(name) {
  return \`Hello, \${name}!\`;
}
  `}
  language="javascript"
  className="p-4 rounded-lg bg-neutral-1"
/>

// Using the hook directly
const MyCustomHighlighter = () => {
  const theme = useSyntaxTheme();
  // Use theme with your own highlighting logic
};

// Using the theme function directly
const customTheme = createDs3Theme(myColors);
```

## Component API

### `<SyntaxHighlighter />`

The main component that renders syntax-highlighted code.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `code` | `string` | - | The code string to highlight |
| `language` | `string` | `'javascript'` | The programming language for syntax highlighting |
| `className` | `string` | `''` | Additional class names for styling |

### `useSyntaxTheme()`

A hook that returns the DS3 syntax highlighting theme based on your current theme colors.

#### Returns

Returns a Prism.js theme object with DS3 color mappings.

#### Example

```tsx
const MyComponent = () => {
  const theme = useSyntaxTheme();
  
  return (
    <Highlight code={code} language="javascript" theme={theme}>
      {/* Your rendering logic */}
    </Highlight>
  );
};
```

### `createDs3Theme(colors)`

A function that creates a DS3 syntax highlighting theme from a color palette.

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `colors` | `object` | A color palette object with DS3 color tokens |

#### Returns

Returns a Prism.js theme object with DS3 color mappings.

#### Example

```tsx
const customColors = {
  primary11: '#0066cc',
  success11: '#00aa44',
  // ... other colors
};

const theme = createDs3Theme(customColors);
```

## Supported Languages

The component supports all languages supported by Prism.js, including:

- JavaScript/TypeScript
- JSX/TSX
- Python
- Java
- C/C++
- CSS
- HTML
- JSON
- SQL
- And many more

## Theme Integration

The SyntaxHighlighter automatically uses your DS3 theme colors:

- **Keywords**: Primary colors
- **Strings**: Success colors
- **Comments**: Neutral colors
- **Numbers/Booleans**: Secondary colors
- **Variables**: Warning colors
- **Functions/Classes**: Warning colors
- **Punctuation**: Neutral colors

## Platform Support

The component works seamlessly across platforms:

- **Web**: Uses system monospace fonts for optimal readability
- **React Native**: Uses the platform's monospace font

## Implementation Details

The component uses `prism-react-renderer` for syntax highlighting and creates a custom theme based on your DS3 color palette. It renders each token individually to ensure proper color application and supports both light and dark themes automatically.

The theme creation is separated into:
- `useSyntaxTheme()` - A hook that automatically uses your current theme colors
- `createDs3Theme()` - A function for creating themes with custom color palettes

## Accessibility

- The component preserves the semantic structure of code
- Colors are chosen to maintain sufficient contrast ratios
- Consider using with appropriate labels or ARIA attributes in your implementation 