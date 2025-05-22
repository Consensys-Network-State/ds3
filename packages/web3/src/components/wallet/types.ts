import type { ButtonRootProps } from "@consensys/ui";

export type DisconnectButtonProps = ButtonRootProps & {
  children?: React.ReactNode;
}
 
export type MetaMaskLoginProps = ButtonRootProps & {
  className?: string;
}
