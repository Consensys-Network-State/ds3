import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { cn } from '../../utils';
import { tableVariants } from './styles';
import { TableContextProvider } from './context';
import { TableRow, TableCell } from './Table.shared';
import type { TableProps, TableContext } from './types';

const TableRoot = React.forwardRef<ScrollView, TableProps>(
  (props, ref) => {
    const {
      children,
      className = '',
      style,
      color = 'neutral',
      border = true,
      striped = false,
      compact = false,
      ...otherProps
    } = props;

    const contextValue = React.useMemo<TableContext>(() => ({
      color,
      striped,
      compact,
      border,
    }), [color, striped, compact, border]);

    return (
      <TableContextProvider.Provider value={contextValue}>
        <ScrollView
          ref={ref}
          horizontal
          showsHorizontalScrollIndicator={false}
          className={cn(
            tableVariants({ color, border, striped, compact }),
            className
          )}
          style={style}
          {...otherProps}
        >
          <View style={{ minWidth: '100%' }}>
            {children}
          </View>
        </ScrollView>
      </TableContextProvider.Provider>
    );
  }
);

TableRoot.displayName = 'Table';

const Table = Object.assign(TableRoot, {
  Row: TableRow,
  Cell: TableCell,
});

export { Table };