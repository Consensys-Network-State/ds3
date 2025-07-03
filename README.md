<p align="center">
  <img src="assets/ds3.png" alt="DS3 Logo" width="100" />
</p>

<h1 align="center">Design System 3</h1>

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

**[@consensys/ds3-theme](packages/theme)** - Theming system
  - Built on Radix UI Colors for accessible, consistent color usage
  - Complete design token system (colors, spacing, typography, shadows, animations)
  - Tailwind integration with pre-configured design tokens
  - Light/dark mode and theme switching support
  - Nested theme support with dynamic inheritance
  - Dynamic CSS variable system for runtime customization

**[@consensys/ds3-config](packages/config)** - Build configuration layer
  - Unified configuration layer for the DS3 ecosystem
  - Vite plugin and configuration presets
  - Next.js configuration with React Native Web support
  - Expo and React Native setup (Babel, Metro)
  - TailwindCSS and NativeWind integration
  - Runtime theme injection system
  - Workspace optimization for monorepos

**[@consensys/ds3](packages/ui)** - Component library
  - Built on top of `@consensys/ds3-theme`
  - React Native Primitives integration
  - Cross-platform components (web + native)
  - TailwindCSS/NativeWind styling
  - Compound components pattern for flexible composition
  - Dual API system for web and native development
  - Slot pattern for component customization
  - Includes Avatar, Dialog, Checkbox, Select, and more UI components

**[@consensys/ds3-web3](packages/web3)** - Blockchain integration
  - Built on top of `@consensys/ds3`
  - Wallet integration (MetaMask, WalletConnect)
  - Cross-chain support for multiple networks
  - ENS resolution for human-readable addresses
  - Ethereum-specific utilities
  - Web3 UI components

#### Package Architecture

The packages follow a layered architecture:
1. **theme** → Theming system and design tokens
2. **config** → Build configuration layer (depends on theme)
3. **ui** → UI components (depends on theme)
4. **web3** → Blockchain components (depends on ui)

## Usage

### Installation

```bash
pnpm install
```

### Package Development

Build all packages:
```bash
pnpm build-deps
```

Watch all packages for development:
```bash
pnpm watch-deps
```

Build individual packages:
```bash
pnpm theme:build
pnpm config:build
```

### Documentation

The interactive documentation and component examples are available in the [docs](apps/docs) app.

Start the documentation site:
```bash
pnpm docs:start
```

### Template Projects

We provide official templates to help you get started:

- **[Vite Template](https://github.com/Consensys-Network-State/ds3-vite-template)** - Production-ready Vite.js setup
- **[Next.js Template](https://github.com/Consensys-Network-State/ds3-nextjs-template)** - Production-ready Next.js setup
- **[Expo Template](https://github.com/Consensys-Network-State/ds3-expo-template)** - React Native/Expo setup

To use these template projects within the monorepo, first clone with the `--recursive` flag to include the template submodules:

```bash
git clone --recursive https://github.com/Consensys-Network-State/ds3.git ds3             
```

Then you can run the templates:

```bash
# Install dependencies
pnpm i

# Start Vite template
pnpm --filter vite-template dev

# Start Next.js template
pnpm --filter nextjs-template dev

# Start Expo template
pnpm --filter expo-template start
```

### Maintenance

Clean up node_modules and dist folders:
```bash
pnpm clean
```

### Versioning and Publishing

We use [Changesets](https://github.com/changesets/changesets) for versioning and publishing our packages. This ensures consistent versioning across our monorepo and maintains a detailed changelog.

To create a new changeset:
```bash
pnpm changeset
```

To update versions based on changesets:
```bash
pnpm changeset version
```

To build and publish packages:
```bash
pnpm build-deps
pnpm changeset publish
```

The typical workflow is:
1. Make your changes
2. Create a changeset (`pnpm changeset`)
3. Update versions (`pnpm changeset version`)
4. Commit the changes (version bumps and changelog updates)
5. Build dependencies (`pnpm build-deps`)
6. Publish (`pnpm changeset publish`)

## License

MIT License - Copyright (c) 2024 ConsenSys Mesh