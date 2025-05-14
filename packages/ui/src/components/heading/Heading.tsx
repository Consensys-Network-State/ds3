import * as React from 'react';
import { Text } from '../text';
import { cn } from '../../utils';
import type { HeadingProps, HeadingRef, HeadingLevel } from './types';
import { headingClasses } from './types';

const createHeading = (level: HeadingLevel) => {
  return React.forwardRef<HeadingRef, HeadingProps>(
    ({ children, className, ...otherProps }, ref) => {
      return (
        <Text ref={ref} className={cn(headingClasses[level], className)} {...otherProps}>
          {children}
        </Text>
      );
    }
  );
};

const H1 = createHeading(1);
const H2 = createHeading(2);
const H3 = createHeading(3);
const H4 = createHeading(4);
const H5 = createHeading(5);
const H6 = createHeading(6);

H1.displayName = 'H1';
H2.displayName = 'H2';
H3.displayName = 'H3';
H4.displayName = 'H4';
H5.displayName = 'H5';
H6.displayName = 'H6';

export { H1, H2, H3, H4, H5, H6 }; 