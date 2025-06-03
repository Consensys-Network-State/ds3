import type { ButtonRootProps } from "@consensys/ds3";

export type AccountProps = ButtonRootProps & {
  className?: string;
};
 
export interface AccountContextValue {
  address?: `0x${string}`;
  disconnect: () => void;
} 