import { HighlightProps as PrismHighlightProps } from 'prism-react-renderer';

export interface HighlightProps extends Omit<PrismHighlightProps, 'children'> {
  className?: string;
  children?: PrismHighlightProps['children'];
}