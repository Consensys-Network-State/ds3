import { cva } from 'class-variance-authority';

export const menuVariants = cva(
  'flex flex-col gap-1',
  {
    variants: {
      size: {
        sm: '',
        md: '',
        lg: '',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export const menuItemVariants = cva(
  'group flex flex-row gap-2 items-center rounded-4 px-3 py-2',
  {
    variants: {
      size: {
        sm: 'px-2 py-1.5',
        md: 'px-3 py-2',
        lg: 'px-4 py-2.5',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export const menuItemIconVariants = cva(
  '',
  {
    variants: {
      size: {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export const menuItemTextVariants = cva(
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

// TODO: there is an issue where when i go to add a size prop on avatar, it doesn't do anything as these classes override it.
export const menuItemAvatarVariants = cva(
  '',
  {
    variants: {
      size: {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
); 