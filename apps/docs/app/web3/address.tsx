import React from 'react';
import { View } from '@consensys/ds3';
import { Address, AddressCard, AddressAvatar } from '@consensys/ds3-web3';
import { MarkdownPage } from '@/components/MarkdownPage';

export default function AccountPage() {
  const scope = {
    React,
    View,
    Address,
    AddressCard,
    AddressAvatar,
  };

  return (
    <MarkdownPage 
      path="packages/web3/src/components/address/README.md"
      scope={scope}
    />
  );
}
