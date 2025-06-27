import type { StyleProp, TextStyle } from 'react-native';
import { HighlightProps as PrismHighlightProps } from 'prism-react-renderer';

export interface HighlightProps extends Omit<PrismHighlightProps, 'children'> {
  className?: string;
  children?: PrismHighlightProps['children'];
  style?: StyleProp<TextStyle>;
}