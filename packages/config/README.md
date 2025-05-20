# @ds3/config

🔧 **Unified configuration layer for the DS3 ecosystem**

Build consistent, type-safe applications across web and React Native with a single configuration layer that handles framework integration, theming, and build tooling.

```tsx
// One configuration. Any platform. Native everywhere.
import { vitePlugin } from '@ds3/config/vite';
import { nativewindPreset } from '@ds3/config/nativewind';
```

## ✨ Standout Features

🔄 **Framework Integration** - Seamless setup for Vite, Expo, and React Native with optimized defaults

🎨 **Theme Integration** - Unified theming system that works across all platforms

🔧 **Build Tooling** - Comprehensive build configurations for web and native development

📱 **Cross-Platform** - Consistent configuration patterns for web and React Native

🛠️ **Type Safety** - Full TypeScript support with comprehensive type definitions

🏗️ **Workspace Support** - Optimized for monorepo setups with proper module resolution

## 🚀 Get Started

```bash
pnpm add @ds3/config
```

### Theme Configuration & Runtime Access

The configuration system follows a three-step process to make your theme available throughout your application:

1. **Configuration**: Define your theme settings in `ds3.config.ts`
2. **Processing**: The configuration is processed and transformed into a runtime theme object
3. **Injection**: The theme object is injected into your application's global scope

Each platform has its own way of accessing global variables:
- **Web (Vite)**: See [Vite Plugin](#vite-plugin) section for details
- **React Native (Expo)**: See [Expo Configuration](#expo-configuration) section for details

### Theme Configuration

For detailed theme configuration options, see the [@ds3/theme documentation](../theme/README.md).

```typescript
// ds3.config.ts
import { UserConfig } from '@ds3/theme'

export default {
  themes: {
    default: {
      colors: {
        neutral: 'gray',
        primary: 'blue',
        secondary: 'violet',
        error: 'red',
        warning: 'amber',
        success: 'green',
      },
    },
  },
} satisfies UserConfig;
```

## 📚 Configuration Options

### Vite Plugin

The Vite plugin provides optimized defaults for web development:

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import ds3Plugin from '@ds3/config/vite';
import ds3Config from "./ds3.config";

export default defineConfig(({ command }) => ({
  plugins: [
    ds3Plugin(command, ds3Config),
  ],
}));
```

The plugin automatically:
- Configures React and React Native Web
- Sets up NativeWind babel preset
- Injects theme configuration into `import.meta.env.DS3`
- Optimizes dependencies for [@ds3/ui](../ui/README.md) components

You can access the theme configuration in your application using:
```typescript
const theme = import.meta.env.DS3;
```

See [vite.plugin.ts](src/vite.plugin.ts) for implementation details.
See [vite.config.ts](apps/vite-example/vite.config.ts) for usage example.

### NativeWind Preset

The NativeWind preset combines Tailwind and React Native styling:

```javascript
// tailwind.config.js
import ds3Preset from "@ds3/config/nativewind";
import ds3Config from "./ds3.config";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/@ds3/ui/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [ds3Preset(ds3Config)]
}
```

See [nativewind.preset.ts](src/nativewind.preset.ts) for implementation details.
See [tailwind.config.js](apps/vite-example/tailwind.config.js) for usage example.

### Expo Configuration

Expo-specific configurations for React Native development:

```javascript
// app.config.js
import withDs3 from '@ds3/config/expo';
import ds3Config from './ds3.config';

module.exports = ({ config }) => {
  return withDs3({ config, ds3Config });
};
```

The Expo configuration:
- Processes and validates your theme configuration
- Injects the theme into `global.DS3` for runtime access
- Ensures consistent theming across your React Native application

You can access the theme configuration in your application using:
```typescript
const theme = global.DS3;
```

See [expo.preset.ts](src/expo.preset.ts) for implementation details.
See [app.config.js](apps/expo-example/app.config.js) for usage example.

### Babel Configuration

```javascript
// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['@ds3/config/expo/babel'],
  };
};
```

The babel preset automatically configures:
- babel-preset-expo with NativeWind support
- NativeWind babel plugin
- Proper JSX handling for React Native

See [babel.preset.ts](src/babel.preset.ts) for implementation details.
See [babel.config.js](apps/expo-example/babel.config.js) for usage example.

### Metro Configuration

Metro bundler configuration for React Native:

```javascript
// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');
const { withDs3Workspace } = require('@ds3/config/metro');

const config = getDefaultConfig(__dirname);
module.exports = withDs3Workspace(config);
```

The Metro configuration:
- Sets up NativeWind processing
- Configures proper module resolution
- Handles monorepo workspace dependencies
- Optimizes build performance

See [metro.config.ts](src/metro.config.ts) for implementation details.
See [metro.config.js](apps/expo-example/metro.config.js) for usage example.

For complete examples, see:
- [Vite Example](apps/vite-example) - Web implementation
- [Expo Example](apps/expo-example) - React Native implementation

## 🏛️ Architecture

@ds3/config provides a unified configuration layer that ties together the entire DS3 ecosystem:

1. **Single Source of Truth**
   - One `ds3.config.ts` file configures everything
   - Type-safe configuration with `UserConfig` type
   - Consistent theming across all platforms

2. **Framework Integration**
   - Vite for web development
   - Expo for React Native
   - NativeWind for styling
   - Metro for bundling

3. **Workspace Optimization**
   - Monorepo-aware module resolution
   - Shared dependency management
   - Consistent build configuration
   - Development server optimization

## 🛠️ Development

```bash
# Install dependencies
pnpm i

# Watch and build
pnpm dev

# Production build
pnpm build
```

## 🤝 Contributing

We welcome contributions!

## 📜 License

MIT 