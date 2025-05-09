import type { 
  WebChangeEvent,
  WebInputProps, 
  NativeInputProps,
  WebFocusEvent,
  NativeFocusEvent,
  SharedInputProps
} from './types';

// Type guard to check if props are web props
const isWebProps = (props: any): props is WebInputProps => {
  return (
    'type' in props || 
    'onChange' in props || 
    'selectionStart' in props || 
    'selectionEnd' in props
  );
};

// Type guard to check if props are native props
const isNativeProps = (props: any): props is NativeInputProps => {
  return (
    'onChangeText' in props || 
    'keyboardType' in props || 
    'secureTextEntry' in props
  );
};

// Transform web props to native props
export const toNativeProps = (props: Partial<WebInputProps & SharedInputProps> | Partial<NativeInputProps & SharedInputProps>): Partial<NativeInputProps & SharedInputProps> => {
  const nativeProps: Partial<NativeInputProps & SharedInputProps> = {};

  // If not web props, return as is
  if (!isWebProps(props)) {
    return props as Partial<NativeInputProps & SharedInputProps>;
  }

  // Convert autoCorrect to boolean
  if ('autoCorrect' in props) {
    nativeProps.autoCorrect = props.autoCorrect === 'on';
  }

  // Convert rows to numberOfLines
  if ('rows' in props) {
    nativeProps.numberOfLines = props.rows;
  }

  // Handle change events
  if (props.onChange) {
    nativeProps.onChangeText = (text: string) => {
      const syntheticEvent = {
        target: { value: text },
        currentTarget: { value: text },
        preventDefault: () => {},
        stopPropagation: () => {},
      } as WebChangeEvent;
      props.onChange?.(syntheticEvent);
    };
  }

  // Handle selection
  if (props.selection) {
    nativeProps.selection = {
      start: props.selection.selectionStart ?? 0,
      end: props.selection.selectionEnd ?? 0,
    };
  }

  // Handle input type transformations
  if (props.type === 'password') {
    nativeProps.secureTextEntry = true;
  }

  return nativeProps;
};

// Transform native props to web props
export const toWebProps = (props: Partial<WebInputProps & SharedInputProps> | Partial<NativeInputProps & SharedInputProps>): Partial<WebInputProps & SharedInputProps> => {
  const webProps: Partial<WebInputProps & SharedInputProps> = {};

  // If not native props, return as is
  if (!isNativeProps(props)) {
    return props as Partial<WebInputProps & SharedInputProps>;
  }

  // Copy over shared props
  const { 
    secureTextEntry, 
    keyboardType, 
    onChangeText,
    numberOfLines,
    ...sharedProps 
  } = props;

  // Copy all shared props
  Object.assign(webProps, sharedProps);

  // Convert autoCorrect to string
  if ('autoCorrect' in props) {
    webProps.autoCorrect = props.autoCorrect ? 'on' : 'off';
  }

  // Convert numberOfLines to rows for textarea
  if (numberOfLines) {
    webProps.rows = numberOfLines;
  }

  // Handle change events
  if (onChangeText) {
    webProps.onChange = (e: WebChangeEvent) => {
      onChangeText(e.target.value);
    };
  }

  // Handle selection
  if (props.selection) {
    webProps.selection = {
      selectionStart: props.selection.start,
      selectionEnd: props.selection.end,
    };
  }

  // Handle secure text entry
  if (secureTextEntry) {
    webProps.type = 'password';
  }

  return webProps;
};

// Get accessibility props that work on both platforms
export const getAccessibilityProps = (props: Partial<SharedInputProps>) => {
  const { disabled, loading, multiline } = props;
  
  // Return web-specific accessibility props
  return {
    'aria-disabled': disabled,
    'aria-busy': loading,
    'aria-multiline': multiline,
  };
};

// Get native-specific accessibility props
export const getNativeAccessibilityProps = (props: Partial<SharedInputProps>) => {
  const { disabled, loading } = props;
  
  return {
    accessibilityState: {
      disabled,
      busy: loading,
    },
  };
};

// Handle focus events consistently across platforms
export const handleFocus = (
  isFocused: boolean,
  onFocus?: (e: WebFocusEvent | NativeFocusEvent) => void,
  onBlur?: (e: WebFocusEvent | NativeFocusEvent) => void,
  event?: WebFocusEvent | NativeFocusEvent
) => {
  const syntheticEvent = event || {
    target: {},
    currentTarget: {},
    preventDefault: () => {},
    stopPropagation: () => {},
  } as WebFocusEvent | NativeFocusEvent;

  if (isFocused && onFocus) {
    onFocus(syntheticEvent);
  } else if (!isFocused && onBlur) {
    onBlur(syntheticEvent);
  }
}; 