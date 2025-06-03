import { TextProps } from "@consensys/ds3";

export interface AddressProps extends TextProps {
  address?: `0x${string}`;
  ens?: boolean;
  truncate?: boolean;
}

export interface AddressAvatarProps {
  address?: `0x${string}`;
  className?: string;
  ens?: boolean;
}

export interface AddressCardProps {
  address: `0x${string}`;
  className?: string;
  avatarClassName?: string;
  showCopyButton?: boolean;
} 