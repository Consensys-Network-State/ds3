import type { 
  ButtonRootProps,
} from './types';
import type { AccessibilityRole } from 'react-native';

/**
 * Web accessibility props
 * Maps:
 * - disabled → aria-disabled
 */
export const getWebButtonAccessibilityProps = (props: Partial<ButtonRootProps>) => {
  const { disabled } = props;
  return {
    'aria-disabled': disabled,
    role: 'button',
  };
};

/**
 * Native accessibility props
 * Maps:
 * - disabled → accessibilityState.disabled
 */
export const getNativeButtonAccessibilityProps = (props: Partial<ButtonRootProps>) => {
  const { disabled } = props;
  return {
    accessibilityRole: 'button' as AccessibilityRole,
    accessibilityState: {
      disabled,
    },
  };
}; 