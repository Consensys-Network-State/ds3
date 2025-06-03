import { AvatarProps } from "@consensys/ds3";
 
export interface ChainAvatarProps extends AvatarProps {
  chainId: number;
  className?: string;
} 