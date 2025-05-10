import type { TextRef } from '@rn-primitives/types';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export const headingClasses = {
  1: 'text-h1',
  2: 'text-h2',
  3: 'text-h3',
  4: 'text-h4',
  5: 'text-h5',
  6: 'text-h6',
} as const;

export type HeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export type HeadingRef = TextRef; 