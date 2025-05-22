# Field Component

The `<Field />` component provides a standardized way to create accessible form fields with proper labeling, descriptions, and validation states. It follows the compound component pattern for maximum flexibility.

## Installation

```bash
pnpm add @consensys/ui
```

## Usage Examples

The Field component is a foundational element designed to be used with various form control components.

```tsx
import { Field, Text } from '@consensys/ui';
import { Mail } from 'lucide-react-native';

function BasicField() {
  return (
    <Field color="primary">
      <Field.Row>
        <Field.Icon icon={Mail} />
        <Field.Label>Email Address</Field.Label>
      </Field.Row>
      {/* Insert your input component here */}
      <Field.Description>Please enter your email address</Field.Description>
    </Field>
  );
}
```

## Component API

### `<Field />`

The main container component for form fields, providing context for all its children.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `'neutral' \| 'primary' \| 'secondary' \| 'error' \| 'warning' \| 'success'` | `'neutral'` | The color scheme for field labels and descriptions |
| `onLabelPress` | `() => void` | - | Handler for when the label is pressed |
| `className` | `string` | - | Additional class names for styling |

### `<Field.Label />`

Component for form field labels, with appropriate styling and accessibility properties.

```tsx
<Field>
  <Field.Label>First Name</Field.Label>
  {/* Input Component */}
</Field>
```

The Label component inherits all props from the Text component.

### `<Field.Description />`

Component for descriptive text that provides additional information about the field.

```tsx
<Field>
  <Field.Label>Password</Field.Label>
  {/* Input Component */}
  <Field.Description>Must be at least 8 characters long</Field.Description>
</Field>
```

The Description component inherits all props from the Text component.

### `<Field.Icon />`

Icon component specifically styled for use within field contexts.

```tsx
<Field>
  <Field.Row>
    <Field.Icon icon={Lock} />
    <Field.Label>Password</Field.Label>
  </Field.Row>
  {/* Input Component */}
</Field>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `React.ComponentType<any>` | **Required** | The icon component to render |
| `className` | `string` | - | Additional class names for styling |

All other props from the Icon component are also supported.

### `<Field.Row />`

A container for horizontal alignment of Field components like Label and Icon.

```tsx
<Field>
  <Field.Row>
    <Field.Icon icon={User} />
    <Field.Label>Username</Field.Label>
  </Field.Row>
  {/* Input Component */}
</Field>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | - | Optional ID for the row container |
| `className` | `string` | - | Additional class names for styling |

## Layout Patterns

### Top Label (Default)

The most common layout with the label above the input.

```tsx
<Field>
  <Field.Label>First Name</Field.Label>
  {/* Input Component */}
  <Field.Description>Enter your first name as it appears on your ID</Field.Description>
</Field>
```

### Left-aligned Label

Place the label to the left of the input field.

```tsx
<Field>
  <Field.Row>
    <Field.Label>First Name</Field.Label>
    {/* Input Component */}
  </Field.Row>
  <Field.Description>Enter your first name as it appears on your ID</Field.Description>
</Field>
```

### Right-aligned Label

Place the label to the right of the input field.

```tsx
<Field>
  <Field.Row>
    {/* Input Component */}
    <Field.Label>First Name</Field.Label>
  </Field.Row>
  <Field.Description>Enter your first name as it appears on your ID</Field.Description>
</Field>
```

## Icon Layouts

### Icon + Label

Add an icon before or after the label for visual clarity.

```tsx
<Field>
  <Field.Row>
    <Field.Icon icon={User} />
    <Field.Label>Username</Field.Label>
  </Field.Row>
  {/* Input Component */}
</Field>
```

### Double Icons

Add icons on both sides of the label.

```tsx
<Field>
  <Field.Row>
    <Field.Icon icon={Mail} />
    <Field.Label>Email Address</Field.Label>
    <Field.Icon icon={Info} />
  </Field.Row>
  {/* Input Component */}
</Field>
```

## Color Variants

The Field component supports six color variants that are applied to labels, descriptions, and icons:

```tsx
<Field color="neutral">
  <Field.Label>Neutral Field</Field.Label>
  {/* Input Component */}
</Field>

<Field color="primary">
  <Field.Label>Primary Field</Field.Label>
  {/* Input Component */}
</Field>

<Field color="secondary">
  <Field.Label>Secondary Field</Field.Label>
  {/* Input Component */}
</Field>

<Field color="error">
  <Field.Label>Error Field</Field.Label>
  {/* Input Component */}
</Field>

<Field color="warning">
  <Field.Label>Warning Field</Field.Label>
  {/* Input Component */}
</Field>

<Field color="success">
  <Field.Label>Success Field</Field.Label>
  {/* Input Component */}
</Field>
```

## Helper Function: `useField`

The `useField` hook helps manage accessibility props and IDs for your custom field implementations.

```tsx
import { useField } from '@consensys/ui';

function CustomField({ error, required, ...props }) {
  const { fieldId, descriptionId, ariaProps } = useField({
    error,
    required,
  });

  return (
    <Field color={error ? 'error' : 'neutral'}>
      <Field.Label id={fieldId}>Custom Field</Field.Label>
      <input 
        {...ariaProps}
        {...props} 
      />
      <Field.Description id={descriptionId}>
        {error || 'This is a custom field'}
      </Field.Description>
    </Field>
  );
}
```

### Hook Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `error` | `string` | - | Error message if field has validation errors |
| `required` | `boolean` | `false` | Whether the field is required |
| `ariaProps` | `Record<string, any>` | `{}` | Additional ARIA props to merge |

### Return Values

| Property | Type | Description |
|----------|------|-------------|
| `fieldId` | `string` | Unique ID for the field label |
| `descriptionId` | `string` | Unique ID for the description element |
| `ariaProps` | `object` | Platform-specific accessibility props |

## Accessibility

The Field component automatically implements proper accessibility attributes for each platform:

### Web Accessibility Features

- Properly associated labels via `aria-labelledby`
- Description text linked via `aria-describedby`
- Error states indicated with `aria-invalid`
- Required state indicated with `aria-required`

### React Native Accessibility Features

- Proper `accessibilityLabelledBy` associations
- Description linked via `accessibilityDescribedBy`
- Error states with `accessibilityState.invalid`
- Required state with `accessibilityState.required`

## Internal Utilities

The Field component uses several internal utilities to ensure consistent behavior:

- `fieldVariants`: Defines color variants for text elements
- `getFieldAccessibilityProps`: Generates platform-specific accessibility props

## Component Composition

Field is typically used as the foundation for higher-level form components:

```tsx
<Field color="primary">
  <Field.Label>Username</Field.Label>
  <Input placeholder="Enter username" />
  <Field.Description>Choose a unique username</Field.Description>
</Field>
```

Many form components in the DS3 library like `<InputField />`, `<CheckboxField />`, and `<SwitchField />` are built on top of the base Field component. 