import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Button, Icon, Input, Checkbox, Switch, Spinner, Card, Badge, Alert, IconButton, View } from '@consensys/ds3';
import { MarkdownPage } from '@/components/MarkdownPage';
import { Figma, Loader } from 'lucide-react-native';

export default function ButtonsPage() {
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
    Figma,
    Loader,
    IconButton,
    TouchableOpacity,
  };

  return (
    <MarkdownPage 
      path="packages/ui/src/components/button/README.md"
      scope={scope}
    />
  );
}
