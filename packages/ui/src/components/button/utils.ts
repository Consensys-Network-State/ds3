import type { 
  WebButtonProps, 
  NativeButtonProps,
  SharedButtonProps,
} from './types';
import type { WebClickEvent } from '../../types';
import type { AccessibilityRole, GestureResponderEvent } from 'react-native';

/**
 * Identifies web-specific props (onClick, type, form)
 * @returns true if props contain web-specific properties
 */
export function isWebButtonProps(props: unknown): props is WebButtonProps {
  if (!props || typeof props !== 'object') return false;
  const p = props as Partial<WebButtonProps>;
  return typeof p.onClick === 'function' || 'type' in p || 'form' in p || 'formAction' in p;
}

/**
 * Identifies native-specific props (onPress, onPressIn, onPressOut)
 * @returns true if props contain native-specific properties
 */
export function isNativeButtonProps(props: unknown): props is NativeButtonProps {
  if (!props || typeof props !== 'object') return false;
  const p = props as Partial<NativeButtonProps>;
  return typeof p.onPress === 'function' || typeof p.onPressIn === 'function' || typeof p.onPressOut === 'function';
}

/**
 * Native prop validator - warns if web props detected
 * - No props are filtered out (React Native ignores unrecognized props)
 * - Web props like onClick, type will be ignored by native components
 */
export function toNativeProps(props: unknown): NativeButtonProps {
  if (!props || typeof props !== 'object') {
    return {} as NativeButtonProps;
  }

  if (isWebButtonProps(props)) {
    console.warn('[DS3 Button] - Web props detected in native environment. This is not supported and props will be ignored.');
  }

  return props as NativeButtonProps;
}

/**
 * Converts native props to web props for hybrid support
 * Maps:
 * - onPress → onClick
 * - onPressIn → onMouseDown
 * - onPressOut → onMouseUp
 */
export function toWebProps(props: unknown): WebButtonProps {
  if (!props || typeof props !== 'object') {
    throw new Error('Props must be an object');
  }

  if (isWebButtonProps(props)) {
    return props as WebButtonProps;
  }

  if (!isNativeButtonProps(props)) {
    throw new Error('[DS3 Button] - Mixed props detected. Props must be either web or native, not both.');
  }

  const {
    onPress,
    onPressIn,
    onPressOut,
    ...rest
  } = props as NativeButtonProps;

  return {
    ...rest,
    type: 'button',
    onClick: onPress ? (e: WebClickEvent) => onPress(e as unknown as GestureResponderEvent) : undefined,
    onMouseDown: onPressIn ? (e: WebClickEvent) => onPressIn(e as unknown as GestureResponderEvent) : undefined,
    onMouseUp: onPressOut ? (e: WebClickEvent) => onPressOut(e as unknown as GestureResponderEvent) : undefined,
  } as WebButtonProps;
}

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

/**
 * Creates press event handlers for both web and native platforms
 * Handles:
 * - Press events (press in/out)
 * - State management (pressed)
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
  onMouseEnter?: ((e: React.MouseEvent<Element>) => void) | null,
  onMouseLeave?: ((e: React.MouseEvent<Element>) => void) | null,
) => ({
  handleHoverIn: (event: React.MouseEvent<Element>) => {
    setIsHovered(true);
    onMouseEnter?.(event);
  },
  handleHoverOut: (event: React.MouseEvent<Element>) => {
    setIsHovered(false);
    onMouseLeave?.(event);
  },
}); 