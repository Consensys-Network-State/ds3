# Design System 3

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

**[@ds3/core](packages/core/README.md)** - Foundation layer
  - Provides configuration tools (Vite, Tailwind, NativeWind)
  - Expo/React Native configurations (Babel, Metro)
  - Environment configuration utilities
  - Build tools and base dependencies

**[@ds3/ui](packages/ui/README.md)** - Component library
  - Built on top of `@ds3/core`
  - React Native Primitives integration
  - Cross-platform components (web + native)
  - TailwindCSS/NativeWind styling
  - Includes Avatar, Dialog, Checkbox, Select, and more UI components

**[@ds3/web3](packages/web3/README.md)** - Blockchain integration
  - Built on top of `@ds3/ui`
  - Wagmi and Viem for blockchain interactions
  - Ethereum-specific utilities
  - Web3 UI components

#### Package Architecture

The packages follow a layered architecture:
1. **core** → Base utilities and configurations
2. **ui** → UI components (depends on core)
3. **web3** → Blockchain components (depends on ui)

### Example Applications

- **[vite-example](apps/vite-example/README.md)** - Example Vite.js implementation
- **[expo-example](apps/expo-example/README.md)** - Example React Native/Expo implementation
- **[docs](apps/docs/README.md)** - Documentation site

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