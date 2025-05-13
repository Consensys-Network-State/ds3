# React Components

A collection of React components built with React Native and Tailwind CSS.

## Installation

```bash
npm install @ds3/react
```

## Usage

```tsx
import { Button, Input, Text } from '@ds3/react';

export function MyComponent() {
  return (
    <Button>
      <Button.Text>Click me</Button.Text>
    </Button>
  );
}
```

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
import { Button } from '@ds3/react';

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
import { Input } from '@ds3/react';

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
import { InputField, CheckboxField, SwitchField } from '@ds3/react';

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
import { ThemeProvider, ThemeSwitcher } from '@ds3/react';

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