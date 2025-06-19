<p align="center">
  <img src="../../assets/ds3.png" alt="DS3 Logo" width="100" />
</p>

<h1 align="center">@consensys/ds3-theme</h1>

> 🚧 **Note**: This package is under active development. While we're working hard to make it production-ready, please be aware that APIs and features may change. We welcome your feedback and contributions as we continue to improve!

🎨 **Complex theming made simple**

Build sophisticated, dynamic themes with a comprehensive design system that includes colors, spacing, typography, shadows, and animations. Our color system handles nested themes, mode switching, and semantic color mapping with ease.

## ✨ Standout Features

🎨 **Flexible Color System** - Three ways to define colors:
- **Radix Preset Colors** - Use pre-defined Radix UI color palettes
- **Radix Color Generator** - Generate custom color scales with semantic mapping
- **Custom Palettes** - Create fully customizable color scales with any valid CSS color

🎯 **Design Token System** - Complete set of pre-configured tokens for colors, spacing, typography, shadows, and animations

🎨 **Tailwind Classes** - Use familiar Tailwind classes with our pre-configured design tokens

🌓 **Mode Switching** - Toggle between light and dark modes with simple class changes

🔄 **Theme Switching** - Switch between different themes (default, oceanBreeze, etc.) with class combinations

🎭 **Nested Themes** - Create complex theme hierarchies with parent-child relationships and inheritance

🎨 **Dynamic Inheritance** - Child themes inherit from parent themes while maintaining their own overrides

⚡ **Dynamic CSS Variables** - Runtime theme customization with smooth transitions and real-time updates

## 🚀 Quick Start

### Installation

```bash
pnpm add @consensys/ds3-theme
```

### Tailwind Configuration

```javascript
// tailwind.config.js
import { tailwindPreset } from '@consensys/ds3-theme';

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
<!-- Recommended: Apply theme to the HTML element -->
<html class="light">
  <body>
    <button class="bg-primary hover:bg-primary-7 text-white px-4 py-2 rounded">
      Click me
    </button>
  </body>
</html>

<!-- Alternative: Apply theme to any element -->
<div class="dark">
  <button class="bg-primary hover:bg-primary-7 text-white px-4 py-2 rounded">
    Click me
  </button>
</div>
```

## 🎨 Defining Color Palettes

Before diving into the different ways to define colors, it's important to understand how colors are mapped to semantic roles in your UI:

Semantic colors help maintain consistency and meaning across your application. Instead of using colors directly (like `blue` or `red`), semantic colors describe the purpose of the color (like `primary` or `error`). This makes it easier to:
- Maintain a consistent design language
- Update your color scheme without changing component logic
- Support multiple themes and color modes
- Ensure accessibility by using colors with clear meaning

Here's how colors are mapped to semantic roles in your UI:

| Semantic Color | Purpose | Default Mapping |
|----------------|---------|----------------|
| `neutral` | Base UI elements, text, borders | `gray` |
| `primary` | Main actions, brand identity | `blue` |
| `secondary` | Alternative actions, accents | `violet` |
| `error` | Error states, destructive actions | `red` |
| `warning` | Warning states, cautionary actions | `amber` |
| `success` | Success states, positive actions | `green` |
| `info` | Information states, neutral actions | `blue` |

> 💡 **Tip**: While these are the recommended semantic colors, you can use any semantic name that makes sense for your application. For example, you might use `brand`, `accent`, or `surface` instead of or in addition to these defaults.

The theme system supports three ways to define colors:

### 1. Radix Preset Colors

