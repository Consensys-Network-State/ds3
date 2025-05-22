import type { ButtonRootProps } from "@consensys/ui";

export type AccountProps = ButtonRootProps & {
  className?: string;
};
 
export interface AccountContextValue {
  address?: `0x${string}`;
  disconnect: () => void;
} 