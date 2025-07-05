'use client';

// components

// button
export {
  Button,
  useButtonContext,
} from './components/button';

export type {
  ButtonRootProps,
  ButtonContext,
  ButtonIconProps,
  ButtonSpinnerProps,
  ButtonTextProps,
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

// tag
export {
  Tag,
} from './components/tag';

export type {
  TagProps,
  TagTextProps, 
  TagContext,
} from './components/tag';

// table
export {
  Table,
} from './components/table';

export type {
  TableProps,
  TableRowProps, 
  TableCellProps, 
  TableContext,
  TableColors,
  TableSizes
} from './components/table';

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
  TextClassContext,
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

// card
export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardText,
  useCardContext,
} from './components/card';

export type {
  CardRootProps,
  CardHeaderProps,
  CardTitleProps,
  CardDescriptionProps,
  CardTextProps,
  CardContentProps,
  CardFooterProps,
  CardContextValue,
  CardRef,
  CardHeaderRef,
  CardTitleRef,
  CardDescriptionRef,
  CardTextRef,
  CardContentRef,
  CardFooterRef,
  CardColors
} from './components/card';

// accordion
export {
  Accordion,
} from './components/accordion';

export type {
  AccordionRootProps,
  AccordionItemProps,
  AccordionTriggerProps,
  AccordionContentProps,
  AccordionVariants,
  AccordionColors,
  AccordionSizes,
} from './components/accordion';

// menu
export {
  Menu,
} from './components/menu';

export type {
  MenuRootProps,
  MenuItemProps,
  MenuGroupProps,
  MenuTriggerProps,
  MenuItemVariants,
  MenuTriggerVariants,
  MenuData,
  MenuGroupData,
  MenuItemData,
  MenuBaseItem,
  MenuBadge,
} from './components/menu';

// other components
// TODO: move to components folder and refactor
export * from './components/Select';
export * from './components/SelectField';
export * from './components/avatar';
export * from './components/DropdownMenu';
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
