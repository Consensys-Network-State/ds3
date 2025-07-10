import { cva } from 'class-variance-authority';

export const addressCardVariants = cva(
  'h-12 items-center flex flex-row content-center',
  {
    variants: {
      showCopyButton: {
        false: 'justify-start'
      }
    },
    defaultVariants: {
      showCopyButton: true
    }
  }
); 