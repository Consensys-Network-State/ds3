import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Button, Icon, Input, Checkbox, Switch, Spinner, Card, Badge, Alert, View, Text } from '@consensys/ds3';
import { MarkdownPage } from '@/components/MarkdownPage';
import { Figma, Loader } from 'lucide-react-native';
import { Link } from 'expo-router';
import { CodeBlock } from '@consensys/ds3-playground';

export default function CodeBlockPage() {
  const scope = {
    React,
    Button,
    Icon,
    Input,
    Checkbox,
    Switch,
    Spinner,
    Card,
    Badge,
    Alert,
    View,
    Text,
    Figma,
    Loader,
    TouchableOpacity,
    Link,
    CodeBlock,
  };

  return (
    <MarkdownPage 
      path="packages/playground/src/components/code-block/README.md"
      scope={scope}
    />
  );
} 