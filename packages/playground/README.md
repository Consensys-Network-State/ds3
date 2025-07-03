# Playground

> 🚧 **Note**: This package is under active development. While we're working hard to make it production-ready, please be aware that APIs and features may change. We welcome your feedback and contributions as we continue to improve!

🎮 **Interactive playground for DS3 components with live code editing and real-time preview**

Build, test, and explore DS3 components in real-time with a powerful interactive playground that supports live code editing, syntax highlighting, and instant preview across all platforms.

```tsx
// Interactive playground with live preview
import { Playground, CodeBlock, Markdown } from '@consensys/ds3-playground';
```

## ✨ Features

🎮 **Interactive Playground** - Real-time component testing with live code editing and instant preview

📝 **Live Code Execution** - Write, edit, and execute JSX code directly in the browser with instant feedback

🎨 **Syntax Highlighting** - Beautiful code display with Prism.js integration and DS3 theme support

📖 **Markdown Rendering** - Rich markdown support with live code blocks and custom styling

🔍 **Component Examples** - Comprehensive library of DS3 component examples organized by category

## 🚀 Get Started

```bash
pnpm add @consensys/ds3-playground
```

## 📚 Components

### Core Components

- [**Playground**](src/Playground.tsx) - Main interactive playground with category navigation and live editing
- [**CodeBlock**](src/components/code-block) - Syntax-highlighted code display with optional live preview
- [**Markdown**](src/components/markdown) - Rich markdown rendering with live code execution
- [**Highlight**](src/components/highlight) - Syntax highlighting component with Prism.js integration

### Example Library

The playground includes a comprehensive collection of DS3 component examples:

- [**Buttons**](src/examples/buttons.ts) - Interactive button variants and compositions
- [**Inputs**](src/examples/inputs.ts) - Form input examples with validation states
- [**Checkboxes**](src/examples/checkboxes.ts) - Selection controls with various configurations
- [**Switches**](src/examples/switches.ts) - Toggle controls and state management
- [**Fields**](src/examples/fields.ts) - Form field components with validation
- [**Icons**](src/examples/icons.ts) - Icon usage patterns and styling
- [**Typography**](src/examples/typography.ts) - Text components and hierarchy
- [**Colors**](src/examples/colors.ts) - Color system and theme tokens
- [**Design**](src/examples/design.ts) - Design system fundamentals

## 🎯 Quick Examples

### Basic Playground

```tsx
import { Playground } from '@consensys/ds3-playground';

function App() {
  return <Playground />;
}
```

## 🛠️ Development

```bash
# Install dependencies
pnpm i

# Type checking
pnpm type-check
```

## 📖 Documentation

For detailed component documentation, see the individual README files:

- [CodeBlock Documentation](src/components/code-block/README.md)
- [Markdown Documentation](src/components/markdown/README.md)
- [Highlight Documentation](src/components/highlight/README.md)
- [Examples Documentation](src/examples/README.md)

## 🤝 Contributing

We welcome contributions! Check out our [Contributing Guidelines](../ui/CONTRIBUTING.md) for detailed information on our development workflow, code standards, and how to submit changes.

## 📜 License

MIT
