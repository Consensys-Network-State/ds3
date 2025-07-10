import React from 'react';
import { View, Button, Text } from '@consensys/ds3';
import { ChainAvatar } from '@consensys/ds3-web3';
import { MarkdownPage } from '@/components/MarkdownPage';

export default function AccountPage() {
  const scope = {
    React,
    View,
    ChainAvatar,
    Button,
    Text,
  };

  return (
    <MarkdownPage 
      path="packages/web3/src/components/chain/README.md"
      scope={scope}
    />
  );
}
