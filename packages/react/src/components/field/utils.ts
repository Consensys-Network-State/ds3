import type { UseFieldProps } from './types';

// Get accessibility props that work on both platforms
export const getFieldAccessibilityProps = (props: Partial<UseFieldProps>) => {
  const { error, required } = props;
  
  return {
    'aria-invalid': !!error,
    'aria-required': !!required,
  };
};

// Get native-specific accessibility props
export const getNativeFieldAccessibilityProps = (props: Partial<UseFieldProps>) => {
  const { error, required } = props;
  
  return {
    accessible: true,
    accessibilityState: {
      invalid: !!error,
      required: !!required,
    },
  };
};

// Get web-specific accessibility props
export const getWebFieldAccessibilityProps = (props: Partial<UseFieldProps>) => {
  const { error, required } = props;
  
  return {
    'aria-invalid': !!error,
    'aria-required': !!required,
  };
};

// Get shared accessibility props for field elements
export const getFieldElementAccessibilityProps = (props: {
  id?: string;
  describedBy?: string;
  labelledBy?: string;
}) => {
  const { id, describedBy, labelledBy } = props;

  return {
    'aria-labelledby': labelledBy,
    'aria-describedby': describedBy,
    id,
  };
};

// Get native-specific accessibility props for field elements
export const getNativeFieldElementAccessibilityProps = (props: {
  id?: string;
  describedBy?: string;
  labelledBy?: string;
}) => {
  const { id, describedBy, labelledBy } = props;

  return {
    accessible: true,
    accessibilityLabelledBy: labelledBy,
    accessibilityDescribedBy: describedBy,
    nativeID: id,
  };
}; 