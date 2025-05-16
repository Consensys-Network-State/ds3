# React Components

A collection of React components built with React Native and Tailwind CSS.

## Installation

```bash
npm install @ds3/ui
```

## Usage

```tsx
import { Button, Input, Text } from '@ds3/ui';

export function MyComponent() {
  return (
    <Button>
      <Button.Text>Click me</Button.Text>
    </Button>
  );
}
```

## The Slot Pattern (`asChild`)

The Slot pattern allows you to replace a component's default root element with your own custom element, while preserving all styling, behavior, and accessibility features.

### How It Works

When you pass `asChild={true}` to a component:

1. The component renders a `Slot` component instead of its default element
2. The `Slot` captures all props from the parent component
3. It applies those props to the first child element you provide
4. The child element becomes the new root, inheriting all behavior

### Examples

```tsx
// Regular button
<Button variant="solid" color="primary">
  <Button.Text>Click Me</Button.Text>
</Button>

// Button as a link using asChild
<Button variant="solid" color="primary" asChild>
  <a href="https://example.com">Visit Website</a>
</Button>

// Button as a router link
<Button variant="solid" color="primary" asChild>
  <Link to="/dashboard">Go to Dashboard</Link>
</Button>
```

The rendered DOM with `asChild` would be essentially:

```html
<a 
  href="https://example.com" 
  class="ds3-button ds3-button-solid ds3-button-primary"
  role="button"
>
  Visit Website
</a>
```

### Cross-Platform Implementation

Our components use different Slot implementations based on platform:

- **Web**: Uses `@radix-ui/react-slot` for DOM elements
- **Native**: Uses `@rn-primitives/slot` for React Native components

This allows the same API to work seamlessly across platforms while respecting platform-specific behavior.

## Cross-Platform Prop Handling

This library is designed to support three distinct developer personas with a unified component library:

### Developer Personas

#### 1. Web-Only Developers
If you're building exclusively for the web:
- Use web-specific props (`onChange`, `type`, etc.)
- Full access to web-specific features with type safety

#### 2. Native-Only Developers
If you're building exclusively for native platforms:
- Use only React Native props (`onChangeText`, `secureTextEntry`, etc.)
- Expect runtime warnings help identify accidental use of web props

#### 3. Hybrid App Developers
If you're building for both web and native:
- Use only React Native props for cross-platform consistency
- Never mix web and native props, even in web contexts
- Write once, run anywhere with the same component API

The key principle is consistency: pick one prop style based on your target platform(s) and stick with it.

Key behavior:
- Native components accept only `NativeProps`
- Web components accpet `NativeProps` **OR** `WebProps`
- Hybrid apps should use only `NativeProps` for all platforms

## Export Strategy

This package uses a consistent export strategy to ensure optimal tree-shaking and clear public API boundaries:

1. **Named Exports Only**: All exports are named exports to enable better tree-shaking.

2. **Component-Level Exports**: Each component directory exports everything it needs internally:
   ```typescript
   // components/button/index.ts
   export { Button } from './button';
   export { IconButton } from './icon-button';
   export { useButtonContext } from './context';
   export type { ButtonProps, IconButtonProps } from './types';
   // ... other internal exports
   ```

3. **Public API**: The root `src/index.ts` file serves as the public API, carefully selecting which exports to expose:
   ```typescript
   // src/index.ts
   export { Button } from './components/button/button';
   export { IconButton } from './components/button/icon-button';
   export type { ButtonRootProps as ButtonProps } from './components/button/types';
   // ... other public exports
   ```

This approach provides several benefits:
- Clear separation between internal and public APIs
- Optimal tree-shaking as all exports are named
- Components can use their full internal API while maintaining a clean public interface
- Easy to track and maintain the public API surface

## Components

### Button

```tsx
import { Button } from '@ds3/ui';

export function MyComponent() {
  return (
    <Button>
      <Button.Text>Click me</Button.Text>
    </Button>
  );
}
```

### Input

```tsx
import { Input } from '@ds3/ui';

export function MyComponent() {
  return (
    <Input>
      <Input.Field placeholder="Enter text" />
    </Input>
  );
}
```

### Form Fields

Pre-built form fields that combine base components with the Field wrapper:

```tsx
import { InputField, CheckboxField, SwitchField } from '@ds3/ui';

export function MyForm() {
  return (
    <form>
      <InputField label="Name" />
      <CheckboxField label="Subscribe" />
      <SwitchField label="Notifications" />
    </form>
  );
}
```

## Theme

The package includes a theme system that supports light and dark modes:

```tsx
import { ThemeProvider, ThemeSwitcher } from '@ds3/ui';

export function App() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build the package
npm run build
```

## License

MIT 