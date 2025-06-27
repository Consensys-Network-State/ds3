import type { 
  SharedInputProps,
} from './types';
import type { AccessibilityRole } from 'react-native';

/**
 * Native accessibility props
 * Maps:
 * - disabled → accessibilityState.disabled
 * - loading → accessibilityState.busy
 * - readOnly → accessibilityState.readonly
 * - multiline → accessibilityRole="adjustable"/"textbox"
 */
export const getNativeInputAccessibilityProps = (props: Partial<SharedInputProps>) => {
  const { disabled, loading, multiline, readOnly } = props;
  return {
    accessibilityRole: (multiline ? 'adjustable' : 'textbox') as AccessibilityRole,
    accessibilityState: {
      disabled,
      busy: loading,
      readonly: readOnly,
    },
  };
}; 