import React from 'react';
import { TouchableOpacity, Pressable } from 'react-native';
import { Button, Icon, Input, Checkbox, Switch, Spinner, Card, Badge, Alert, View, Text, TextContextProvider } from '@consensys/ds3';
import { MarkdownPage } from '@/components/MarkdownPage';
import { Figma, Loader } from 'lucide-react-native';
import { Link } from 'expo-router';

export default function TextPage() {
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
    TextContextProvider,
    Pressable
  };

  return (
    <MarkdownPage 
      path="packages/ui/src/components/text/README.md"
      scope={scope}
    />
  );
} 