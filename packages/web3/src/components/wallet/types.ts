import type { ButtonRootProps } from "@consensys/ds3";

export type DisconnectButtonProps = ButtonRootProps & {
  children?: React.ReactNode;
  disconnect: () => void;
}

export type Web3LoginProps = ButtonRootProps & {
  className?: string;
  connect?: () => Promise<void> | void;
  icon?: React.ComponentType<any>;
  children?: React.ReactNode;
}
