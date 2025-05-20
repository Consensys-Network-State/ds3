# Design System 3

> 🚧 **Note**: DS3 is currently under active development. While we're working hard to make it production-ready, please be aware that APIs and features may change. We welcome your feedback and contributions as we continue to improve!

DS3 is a comprehensive design system that enables truly universal application development:

- 🌐 **Cross-Platform** - Build once and run everywhere with a unified codebase
- 🔄 **Universal Compatibility** - Works fully on web, fully on native, and in hybrid environments
- 🖼️ **SVG Icon Support** - Use any SVG icon library seamlessly across platforms
- 🎨 **Advanced Theming** - Powerful, customizable theming with dark/light mode and color schemes
- ♿ **Fully Accessible** - Built with accessibility in mind, including ARIA roles and proper semantics
- ⛓️ **Web3 Integration** - First-class support for blockchain and Web3 applications
- 🛠️ **Customizable** - Easily adaptable to your brand with configurable styles and components
- 🧩 **Multi-Framework** - Works with React and React Native, with consistent APIs across platforms

## Project Structure

This monorepo contains shared packages and applications built with those packages.

### Packages

**[@ds3/theme](packages/theme)** - Theming system
  - Built on Radix UI Colors for accessible, consistent color usage
  - Complete design token system (colors, spacing, typography, shadows, animations)
  - Tailwind integration with pre-configured design tokens
  - Light/dark mode and theme switching support
  - Nested theme support with dynamic inheritance

**[@ds3/config](packages/config)** - Build configuration layer
  - Vite plugin and configuration presets
  - Expo and React Native setup (Babel, Metro)
  - TailwindCSS and NativeWind integration
  - Unified build system for web and native platforms

**[@ds3/ui](packages/ui)** - Component library
  - Built on top of `@ds3/theme`
  - React Native Primitives integration
  - Cross-platform components (web + native)
  - TailwindCSS/NativeWind styling
  - Includes Avatar, Dialog, Checkbox, Select, and more UI components

**[@ds3/web3](packages/web3)** - Blockchain integration
  - Built on top of `@ds3/ui`
  - Wagmi and Viem for blockchain interactions
  - Ethereum-specific utilities
  - Web3 UI components

#### Package Architecture

The packages follow a layered architecture:
1. **theme** → Theming system and design tokens
2. **config** → Build configuration layer (depends on theme)
3. **ui** → UI components (depends on theme)
4. **web3** → Blockchain components (depends on ui)

### Example Applications

- **[vite-example](apps/vite-example)** - Example Vite.js implementation
- **[expo-example](apps/expo-example)** - Example React Native/Expo implementation
- **[docs](apps/docs)** - Documentation site

## Usage

### Installation

```bash
pnpm install
```

### Package Development

Build all packages:
```bash
pnpm build:deps
```

Watch all packages for development:
```bash
pnpm watch:deps
```

Build individual packages:
```bash
pnpm core:build
pnpm ui:build
pnpm web3:build
```

### Running Examples

Start Vite example:
```bash
pnpm vite:dev
```

Build Vite example:
```bash
pnpm vite:build
```

Preview built Vite example:
```bash
pnpm vite:preview
```

Start Expo example:
```bash
pnpm expo:start
```

Start documentation site:
```bash
pnpm docs:start
```

### Maintenance

Clean up node_modules and dist folders:
```bash
pnpm clean
```

## License

MIT License - Copyright (c) 2024 ConsenSys Mesh