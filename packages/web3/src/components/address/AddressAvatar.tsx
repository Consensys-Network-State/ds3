import * as React from 'react';
import { useEnsAvatar, useEnsName } from "wagmi";
import { normalize } from 'viem/ens';
import { Avatar, AvatarImage, cn } from "@consensys/ui";
import makeBlockie from 'ethereum-blockies-base64';
import type { AddressAvatarProps } from './types';

const AddressAvatar = React.forwardRef<any, AddressAvatarProps>(
  ({
    address,
    className,
    ens = true,
    ...props
  }, ref) => {
    // Return null if address is not defined
    if (!address) {
      return null;
    }

    const { data: ensName } = useEnsName({ address });
    const { data: ensAvatar } = useEnsAvatar({
      name: ens && ensName ? normalize(ensName as string) : ""
    });

    const avatarSource = ens && ensAvatar ?
      ensAvatar as string :
      makeBlockie(address as string);

    return (
      <Avatar ref={ref} alt={ensName || address as string} className={cn("w-8 h-8", className)} {...props}>
        <AvatarImage source={{ uri: avatarSource }} />
      </Avatar>
    );
  }
);

AddressAvatar.displayName = 'AddressAvatar';

export { AddressAvatar }; 