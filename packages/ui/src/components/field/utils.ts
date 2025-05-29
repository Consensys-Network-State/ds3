import { Platform } from 'react-native';

type AccessibilityProps = {
  error?: string;
  required?: boolean;
  id?: string;
  describedBy?: string;
  labelledBy?: string;
};

export const getFieldAccessibilityProps = (props: AccessibilityProps) => {
  const { error, required, id, describedBy, labelledBy } = props;

  if (Platform.OS === 'web') {
    return {
      'aria-invalid': !!error,
      'aria-required': !!required,
      'aria-labelledby': labelledBy,
      'aria-describedby': describedBy,
      id,
    };
  }

  return {
    accessible: true,
    accessibilityState: {
      disabled: false,
      busy: false,
      invalid: !!error,
      required: !!required
    },
    accessibilityLabelledBy: labelledBy,
    accessibilityDescribedBy: describedBy,
    nativeID: id,
  };
}; 