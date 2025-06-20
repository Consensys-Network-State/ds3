# Highlight Component

The `<Highlight />` component provides syntax highlighting for code blocks with a custom DS3 theme that adapts to your design system colors. Built with [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer) for robust syntax highlighting support.

## Installation

```bash
pnpm add @consensys/ds3
```

## Usage Examples

```tsx
import { Highlight } from '@consensys/ds3';

// Basic usage
<Highlight 
  code="const hello = 'world';" 
  language="javascript" 
/>

// With custom styling
<Highlight 
  code={`
function greet(name) {
  return \`Hello, \${name}!\`;
}
  `}
  language="javascript"
  className="p-4 rounded-lg bg-neutral-1"
/>

// Using a Prism.js preset theme
import { themes } from 'prism-react-renderer';

<Highlight 
  code="const example = 'code';" 
  language="javascript"
  theme={themes.vsDark} // or themes.vsLight, themes.github, etc.
/>

// Using a custom theme
const colors = useThemeColors();

const customTheme = {
  plain: {
    color: colors.neutral11,
    backgroundColor: colors.neutral12,
  },
  styles: [
    {
      types: ['keyword'],
      style: {
        color: colors.primary4,
      },
    },
    // ... more token styles
  ],
};

<Highlight 
  code="const example = 'code';" 
  language="javascript"
  theme={customTheme}
/>
```

## Component API

### `<Highlight />`

The main component that renders syntax-highlighted code.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `code` | `string` | - | The code string to highlight |
| `language` | `string` | `'javascript'` | The programming language for syntax highlighting |
| `theme` | `object` | DS3 theme | The Prism.js theme object to use |
| `className` | `string` | `''` | Additional class names for styling |

## Custom Themes

The component uses a custom DS3 theme by default that adapts to your design system colors. To use custom themes:

1. **Use built-in Prism.js themes**: Import from `prism-react-renderer/themes`
2. **Create custom themes**: Follow the [Prism.js theme format](https://prismjs.com/docs/Prism.html#.highlight)
3. **Reference our theme implementation**: See [`packages/ui/src/components/highlight/theme.ts`](../../src/components/highlight/theme.ts) for how we structure DS3 themes

## Supported Languages

The component supports all languages supported by Prism.js. See the [full list of supported languages](https://prismjs.com/#supported-languages) in the Prism.js documentation, including:

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

The Highlight automatically uses your DS3 theme colors:

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

## Accessibility

- The component preserves the semantic structure of code
- Colors are chosen to maintain sufficient contrast ratios
- Consider using with appropriate labels or ARIA attributes in your implementation 