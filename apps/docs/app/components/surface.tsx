import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Surface, Icon, Input, Checkbox, Switch, Spinner, Card, Badge, Alert, View, Text } from '@consensys/ds3';
import { MarkdownPage } from '@/components/MarkdownPage';
import { Figma, Loader } from 'lucide-react-native';
import { Link } from 'expo-router';

export default function SurfacePage() {
  const scope = {
    React,
    Surface,
    Icon,
    Input,
    Checkbox,
    Switch,
    Spinner,
    Card,
    Badge,
    Alert,
    View,
    Figma,
    Loader,
    TouchableOpacity,
    Link,
    Text,
  };

  return (
    <MarkdownPage 
      path="packages/ui/src/components/surface/README.md"
      scope={scope}
    />
  );
} 