import type { InputFieldRootProps, CheckboxFieldRootProps, SwitchFieldRootProps } from '@consensys/ds3/src/components/fields/types';

// Helper function to generate InputField JSX
const generateInputFieldJSX = (props: Partial<InputFieldRootProps> = {}): string => {
  const {
    label = "Email",
    description = "Enter your email address",
    placeholder = "Enter your email",
    error,
    isValid,
    required = false,
    color = "neutral",
    size = "md",
    variant = "outline"
  } = props;

  return `<InputField
  label="${label}"
  description="${description}"
  placeholder="${placeholder}"
  ${error ? `error="${error}"` : ''}
  ${isValid ? 'isValid={true}' : ''}
  ${required ? 'required={true}' : ''}
  color="${color}"
  size="${size}"
  variant="${variant}"
/>`;
};

// Helper function to generate CheckboxField JSX
const generateCheckboxFieldJSX = (props: Partial<CheckboxFieldRootProps> = {}): string => {
  const {
    label = "Accept terms and conditions",
    description = "You must accept the terms to continue",
    error,
    isValid,
    required = false,
    color = "neutral",
    size = "md",
    checked = false
  } = props;

  return `<CheckboxField
  label="${label}"
  description="${description}"
  ${error ? `error="${error}"` : ''}
  ${isValid ? 'isValid={true}' : ''}
  ${required ? 'required={true}' : ''}
  color="${color}"
  size="${size}"
  checked={${checked}}
  onCheckedChange={createCheckboxHandler("checkbox-${label.toLowerCase().replace(/\s+/g, '-')}")}
/>`;
};

// Helper function to generate SwitchField JSX
const generateSwitchFieldJSX = (props: Partial<SwitchFieldRootProps> = {}): string => {
  const {
    label = "Enable notifications",
    description = "Receive push notifications for updates",
    error,
    isValid,
    required = false,
    color = "neutral",
    size = "md",
    checked = false
  } = props;

  return `<SwitchField
  label="${label}"
  description="${description}"
  ${error ? `error="${error}"` : ''}
  ${isValid ? 'isValid={true}' : ''}
  ${required ? 'required={true}' : ''}
  color="${color}"
  size="${size}"
  checked={${checked}}
  onCheckedChange={createSwitchHandler("switch-${label.toLowerCase().replace(/\s+/g, '-')}")}
/>`;
};

