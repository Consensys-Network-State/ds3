/**
 * Button Component Utilities
 * 
 * This module provides utilities for handling cross-platform button functionality:
 * 
 * - Platform Detection:
 *   Web indicators:
 *   • Event handlers: onClick, onMouseDown, onMouseUp, onMouseEnter, onMouseLeave
 *   • Props: type="button" | "submit" | "reset"
 * 
 *   Native indicators:
 *   • Event handlers: onPress, onPressIn, onPressOut
 *   • Props: hitSlop, needsOffscreenAlphaCompositing, onLayout, onTouch*
 * 
 * - Event Conversion:
 *   Web → Native:
 *   • onClick → onPress
 *   • onMouseDown → onPressIn
 *   • onMouseUp → onPressOut
 *   • onFocus → onFocus
 *   • onBlur → onBlur
 * 
 *   Native → Web:
 *   • onPress → onClick
 *   • onPressIn → onMouseDown
 *   • onPressOut → onMouseUp
 *   • onFocus → onFocus
 *   • onBlur → onBlur
 * 
 * - Prop Filtering:
 *   Web props removed: type, onClick, onMouseDown, onMouseUp, onMouseEnter, onMouseLeave
 *   Native props removed: hitSlop, needsOffscreenAlphaCompositing, onLayout, onTouch*, onPress*
 * 
 * - Accessibility Props:
 *   Web:
 *   • aria-disabled={disabled}
 *   • aria-busy={loading}
 *   • role="button"
 * 
 *   Native:
 *   • accessibilityRole="button"
 *   • accessibilityState={{ disabled, busy: loading }}
 * 
 * - Event Handlers:
 *   • Press: Manages press state and events across platforms
 *   • Hover: Manages hover state and events (web-only)
 */

import type { WebButtonProps, NativeButtonProps, SharedButtonProps } from './types';
import type { WebClickEvent, NativePressEvent, WebFocusEvent, NativeFocusEvent } from '../../types';
import { AccessibilityRole, GestureResponderEvent } from 'react-native';
import type { MouseEvent } from 'react';

/**
 * Type guards to determine if props are web or native specific
 * Checks for both event handlers and platform-specific props
 */
export function isWebButtonProps(props: unknown): props is WebButtonProps {
  if (!props || typeof props !== 'object') return false;
  
  const p = props as Partial<WebButtonProps>;
  
  // Check for web-specific event handlers
  const hasWebEvents = (
    typeof p.onClick === 'function' ||
    typeof p.onMouseDown === 'function' ||
    typeof p.onMouseUp === 'function' ||
    typeof p.onMouseEnter === 'function' ||
    typeof p.onMouseLeave === 'function'
  );

  // Check for web-specific props
  const hasWebProps = (
    p.type === 'button' ||
    p.type === 'submit' ||
    p.type === 'reset'
  );

  return hasWebEvents || hasWebProps;
}

export function isNativeButtonProps(props: unknown): props is NativeButtonProps {
  if (!props || typeof props !== 'object') return false;
  
  const p = props as Partial<NativeButtonProps>;
  
  // Check for native-specific event handlers
  const hasNativeEvents = (
    typeof p.onPress === 'function' ||
    typeof p.onPressIn === 'function' ||
    typeof p.onPressOut === 'function'
  );

  // Check for native-specific props
  const hasNativeProps = (
    'hitSlop' in p ||
    'needsOffscreenAlphaCompositing' in p ||
    'onLayout' in p ||
    'onTouchCancel' in p ||
    'onTouchEnd' in p ||
    'onTouchMove' in p ||
    'onTouchStart' in p
  );

  return hasNativeEvents || hasNativeProps;
}

/**
 * Filters out web-specific props that shouldn't be passed to native components
 */
export function filterWebProps(props: any): NativeButtonProps {
  const {
    type,
    onClick,
    onMouseDown,
    onMouseUp,
    onMouseEnter,
    onMouseLeave,
    ...rest
  } = props;
  return rest;
}

/**
 * Filters out native-specific props that shouldn't be passed to web components
 */
export function filterNativeProps(props: any): WebButtonProps {
  const {
    hitSlop,
    needsOffscreenAlphaCompositing,
    onLayout,
    onTouchCancel,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    onPress,
    onPressIn,
    onPressOut,
    ...rest
  } = props;
  return rest;
}

