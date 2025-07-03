import { AvatarRootProps } from "@consensys/ds3";
 
export interface ChainAvatarProps extends AvatarRootProps {
  chainId: number;
  className?: string;
} 