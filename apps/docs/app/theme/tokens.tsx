import React from 'react';
import { View, Text } from '@consensys/ds3';
import { MarkdownPage } from '@/components/MarkdownPage';
import { ScrollView } from 'react-native';

export default function TokensPage() {
  const scope = {
    React,
    View,
    Text,
    ScrollView,
  };

  return (
    <MarkdownPage 
      path="packages/theme/docs/TOKENS.md"
      scope={scope}
    />
  );
} 