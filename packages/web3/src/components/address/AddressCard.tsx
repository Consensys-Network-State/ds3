import * as React from 'react';
import { cn, Button, copyToClipboard, Icon } from "@consensys/ds3";
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
    avatarResolver,
    ensResolver,
    showCopyButton = true 
  }, ref) => {

    return address ? (
      <div ref={ref} className={cn(addressCardVariants({ showCopyButton }), className)}>
        <div className="flex flex-row items-center">
          <AddressAvatar address={address} className={cn("w-8 h-8 mr-3", avatarClassName)} avatarResolver={avatarResolver} ensResolver={ensResolver} />
          <div className="flex flex-col gap-1">
            <Address address={address} ensResolver={ensResolver} />
          </div>
        </div>
        {showCopyButton && (
          <Button 
            variant="ghost" 
            size="sm"
            onPress={() => copyToClipboard(address)}
          >
            <Icon icon={Copy} className="text-neutral-11" />
          </Button>
        )}
      </div>
    ) : null;
  }
);

AddressCard.displayName = 'AddressCard';

export { AddressCard }; 