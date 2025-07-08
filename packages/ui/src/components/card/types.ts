import { ViewProps, TextProps } from 'react-native';
import type { ViewRef, TextRef } from '@rn-primitives/types';
import type { VariantProps } from 'class-variance-authority';
import { cardVariants } from './styles';

export interface CardContextValue {
  color?: VariantProps<typeof cardVariants>['color'];
  border?: VariantProps<typeof cardVariants>['border'];
}

export interface CardRootProps extends ViewProps {
  color?: VariantProps<typeof cardVariants>['color'];
  border?: VariantProps<typeof cardVariants>['border'];
  className?: string;
}

export interface CardHeaderProps extends ViewProps {
  className?: string;
}

export interface CardTitleProps extends TextProps {
  className?: string;
}

export interface CardDescriptionProps extends TextProps {
  className?: string;
}

export interface CardTextProps extends TextProps {
  className?: string;
}

export interface CardContentProps extends ViewProps {
  className?: string;
}

export interface CardFooterProps extends ViewProps {
  className?: string;
}

export type CardRef = ViewRef;
export type CardHeaderRef = ViewRef;
export type CardTitleRef = TextRef;
export type CardDescriptionRef = TextRef;
export type CardTextRef = TextRef;
export type CardContentRef = ViewRef;
export type CardFooterRef = ViewRef;

export type CardColors = NonNullable<CardRootProps['color']>; 