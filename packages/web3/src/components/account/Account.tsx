import * as React from 'react';
import {
  Button,
  Text,
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  Icon,
  cn,
  openLink,
  copyToClipboard
} from "@consensys/ds3";
import { useAccount, useDisconnect } from "wagmi";
import { ChevronDown, Copy, ExternalLink, LogOut } from 'lucide-react-native';
import { accountRootVariants } from './styles';
import type { AccountProps } from './types';
import { Address } from '../address';
import { AddressAvatar } from '../address';

const Account = React.forwardRef<any, AccountProps>(
  ({ className, ...props }, ref) => {
    const { address } = useAccount();
    const { disconnect } = useDisconnect();

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button ref={ref} className={cn(accountRootVariants(), className)} {...props}>
            <AddressAvatar address={address} className="mr-1 w-6 h-6" />
            <Address address={address} />
            <Button.Icon icon={ChevronDown} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onPress={() => copyToClipboard(address as string)}>
              <Icon icon={Copy} />
              <Text>Copy address</Text>
            </DropdownMenuItem>
            <DropdownMenuItem onPress={() => openLink(`https://etherscan.io/address/${address}`)}>
              <Icon icon={ExternalLink} />
              <Text>View on explorer</Text>
            </DropdownMenuItem>
            <DropdownMenuItem onPress={() => disconnect()}>
              <Icon icon={LogOut} />
              <Text>Disconnect</Text>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
);

Account.displayName = 'Account';

export { Account }; 