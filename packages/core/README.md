# @ds3/core

Foundation layer for Design System 3.

## Overview

The core package provides the foundation for the DS3 design system, including:

- Configuration tools for Vite, Tailwind, NativeWind
- Expo/React Native configurations (Babel, Metro)
- Environment configuration utilities
- Build tools and base dependencies

## Usage

```js
// Using the Vite plugin
import { vitePlugin } from '@ds3/core/vite';

// Using Tailwind preset
import { tailwindPreset } from '@ds3/core/tailwind';

// Using NativeWind preset
import { nativewindPreset } from '@ds3/core/nativewind';

// Using Expo config
import { expoPreset } from '@ds3/core/expo';

// Using environment config
import { config } from '@ds3/core/env';
```

## Exports

- `@ds3/core/vite` - Vite plugin configurations
- `@ds3/core/tailwind` - Tailwind preset
- `@ds3/core/nativewind` - NativeWind preset
- `@ds3/core/expo` - Expo configurations
- `@ds3/core/expo/babel` - Babel preset for Expo
- `@ds3/core/metro` - Metro configurations
- `@ds3/core/env` - Environment configuration 