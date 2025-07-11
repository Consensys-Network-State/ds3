import * as React from 'react';
import * as AccordionPrimitive from '@rn-primitives/accordion';
import type { VariantProps } from 'class-variance-authority';
import type { IconSizes, IconColors } from '../icon/types';
import type { SurfaceColor } from '../surface/types';
import { accordionVariants, accordionTriggerVariants } from './styles';

export type SharedAccordionProps = {
  variant?: VariantProps<typeof accordionVariants>['variant'];
  color?: SurfaceColor;
  size?: VariantProps<typeof accordionTriggerVariants>['size'];
  className?: string;
  children?: React.ReactNode;
};

export type AccordionRootProps = SharedAccordionProps & Omit<AccordionPrimitive.RootProps, keyof SharedAccordionProps>;

export type AccordionContext = {
  variant?: VariantProps<typeof accordionVariants>['variant'];
  color?: SurfaceColor;
  size?: VariantProps<typeof accordionTriggerVariants>['size'];
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

export type AccordionChevronProps = {
  size?: IconSizes | number;
  color?: IconColors;
  children?: React.ReactNode;
  className?: string;
};

export type AccordionVariants = NonNullable<AccordionRootProps['variant']>;
export type AccordionColors = NonNullable<AccordionRootProps['color']>;
export type AccordionSizes = NonNullable<AccordionRootProps['size']>; 