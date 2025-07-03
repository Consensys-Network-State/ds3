import { Tag } from './Tag';
import { TagText } from './Tag.shared';

// Export individual components
export { Tag, TagText };

// Export compound component as default
export default Tag;

// Export types
export type { 
  TagProps, 
  TagTextProps, 
  TagContext,
} from './types'; 