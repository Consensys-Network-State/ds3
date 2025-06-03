import type { ButtonRootProps } from "@consensys/ds3";

export type DisconnectButtonProps = ButtonRootProps & {
  children?: React.ReactNode;
}
 
export type MetaMaskLoginProps = ButtonRootProps & {
  className?: string;
}
