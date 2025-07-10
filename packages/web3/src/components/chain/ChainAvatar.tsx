import * as React from 'react';
import { polygon, optimism, arbitrum, linea } from 'viem/chains';
import { Avatar, cn } from "@consensys/ds3";
import { Ethereum, Polygon, Optimism, Arbitrum, Linea } from '../../icons';
import type { ChainAvatarProps } from './types';

const ChainAvatar = React.forwardRef<any, ChainAvatarProps>(
  ({ chainId, className, alt, ...props }, ref) => {
    const IconComponent = React.useMemo(() => {
      switch(chainId) {
        case polygon.id: return Polygon;
        case optimism.id: return Optimism;
        case arbitrum.id: return Arbitrum;
        case linea.id: return Linea;
        default: return Ethereum;
      }
    }, [chainId]);

    return (
      <Avatar
        ref={ref}
        className={cn("w-5 h-5", className)}
        alt={alt || `Chain ${chainId}`}
        {...props}
      >
        <IconComponent />
      </Avatar>
    );
  }
);

ChainAvatar.displayName = 'ChainAvatar';

export { ChainAvatar }; 