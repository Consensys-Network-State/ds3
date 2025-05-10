import type { WebButtonProps, NativeButtonProps, SharedButtonProps } from './types';
import type { WebClickEvent, NativePressEvent, WebFocusEvent, NativeFocusEvent } from '../../types';
import { AccessibilityRole } from 'react-native';

export function isWebButtonProps(props: any): props is WebButtonProps {
  return (
    'onClick' in props || 
    'type' in props ||
    'onMouseDown' in props ||
    'onMouseUp' in props ||
    'onMouseEnter' in props ||
    'onMouseLeave' in props
  );
}

export function isNativeButtonProps(props: any): props is NativeButtonProps {
  return (
    'onPress' in props || 
    'onPressIn' in props || 
    'onPressOut' in props
  );
}

export function toNativeProps(props: WebButtonProps): NativeButtonProps {
  const { onClick, onMouseDown, onMouseUp, onMouseEnter, onMouseLeave, onFocus, onBlur, ...rest } = props;
  return {
    ...rest,
    onPress: onClick ? (e: NativePressEvent) => onClick(e as unknown as WebClickEvent) : undefined,
    onPressIn: onMouseDown ? (e: NativePressEvent) => onMouseDown(e as unknown as WebClickEvent) : undefined,
    onPressOut: onMouseUp ? (e: NativePressEvent) => onMouseUp(e as unknown as WebClickEvent) : undefined,
    onFocus: onFocus ? (e: NativeFocusEvent) => onFocus(e as unknown as WebFocusEvent) : undefined,
    onBlur: onBlur ? (e: NativeFocusEvent) => onBlur(e as unknown as WebFocusEvent) : undefined,
  };
}

export function toWebProps(props: WebButtonProps | NativeButtonProps): WebButtonProps {
  if (isWebButtonProps(props)) {
    return props;
  }
  const { onPress, onPressIn, onPressOut, onFocus, onBlur, ...rest } = props;
  return {
    ...rest,
    type: 'button',
    onClick: onPress ? (e: WebClickEvent) => onPress(e as unknown as NativePressEvent) : undefined,
    onMouseDown: onPressIn ? (e: WebClickEvent) => onPressIn(e as unknown as NativePressEvent) : undefined,
    onMouseUp: onPressOut ? (e: WebClickEvent) => onPressOut(e as unknown as NativePressEvent) : undefined,
    onFocus: onFocus ? (e: WebFocusEvent) => onFocus(e as unknown as NativeFocusEvent) : undefined,
    onBlur: onBlur ? (e: WebFocusEvent) => onBlur(e as unknown as NativeFocusEvent) : undefined,
  };
}

export const getAccessibilityProps = (props: Partial<SharedButtonProps>) => {
  const { disabled, loading } = props;
  
  return {
    'aria-disabled': disabled,
    'aria-busy': loading,
    role: 'button',
  };
};

export const getNativeAccessibilityProps = (props: Partial<SharedButtonProps>) => {
  const { disabled, loading } = props;
  
  return {
    accessibilityRole: 'button' as AccessibilityRole,
    accessibilityState: {
      disabled,
      busy: loading,
    },
  };
};

export const handlePress = (
  isPressed: boolean,
  onPressIn?: (e: WebClickEvent | NativePressEvent) => void,
  onPressOut?: (e: WebClickEvent | NativePressEvent) => void,
  event?: WebClickEvent | NativePressEvent
) => {
  const syntheticEvent = event || {
    target: {},
    currentTarget: {},
    preventDefault: () => {},
    stopPropagation: () => {},
  } as WebClickEvent | NativePressEvent;

  if (isPressed && onPressIn) {
    onPressIn(syntheticEvent);
  } else if (!isPressed && onPressOut) {
    onPressOut(syntheticEvent);
  }
}; 