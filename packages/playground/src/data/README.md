# Code Examples Structure

This directory contains modular code examples for the JSX Playground, organized by component category for better maintainability and performance.

## Structure

```
code-examples/
├── index.ts          # Main export file that combines all examples
├── buttons.ts        # Button component examples
├── inputs.ts         # Input component examples  
├── text.ts          # Text component examples
├── icons.ts         # Icon component examples
├── mixed.ts         # Mixed component examples
└── README.md        # This file
```

## Adding New Examples

### 1. Create a new category file

Create a new TypeScript file (e.g., `cards.ts`) with the following structure:

```typescript
import { SomeIcon } from "lucide-react-native";

export const cardExamples = {
  "basic": {
    name: "Basic Cards",
    jsx: `<View className="bg-neutral-2 p-4 rounded-lg">
  <Text>Card content</Text>
</View>`
  },
  "with-header": {
    name: "Cards with Header",
    jsx: `<View className="bg-neutral-2 p-4 rounded-lg">
  <Text size="lg" weight="bold">Card Header</Text>
  <Text>Card content</Text>
</View>`
  }
};
```

### 2. Update the index file

Add your new category to `index.ts`:

```typescript
import { cardExamples } from './cards';

export const codeExamples = {
  // ... existing categories
  cards: {
    name: "Cards",
    examples: cardExamples
  }
};

export { cardExamples };
```

### 3. Update imports in jsx-playground.tsx

If your examples use new icons, add them to the scope:

```typescript
const scope = {
  // ... existing scope
  SomeIcon
};
```

## Benefits

- **Better Performance**: Only loads examples when needed
- **Easier Maintenance**: Each component category is in its own file
- **Better AI Generation**: Smaller, focused files are easier for AI to process
- **Modularity**: Easy to add new categories without cluttering the main file
- **Type Safety**: TypeScript ensures consistency across examples

## File Naming Convention

- Use kebab-case for file names: `button-variants.ts`
- Use camelCase for export names: `buttonVariants`
- Use descriptive names that indicate the component category

## Example Structure

Each example should have:
- `name`: Human-readable name for the UI
- `jsx`: The JSX code string to render

```typescript
{
  "unique-key": {
    name: "Display Name",
    jsx: `<Component>content</Component>`
  }
}
``` 