import { cva } from 'class-variance-authority';

export const accountRootVariants = cva(
  'flex flex-row items-center',
  {
    variants: {
      variant: {
        default: 'bg-neutral-3 hover:bg-neutral-4',
        soft: 'bg-neutral-2 hover:bg-neutral-3',
        ghost: 'hover:bg-neutral-3',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-5 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
); 