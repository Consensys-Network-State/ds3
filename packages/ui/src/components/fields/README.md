# Field Components

Field components provide a higher-level abstraction that combines form controls with labels, validation states, error messages, and descriptions. They make it easy to create consistent, accessible form interfaces across platforms.

These components are built on top of the base [`<Field />`](../field/README.md) component, which provides the foundation for accessible form controls with proper labeling and structure. The field components add specific functionality for different input types while maintaining a consistent API and user experience.

## Installation

```bash
pnpm add @consensys/ds3
```

## Components

- [`<InputField />`](#inputfield) - Text input field with validation
- [`<SwitchField />`](#switchfield) - Toggle switch with label and validation
- [`<CheckboxField />`](#checkboxfield) - Checkbox with label and validation

## Common Features

All field components share these features:

- **Labels** - Properly associated with form controls
- **Validation States** - Success, error, and neutral states
- **Error Messages** - Displays validation errors
- **Descriptions** - Helpful text for users
- **Accessibility** - Built-in ARIA attributes for all platforms
- **Theming** - Consistent styling with your design system

## `<InputField />`

A higher-level component that combines `<Input />` with a label, description, and validation states.

### Usage

```tsx
import { InputField, Input } from '@consensys/ds3';
import { Eye } from 'lucide-react-native';

// Basic usage
<InputField
  label="Email Address"
  description="We'll never share your email"
  placeholder="Enter your email"
  error={errors.email}
  isValid={isValid.email}
  required
/>

// With compound pattern
<InputField
  label="Password"
  error={errors.password}
  isValid={isValid.password}
  required
>
  <Input.Field secureTextEntry placeholder="Enter password" />
  <Input.Icon icon={Eye} />
</InputField>
```

### Form Integration Example

```tsx
import { InputField } from '@consensys/ds3';
import { Controller, useForm } from 'react-hook-form';

function LoginForm() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  
  return (
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
      render={({ field: { onChange, value, ...rest } }) => (
        <InputField
          label="Email"
          placeholder="you@example.com"
          error={errors.email?.message}
          isValid={!errors.email && value}
          required
          value={value}
          onChangeText={onChange}
          {...rest}
        />
      )}
    />
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text for the input field |
| `description` | `string` | - | Descriptive text displayed below the input |
| `error` | `string` | - | Error message to display when validation fails |
| `isValid` | `boolean` | `false` | Indicates if the field is in a valid state |
| `required` | `boolean` | `false` | Indicates if the field is required |
| `color` | `'neutral' \| 'primary' \| 'secondary' \| 'error' \| 'warning' \| 'success'` | `'neutral'` | The color scheme (overridden by validation state) |

Plus all props from the [Input Component API](../input/README.md).

## `<SwitchField />`

A higher-level component that combines `<Switch />` with a label, description, and validation states.

### Usage

```tsx
import { SwitchField } from '@consensys/ds3';
import { useState } from 'react';

function NotificationPreferences() {
  const [emailNotifications, setEmailNotifications] = useState(false);
  
  return (
    <SwitchField
      label="Email Notifications"
      description="Receive updates about your account"
      checked={emailNotifications}
      onCheckedChange={setEmailNotifications}
      disabled={false}
    />
  );
}
```

### Form Integration Example

```tsx
import { SwitchField } from '@consensys/ds3';
import { Controller, useForm } from 'react-hook-form';

function PreferenceForm() {
  const { control } = useForm({
    defaultValues: {
      marketingEmails: false
    }
  });
  
  return (
    <Controller
      control={control}
      name="marketingEmails"
      render={({ field: { onChange, value } }) => (
        <SwitchField
          label="Marketing Emails"
          description="Receive promotional content and offers"
          checked={value}
          onCheckedChange={onChange}
          disabled={false}
        />
      )}
    />
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text for the switch |
| `description` | `string` | - | Descriptive text displayed below the switch |
| `error` | `string` | - | Error message to display when validation fails |
| `isValid` | `boolean` | `false` | Indicates if the field is in a valid state |
| `required` | `boolean` | `false` | Indicates if the field is required |
| `color` | `'neutral' \| 'primary' \| 'secondary' \| 'error' \| 'warning' \| 'success'` | `'neutral'` | The color scheme (overridden by validation state) |

Plus all props from the [Switch Component API](../switch/README.md).

## `<CheckboxField />`

A higher-level component that combines `<Checkbox />` with a label, description, and validation states.

### Usage

```tsx
import { CheckboxField, Checkbox } from '@consensys/ds3';
import { Check } from 'lucide-react-native';
import { useState } from 'react';

function TermsAndConditions() {
  const [accepted, setAccepted] = useState(false);
  
  return (
    <CheckboxField
      label="I accept the terms and conditions"
      description="By checking this box, you agree to our Terms of Service"
      checked={accepted}
      onCheckedChange={setAccepted}
      required
    >
      <Checkbox.Icon icon={Check} />
    </CheckboxField>
  );
}
```

### Form Integration Example

```tsx
import { CheckboxField } from '@consensys/ds3';
import { Controller, useForm } from 'react-hook-form';

function SignupForm() {
  const { control, formState: { errors } } = useForm({
    defaultValues: {
      termsAccepted: false
    }
  });
  
  return (
    <Controller
      control={control}
      name="termsAccepted"
      rules={{ required: 'You must accept the terms' }}
      render={({ field: { onChange, value } }) => (
        <CheckboxField
          label="Accept Terms"
          description="I agree to the Terms of Service and Privacy Policy"
          error={errors.termsAccepted?.message}
          required
          checked={value}
          onCheckedChange={onChange}
        />
      )}
    />
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text for the checkbox |
| `description` | `string` | - | Descriptive text displayed below the checkbox |
| `error` | `string` | - | Error message to display when validation fails |
| `isValid` | `boolean` | `false` | Indicates if the field is in a valid state |
| `required` | `boolean` | `false` | Indicates if the field is required |
| `color` | `'neutral' \| 'primary' \| 'secondary' \| 'error' \| 'warning' \| 'success'` | `'neutral'` | The color scheme (overridden by validation state) |

Plus all props from the [Checkbox Component API](../checkbox/README.md).

## Validation States

All field components support these validation states:

```tsx
// Valid state
<InputField 
  label="Username"
  isValid={true}
  description="Username is available"
/>

// Error state
<InputField 
  label="Email"
  error="Please enter a valid email address"
/>

// Required field
<InputField 
  label="Password"
  required
  description="Must be at least 8 characters"
/>
```

## Field Icons

Fields automatically display validation status icons:

```tsx
// Success icon (CheckCircle)
<InputField isValid={true} label="Valid Input" />

// Error icon (AlertCircle)
<InputField error="Something went wrong" label="Invalid Input" />
```

## Animated Transitions

Field components use smooth animations for descriptions and error messages:

```tsx
<InputField
  label="Email"
  description={isValid ? "Email is available" : "Required field"}
  error={hasError ? "Please enter a valid email" : undefined}
/>
```

## Accessibility

Field components implement proper accessibility attributes for each platform:

- Labels are properly associated with form controls
- Error messages are linked with form controls using ARIA
- Required state is communicated via ARIA attributes
- Focus management is handled appropriately

## Custom Styling

You can customize the appearance of field components using Tailwind CSS classes:

```tsx
<InputField
  label="Custom Input"
  className="rounded-lg"
  error={errors.input}
/>

<SwitchField
  label="Custom Switch"
  className="bg-primary-2"
/>

<CheckboxField
  label="Custom Checkbox"
  className="mt-4"
/>
``` 