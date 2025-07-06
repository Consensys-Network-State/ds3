import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'group flex flex-row gap-1 items-center self-start justify-center rounded-4',
  {
    variants: {
      size: {
        sm: 'px-2.5 py-[0.34375rem]',
        md: 'px-3 py-2',
        lg: 'px-3.5 py-[0.65625rem]',
      },
      square: {
        false: null,
        true: 'flex items-center justify-center',
      },
    },
    compoundVariants: [
      // Square option - equal padding for all sizes
      { square: true, size: 'sm', class: 'p-[9px]' },
      { square: true, size: 'md', class: 'p-[12px]' },
      { square: true, size: 'lg', class: 'p-[15px]' },
    ],
    defaultVariants: {
      size: 'md',
      square: false,
    },
  }
);

export const buttonTextVariants = cva(
  '',
  {
    variants: {
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export const buttonIconVariants = cva(
  '',
  {
    variants: {
      size: {
        sm: 'h-3.5 w-3.5',
        md: 'h-4 w-4',
        lg: 'h-[18px] w-[18px]',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);
