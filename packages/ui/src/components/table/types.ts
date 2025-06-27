import * as React from 'react';
import type { ScrollViewProps, ViewStyle, TextStyle, DimensionValue } from 'react-native';
import type { VariantProps } from 'class-variance-authority';
import { tableVariants, tableRowVariants, tableCellVariants } from './styles';

export interface TableContext {
  color?: VariantProps<typeof tableVariants>['color'];
  striped?: VariantProps<typeof tableVariants>['striped'];
  compact?: VariantProps<typeof tableVariants>['compact'];
  border?: VariantProps<typeof tableVariants>['border'];
}

export interface TableProps extends Omit<ScrollViewProps, 'children'> {
  children?: React.ReactNode;
  className?: string;
  style?: ViewStyle;
  color?: VariantProps<typeof tableVariants>['color'];
  border?: VariantProps<typeof tableVariants>['border'];
  striped?: VariantProps<typeof tableVariants>['striped'];
  compact?: VariantProps<typeof tableVariants>['compact'];
}

export interface TableRowProps {
  children?: React.ReactNode;
  className?: string;
  style?: ViewStyle;
  isEven?: boolean;
  isHeader?: boolean;
  isLast?: boolean;
  border?: VariantProps<typeof tableRowVariants>['border'];
}

export interface TableCellProps {
  children?: React.ReactNode;
  className?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  isEven?: boolean;
  isHeader?: boolean;
  align?: VariantProps<typeof tableCellVariants>['align'];
  width?: DimensionValue;
  border?: VariantProps<typeof tableCellVariants>['border'];
}

// Type helpers for better DX
export type TableColors = NonNullable<TableProps['color']>;
export type TableSizes = NonNullable<TableProps['compact']>; 