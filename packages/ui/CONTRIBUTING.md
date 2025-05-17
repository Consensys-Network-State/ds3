# Contributing Guidelines

## Dual-API Component

### Web-Only Development
If you're building exclusively for the web:
- Use web-specific props (`onChange`, `type`, etc.)
- Write code as you would for any React web application
- Leverage standard HTML attributes and DOM events

### Native-Only or Hybrid Development
If you're building for native platforms or hybrid apps:
- Use only React Native props (`onChangeText`, `onPress`, etc.)
- Never mix web and native props, even in web contexts
- Write once, run anywhere with the same component API

### Key Concepts

- **Choose your API**: Pick the API style based on your platform target
- **Be consistent**: Don't mix web and native APIs in the same codebase
- **Native components**: Accept only `NativeProps`
- **Web components**: Accept both `NativeProps` AND `WebProps`
- **Hybrid apps**: Should use only `NativeProps` for consistency

## Compound Component Pattern

When implementing new components, prefer using the compound component pattern for complex UI elements that have multiple related parts.

### Implementation Guidelines

1. **Create a Context**: Define a context to share state between the parent and child components:

```typescript
// components/example/context.ts
export const ExampleContext = createContext<ExampleContextType | null>(null);

export function useExampleContext() {
  const context = useContext(ExampleContext);
  if (!context) {
    throw new Error('useExampleContext must be used within an ExampleProvider');
  }
  return context;
}
```

2. **Implement Child Components**: Create each part that consumes the shared context:

```typescript
// components/example/Example.shared.tsx
export const ExamplePart = () => {
  const context = useExampleContext();
  // Use context values to render the part
  // ...
};
```

3. **Combine with Object.assign**: Attach child components to the parent component:

```typescript
// components/example/Example.tsx
const ExampleRoot = (props) => {
  // Create and provide context
  // Render the component
};

const Example = Object.assign(ExampleRoot, {
  Part: ExamplePart,
  AnotherPart: ExampleAnotherPart,
});

export { Example };
```

4. **Export as Named Export**: Follow our export strategy for the new compound component:

```typescript
// components/example/index.ts
export { Example } from './Example';
export type { ExampleProps } from './types';
```

### Best Practices

- **Context Memoization**: Memoize context values to prevent unnecessary re-renders
- **Forwarding Refs**: Use `forwardRef` for all components to support ref forwarding
- **Part Naming**: Name child components with the parent name as prefix (`Button.Text` not `Text`)
- **Type Safety**: Provide proper TypeScript types for the context and all components
- **Documentation**: Document both simple and compound usage patterns

### Real Component Examples

For reference, check these implementations:
- `Button` and its child components (`Button.Text`, `Button.Icon`, etc.)
- `Input` and its parts
- `Select` and its dropdown components

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