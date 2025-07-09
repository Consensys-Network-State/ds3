import { cva } from 'class-variance-authority';

export const avatarVariants = cva(
  'relative flex shrink-0 overflow-hidden rounded-full flex h-full w-full items-center justify-center',
  {
    variants: {
      size: {
        sm: 'h-8 w-8',
        md: 'h-10 w-10',
        lg: 'h-12 w-12',
        xl: 'h-16 w-16',
        '2xl': 'h-20 w-20',
      },
      border: {
        true: '',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      border: false,
    },
  }
);

export const avatarImageVariants = cva(
  'aspect-square h-full w-full',
  {
    variants: {
      size: {
        sm: '',
        md: '',
        lg: '',
        xl: '',
        '2xl': '',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);



export const avatarTextVariants = cva(
  'font-medium',
  {
    variants: {
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
        xl: 'text-lg',
        '2xl': 'text-xl',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export const avatarIconVariants = cva(
  '',
  {
    variants: {
      size: {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
        xl: 'h-8 w-8',
        '2xl': 'h-10 w-10',
      }
    },
    defaultVariants: {
      size: 'md',
    },
  }
); 