Use pre-defined [Radix UI Colors](https://www.radix-ui.com/colors) palettes for consistent, accessible colors:

```typescript
// tailwind.config.js
import { tailwindPreset } from '@consensys/ds3-theme';

export default {
  presets: [tailwindPreset({
    themes: {
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

### 2. Radix Color Generator

Generate custom color scales with semantic mapping using the [Radix UI Colors Custom](https://www.radix-ui.com/colors/custom) algorithm:

```typescript
// tailwind.config.js
import { tailwindPreset } from '@consensys/ds3-theme';

export default {
  presets: [tailwindPreset({
    themes: {
      default: {
        colors: {
          // Minimal configuration - just accent color
          primary: {
            accent: '#FF3366'  // Required: Base accent color
          },

          // Light/dark mode accent colors
          secondary: {
            accent: {          // Required: Base accent colors
              light: '#0066FF',
              dark: '#0033CC'
            }
          },

          // Complete configuration
          tertiary: {
            accent: '#FF3366',  // Required: Base accent color
            gray: '#8B8D98',    // Optional: Gray scale color
            background: {       // Optional: Background colors
              light: '#FFFFFF',
              dark: '#000000'
            }
          }
        }
      }
    }
  })],
};
```

### 3. Custom Palettes

Create fully customizable color scales with any valid CSS color:

```typescript
// tailwind.config.js
import { tailwindPreset } from '@consensys/ds3-theme';

export default {
  presets: [tailwindPreset({
    themes: {
      default: {
        colors: {
          primary: {
            light: {
              // Any valid CSS color string is supported
              'cardBg': '#FF3366',
              'overlay': 'rgba(0, 0, 0, 0.5)',
              'gradient': 'linear-gradient(to right, #FF3366, #0066FF)',

              // Numeric keys are supported
              1: '#E6F7FF',
              2: '#BAE7FF',

              // Alpha variants with any key
              a1: 'rgba(24, 144, 255, 0.05)',
              a13: 'rgba(24, 144, 255, 0.13)',
              a100: 'rgba(24, 144, 255, 0.1)'
            },
            dark: {
              // Dark mode is optional
              'primary': '#001A4D',
              // ...
            }
          }
        }
      }
    }
  })],
};
```

> 💡 **Tip**: If you don't specify dark mode colors, the system will automatically use the light mode colors for dark mode. This is useful when you want to maintain the same color scheme across both modes or when you're just getting started with theming.

> 💡 **Tip**: You can mix and match all three color configuration types within a single theme to create the perfect color system for your needs.

## 🎨 Creating Custom Themes

Create custom themes by mapping semantic colors to different Radix colors:

```typescript
// tailwind.config.js
import { tailwindPreset } from '@consensys/ds3-theme';

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
<html class="oceanBreeze light">
  <body>
    <button class="bg-primary hover:bg-primary-7 text-white">
      Ocean Breeze Button
    </button>
    <p class="text-primary-11">Text using primary color</p>
    <div class="bg-primary-a5">Semi-transparent background</div>
  </body>
</html>
```

### Nested Themes

Create different theme zones within your application:

```html
<!-- Root theme (default) -->
<html class="light">
  <body>
    <!-- Main content with default theme -->
    <main>
      <button class="bg-primary">Default Theme Button</button>
    </main>

    <!-- Force this button to dark mode -->
    <div class="dark">
      <button class="bg-primary">Ocean Breeze Dark Button</button>
    </div>

    <!-- Nested Ocean Breeze theme -->
    <div class="oceanBreeze dark">
      <button class="bg-primary">Sunset Theme Light Button</button>
    </div>
  </body>
</html>
```

> 💡 **Note**: You can specify just the theme name (e.g., `oceanBreeze`) and it will inherit the parent's mode, or you can override the mode by specifying both theme and mode (e.g., `oceanBreeze dark`).

## 🎯 Design Tokens

The theme package provides a complete set of design tokens through the Tailwind preset. These tokens are carefully crafted to work together and maintain consistency across your application:

```typescript
// tailwind.config.js
import { tailwindPreset } from '@consensys/ds3-theme';

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

The theme system processes your configuration in three simple steps:

1. **Read Configuration**
   - Extracts Radix preset colors and their alpha variants
   - Generates custom color palettes using the Radix algorithm
   - Consumes any custom color definitions

2. **Generate CSS Variables**
   The system processes your theme configuration in three steps:

   1. Generates CSS variables for each theme and mode
   2. Injects these variables into the CSS runtime environment using Tailwind's `addBase` plugin
   3. Registers the variables with Tailwind's theme system for utility class generation

   This process enables Tailwind to generate utility classes that reference these CSS variables, making them available throughout your application. For example:
   - `bg-primary-1` → Sets background to the lightest primary color
   - `text-neutral-11` → Sets text to a dark neutral color
   - `border-error-6` → Sets border to a medium error color
   - `bg-primary-a5` → Sets background to a semi-transparent primary color

   The CSS variables below are what makes this possible - they're injected into the runtime environment and automatically update when switching themes or modes. This means your Tailwind utility classes will automatically adapt to the current theme and mode:

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

3. **Use in HTML**
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

## Theme Switching

When switching themes or modes, the system updates CSS variables in real-time:

```typescript
// Example of theme switching
document.documentElement.classList.remove('light');
document.documentElement.classList.add('dark');

// Or switching to a custom theme
document.documentElement.classList.remove('default');
document.documentElement.classList.add('oceanBreeze');
```

The CSS variables update automatically, maintaining all color relationships and semantic mappings.

## Runtime Customization

You can customize theme variables at runtime:

```typescript
// Example of runtime color adjustment
document.documentElement.style.setProperty('--color-primary-6', '#custom-color');

// Or adjusting alpha values
document.documentElement.style.setProperty('--color-primary-a6', 'rgba(0, 0, 0, 0.5)');
```

### Smooth Transitions

To enable smooth transitions between theme changes, add transition properties to your CSS:

```css
/* Add to your global CSS */
:root {
  --theme-transition-duration: 200ms;
}

* {
  transition: background-color var(--theme-transition-duration) ease,
              color var(--theme-transition-duration) ease,
              border-color var(--theme-transition-duration) ease;
}
```

This creates a smooth experience when switching between themes or modes.

## 🛠️ Utility Functions

The theme package provides several utility functions that you can use directly in your code:

### Color Generation Utilities

```typescript
import { generateRadixColors, getColorScaleObject } from '@consensys/ds3-theme';

// Generate a complete color scale from a base color
const colors = generateRadixColors({
  appearance: 'light',  // or 'dark'
  accent: '#3D63DD',    // Your brand color
  gray: '#8B8D98',      // Your neutral color
  background: '#FFFFFF' // Your background color
});

// Convert the generated colors into a usable color scale object
const colorScale = getColorScaleObject({
  isDarkMode: false,
  name: 'blue',
  contrast: colors.accentContrast,
  scale: colors.accentScale,
  scaleWideGamut: colors.accentScaleWideGamut,
  scaleAlpha: colors.accentScaleAlpha,
  scaleAlphaWideGamut: colors.accentScaleAlphaWideGamut,
  surface: colors.accentSurface,
  surfaceWideGamut: colors.accentSurfaceWideGamut,
});
```

The generated color scale includes:
- Base colors (1-12 steps)
- Alpha variants for transparency
- Wide gamut color variants for modern displays
- Surface colors for overlays and backgrounds
- Contrast colors for text and icons

## 🤝 Contributing

Contributions welcome!

## 📜 License

MIT License - Copyright (c) 2025 ConsenSys Inc