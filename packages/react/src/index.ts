// components

// button
export {
  Button,
  IconButton,
  useButtonContext,
} from './components/button';

export type { 
  ButtonRootProps as ButtonProps,
  ButtonContext,
  ButtonIconProps,
  ButtonSpinnerProps,
  ButtonTextProps,
  IconButtonProps,
} from './components/button';

// checkbox
export {
  Checkbox,
  useCheckboxContext,
} from './components/checkbox';

export type {
  CheckboxRootProps as CheckboxProps,
  CheckboxIconProps,
  CheckboxContextValue, // TODO: consistent naming
} from './components/checkbox';

// field
export {
  Field,
  useField,
} from './components/field';

export type {
  FieldRootProps as FieldProps,
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
  CheckboxFieldRootProps as CheckboxFieldProps,
  InputFieldRootProps, // TODO: consistent naming
  SwitchFieldRootProps as SwitchFieldProps,
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
  InputRootProps as InputProps,
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

// switch
export {
  Switch,
  SwitchThumb,
} from './components/switch';

export type {
  SwitchRootProps as SwitchProps,
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
  ModeToggle,
  useThemeContext,
} from './components/theme';

export type {
  ThemeProps,
  ThemeBaseProps,
  ThemeContextType,
  ThemeProviderProps,
  ThemeSwitcherProps,
  ModeToggleProps,
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
