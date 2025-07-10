import React from 'react';
import { View, Text } from '@consensys/ds3';
import { DisconnectButton, Web3LoginButton, MetaMask } from '@consensys/ds3-web3';
import { MarkdownPage } from '@/components/MarkdownPage';

export default function AccountPage() {
  const scope = {
    React,
    View,
    DisconnectButton,
    Text,
    Web3LoginButton,
    MetaMask,
  };

  return (
    <MarkdownPage 
      path="packages/web3/src/components/wallet/README.md"
      scope={scope}
    />
  );
}
