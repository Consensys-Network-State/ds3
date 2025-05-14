import * as React from 'react';
import { useEnsName } from "wagmi";
import { Text } from '@ds3/ui';
import truncateEthAddress from 'truncate-eth-address';
import type { AddressProps } from './types';

const Address = React.forwardRef<any, AddressProps>(
  ({
    address,
    ens = true,
    truncate = true,
    ...props
  }, ref) => {
    const { data: ensName } = useEnsName({ address });

    const addressText = truncate ? truncateEthAddress(address as string) : address;
    const ensText = ens && ensName ? ensName : addressText;

    return <Text ref={ref} {...props}>{ens ? ensText : addressText}</Text>;
  }
);

Address.displayName = 'Address';

export { Address }; 