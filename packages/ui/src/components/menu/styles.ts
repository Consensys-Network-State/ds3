import { cva } from 'class-variance-authority';

// Main navigation menu container variants
export const menuVariants = cva('w-full', {
  variants: {},
  defaultVariants: {},
});

// Individual menu item variants
export const menuItemVariants = cva(
  'flex flex-row items-center px-3 py-2 rounded-md transition-colors',
  {
    variants: {
      isActive: {
        true: 'bg-primary-3 text-primary-12',
        false: 'hover:bg-neutral-3 active:bg-neutral-4',
      },
      isNested: {
        true: 'ml-2',
        false: '',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      },
    },
    compoundVariants: [
      { isActive: true, isNested: true, class: 'bg-primary-4' },
      { isActive: false, isNested: true, class: 'hover:bg-neutral-4' },
    ],
    defaultVariants: {
      isActive: false,
      isNested: false,
      disabled: false,
    },
  }
);

// Menu trigger variants (for accordion groups)
export const menuTriggerVariants = cva(
  'flex flex-row items-center px-3 py-2 rounded-md transition-colors w-full',
  {
    variants: {
      isActive: {
        true: 'bg-primary-3 text-primary-12',
        false: 'hover:bg-neutral-3 active:bg-neutral-4',
      },
    },
    defaultVariants: {
      isActive: false,
    },
  }
); 