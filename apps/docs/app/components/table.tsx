import React from 'react';
import { Table, View, Text } from '@consensys/ds3';
import { MarkdownPage } from '@/components/MarkdownPage';

export default function TablePage() {
  const scope = {
    React,
    Table,
    View,
    Text,
  };

  return (
    <MarkdownPage 
      path="packages/ui/src/components/table/README.md"
      scope={scope}
    />
  );
} 