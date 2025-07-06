import React from 'react';
import { MarkdownPage } from '@/components/MarkdownPage';
import { View, Text } from '@consensys/ds3';
import { ScrollView } from 'react-native';

export default function ColorsPage() {
  const scope = {
    React,
    View,
    Text,
    ScrollView,
  };

  return (
    <MarkdownPage 
      path="packages/theme/docs/COLORS.md"
      scope={scope}
    />
  );
} 