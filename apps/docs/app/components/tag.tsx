import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Tag, Icon, View } from '@consensys/ds3';
import { MarkdownPage } from '@/components/MarkdownPage';
import { X } from 'lucide-react-native';

export default function TagPage() {
  const scope = {
    React,
    Tag,
    Icon,
    View,
    X,
    TouchableOpacity,
  };

  return (
    <MarkdownPage 
      path="packages/ui/src/components/tag/README.md"
      scope={scope}
    />
  );
} 