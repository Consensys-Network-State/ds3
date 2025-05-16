import { cva } from 'class-variance-authority';

export const addressCardVariants = cva(
  'h-12 items-center flex flex-row',
  {
    variants: {
      showCopyButton: {
        true: 'justify-between',
        false: 'justify-start'
      }
    },
    defaultVariants: {
      showCopyButton: true
    }
  }
); 