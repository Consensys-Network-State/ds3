import { AvatarProps } from "@consensys/ui";
 
export interface ChainAvatarProps extends AvatarProps {
  chainId: number;
  className?: string;
} 