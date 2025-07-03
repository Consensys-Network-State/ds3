# Field Components

Field components provide a higher-level abstraction that combines form controls with labels, validation states, error messages, and descriptions. They make it easy to create consistent, accessible form interfaces across platforms.

## Installation

Import the field components from the DS3 package.

```tsx
import { InputField, SwitchField, CheckboxField } from '@consensys/ds3';
```

## Examples

### Basic

Create simple form fields with labels and descriptions.

Input Field:

```tsx live
<InputField
  label="Email Address"
  description="We'll never share your email"
  placeholder="Enter your email"
/>
```

Checkbox Field:

```tsx live
import { useState } from 'react';

const [checked, setChecked] = useState(false);

return (
  <View className="flex flex-col gap-4">
    <CheckboxField
      label="I accept the terms and conditions"
      description="By checking this box, you agree to our Terms of Service"
      checked={checked}
      onCheckedChange={setChecked}
    />
  </View>
);
```

Switch Field:

```tsx live
import { useState } from 'react';

const [checked, setChecked] = useState(false);

return (
  <View className="flex flex-col gap-4">
    <SwitchField
      label="Email Notifications"
      description="Receive updates about your account"
      checked={checked}
      onCheckedChange={setChecked}
    />
  </View>
);
```

### Form Integration

Integrate field components with React Hook Form for complete form management.

React Hoot Form:

```tsx live
import { Controller, useForm } from 'react-hook-form';

function ExampleForm() {
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      notifications: false,
      terms: false
    }
  });

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    alert('Form submitted successfully!');
  };

  return (
    <View className="flex flex-col gap-4">
      <Controller
        control={control}
        name="email"
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Please enter a valid email'
          }
        }}
        render={({ field: { onChange, value } }) => (
          <InputField
            label="Email"
            placeholder="you@example.com"
            error={errors.email?.message}
            isValid={!errors.email && value}
            required
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="notifications"
        render={({ field: { onChange, value } }) => (
          <SwitchField
            label="Email Notifications"
            description="Receive updates about your account"
            checked={value}
            onCheckedChange={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="terms"
        rules={{ required: 'You must accept the terms' }}
        render={({ field: { onChange, value } }) => (
          <CheckboxField
            label="Accept Terms"
            description="I agree to the Terms of Service"
            error={errors.terms?.message}
            required
            checked={value}
            onCheckedChange={onChange}
          >
            <Checkbox.Icon icon={Check} />
          </CheckboxField>
        )}
      />
      <View className="flex flex-row gap-2">
        <Button variant="solid" color="primary" onPress={handleSubmit(onSubmit)}>
          <Button.Text>Submit Form</Button.Text>
        </Button>
        <Button variant="outline" color="neutral" onPress={() => reset()}>
          <Button.Text>Clear Form</Button.Text>
        </Button>
      </View>
    </View>
  );
}

return <ExampleForm />
```

## API Reference

Complete reference of all available props and their configurations.

### `<InputField />`

A higher-level component that combines `<Input />` with a label, description, and validation states.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text for the input field |
| `description` | `string` | - | Descriptive text displayed below the input |
| `error` | `string` | - | Error message to display when validation fails |
| `isValid` | `boolean` | `false` | Indicates if the field is in a valid state |
| `required` | `boolean` | `false` | Indicates if the field is required |
| `color` | `neutral` \| `primary` \| `secondary` \| `error` \| `warning` \| `success` | `neutral` | The color scheme (overridden by validation state) |

Plus all props from the [Input Component API](../input/README.md).

### `<SwitchField />`

A higher-level component that combines `<Switch />` with a label, description, and validation states.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text for the switch |
| `description` | `string` | - | Descriptive text displayed below the switch |
| `error` | `string` | - | Error message to display when validation fails |
| `isValid` | `boolean` | `false` | Indicates if the field is in a valid state |
| `required` | `boolean` | `false` | Indicates if the field is required |
| `color` | `neutral` \| `primary` \| `secondary` \| `error` \| `warning` \| `success` | `neutral` | The color scheme (overridden by validation state) |

Plus all props from the [Switch Component API](../switch/README.md).

### `<CheckboxField />`

A higher-level component that combines `<Checkbox />` with a label, description, and validation states.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text for the checkbox |
| `description` | `string` | - | Descriptive text displayed below the checkbox |
| `error` | `string` | - | Error message to display when validation fails |
| `isValid` | `boolean` | `false` | Indicates if the field is in a valid state |
| `required` | `boolean` | `false` | Indicates if the field is required |
| `color` | `neutral` \| `primary` \| `secondary` \| `error` \| `warning` \| `success` | `neutral` | The color scheme (overridden by validation state) |

Plus all props from the [Checkbox Component API](../checkbox/README.md).

## Accessibility

Built-in accessibility support with automatic ARIA attributes and screen reader compatibility.

The field components automatically implement proper accessibility attributes:

### Accessibility Prop Mappings

| Property | Implementation |
|----------|----------------|
| Label Association | `aria-labelledby` (web) / `accessibilityLabelledBy` (native) |
| Description Association | `aria-describedby` (web) / `accessibilityDescribedBy` (native) |
| Error State | `aria-invalid` (web) / `accessibilityState.invalid` (native) |
| Required State | `aria-required` (web) / `accessibilityState.required` (native) |
| Validation Status | `aria-describedby` with error message (web) / `accessibilityDescribedBy` (native) |

### Form Validation

Field components automatically handle accessibility for validation states:

```tsx
<InputField
  label="Email"
  error="Please enter a valid email address"
  required
  accessibilityLabel="Email input field with validation error"
/>
```

### Screen Reader Support

All field components provide proper screen reader announcements:

- Labels are announced when fields receive focus
- Error messages are announced when validation fails
- Required state is communicated to screen readers
- Description text provides additional context 