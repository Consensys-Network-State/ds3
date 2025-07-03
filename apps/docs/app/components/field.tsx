import React from 'react';
import { Button, Icon, Input, Field, View, Text, Label } from '@consensys/ds3';
import { Mail, User, Lock, Info, Shield } from 'lucide-react-native';
import { MarkdownPage } from '@/components/MarkdownPage';

export default function FieldPage() {
  const scope = {
    React,
    Button,
    Icon,
    Input,
    Field,
    View,
    Text,
    Label,
    Mail,
    User,
    Lock,
    Info,
    Shield,
  };

  return (
    <MarkdownPage 
      path="packages/ui/src/components/field/README.md"
      scope={scope}
    />
  );
}
