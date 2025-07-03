import type { 
  SharedButtonProps,
} from './types';
import type { AccessibilityRole } from 'react-native';

/**
 * Web accessibility props
 * Maps:
 * - disabled → aria-disabled
 * - loading → aria-busy
 */
export const getWebButtonAccessibilityProps = (props: Partial<SharedButtonProps>) => {
  const { disabled, loading } = props;
  return {
    'aria-disabled': disabled,
    'aria-busy': loading,
    role: 'button',
  };
};

/**
 * Native accessibility props
 * Maps:
 * - disabled → accessibilityState.disabled
 * - loading → accessibilityState.busy
 */
export const getNativeButtonAccessibilityProps = (props: Partial<SharedButtonProps>) => {
  const { disabled, loading } = props;
  return {
    accessibilityRole: 'button' as AccessibilityRole,
    accessibilityState: {
      disabled,
      busy: loading,
    },
  };
}; 