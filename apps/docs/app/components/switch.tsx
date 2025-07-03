import React from 'react';
import { Button, Icon, Input, Switch, Text, View } from '@consensys/ds3';
import { Check, Minus, X } from 'lucide-react-native';
import { MarkdownPage } from '@/components/MarkdownPage';

export default function SwitchPage() {
  const scope = {
    React,
    Button,
    Icon,
    Input,
    Switch,
    Text,
    View,
    Check,
    Minus,
    X,
  };

  return (
    <MarkdownPage 
      path="packages/ui/src/components/switch/README.md"
      scope={scope}
    />
  );
}
