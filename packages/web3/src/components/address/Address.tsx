import * as React from 'react';
import { Text } from '@consensys/ds3';
import { truncateEthAddress } from '../../utils';
import type { AddressProps } from './types';

const Address = React.forwardRef<any, AddressProps>(
  ({
    address,
    truncate = true,
    ensResolver,
    ...props
  }, ref) => {

    const [ensName, setEnsName] = React.useState<string | null>(null);
    
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

    const addressText = truncate ? truncateEthAddress(address as string) : address;
    const displayText = ensName ? ensName : addressText;

    return <Text ref={ref} {...props}>{displayText}</Text>;
  }
);

Address.displayName = 'Address';

export { Address }; 