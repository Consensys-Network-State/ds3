import type { 
  WebInputProps, 
  NativeInputProps,
  SharedInputProps,
  WebInputBaseProps,
  WebTextareaProps
} from './types';
import type { WebChangeEvent } from '../../types';
import type { AccessibilityRole } from 'react-native';

/**
 * Identifies web-specific props (onChange, type, rows)
 * @returns true if props contain web-specific properties
 */
export function isWebInputProps(props: unknown): props is WebInputProps {
  if (!props || typeof props !== 'object') return false;
  const p = props as Partial<WebInputProps>;
  return typeof p.onChange === 'function' || 'type' in p || 'rows' in p;
}

/**
 * Identifies native-specific props (onChangeText, numberOfLines, secureTextEntry)
 * @returns true if props contain native-specific properties
 */
export function isNativeInputProps(props: unknown): props is NativeInputProps {
  if (!props || typeof props !== 'object') return false;
  const p = props as Partial<NativeInputProps>;
  return typeof p.onChangeText === 'function' || 'numberOfLines' in p || 'secureTextEntry' in p;
}

/**
 * Native prop validator - warns if web props detected
 * - No props are filtered out (React Native ignores unrecognized props)
 * - Web props like onChange, type, rows will be ignored by native components
 */
export function toNativeProps(props: unknown): NativeInputProps {
  if (!props || typeof props !== 'object') {
    return {} as NativeInputProps;
  }

  if (isWebInputProps(props)) {
    console.warn('[CUI Input] - Web props detected in native environemtn. This is not supported and props will be ignored.');
  }

  return props as NativeInputProps;
}

/**
 * Converts native props to web props for hybrid support
 * Maps:
 * - onChangeText → onChange
 * - secureTextEntry → type="password"
 * - numberOfLines → rows
 * - autoCorrect → autoCorrect (as string)
 * - multiline → determines if <input> or <textarea>
 */
export function toWebProps(props: unknown): WebInputProps {
  if (isWebInputProps(props)) {
    return props;
  }

  if (!isNativeInputProps(props)) {
    console.warn('[CUI Input] - Mixed props detected. Props must be either web or native, not both.');
  }

  const {
    onChangeText,
    secureTextEntry,
    numberOfLines,
    autoCorrect,
    multiline,
    ...restNative
  } = props as NativeInputProps;

  const {
    onChange,
    ...rest
  } = restNative as WebInputBaseProps;

  // Determine if we should use textarea props
  const isTextarea = multiline || (numberOfLines ?? 0) > 1;

  const baseProps = {
    ...rest,
    ...(typeof autoCorrect === 'boolean' ? { autoCorrect: autoCorrect.toString() } : {}),
    onChange: onChangeText ? (e: WebChangeEvent) => onChangeText(e.target.value) : onChange,
  };

  if (isTextarea) {
    return {
      ...baseProps,
      rows: numberOfLines ?? 1,
    } as WebTextareaProps;
  }

  return {
    ...baseProps,
    type: secureTextEntry ? 'password' : 'text',
  } as WebInputBaseProps;
}

/**
 * Web accessibility props
 * Maps:
 * - disabled → aria-disabled
 * - loading → aria-busy
 * - multiline → aria-multiline, role="textbox"
 * - readOnly → aria-readonly
 */
export const getWebInputAccessibilityProps = (props: Partial<SharedInputProps>) => {
  const { disabled, loading, multiline, readOnly } = props;
  return {
    'aria-disabled': disabled,
    'aria-busy': loading,
    'aria-multiline': multiline,
    'aria-readonly': readOnly,
    role: multiline ? 'textbox' : 'input',
  };
};

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