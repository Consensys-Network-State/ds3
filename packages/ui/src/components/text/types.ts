import { Text as RNText } from 'react-native';
import type { VariantProps } from 'class-variance-authority';
import { textVariants } from './styles';
import type { SlottableTextProps } from '@rn-primitives/types';

export type TextProps = Omit<SlottableTextProps, 'className'> & {
  size?: VariantProps<typeof textVariants>['size'];
  weight?: VariantProps<typeof textVariants>['weight'];
  color?: VariantProps<typeof textVariants>['color'];
  className?: string;
};

export type TextRef = React.ElementRef<typeof RNText>; 