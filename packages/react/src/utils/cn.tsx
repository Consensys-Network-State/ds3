import { ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const fontSizes = [
  '2',
  '2.5',
  '3',
  '3.5',
  '4',
  '4.5',
  '5',
  '5.5',
  '6',
  '7',
  '8',
  '10',
  '12',
  '14',
  '16'
];

const twMergeConfig = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [{
        text: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', ...fontSizes]
      }],
    }
  }
});

const cn = (...inputs: ClassValue[]) => {
  return twMergeConfig(clsx(inputs));
};

export { cn };
