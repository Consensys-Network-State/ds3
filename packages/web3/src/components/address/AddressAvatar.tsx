import * as React from 'react';
import { Avatar, cn } from "@consensys/ds3";
import makeBlockie from 'ethereum-blockies-base64';
import type { AddressAvatarProps } from './types';

const AddressAvatar = React.forwardRef<any, AddressAvatarProps>(
  ({
    address,
    className,
    ensResolver,
    avatarResolver,
    ...props
  }, ref) => {
    // Return null if address is not defined
    if (!address) {
      return null;
    }

    const [ensName, setEnsName] = React.useState<string | null>(null);
    const [avatarUrl, setAvatarUrl] = React.useState<string | null>(null);

    // Handle ENS name resolution
    React.useEffect(() => {
      if (ensResolver && address) {
        ensResolver(address)
          .then((resolvedName) => {
            setEnsName(resolvedName);
          })
          .catch((error) => {
            console.warn('Failed to resolve ENS name:', error);
            setEnsName(null);
          });
      } else {
        setEnsName(null);
      }
    }, [ensResolver, address]);

    // Handle avatar resolution
    React.useEffect(() => {
      if (avatarResolver && address) {
        avatarResolver(address)
          .then((resolvedAvatar) => {
            setAvatarUrl(resolvedAvatar);
          })
          .catch((error) => {
            console.warn('Failed to resolve avatar:', error);
            setAvatarUrl(null);
          });
      } else {
        setAvatarUrl(null);
      }
    }, [avatarResolver, address]);

    // Determine the avatar source
    const avatarSource = avatarUrl || makeBlockie(address as string);

    return (
      <Avatar ref={ref} alt={ensName || address as string} className={cn("w-8 h-8", className)} {...props}>
        <Avatar.Image source={{ uri: avatarSource }} />
      </Avatar>
    );
  }
);

AddressAvatar.displayName = 'AddressAvatar';

export { AddressAvatar }; 