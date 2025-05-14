import type { ButtonProps } from "@ds3/ui";

export type AccountProps = ButtonProps & {
  className?: string;
};
 
export interface AccountContextValue {
  address?: `0x${string}`;
  disconnect: () => void;
} 