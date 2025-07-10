import type { ButtonRootProps } from "@consensys/ds3";

export type AccountProps = ButtonRootProps & {
  className?: string;
  address?: `0x${string}`;
  disconnect: () => void;
  avatarResolver?: (address: `0x${string}`) => Promise<string | null>;
  ensResolver?: (address: `0x${string}`) => Promise<string | null>;
};
 
export interface AccountContextValue {
  address?: `0x${string}`;
  disconnect: () => void;
} 