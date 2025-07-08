# Tokens

DS3 provides a comprehensive set of design tokens that establish consistent spacing, borders, typography, and other foundational design elements. These tokens are built on a systematic scale that ensures visual harmony and maintainability across your application.

## Spacing Scale

DS3 uses a systematic spacing scale based on a 4px (0.25rem) base unit, providing consistent spacing throughout your application.

### Spacing Tokens

```tsx live
<View className="space-y-4">
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center w-24">space-0</Text>
    <View className="bg-neutral-6 h-4 w-0" />
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center w-24">space-0.5</Text>
    <View className="bg-neutral-6 h-4 w-0.5" />
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center w-24">space-1</Text>
    <View className="bg-neutral-6 h-4 w-1" />
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center w-24">space-1.5</Text>
    <View className="bg-neutral-6 h-4 w-1.5" />
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center w-24">space-2</Text>
    <View className="bg-neutral-6 h-4 w-2" />
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center w-24">space-2.5</Text>
    <View className="bg-neutral-6 h-4 w-2.5" />
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center w-24">space-3</Text>
    <View className="bg-neutral-6 h-4 w-3" />
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center w-24">space-3.5</Text>
    <View className="bg-neutral-6 h-4 w-3.5" />
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center w-24">space-4</Text>
    <View className="bg-neutral-6 h-4 w-4" />
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center w-24">space-5</Text>
    <View className="bg-neutral-6 h-4 w-5" />
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center w-24">space-6</Text>
    <View className="bg-neutral-6 h-4 w-6" />
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center w-24">space-7</Text>
    <View className="bg-neutral-6 h-4 w-7" />
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center w-24">space-8</Text>
    <View className="bg-neutral-6 h-4 w-8" />
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center w-24">space-10</Text>
    <View className="bg-neutral-6 h-4 w-10" />
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center w-24">space-12</Text>
    <View className="bg-neutral-6 h-4 w-12" />
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center w-24">space-14</Text>
    <View className="bg-neutral-6 h-4 w-14" />
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center w-24">space-16</Text>
    <View className="bg-neutral-6 h-4 w-16" />
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center w-24">space-18</Text>
    <View className="bg-neutral-6 h-4 w-18" />
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center w-24">space-20</Text>
    <View className="bg-neutral-6 h-4 w-20" />
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center w-24">space-24</Text>
    <View className="bg-neutral-6 h-4 w-24" />
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center w-24">space-28</Text>
    <View className="bg-neutral-6 h-4 w-28" />
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center w-24">space-32</Text>
    <View className="bg-neutral-6 h-4 w-32" />
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center w-24">space-36</Text>
    <View className="bg-neutral-6 h-4 w-36" />
  </View>
  <View className="flex flex-row flex-wrap gap-4">
    <Text className="flex items-center w-24">space-40</Text>
    <View className="bg-neutral-6 h-4 w-40" />
  </View>
</View>
```

### Spacing Scale Reference

| Token | Value | Pixels | Use Case |
|-------|-------|--------|----------|
| `space-0` | `0rem` | `0px` | No spacing |
| `space-0.5` | `0.125rem` | `2px` | Minimal spacing |
| `space-1` | `0.25rem` | `4px` | Tight spacing |
| `space-1.5` | `0.375rem` | `6px` | Compact spacing |
| `space-2` | `0.5rem` | `8px` | Small spacing |
| `space-2.5` | `0.625rem` | `10px` | Medium-small spacing |
| `space-3` | `0.75rem` | `12px` | Medium spacing |
| `space-3.5` | `0.875rem` | `14px` | Medium-large spacing |
| `space-4` | `1rem` | `16px` | Base spacing |
| `space-5` | `1.25rem` | `20px` | Large spacing |
| `space-6` | `1.5rem` | `24px` | Extra large spacing |
| `space-7` | `1.75rem` | `28px` | Section spacing |
| `space-8` | `2rem` | `32px` | Component spacing |
| `space-10` | `2.5rem` | `40px` | Layout spacing |
| `space-12` | `3rem` | `48px` | Page spacing |
| `space-14` | `3.5rem` | `56px` | Large layout spacing |
| `space-16` | `4rem` | `64px` | Section layout spacing |
| `space-18` | `4.5rem` | `72px` | Extra large layout spacing |
| `space-20` | `5rem` | `80px` | Hero spacing |
| `space-24` | `6rem` | `96px` | Page section spacing |
| `space-28` | `7rem` | `112px` | Large page spacing |
| `space-32` | `8rem` | `128px` | Extra large page spacing |
| `space-36` | `9rem` | `144px` | Hero section spacing |
| `space-40` | `10rem` | `160px` | Maximum spacing |

## Border Tokens

DS3 provides consistent border width tokens for creating visual boundaries and structure.

### Border Widths

```tsx live
<View className="space-y-4">
  <View className="bg-neutral-2 border-neutral-8 border-0 p-4">
    <Text>border-0</Text>
  </View>
  <View className="bg-neutral-2 border-neutral-8 border-2 p-4">
    <Text>border-2</Text>
  </View>
  <View className="bg-neutral-2 border-neutral-8 border-4 p-4">
    <Text>border-4</Text>
  </View>
  <View className="bg-neutral-2 border-neutral-8 border-8 p-4">
    <Text>border-8</Text>
  </View>
</View>
```

### Border Width Reference

| Token | Value | Pixels | Use Case |
|-------|-------|--------|----------|
| `border-0` | `0px` | `0px` | No border |
| `border-2` | `2px` | `2px` | Subtle border |
| `border-4` | `4px` | `4px` | Standard border |
| `border-8` | `8px` | `8px` | Thick border |

