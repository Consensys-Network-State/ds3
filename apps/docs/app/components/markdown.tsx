import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Button, Icon, Input, Checkbox, Switch, Spinner, Card, Badge, Alert, View, Text } from '@consensys/ds3';
import { Markdown } from '@consensys/ds3-playground';
import { MarkdownPage } from '@/components/MarkdownPage';
import { Figma, Loader } from 'lucide-react-native';
import { Link } from 'expo-router';

export default function MarkdownComponentPage() {
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
    Markdown,
  };

  return (
    <MarkdownPage 
      path="packages/playground/src/components/markdown/README.md"
      scope={scope}
    />
  );
} 