import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Tag, Icon, View, Text, Button } from '@consensys/ds3';
import { MarkdownPage } from '@/components/MarkdownPage';
import { X, Figma } from 'lucide-react-native';

export default function TagPage() {
  const scope = {
    React,
    Tag,
    Icon,
    View,
    X,
    TouchableOpacity,
    Figma,
    Text,
    Button
  };

  return (
    <MarkdownPage 
      path="packages/ui/src/components/tag/README.md"
      scope={scope}
    />
  );
} 