## Border Radius Tokens

DS3 provides a systematic border radius scale for creating rounded corners and visual hierarchy.

### Border Radius Scale

```tsx live
<View className="flex flex-row flex-wrap gap-4">
  <View className="flex flex-col items-center space-y-2">
    <Text>rounded-none</Text>
    <View className="w-24 h-24 bg-neutral-6 rounded-none" />
  </View>
  <View className="flex flex-col items-center space-y-2">
    <Text>rounded</Text>
    <View className="w-24 h-24 bg-neutral-6 rounded" />
  </View>
  <View className="flex flex-col items-center space-y-2">
    <Text>rounded-lg</Text>
    <View className="w-24 h-24 bg-neutral-6 rounded-lg" />
  </View>
  <View className="flex flex-col items-center space-y-2">
    <Text>rounded-xl</Text>
    <View className="w-24 h-24 bg-neutral-6 rounded-xl" />
  </View>
  <View className="flex flex-col items-center space-y-2">
    <Text>rounded-full</Text>
    <View className="w-24 h-24 bg-neutral-6 rounded-full" />
  </View>
</View>
```

### Border Radius Reference

| Token | Value | Pixels | Use Case |
|-------|-------|--------|----------|
| `rounded-none` | `0` | `0px` | Sharp corners |
| `rounded` | `0.25rem` | `4px` | Subtle rounding |
| `rounded-lg` | `0.5rem` | `8px` | Standard rounding |
| `rounded-xl` | `0.75rem` | `12px` | Large rounding |
| `rounded-full` | `9999px` | - | Circular/pill shapes |

## Shadow Tokens

DS3 provides elevation-based shadow tokens for creating depth and visual hierarchy.

### Shadow Examples

```tsx live
<View className="flex flex-row flex-wrap gap-4">
  <View className="flex flex-col items-center space-y-2">
    <Text>shadow-elevated</Text>
    <View className="w-24 h-24 bg-neutral-2 shadow-elevated rounded" />
  </View>
</View>
```

### Shadow Configuration

Shadows can be configured in your theme configuration:

```typescript
// theme.config.ts
import type { UserConfig } from '@consensys/ds3-theme';

export default {
  themes: {
    default: {
      boxShadow: {
        elevated: {
          light: [
            'inset 0 0 0 1px rgba(0, 0, 0, 0.09)',
            'inset 0 -2px 1px 0 rgba(0, 0, 0, 0.06)',
            'inset 0 4px 2px -2px rgba(255, 255, 255, 0.70)',
            'inset 0 2px 1px -1px rgba(255, 255, 255, 0.70)'
          ],
          dark: [
            'inset 0 0 0 1px rgba(255, 255, 255, 0.10)',
            'inset 0 4px 2px -2px rgba(255, 255, 255, 0.15)',
            'inset 0 1px 1px 0 rgba(255, 255, 255, 0.40)',
            'inset 0 -1px 1px 0 rgba(0, 0, 0, 0.40)'
          ]
        }
      }
    }
  }
} satisfies UserConfig;
```

## Animation Tokens

DS3 provides consistent animation tokens for creating smooth, accessible interactions.

### Animation Reference

| Token | Duration | Easing | Use Case |
|-------|----------|--------|----------|
| `animate-accordion-down` | `0.3s` | `ease-out` | Accordion expansion |
| `animate-accordion-up` | `0.3s` | `ease-out` | Accordion collapse |
| `animate-spin-normal` | `2s` | `linear` | Normal rotation |
| `animate-spin-slow` | `4s` | `linear` | Slow rotation |
| `animate-spin-fast` | `1s` | `linear` | Fast rotation |
| `animate-spin-reverse` | `2s` | `linear` | Reverse rotation |

## Usage in Components

Design tokens are automatically available as Tailwind CSS classes throughout your application:

### Spacing Usage
```tsx
<View className="p-4">          // Padding using spacing token
<View className="m-6">          // Margin using spacing token
<View className="gap-2">        // Gap using spacing token
<View className="space-y-4">    // Vertical spacing using spacing token
```

### Border Usage
```tsx
<View className="border-2 border-neutral-6 rounded-lg" />
<View className="border-t-4 border-primary-6" />
```

### Typography Usage
```tsx
<Text className="text-h1 font-bold">Page Title</Text>
<Text className="text-base leading-normal">Body text</Text>
<Text className="text-sm text-neutral-11">Caption</Text>
```

### Shadow Usage
```tsx
<View className="shadow-elevated rounded-lg p-4" />
```

## Customization

Design tokens can be customized in your theme configuration:

```typescript
// theme.config.ts
import type { UserConfig } from '@consensys/ds3-theme';

export default {
  themes: {
    default: {
      // Custom spacing scale
      spacing: {
        'xs': '0.125rem',
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '2rem',
        'xl': '4rem',
      },
      // Custom border radius
      borderRadius: {
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '0.75rem',
        'xl': '1.5rem',
      },
      // Custom shadows
      boxShadow: {
        'custom': {
          light: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          dark: '0 4px 6px -1px rgba(0, 0, 0, 0.3)'
        }
      }
    }
  }
} satisfies UserConfig;
```

## Resources

- [Tailwind CSS Spacing](https://tailwindcss.com/docs/theme#spacing) - Spacing scale reference
- [Tailwind CSS Border Radius](https://tailwindcss.com/docs/border-radius) - Border radius reference
- [Tailwind CSS Typography](https://tailwindcss.com/docs/font-size) - Typography reference
- [DS3 Theme Package](https://github.com/Consensys-Network-State/ds3/tree/main/packages/theme) - Full documentation 