export const fieldsExamples = {
  name: "Fields",
  examples: {
    "field": {
      name: "Field",
      examples: {
        "basic": {
          name: "Basic",
          jsx: `<Field>
  <Field.Row>
    <Field.Label>Field Label</Field.Label>
  </Field.Row>
  <Field.Description>This is a description for the field.</Field.Description>
</Field>`
        },
        "with-icon": {
          name: "With Icon",
          jsx: `<Field>
  <Field.Row>
    <Field.Icon icon={AlertCircle} />
    <Field.Label>Field with Icon</Field.Label>
  </Field.Row>
  <Field.Description>This field includes an icon in the label.</Field.Description>
</Field>`
        },
        "colors": {
          name: "Colors",
          jsx: `<View className="space-y-4">
  <Field color="neutral">
    <Field.Row>
      <Field.Label>Neutral Field</Field.Label>
    </Field.Row>
    <Field.Description>Default neutral color.</Field.Description>
  </Field>
  
  <Field color="primary">
    <Field.Row>
      <Field.Label>Primary Field</Field.Label>
    </Field.Row>
    <Field.Description>Primary brand color.</Field.Description>
  </Field>
  
  <Field color="success">
    <Field.Row>
      <Field.Icon icon={CheckCircle} />
      <Field.Label>Success Field</Field.Label>
    </Field.Row>
    <Field.Description>Success state color.</Field.Description>
  </Field>
  
  <Field color="warning">
    <Field.Row>
      <Field.Icon icon={AlertTriangle} />
      <Field.Label>Warning Field</Field.Label>
    </Field.Row>
    <Field.Description>Warning state color.</Field.Description>
  </Field>
  
  <Field color="error">
    <Field.Row>
      <Field.Icon icon={AlertCircle} />
      <Field.Label>Error Field</Field.Label>
    </Field.Row>
    <Field.Description>Error state color.</Field.Description>
  </Field>
</View>`
        },
        "composition": {
          name: "Composition",
          jsx: `<View className="space-y-4">
  <Field>
    <Field.Row>
      <Field.Icon icon={Mail} />
      <Field.Label>Email Address</Field.Label>
      <Field.Icon icon={AlertCircle} color="error" />
    </Field.Row>
    <Field.Description>Enter your email address to receive updates.</Field.Description>
  </Field>
  
  <Field color="success">
    <Field.Row>
      <Field.Icon icon={CheckCircle} />
      <Field.Label>Terms Accepted</Field.Label>
    </Field.Row>
    <Field.Description>You have successfully accepted the terms and conditions.</Field.Description>
  </Field>
  
  <Field color="warning">
    <Field.Row>
      <Field.Icon icon={AlertTriangle} />
      <Field.Label>Password Strength</Field.Label>
    </Field.Row>
    <Field.Description>Your password could be stronger. Consider adding numbers and symbols.</Field.Description>
  </Field>
</View>`
        },
        "complex": {
          name: "Complex Examples",
          jsx: `<View className="space-y-4">
  <Field>
    <Field.Row>
      <Field.Icon icon={User} />
      <Field.Label>Profile Information</Field.Label>
      <Field.Icon icon={Edit3} />
    </Field.Row>
    <Field.Description>Manage your profile settings and preferences.</Field.Description>
  </Field>
  
  <Field color="primary">
    <Field.Row>
      <Field.Icon icon={Settings} />
      <Field.Label>Account Settings</Field.Label>
      <Field.Icon icon={ChevronRight} />
    </Field.Row>
    <Field.Description>Configure your account preferences and security settings.</Field.Description>
  </Field>
  
  <Field color="error">
    <Field.Row>
      <Field.Icon icon={Shield} />
      <Field.Label>Security Alert</Field.Label>
      <Field.Icon icon={AlertCircle} />
    </Field.Row>
    <Field.Description>Your account has been accessed from an unrecognized device.</Field.Description>
  </Field>
</View>`
        }
      }
    },
    "input-field": {
      name: "Input Field",
      examples: {
        "basic": {
          name: "Basic",
          jsx: generateInputFieldJSX()
        },
        "variants": {
          name: "Variants",
          jsx: [
            generateInputFieldJSX({ variant: "outline", label: "Outline Input", description: "Default outline variant" }),
            generateInputFieldJSX({ variant: "soft", label: "Soft Input", description: "Soft background variant" }),
            generateInputFieldJSX({ variant: "ghost", label: "Ghost Input", description: "Minimal ghost variant" })
          ].join('\n\n')
        },
        "colors": {
          name: "Colors",
          jsx: [
            generateInputFieldJSX({ color: "neutral", label: "Neutral Input", description: "Default neutral color" }),
            generateInputFieldJSX({ color: "primary", label: "Primary Input", description: "Primary brand color" }),
            generateInputFieldJSX({ color: "success", label: "Success Input", description: "Success state color" }),
            generateInputFieldJSX({ color: "warning", label: "Warning Input", description: "Warning state color" }),
            generateInputFieldJSX({ color: "error", label: "Error Input", description: "Error state color" })
          ].join('\n\n')
        },
        "sizes": {
          name: "Sizes",
          jsx: [
            generateInputFieldJSX({ size: "sm", label: "Small Input", description: "Small size variant" }),
            generateInputFieldJSX({ size: "md", label: "Medium Input", description: "Default medium size" }),
            generateInputFieldJSX({ size: "lg", label: "Large Input", description: "Large size variant" })
          ].join('\n\n')
        },
        "states": {
          name: "States",
          jsx: [
            generateInputFieldJSX({ label: "Valid Input", description: "Input with valid state", isValid: true }),
            generateInputFieldJSX({ label: "Error Input", description: "Input with error state", error: "This field is required" }),
            generateInputFieldJSX({ label: "Required Input", description: "Required field indicator", required: true })
          ].join('\n\n')
        },
        "mixed": {
          name: "Mixed Examples",
          jsx: [
            generateInputFieldJSX({ 
              label: "Email Address", 
              description: "Enter your email address", 
              placeholder: "user@example.com",
              required: true,
              color: "primary"
            }),
            generateInputFieldJSX({ 
              label: "Password", 
              description: "Enter your password", 
              placeholder: "••••••••",
              color: "neutral",
              variant: "soft"
            }),
            generateInputFieldJSX({ 
              label: "Search", 
              description: "Search for content", 
              placeholder: "Search...",
              color: "neutral",
              variant: "ghost"
            })
          ].join('\n\n')
        }
      }
    },
    "checkbox-field": {
      name: "Checkbox Field",
      examples: {
        "basic": {
          name: "Basic",
          jsx: generateCheckboxFieldJSX()
        },
        "colors": {
          name: "Colors",
          jsx: [
            generateCheckboxFieldJSX({ color: "neutral", label: "Neutral Checkbox", description: "Default neutral color" }),
            generateCheckboxFieldJSX({ color: "primary", label: "Primary Checkbox", description: "Primary brand color" }),
            generateCheckboxFieldJSX({ color: "success", label: "Success Checkbox", description: "Success state color" }),
            generateCheckboxFieldJSX({ color: "warning", label: "Warning Checkbox", description: "Warning state color" }),
            generateCheckboxFieldJSX({ color: "error", label: "Error Checkbox", description: "Error state color" })
          ].join('\n\n')
        },
        "sizes": {
          name: "Sizes",
          jsx: [
            generateCheckboxFieldJSX({ size: "sm", label: "Small Checkbox", description: "Small size variant" }),
            generateCheckboxFieldJSX({ size: "md", label: "Medium Checkbox", description: "Default medium size" }),
            generateCheckboxFieldJSX({ size: "lg", label: "Large Checkbox", description: "Large size variant" })
          ].join('\n\n')
        },
        "states": {
          name: "States",
          jsx: [
            generateCheckboxFieldJSX({ label: "Valid Checkbox", description: "Checkbox with valid state", isValid: true }),
            generateCheckboxFieldJSX({ label: "Error Checkbox", description: "Checkbox with error state", error: "You must accept the terms" }),
            generateCheckboxFieldJSX({ label: "Required Checkbox", description: "Required field indicator", required: true }),
            generateCheckboxFieldJSX({ label: "Checked Checkbox", description: "Pre-checked state", checked: true })
          ].join('\n\n')
        },
        "mixed": {
          name: "Mixed Examples",
          jsx: [
            generateCheckboxFieldJSX({ 
              label: "Accept Terms", 
              description: "I agree to the terms and conditions", 
              required: true,
              color: "primary"
            }),
            generateCheckboxFieldJSX({ 
              label: "Newsletter Subscription", 
              description: "Subscribe to our newsletter", 
              color: "neutral"
            }),
            generateCheckboxFieldJSX({ 
              label: "Marketing Communications", 
              description: "Receive marketing emails", 
              color: "neutral"
            })
          ].join('\n\n')
        }
      }
    },
    "switch-field": {
      name: "Switch Field",
      examples: {
        "basic": {
          name: "Basic",
          jsx: generateSwitchFieldJSX()
        },
        "colors": {
          name: "Colors",
          jsx: [
            generateSwitchFieldJSX({ color: "neutral", label: "Neutral Switch", description: "Default neutral color" }),
            generateSwitchFieldJSX({ color: "primary", label: "Primary Switch", description: "Primary brand color" }),
            generateSwitchFieldJSX({ color: "success", label: "Success Switch", description: "Success state color" }),
            generateSwitchFieldJSX({ color: "warning", label: "Warning Switch", description: "Warning state color" }),
            generateSwitchFieldJSX({ color: "error", label: "Error Switch", description: "Error state color" })
          ].join('\n\n')
        },
        "sizes": {
          name: "Sizes",
          jsx: [
            generateSwitchFieldJSX({ size: "sm", label: "Small Switch", description: "Small size variant" }),
            generateSwitchFieldJSX({ size: "md", label: "Medium Switch", description: "Default medium size" }),
            generateSwitchFieldJSX({ size: "lg", label: "Large Switch", description: "Large size variant" })
          ].join('\n\n')
        },
        "states": {
          name: "States",
          jsx: [
            generateSwitchFieldJSX({ label: "Valid Switch", description: "Switch with valid state", isValid: true }),
            generateSwitchFieldJSX({ label: "Error Switch", description: "Switch with error state", error: "This setting is required" }),
            generateSwitchFieldJSX({ label: "Required Switch", description: "Required field indicator", required: true }),
            generateSwitchFieldJSX({ label: "Enabled Switch", description: "Pre-enabled state", checked: true })
          ].join('\n\n')
        },
        "mixed": {
          name: "Mixed Examples",
          jsx: [
            generateSwitchFieldJSX({ 
              label: "Push Notifications", 
              description: "Receive push notifications for updates", 
              color: "primary"
            }),
            generateSwitchFieldJSX({ 
              label: "Email Notifications", 
              description: "Receive email notifications", 
              color: "neutral"
            }),
            generateSwitchFieldJSX({ 
              label: "Dark Mode", 
              description: "Enable dark mode theme", 
              color: "neutral"
            })
          ].join('\n\n')
        }
      }
    },
    "form": {
      name: "Form",
      examples: {
        "react-hook-form": {
          name: "React Hook Form",
          jsx: `<ReactHookForm />`
        }
      }
    }
  }
}; 