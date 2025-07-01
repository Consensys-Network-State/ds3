import React, { useState } from 'react';
import { Button, Icon, Input, View, Text, Spinner } from '@consensys/ds3';
import { MarkdownPage } from '@/components/MarkdownPage';
import { Search, Eye, Loader } from 'lucide-react-native';
import { Link } from 'expo-router';

export default function InputsPage() {
  const scope = {
    React,
    Button,
    Icon,
    Input,
    View,
    Text,
    Spinner,
    Search,
    Eye,
    Loader,
    Link,
  };

  return (
    <MarkdownPage 
      path="packages/ui/src/components/input/README.md"
      scope={scope}
    />
  );
}
