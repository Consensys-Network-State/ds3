/**
 * Input Component Utilities
 * 
 * This module provides utilities for handling cross-platform input functionality:
 * 
 * - Platform Detection: Type guards to identify web vs native props
 * - Prop Conversion: Transform props between platforms
 *   Web → Native:
 *   • onChange(e) → onChangeText(text)
 *   • type="password" → secureTextEntry=true
 * 
 *   Native → Web:
 *   • onChangeText(text) → onChange(event)
 *   • secureTextEntry=true → type="password"
 *   • numberOfLines → rows
 * 
 * - Prop Filtering:
 *   Web props removed: type, onChange, rows
 *   Native props removed: onChangeText, keyboardType, secureTextEntry, numberOfLines, textAlignVertical
 * 
 * - Accessibility Props:
 *   Web:
 *   • aria-disabled={disabled}
 *   • aria-busy={loading}
 *   • aria-multiline={multiline}
 *   • aria-readonly={readOnly}
 *   • role={multiline ? "textbox" : "input"}
 * 
 *   Native:
 *   • accessibilityRole={multiline ? "adjustable" : "textbox"}
 *   • accessibilityState={{ disabled, busy: loading, readonly: readOnly }}
 * 
 * - Event Handling: 
 *   • Focus/blur events normalized across platforms
 *   • Hover events for web platform
 */

import type { 
  WebInputProps, 
  NativeInputProps,
  SharedInputProps
} from './types';
import type { WebChangeEvent, WebFocusEvent, NativeFocusEvent } from '../../types';
import type { AccessibilityRole } from 'react-native';
import type { MouseEvent } from 'react';

/**
 * Type guards to determine if props are web or native specific
 */
export function isWebInputProps(props: unknown): props is WebInputProps {
  if (!props || typeof props !== 'object') return false;
  const p = props as Partial<WebInputProps>;
  return typeof p.onChange === 'function' || 'type' in p || 'rows' in p;
}

export function isNativeInputProps(props: unknown): props is NativeInputProps {
  if (!props || typeof props !== 'object') return false;
  const p = props as Partial<NativeInputProps>;
  return typeof p.onChangeText === 'function' || 'numberOfLines' in p || 'secureTextEntry' in p;
}

/**
 * Filters out web-specific props that shouldn't be passed to native components
 */
export function filterWebProps(props: any): NativeInputProps {
  const {
    type,
    onChange,
    rows,
    ...rest
  } = props;
  return rest;
}

/**
 * Filters out native-specific props that shouldn't be passed to web components
 */
export function filterNativeProps(props: any): WebInputProps {
  const {
    onChangeText,
    keyboardType,
    secureTextEntry,
    numberOfLines,
    textAlignVertical,
    autoCorrect,
    ...rest
  } = props;
  return rest;
}

/**
 * Converts web props to native props
 */
export const toNativeProps = (props: WebInputProps | NativeInputProps): NativeInputProps => {
  if (isNativeInputProps(props)) {
    return filterWebProps(props);
  }

  // First extract web-specific props
  const { onChange, type, autoComplete } = props as WebInputProps;
  const filteredProps = filterWebProps(props);

  return {
    ...filteredProps,
    secureTextEntry: type === 'password',
    onChangeText: onChange ? (text: string) => {
      onChange({
        target: { value: text },
        currentTarget: { value: text },
      } as WebChangeEvent);
    } : undefined,
  };
};

/**
 * Converts native props to web props
 */
export const toWebProps = (props: WebInputProps | NativeInputProps): WebInputProps => {
  if (isWebInputProps(props)) {
    return filterNativeProps(props);
  }

  // First extract native-specific props
  const { onChangeText, secureTextEntry, numberOfLines, autoCorrect } = props as NativeInputProps;
  const filteredProps = filterNativeProps(props);

  return {
    ...filteredProps,
    type: secureTextEntry ? 'password' : 'text',
    rows: numberOfLines,
    ...(typeof autoCorrect === 'boolean' ? { autoCorrect: autoCorrect.toString() } : {}),
    onChange: onChangeText ? (e: WebChangeEvent) => onChangeText(e.target.value) : undefined,
  };
};

/**
 * Creates accessibility props for web components
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
 * Creates accessibility props for native components
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

/**
 * Handle focus events consistently across platforms
 */
export const handleFocus = (
  isFocused: boolean,
  onFocus?: (e: WebFocusEvent | NativeFocusEvent) => void,
  onBlur?: (e: WebFocusEvent | NativeFocusEvent) => void,
  event?: WebFocusEvent | NativeFocusEvent
) => {
  if (isFocused && onFocus) {
    onFocus(event || {} as WebFocusEvent | NativeFocusEvent);
  } else if (!isFocused && onBlur) {
    onBlur(event || {} as WebFocusEvent | NativeFocusEvent);
  }
}; 