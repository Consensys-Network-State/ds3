<p align="center">
  <img src="../../assets/ds3.png" alt="DS3 Logo" width="100" />
</p>

<h1 align="center">@consensys/ds3-config</h1>

> 🚧 **Note**: This package is under active development. While we're working hard to make it production-ready, please be aware that APIs and features may change. We welcome your feedback and contributions as we continue to improve!

🔧 **Unified configuration layer for the DS3 ecosystem**

Build consistent, type-safe applications across web and React Native with a single configuration layer that handles framework integration, theming, and build tooling.

```tsx
// One configuration. Any platform. Native everywhere.
import { vitePlugin } from '@consensys/ds3-config/vite';
import { nativewindPreset } from '@consensys/ds3-config/nativewind';
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
pnpm add @consensys/ds3-config
```

### Theme Configuration & Runtime Access

The configuration system follows a three-step process to make your theme available throughout your application:

1. **Configuration**: Define your theme settings in `theme.config.ts`
2. **Processing**: The configuration is processed and transformed into a runtime theme object
3. **Injection**: The theme object is injected into your application's global scope

Each platform has its own way of accessing global variables:
- **Web (Vite)**: See [Vite Plugin](#vite-plugin) section for details
- **React Native (Expo)**: See [Expo Configuration](#expo-configuration) section for details

### Theme Configuration

For detailed theme configuration options, see the [@consensys/ds3-theme documentation](../theme/README.md).

```typescript
// theme.config.ts
import { UserConfig } from '@consensys/ds3-theme'

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
import ds3 from '@consensys/ds3-config/vite';
import themeConfig from "./theme.config";

export default defineConfig(({ command }) => ({
  plugins: [
    ds3(command, themeConfig),
  ],
}));
```

The plugin automatically:
- Configures React and React Native Web
- Sets up NativeWind babel preset
- Injects theme configuration into `import.meta.env.DS3`
- Optimizes dependencies for [@consensys/ds3](../ui/README.md) components

You can access the theme configuration in your application using:
```typescript
const theme = import.meta.env.DS3;
```

See [vite.plugin.ts](src/vite.plugin.ts) for implementation details.
See [vite.config.ts](https://github.com/Consensys-Network-State/ds3-vite-template/blob/main/vite.config.ts) for usage example.

### NativeWind Preset

The NativeWind preset combines Tailwind and React Native styling:

```javascript
// tailwind.config.js
import nativewindPreset from "@consensys/ds3-config/nativewind";
import themeConfig from "./theme.config";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/@consensys/ds3/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [nativewindPreset(themeConfig)]
}
```

See [nativewind.preset.ts](src/nativewind.preset.ts) for implementation details.
See [tailwind.config.js](https://github.com/Consensys-Network-State/ds3-vite-template/blob/main/tailwind.config.js) for usage example.

### Expo Configuration

Expo-specific configurations for React Native development:

```javascript
// app.config.js
import withDs3 from '@consensys/ds3-config/expo';
import themeConfig from './theme.config';

module.exports = ({ config }) => {
  return withDs3({ config, themeConfig });
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
See [app.config.js](https://github.com/Consensys-Network-State/ds3-expo-template/blob/main/app.config.js) for usage example.

### Babel Configuration

```javascript
// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['@consensys/ds3-config/expo/babel'],
  };
};
```

The babel preset automatically configures:
- babel-preset-expo with NativeWind support
- NativeWind babel plugin
- Proper JSX handling for React Native

See [babel.preset.ts](src/babel.preset.ts) for implementation details.
See [babel.config.js](https://github.com/Consensys-Network-State/ds3-expo-template/blob/main/babel.config.js) for usage example.

### Metro Configuration

Metro bundler configuration for React Native:

```javascript
// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');
const { withDs3Workspace } = require('@consensys/ds3-config/metro');

const config = getDefaultConfig(__dirname);
module.exports = withDs3Workspace(config);
```

The Metro configuration:
- Sets up NativeWind processing
- Configures proper module resolution
- Handles monorepo workspace dependencies
- Optimizes build performance

See [metro.config.ts](src/metro.config.ts) for implementation details.
See [metro.config.js](https://github.com/Consensys-Network-State/ds3-expo-template/blob/main/metro.config.js) for usage example.

### Next.js Configuration

Next.js-specific configuration for web development with React Native Web support:

```javascript
// next.config.mjs
import themeConfig from './theme.config.mjs';
import { withDs3 } from '@consensys/ds3-config/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withDs3(nextConfig, themeConfig);
```

The Next.js configuration:
- Enables React Native Web support with proper module resolution
- Configures transpilation for React Native and related packages
- Injects the theme into `global.DS3` for runtime access
- Sets up webpack with optimized defaults for DS3 components
- Maintains strict mode and SWC minification

You can access the theme configuration in your application using:
```typescript
const theme = global.DS3;
```

See [nextjs.config.ts](src/nextjs.config.ts) for implementation details.
See [next.config.mjs](https://github.com/Consensys-Network-State/ds3-nextjs-template/blob/main/next.config.mjs) for usage example.

For complete examples, see:
- [Vite Template](https://github.com/Consensys-Network-State/ds3-vite-template) - Web implementation
- [Next.js Template](https://github.com/Consensys-Network-State/ds3-nextjs-template) - Next.js implementation with React Native Web
- [Expo Template](https://github.com/Consensys-Network-State/ds3-expo-template) - React Native implementation

## 🏛️ Architecture

@consensys/ds3-config provides a unified configuration layer that ties together the entire DS3 ecosystem:

1. **Single Source of Truth**
   - One `theme.config.ts` file configures everything
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

## Framework Injection

All config plugins automatically inject the framework type into the DS3 configuration:

```typescript
// The config will include framework information
{
  blueprint: { /* user config */ },
  themes: { /* generated themes */ },
  framework: 'vite' | 'nextjs' | 'expo'
}
```

This framework information can be accessed in your components using the `usePlatform` hook:

```typescript
import { usePlatform } from '@consensys/ds3';

function MyComponent() {
  const platform = usePlatform(); // 'vite' | 'nextjs' | 'expo' | 'unknown'
  
  return (
    <div>
      Current framework: {platform}
    </div>
  );
}
```

## Usage

### Vite Plugin

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import vitePlugin from '@consensys/ds3-config/vite.plugin';

export default defineConfig({
  plugins: [
    vitePlugin({
      themes: {
        // your theme configuration
      }
    })
  ]
});
```

### Next.js Config

```typescript
// next.config.js
const { withDs3 } = require('@consensys/ds3-config/nextjs.config');

module.exports = withDs3({
  // your Next.js config
}, {
  themes: {
    // your theme configuration
  }
});
```

### Expo Preset

```typescript
// app.config.js
import expoPreset from '@consensys/ds3-config/expo.preset';

export default expoPreset({
  // your Expo config
}, {
  themes: {
    // your theme configuration
  }
});
```

### Metro Config

```typescript
// metro.config.js
const { withDs3 } = require('@consensys/ds3-config/metro.config');

module.exports = withDs3({
  // your Metro config
}, {
  input: './global.css'
});
```

## API Reference

### Vite Plugin

#### `vitePlugin(userConfig: UserConfig): PluginOption[]`

Creates Vite plugins with DS3 configuration.

**Parameters:**
- `userConfig`: DS3 theme configuration

**Returns:** Array of Vite plugins

### Next.js Config

#### `withDs3(nextConfig?: NextConfig, themeConfig?: Record<string, unknown>): NextConfig`

Enhances Next.js configuration with DS3 settings.

**Parameters:**
- `nextConfig`: Base Next.js configuration (optional)
- `themeConfig`: DS3 theme configuration (optional)

**Returns:** Enhanced Next.js configuration

### Expo Preset

#### `expoPreset(config: ExpoConfig, userConfig: UserConfig): ExpoConfig`

Applies DS3 configuration to Expo config.

**Parameters:**
- `config`: Expo configuration
- `userConfig`: DS3 theme configuration

**Returns:** Enhanced Expo configuration

### Metro Config

#### `withDs3(config: MetroConfig, options?: { input?: string }): MetroConfig`

Applies DS3 configuration to Metro config.

**Parameters:**
- `config`: Metro configuration
- `options.input`: CSS input file path (default: './global.css')

**Returns:** Enhanced Metro configuration

#### `withDs3Workspace(config: MetroConfig, options?: { input?: string, projectRoot?: string }): MetroConfig`

Applies DS3 configuration to Metro config with workspace support.

**Parameters:**
- `config`: Metro configuration
- `options.input`: CSS input file path (default: './global.css')
- `options.projectRoot`: Project root path (default: current directory)

**Returns:** Enhanced Metro configuration

## Types

```typescript
interface UserConfig {
  themes?: UserConfigThemes;
  framework?: 'vite' | 'nextjs' | 'expo';
}

interface Config {
  blueprint: UserConfig;
  themes: ConfigThemes;
  framework?: 'vite' | 'nextjs' | 'expo';
}
``` 