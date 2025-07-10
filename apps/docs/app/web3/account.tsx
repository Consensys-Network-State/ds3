import React from 'react';
import { View } from '@consensys/ds3';
import { Account } from '@consensys/ds3-web3';
import { MarkdownPage } from '@/components/MarkdownPage';

export default function AccountPage() {
  const scope = {
    React,
    View,
    Account,
  };

  return (
    <MarkdownPage 
      path="packages/web3/src/components/account/README.md"
      scope={scope}
    />
  );
}
