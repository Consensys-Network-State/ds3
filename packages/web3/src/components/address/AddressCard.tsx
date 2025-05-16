import * as React from 'react';
import { useEnsName } from "wagmi";
import { cn, Button, copyToClipboard } from "@ds3/ui";
import { Copy } from 'lucide-react-native';
import { addressCardVariants } from './styles';
import type { AddressCardProps } from './types';
import { Address } from './Address';
import { AddressAvatar } from './AddressAvatar';

const AddressCard = React.forwardRef<any, AddressCardProps>(
  ({ 
    address, 
    className, 
    avatarClassName,
    showCopyButton = true 
  }, ref) => {
    const { data: ensName } = useEnsName({ address });

    return address ? (
      <div ref={ref} className={cn(addressCardVariants({ showCopyButton }), className)}>
        <div className="flex flex-row items-center">
          <AddressAvatar address={address} className={cn("w-8 h-8 mr-3", avatarClassName)} />
          <div className="flex flex-col gap-1">
            {!!ensName && <Address address={address} />}
            <Address address={address} ens={false} />
          </div>
        </div>
        {showCopyButton && (
          <Button 
            variant="ghost" 
            size="sm"
            onPress={() => copyToClipboard(address)}
          >
            <Button.Icon icon={Copy} className="text-neutral-11" />
          </Button>
        )}
      </div>
    ) : null;
  }
);

AddressCard.displayName = 'AddressCard';

export { AddressCard }; 