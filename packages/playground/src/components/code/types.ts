import type { StyleProp, TextStyle } from 'react-native';
import { HighlightProps as PrismHighlightProps } from 'prism-react-renderer';
import type { InputRootProps } from "@consensys/ds3";

export interface CodeProps extends Omit<PrismHighlightProps, 'children'> {
  className?: string;
  children?: PrismHighlightProps['children'];
  style?: StyleProp<TextStyle>;
  theme?: PrismHighlightProps['theme'];
}

export interface CodeInputProps extends InputRootProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  multiline?: boolean;
  numberOfLines?: number;
  className?: string;
}