/**
 * Converts web event handlers to native event handlers
 * Maps:
 * - onClick -> onPress
 * - onMouseDown -> onPressIn
 * - onMouseUp -> onPressOut
 * - onFocus -> onFocus
 * - onBlur -> onBlur
 */
export function toNativeProps(props: WebButtonProps | NativeButtonProps): NativeButtonProps {
  if (isNativeButtonProps(props)) {
    return filterWebProps(props);
  }

  const filteredProps = filterWebProps(props);
  const { onClick, onMouseDown, onMouseUp, onFocus, onBlur } = props;
  return {
    ...filteredProps,
    onPress: onClick ? (e: GestureResponderEvent) => onClick(e as unknown as WebClickEvent) : undefined,
    onPressIn: onMouseDown ? (e: GestureResponderEvent) => onMouseDown(e as unknown as WebClickEvent) : undefined,
    onPressOut: onMouseUp ? (e: GestureResponderEvent) => onMouseUp(e as unknown as WebClickEvent) : undefined,
    onFocus: onFocus ? (e: NativeFocusEvent) => onFocus(e as unknown as WebFocusEvent) : undefined,
    onBlur: onBlur ? (e: NativeFocusEvent) => onBlur(e as unknown as WebFocusEvent) : undefined,
  };
}

/**
 * Converts native event handlers to web event handlers
 * Maps:
 * - onPress -> onClick
 * - onPressIn -> onMouseDown
 * - onPressOut -> onMouseUp
 * - onFocus -> onFocus
 * - onBlur -> onBlur
 */
export function toWebProps(props: WebButtonProps | NativeButtonProps): WebButtonProps {
  if (isWebButtonProps(props)) {
    return filterNativeProps(props);
  }

  const filteredProps = filterNativeProps(props);
  const { onPress, onPressIn, onPressOut, onFocus, onBlur } = props;
  return {
    ...filteredProps,
    type: 'button',
    onClick: onPress ? (e: WebClickEvent) => onPress(e as unknown as NativePressEvent) : undefined,
    onMouseDown: onPressIn ? (e: WebClickEvent) => onPressIn(e as unknown as NativePressEvent) : undefined,
    onMouseUp: onPressOut ? (e: WebClickEvent) => onPressOut(e as unknown as NativePressEvent) : undefined,
    onFocus: onFocus ? (e: WebFocusEvent) => onFocus(e as unknown as NativeFocusEvent) : undefined,
    onBlur: onBlur ? (e: WebFocusEvent) => onBlur(e as unknown as NativeFocusEvent) : undefined,
  };
}

/**
 * Creates accessibility props for web components
 */
export const getAccessibilityProps = (props: Partial<SharedButtonProps>) => {
  const { disabled, loading } = props;
  
  return {
    'aria-disabled': disabled,
    'aria-busy': loading,
    role: 'button',
  };
};

/**
 * Creates accessibility props for native components
 */
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

/**
 * Creates press event handlers for both web and native platforms
 * Handles:
 * - Press events (press in/out)
 * - State management (pressed)
 * - Event type conversions between platforms
 */
export const createPressHandlers = <T extends GestureResponderEvent | WebClickEvent>(
  setIsPressed: (isPressed: boolean) => void,
  onPressIn?: ((e: T) => void) | null,
  onPressOut?: ((e: T) => void) | null,
) => ({
  handlePressIn: (event: T) => {
    setIsPressed(true);
    onPressIn?.(event);
  },
  handlePressOut: (event: T) => {
    setIsPressed(false);
    onPressOut?.(event);
  },
});

/**
 * Creates hover event handlers for web platform only
 * Handles:
 * - Hover events (hover in/out)
 * - State management (hovered)
 */
export const createHoverHandlers = (
  setIsHovered: (isHovered: boolean) => void,
  onMouseEnter?: ((e: MouseEvent<Element>) => void) | null,
  onMouseLeave?: ((e: MouseEvent<Element>) => void) | null,
) => ({
  handleHoverIn: (event: MouseEvent<Element>) => {
    setIsHovered(true);
    onMouseEnter?.(event);
  },
  handleHoverOut: (event: MouseEvent<Element>) => {
    setIsHovered(false);
    onMouseLeave?.(event);
  },
}); 