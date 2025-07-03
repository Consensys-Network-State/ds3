import * as React from 'react';
import { polygon, optimism, arbitrum, linea } from 'viem/chains';
import { Avatar, cn } from "@consensys/ds3";
import type { ChainAvatarProps } from './types';

const ChainAvatar = React.forwardRef<any, ChainAvatarProps>(
  ({ chainId, className, alt, ...props }, ref) => {
    const uri = React.useMemo(() => {
      switch(chainId) {
        case polygon.id: return 'https://cryptologos.cc/logos/polygon-matic-logo.png?v=040';
        case optimism.id: return 'https://cryptologos.cc/logos/optimism-ethereum-op-logo.png?v=040';
        case arbitrum.id: return 'https://cryptologos.cc/logos/arbitrum-arb-logo.png?v=040';
        case linea.id: return 'https://cdn.bitkeep.vip/operation/u_b_fbe21d90-83a0-11ee-bed6-2b8bafc3726e.png';
        default: return 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=040';
      }
    }, [chainId]);

    return (
      <Avatar
        ref={ref}
        className={cn("w-5 h-5", className)}
        alt={alt || `Chain ${chainId}`}
        {...props}
      >
        <Avatar.Image source={{ uri }}/>
      </Avatar>
    );
  }
);

ChainAvatar.displayName = 'ChainAvatar';

export { ChainAvatar }; 