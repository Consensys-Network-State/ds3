import { forwardRef } from 'react';
import { cn } from "../utils";
import { Text } from './Text';
import { TextRef, SlottableTextProps } from '@rn-primitives/types';

const H1 = forwardRef<TextRef, SlottableTextProps>(
  ({ children, className, ...otherProps }, ref) => {
    return (
      <Text ref={ref} className={cn('text-h1', className)} {...otherProps}>
        {children}
      </Text>
    );
  }
);

const H2 = forwardRef<TextRef, SlottableTextProps>(
  ({ children, className, ...otherProps }, ref) => {
    return (
      <Text ref={ref} className={cn('text-h2', className)} {...otherProps}>
        {children}
      </Text>
    );
  }
);

const H3 = forwardRef<TextRef, SlottableTextProps>(
  ({ children, className, ...otherProps }, ref) => {
    return (
      <Text ref={ref} className={cn('text-h3', className)} {...otherProps}>
        {children}
      </Text>
    );
  }
);

const H4 = forwardRef<TextRef, SlottableTextProps>(
  ({ children, className, ...otherProps }, ref) => {
    return (
      <Text ref={ref} className={cn('text-h4', className)} {...otherProps}>
        {children}
      </Text>
    );
  }
);

const H5 = forwardRef<TextRef, SlottableTextProps>(
  ({ children, className, ...otherProps }, ref) => {
    return (
      <Text ref={ref} className={cn('text-h5', className)} {...otherProps}>
        {children}
      </Text>
    );
  }
);

const H6 = forwardRef<TextRef, SlottableTextProps>(
  ({ children, className, ...otherProps }, ref) => {
    return (
      <Text ref={ref} className={cn('text-h6', className)} {...otherProps}>
        {children}
      </Text>
    );
  }
);

H1.displayName = 'H1';
H2.displayName = 'H2';
H3.displayName = 'H3';
H4.displayName = 'H4';
H5.displayName = 'H5';
H6.displayName = 'H6';

export { H1, H2, H3, H4, H5, H6 };