# @ds3/theme

🎨 **Complex theming made simple**

Build sophisticated, dynamic themes with a comprehensive design system that includes colors, spacing, typography, shadows, and animations. Our color system handles nested themes, mode switching, and semantic color mapping with ease.

## ✨ Standout Features

🎨 **Radix Colors** - Built on [Radix UI Colors](https://www.radix-ui.com/colors) for accessible, consistent color usage with semantic mapping

🎯 **Design Token System** - Complete set of pre-configured tokens for colors, spacing, typography, shadows, and animations

🎨 **Tailwind Classes** - Use familiar Tailwind classes with our pre-configured design tokens

🌓 **Mode Switching** - Toggle between light and dark modes with simple class changes

🔄 **Theme Switching** - Switch between different themes (default, oceanBreeze, etc.) with class combinations

🎭 **Nested Themes** - Create complex theme hierarchies with parent-child relationships and inheritance

🎨 **Dynamic Inheritance** - Child themes inherit from parent themes while maintaining their own overrides

## 🚀 Quick Start

### Installation

```bash
pnpm add @ds3/theme
```

### Tailwind Configuration

```javascript
// tailwind.config.js
import { tailwindPreset } from '@ds3/theme';

export default {
  presets: [tailwindPreset({
    themes: {
      // Choose colors from Radix UI color palettes
      // See: https://www.radix-ui.com/colors
      default: {
        colors: {
          neutral: 'gray',
          primary: 'blue',
          secondary: 'violet',
          error: 'red',
          warning: 'amber',
          success: 'green',
          info: 'blue',
        }
      }
    }
  })],
};
```

### Simple Usage

```html
<!-- Light mode -->
<div class="light">
  <button class="bg-primary hover:bg-primary-7 text-white px-4 py-2 rounded">
    Click me
  </button>
</div>

<!-- Dark mode -->
<div class="dark">
  <button class="bg-primary hover:bg-primary-7 text-white px-4 py-2 rounded">
    Click me
  </button>
</div>
```

## 🎨 Creating Custom Themes

Create custom themes by mapping semantic colors to different Radix colors:

```typescript
// tailwind.config.js
import { tailwindPreset } from '@ds3/theme';

export default {
  presets: [tailwindPreset({
    themes: {
      // Default theme
      default: {
        colors: {
          neutral: 'gray',
          primary: 'blue',
          secondary: 'violet',
          error: 'red',
          warning: 'amber',
          success: 'green',
          info: 'blue',
        }
      },
      // Custom theme
      oceanBreeze: {
        colors: {
          neutral: 'slate',    // Cooler neutral tone
          primary: 'cyan',     // Ocean-inspired primary
          secondary: 'blue',   // Complementary blue
          error: 'red',        // Keep error consistent
          warning: 'amber',    // Keep warning consistent
          success: 'grass',    // Natural success color
          info: 'blue',        // Match secondary
        }
      }
    }
  })],
};
```

Then use your custom theme with the appropriate mode class:

```html
<!-- Ocean Breeze theme in light mode -->
<div class="oceanBreeze light">
  <button class="bg-primary hover:bg-primary-7 text-white">
    Ocean Breeze Button
  </button>
  <p class="text-primary-11">Text using primary color</p>
  <div class="bg-primary-a5">Semi-transparent background</div>
</div>

<!-- Ocean Breeze theme in dark mode -->
<div class="oceanBreeze dark">
  <button class="bg-primary hover:bg-primary-7 text-white">
    Ocean Breeze Button
  </button>
  <p class="text-primary-11">Text using primary color</p>
  <div class="bg-primary-a5">Semi-transparent background</div>
</div>
```

### Nested Themes

Create different theme zones within your application:

```html
<!-- Root theme (default) -->
<div class="light">
  <!-- Main content with default theme -->
  <main>
    <button class="bg-primary">Default Theme Button</button>
  </main>

  <!-- Nested Ocean Breeze theme -->
  <div class="oceanBreeze dark">
    <button class="bg-primary">Ocean Breeze Dark Button</button>
  </div>

  <!-- Another nested theme -->
  <div class="sunset light">
    <button class="bg-primary">Sunset Theme Light Button</button>
  </div>
</div>
```

## 🎯 Design Tokens

The theme package provides a complete set of design tokens through the Tailwind preset. These tokens are carefully crafted to work together and maintain consistency across your application:

```typescript
// tailwind.config.js
import { tailwindPreset } from '@ds3/theme';

export default {
  presets: [tailwindPreset({
    themes: {
      // Your theme configuration
    }
  })],
};
```

The preset includes:

- **Colors**: Semantic color system built on Radix UI Colors
- **Spacing**: Consistent spacing scale from 0 to 40rem
- **Typography**: 
  - Font families (Inter, Roboto, Libre Franklin)
  - Font sizes with line heights and weights
  - Heading styles (h1-h6)
  - Text styles (xl, lg, base, sm, xs)
- **Shadows**: Theme-aware shadow tokens
- **Animations**: Pre-configured animations and keyframes
- **Border Radius**: Consistent border radius scale

For detailed configuration options, see the [Tailwind preset source](src/tailwind.preset.ts).

## 🔧 How It Works

### Radix Color Foundation

DS3's color system is built on top of Radix UI Colors, providing a robust foundation for accessible and consistent color usage. Each color in our system follows Radix's 12-step scale:

```
1  - Lightest
2  - Very Light
3  - Light
4  - Light-Medium
5  - Medium-Light
6  - Medium (DEFAULT)
7  - Medium-Dark
8  - Dark-Medium
9  - Dark
10 - Very Dark
11 - Darkest
12 - Alpha variants
```

Each Radix color comes in four variants:
- Base color (e.g., `blue`)
- Dark mode color (e.g., `blueDark`)
- Alpha color (e.g., `blueA`)
- Dark mode alpha color (e.g., `blueDarkA`)

### Semantic Color Mapping

When you map a semantic color to a Radix color, DS3 automatically generates all necessary variants:
- Light mode colors (1-12 steps)
- Dark mode colors (1-12 steps)
- Alpha variants for both modes
- CSS variables namespaced to the current theme and mode

### Generated CSS Structure

The system generates CSS variables for each theme and mode combination:

```css
/* Light mode (default theme) */
.light {
  --color-neutral-1: var(--radix-gray-1);
  --color-neutral-a1: var(--radix-gray-a1);  /* Alpha variant for transparency */
  --color-primary-1: var(--radix-blue-1);
  --color-primary-a1: var(--radix-blue-a1);  /* Alpha variant for transparency */
  /* ... */
}

/* Dark mode (default theme) */
.dark {
  --color-neutral-1: var(--radix-gray-dark-1);
  --color-neutral-a1: var(--radix-gray-dark-a1);  /* Alpha variant for transparency */
  --color-primary-1: var(--radix-blue-dark-1);
  --color-primary-a1: var(--radix-blue-dark-a1);  /* Alpha variant for transparency */
  /* ... */
}

/* Light mode (ocean breeze theme) */
.oceanBreeze.light {
  --color-neutral-1: var(--radix-slate-1);
  --color-neutral-a1: var(--radix-slate-a1);  /* Alpha variant for transparency */
  --color-primary-1: var(--radix-cyan-1);
  --color-primary-a1: var(--radix-cyan-a1);  /* Alpha variant for transparency */
  /* ... */
}

/* Dark mode (ocean breeze theme) */
.oceanBreeze.dark {
  --color-neutral-1: var(--radix-slate-dark-1);
  --color-neutral-a1: var(--radix-slate-dark-a1);  /* Alpha variant for transparency */
  --color-primary-1: var(--radix-cyan-dark-1);
  --color-primary-a1: var(--radix-cyan-dark-a1);  /* Alpha variant for transparency */
  /* ... */
}
```

These CSS variables are automatically mapped to Tailwind classes:

```html
<!-- Default theme in light mode -->
<div class="light">
  <!-- Using base colors -->
  <div class="bg-primary-1">Lightest primary color</div>
  <div class="text-neutral-1">Lightest neutral color</div>

  <!-- Using alpha variants -->
  <div class="bg-primary-a1">Semi-transparent primary color</div>
  <div class="text-neutral-a1">Semi-transparent neutral color</div>
</div>

<!-- Ocean Breeze theme in light mode -->
<div class="oceanBreeze light">
  <div class="bg-primary-1">Ocean Breeze lightest primary</div>
  <div class="bg-primary-a1">Ocean Breeze transparent primary</div>
</div>

<!-- Nested themes example -->
<div class="light">
  <div class="bg-primary-1">Default theme</div>

  <!-- Ocean Breeze theme in dark mode -->
  <div class="oceanBreeze dark">
    <div class="bg-primary-1">Nested Ocean Breeze theme</div>
  </div>
</div>
```

## 🤝 Contributing

Contributions welcome!

## 📜 License

MIT License - Copyright (c) 2024 ConsenSys Mesh