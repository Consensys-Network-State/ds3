import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Accordion, Icon, Text, View, Button } from '@consensys/ds3';
import { MarkdownPage } from '@/components/MarkdownPage';
import { Figma, Loader } from 'lucide-react-native';
import { Link } from 'expo-router';

export default function AccordionPage() {
  const scope = {
    React,
    Accordion,
    Icon,
    Text,
    View,
    Figma,
    Loader,
    TouchableOpacity,
    Link,
    Button
  };

  return (
    <MarkdownPage 
      path="packages/ui/src/components/accordion/README.md"
      scope={scope}
    />
  );
} 