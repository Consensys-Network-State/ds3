import { Table } from './Table';
import { TableRow, TableCell } from './Table.shared';

// Export individual components
export { Table, TableRow, TableCell };

// Export compound component as default
export default Table;

// Export types
export type { 
  TableProps, 
  TableRowProps, 
  TableCellProps, 
  TableContext,
  TableColors,
  TableSizes
} from './types';