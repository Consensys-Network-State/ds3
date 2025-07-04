import * as React from 'react';
import * as AccordionPrimitive from '@rn-primitives/accordion';
import type { VariantProps } from 'class-variance-authority';

// Shared accordion props
export type SharedAccordionProps = {
  variant?: 'card' | 'underline' | 'outline';
  color?: 'neutral' | 'primary' | 'secondary' | 'error' | 'warning' | 'success';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
};

// Accordion root props extending from primitives
export type AccordionRootProps = SharedAccordionProps & Omit<AccordionPrimitive.RootProps, keyof SharedAccordionProps>;

export type AccordionContext = {
  variant?: 'card' | 'underline' | 'outline';
  color?: 'neutral' | 'primary' | 'secondary' | 'error' | 'warning' | 'success';
  size?: 'sm' | 'md' | 'lg';
};

export type AccordionItemProps = AccordionPrimitive.ItemProps & {
  className?: string;
};

export type AccordionTriggerProps = AccordionPrimitive.TriggerProps & {
  className?: string;
  children?: React.ReactNode;
};

export type AccordionContentProps = AccordionPrimitive.ContentProps & {
  className?: string;
  children?: React.ReactNode;
};

export type AccordionVariants = NonNullable<AccordionRootProps['variant']>;
export type AccordionColors = NonNullable<AccordionRootProps['color']>;
export type AccordionSizes = NonNullable<AccordionRootProps['size']>; 