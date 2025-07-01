# Field Component

The `<Field />` component provides a standardized way to create accessible form fields with proper labeling, descriptions, and validation states. It follows the compound component pattern for maximum flexibility.

## Installation

Import the Field component from the DS3 package.

```tsx
import { Field } from '@consensys/ds3';
```

## Examples

### Basic

Create a simple field with label and description.

```tsx live
<Field>
  <Field.Label>Email Address</Field.Label>
  <Input placeholder="Enter your email" />
  <Field.Description>We'll never share your email with anyone else.</Field.Description>
</Field>
```

### Colors

Apply semantic color schemes for different contexts and states.

```tsx live
<View className="flex flex-col gap-4">
  <Field color="neutral">
    <Field.Label>Neutral Field</Field.Label>
    <Input placeholder="Default field styling" />
    <Field.Description>Standard field for general use</Field.Description>
  </Field>
  <Field color="primary">
    <Field.Label>Primary Field</Field.Label>
    <Input placeholder="Main action field" />
    <Field.Description>Use for primary form actions</Field.Description>
  </Field>
  <Field color="secondary">
    <Field.Label>Secondary Field</Field.Label>
    <Input placeholder="Supporting field" />
    <Field.Description>Use for secondary or supporting information</Field.Description>
  </Field>
  <Field color="error">
    <Field.Label>Error Field</Field.Label>
    <Input placeholder="Field with validation error" />
    <Field.Description>Indicates validation errors or issues</Field.Description>
  </Field>
  <Field color="warning">
    <Field.Label>Warning Field</Field.Label>
    <Input placeholder="Field with warning" />
    <Field.Description>Indicates warnings or cautionary information</Field.Description>
  </Field>
  <Field color="success">
    <Field.Label>Success Field</Field.Label>
    <Input placeholder="Successfully completed field" />
    <Field.Description>Indicates successful completion or validation</Field.Description>
  </Field>
</View>
```

### Layouts

Different layout patterns for organizing field elements.

#### Top Label (Default)

The most common layout with the label above the input.

```tsx live
<Field>
  <Field.Label>First Name</Field.Label>
  <Input placeholder="Enter your first name" />
  <Field.Description>Enter your first name as it appears on your ID</Field.Description>
</Field>
```

#### Left-aligned Label

Place the label to the left of the input field.

```tsx live
<Field>
  <Field.Row>
    <Field.Label>First Name</Field.Label>
    <Input placeholder="Enter your first name" />
  </Field.Row>
  <Field.Description>Enter your first name as it appears on your ID</Field.Description>
</Field>
```

#### Right-aligned Label

Place the label to the right of the input field.

```tsx live
<Field>
  <Field.Row>
    <Input placeholder="Enter your first name" />
    <Field.Label>First Name</Field.Label>
  </Field.Row>
  <Field.Description>Enter your first name as it appears on your ID</Field.Description>
</Field>
```

### Row

The `Field.Row` component allows you to arrange field elements horizontally in any combination.

#### With Icons

Add icons to enhance visual clarity and user experience.

```tsx live
import { Mail, User, Lock, Info, Shield } from 'lucide-react-native';

return (
  <View className="flex flex-col gap-4">
    <Field>
      <Field.Row>
        <Field.Icon icon={Mail} />
        <Field.Label>Email Address</Field.Label>
      </Field.Row>
      <Input placeholder="Enter your email" />
      <Field.Description>Icon before label for visual context</Field.Description>
    </Field>
    <Field>
      <Field.Row>
        <Field.Label>Username</Field.Label>
        <Field.Icon icon={User} />
      </Field.Row>
      <Input placeholder="Enter your username" />
      <Field.Description>Icon after label for additional information</Field.Description>
    </Field>
    <Field>
      <Field.Row>
        <Field.Icon icon={Lock} />
        <Field.Label>Password</Field.Label>
        <Field.Icon icon={Info} />
      </Field.Row>
      <Input placeholder="Enter your password" secureTextEntry />
      <Field.Description>Icons on both sides for enhanced context</Field.Description>
    </Field>
    <Field>
      <Field.Row>
        <Field.Icon icon={Shield} />
        <Field.Label>Security Code</Field.Label>
      </Field.Row>
      <Input placeholder="Enter security code" />
      <Field.Description>Icon before label for security indication</Field.Description>
    </Field>
    <Field>
      <Field.Label>API Key</Field.Label>
      <Input placeholder="Enter your API key" />
      <Field.Row>
        <Field.Icon icon={Info} />
        <Field.Description>Keep your API key secure and never share it publicly</Field.Description>
      </Field.Row>
    </Field>
  </View>
)
```

## API Reference

Complete reference of all available props and their configurations.

### `<Field />`

The main container component for form fields.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `neutral` \| `primary` \| `secondary` \| `error` \| `warning` \| `success` | `neutral` | The color scheme for field labels and descriptions |
| `onLabelPress` | `() => void` | - | Handler for when the label is pressed |
| `className` | `string` | - | Additional class names for styling |

### `<Field.Label />`

Component for form field labels.

Inherits all props from the Text component.

### `<Field.Description />`

Component for descriptive text that provides additional information.

Inherits all props from the Text component.

### `<Field.Icon />`

Icon component specifically styled for use within field contexts.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `React.ComponentType<any>` | **Required** | The icon component to render |
| `className` | `string` | - | Additional class names for styling |

All other props from the Icon component are also supported.

### `<Field.Row />`

A container for horizontal alignment of Field components.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | - | Optional ID for the row container |
| `className` | `string` | - | Additional class names for styling |

## Accessibility

Built-in accessibility support with automatic ARIA attributes and screen reader compatibility.

The Field component automatically implements proper accessibility attributes:

### Accessibility Prop Mappings

| Property | Implementation |
|----------|----------------|
| Label Association | `aria-labelledby` (web) / `accessibilityLabelledBy` (native) |
| Description Association | `aria-describedby` (web) / `accessibilityDescribedBy` (native) |
| Error State | `aria-invalid` (web) / `accessibilityState.invalid` (native) |
| Required State | `aria-required` (web) / `accessibilityState.required` (native) |

### Helper Hook: `useField`

The `useField` hook helps manage accessibility props and IDs for custom field implementations:

```tsx
import { useField } from '@consensys/ds3';

function CustomField({ error, required, ...props }) {
  const { fieldId, descriptionId, ariaProps } = useField({
    error,
    required,
  });

  return (
    <Field color={error ? 'error' : 'neutral'}>
      <Field.Label id={fieldId}>Custom Field</Field.Label>
      <Input 
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

### Hook Return Values

| Property | Type | Description |
|----------|------|-------------|
| `fieldId` | `string` | Unique ID for the field label |
| `descriptionId` | `string` | Unique ID for the description element |
| `ariaProps` | `object` | Platform-specific accessibility props |

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