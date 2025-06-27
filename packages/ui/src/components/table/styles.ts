import { cva } from 'class-variance-authority';

export const tableVariants = cva(
  'bg-neutral-1 rounded-xl overflow-hidden shadow-sm flex flex-col',
  {
    variants: {
      color: {
        neutral: '',
        primary: '',
        secondary: '',
        error: '',
        warning: '',
        success: '',
      },
      border: {
        true: 'border border-neutral-6',
        false: '',
      },
      striped: {
        true: '',
        false: '',
      },
      compact: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [],
    defaultVariants: {
      color: 'neutral',
      border: true,
      striped: true,
      compact: false,
    },
  }
);

export const tableRowVariants = cva(
  'flex-row',
  {
    variants: {
      color: {
        neutral: '',
        primary: '',
        secondary: '',
        error: '',
        warning: '',
        success: '',
      },
      isHeader: {
        true: 'bg-neutral-2',
        false: '',
      },
      striped: {
        true: '',
        false: '',
      },
      isEven: {
        true: '',
        false: '',
      },
      compact: {
        true: 'py-2',
        false: 'py-3',
      },
      border: {
        true: '',
        false: '',
      },
      isLast: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      // Header backgrounds
      { isHeader: true, color: 'neutral', class: 'bg-neutral-3' },
      { isHeader: true, color: 'primary', class: 'bg-primary-3' },
      { isHeader: true, color: 'secondary', class: 'bg-secondary-3' },
      { isHeader: true, color: 'error', class: 'bg-error-3' },
      { isHeader: true, color: 'warning', class: 'bg-warning-3' },
      { isHeader: true, color: 'success', class: 'bg-success-3' },
      // Striped backgrounds - more visible for each color
      { isHeader: false, striped: true, isEven: true, color: 'neutral', class: 'bg-neutral-2' },
      { isHeader: false, striped: true, isEven: true, color: 'primary', class: 'bg-primary-2' },
      { isHeader: false, striped: true, isEven: true, color: 'secondary', class: 'bg-secondary-2' },
      { isHeader: false, striped: true, isEven: true, color: 'error', class: 'bg-error-2' },
      { isHeader: false, striped: true, isEven: true, color: 'warning', class: 'bg-warning-2' },
      { isHeader: false, striped: true, isEven: true, color: 'success', class: 'bg-success-2' },
      // Only show border-b if border is true and not last row
      { border: true, isLast: false, class: 'border-b border-neutral-6' },
    ],
    defaultVariants: {
      color: 'neutral',
      isHeader: false,
      striped: false,
      isEven: false,
      compact: false,
      border: true,
      isLast: false,
    },
  }
);

export const tableCellVariants = cva(
  'px-4 py-2 flex flex-row flex-wrap gap-y-2',
  {
    variants: {
      color: {
        neutral: '',
        primary: '',
        secondary: '',
        error: '',
        warning: '',
        success: '',
      },
      isHeader: {
        true: '',
        false: '',
      },
      compact: {
        true: 'px-2',
        false: '',
      },
      align: {
        left: 'justify-start',
        center: 'justify-center',
        right: 'justify-end',
      },
      border: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [],
    defaultVariants: {
      color: 'neutral',
      isHeader: false,
      compact: false,
      align: 'left',
      border: true,
    },
  }
);

export const tableCellTextVariants = cva(
  '',
  {
    variants: {
      color: {
        neutral: '',
        primary: '',
        secondary: '',
        error: '',
        warning: '',
        success: '',
      },
      isHeader: {
        true: 'font-bold text-neutral-12',
        false: 'font-normal text-neutral-11',
      },
      compact: {
        true: 'text-sm',
        false: 'text-base',
      },
      align: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
      },
    },
    compoundVariants: [],
    defaultVariants: {
      color: 'neutral',
      isHeader: false,
      compact: false,
      align: 'left',
    },
  }
); 