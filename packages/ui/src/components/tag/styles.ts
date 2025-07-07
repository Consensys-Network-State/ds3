import { cva } from 'class-variance-authority';

export const tagVariants = cva(
  'inline-flex flex-row items-center justify-center rounded-md font-medium gap-1',
  {
    variants: {
      size: {
        sm: 'h-5 px-1.5',
        md: 'h-6 px-2',
        lg: 'h-8 px-3',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export const tagTextVariants = cva(
  'font-medium',
  {
    variants: {
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export const tagIconVariants = cva(
  '',
  {
    variants: {
      size: {
        sm: 'h-2.5 w-2.5',
        md: 'h-3.5 w-3.5',
        lg: 'h-5 h-5',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
); 