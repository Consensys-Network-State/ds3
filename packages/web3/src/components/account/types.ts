import type { ButtonRootProps } from "@ds3/ui";

export type AccountProps = ButtonRootProps & {
  className?: string;
};
 
export interface AccountContextValue {
  address?: `0x${string}`;
  disconnect: () => void;
} 