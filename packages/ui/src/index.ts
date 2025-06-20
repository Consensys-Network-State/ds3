'use client';

// components

// button
export {
  Button,
  IconButton,
  useButtonContext,
} from './components/button';

export type {
  ButtonRootProps,
  ButtonContext,
  ButtonIconProps,
  ButtonSpinnerProps,
  ButtonTextProps,
  IconButtonProps,
  WebButtonProps,
  NativeButtonProps,
  SharedButtonProps,
  ButtonColors,
  ButtonSizes,
  ButtonVariant
} from './components/button';

// checkbox
export {
  Checkbox,
  useCheckboxContext,
} from './components/checkbox';

export type {
  CheckboxRootProps,
  CheckboxIconProps,
  CheckboxContextValue, // TODO: consistent naming
} from './components/checkbox';

// field
export {
  Field,
  useField,
} from './components/field';

export type {
  FieldRootProps,
  FieldIconProps,
  FieldItemProps,
  UseFieldProps,
} from './components/field';

// fields
export {
  CheckboxField,
  InputField,
  SwitchField,
} from './components/fields';

export type {
  FieldsProps,
  CheckboxFieldRootProps,
  InputFieldRootProps,
  SwitchFieldRootProps,
} from './components/fields';

// heading
export {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
} from './components/heading';

export type {
  HeadingProps,
  HeadingRef,
  HeadingLevel,
} from './components/heading';

// icon
export {
  Icon,
} from './components/icon';

export type {
  IconProps,
  IconSizes,
  IconColors,
} from './components/icon';

// input
export {
  Input,
  Textarea,
  useInputContext,
} from './components/input';

export type {
  InputRootProps,
  InputContext,
  InputIconProps,
  InputSpinnerProps,
  InputTextProps,
  InputFieldProps,
} from './components/input';

// spinner
export {
  Spinner,
} from './components/spinner';

export type {
  SpinnerProps,
} from './components/spinner';

// highlight
export {
  Highlight,
} from './components/highlight';

export type {
  HighlightProps,
} from './components/highlight';

// switch
export {
  Switch,
  SwitchThumb,
} from './components/switch';

export type {
  SwitchRootProps,
  SwitchThumbProps,
} from './components/switch';

// text
export {
  Text,
  useTextClass, // TODO: consistent naming
} from './components/text';

export type {
  TextProps,
  TextRef,
} from './components/text';

// theme
export {
  ThemeProvider,
  Theme,
  ThemeSwitcher,
  ThemeToggle,
  ThemeIcon,
  useThemeColors,
  useTheme,
  useColorScheme,
} from './components/theme';

export type {
  ThemeProps,
  ThemeBaseProps,
  ThemeProviderProps,
  ThemeSwitcherProps,
  ThemeToggleProps,
} from './components/theme';

// other components
// TODO: move to components folder and refactor
export * from './components/Select';
export * from './components/SelectField';
export * from './components/Avatar';
export * from './components/DropdownMenu';
export * from './components/Card';
export * from './components/Alert';
export * from './components/Badge';
export * from './components/Dialog';
export * from './components/Label';
export * from './components/RadioGroup';
export * from './components/RadioGroupField';
export * from './components/View';

// utils
export {
  cn,
  copyToClipboard,
  openLink
} from './utils';

// hooks
export {
  useCopyToClipboard
} from './hooks';

export type {
  WebClickEvent,
  WebFocusEvent,
  WebChangeEvent,
  NativePressEvent,
  NativeFocusEvent,
  NativeChangeEvent,
} from './types';
