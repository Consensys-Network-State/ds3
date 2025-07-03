import * as React from 'react';
import { View } from 'react-native';
import { Text } from '../text';
import { cn } from '../../utils';
import { tableRowVariants, tableCellVariants, tableCellTextVariants } from './styles';
import { useTableContext } from './context';
import type { TableRowProps, TableCellProps } from './types';

export const TableRow = React.forwardRef<View, TableRowProps>(
  (props, ref) => {
    const {
      children,
      className = '',
      style,
      isEven = false,
      isHeader = false,
      ...otherProps
    } = props;

    const context = useTableContext();

    return (
      <View
        ref={ref}
        className={cn(
          tableRowVariants({ 
            color: context.color ?? 'neutral', 
            isHeader, 
            striped: context.striped ?? false, 
            isEven,
            compact: context.compact ?? false,
            border: context.border ?? true,
            isLast: props.isLast ?? false
          }),
          className
        )}
        style={style}
        {...otherProps}
      >
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              isEven,
              isHeader,
              key: index,
            } as any);
          }
          return child;
        })}
      </View>
    );
  }
);

TableRow.displayName = 'TableRow';

export const TableCell = React.forwardRef<View, TableCellProps>(
  (props, ref) => {
    const {
      children,
      className = '',
      style,
      textStyle,
      isEven = false,
      isHeader = false,
      align = 'left',
      width,
      ...otherProps
    } = props;

    const context = useTableContext();

    const cellStyle = React.useMemo(() => ({
      flex: width ? undefined : 1,
      width: width,
      ...style,
    }), [width, style]);

    return (
      <View
        ref={ref}
        className={cn(
          tableCellVariants({ 
            color: context.color ?? 'neutral', 
            isHeader, 
            compact: context.compact ?? false,
            align,
            border: context.border ?? true
          }),
          className
        )}
        style={cellStyle}
        {...otherProps}
      >
        {typeof children === 'string' ? (
          <Text 
            className={cn(
              tableCellTextVariants({ 
                color: context.color ?? 'neutral', 
                isHeader, 
                compact: context.compact ?? false,
                align 
              })
            )}
            style={textStyle}
          >
            {children}
          </Text>
        ) : (
          children
        )}
      </View>
    );
  }
);

TableCell.displayName = 'TableCell';