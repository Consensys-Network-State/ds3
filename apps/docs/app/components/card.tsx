import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Card, Icon, Input, Checkbox, Switch, Spinner, Button, Badge, Alert, View, Text } from '@consensys/ds3';
import { MarkdownPage } from '@/components/MarkdownPage';
import { Figma, Loader } from 'lucide-react-native';
import { Link } from 'expo-router';

export default function CardPage() {
  const scope = {
    React,
    Card,
    Icon,
    Input,
    Checkbox,
    Switch,
    Spinner,
    Button,
    Badge,
    Alert,
    View,
    Text,
    Figma,
    Loader,
    TouchableOpacity,
    Link,
  };

  return (
    <MarkdownPage 
      path="packages/ui/src/components/card/README.md"
      scope={scope}
    />
  );
} 