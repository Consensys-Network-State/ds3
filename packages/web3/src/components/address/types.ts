import { TextProps } from "@consensys/ds3";

export interface AddressProps extends TextProps {
  address?: `0x${string}`;
  truncate?: boolean;
  ensResolver?: (address: `0x${string}`) => Promise<string | null>;
}

export interface AddressAvatarProps {
  address?: `0x${string}`;
  className?: string;
  ens?: boolean;
  ensResolver?: (address: `0x${string}`) => Promise<string | null>;
  avatarResolver?: (address: `0x${string}`) => Promise<string | null>;
}

export interface AddressCardProps {
  address: `0x${string}`;
  className?: string;
  avatarClassName?: string;
  showCopyButton?: boolean;
  avatarResolver?: (address: `0x${string}`) => Promise<string | null>;
  ensResolver?: (address: `0x${string}`) => Promise<string | null>;
} 