import React from 'react';
import { Button, Icon, Input, Spinner, View, Text } from '@consensys/ds3';
import { LoaderCircle, Loader, LoaderPinwheel, RefreshCw, Figma } from 'lucide-react-native';
import { MarkdownPage } from '@/components/MarkdownPage';

export default function SpinnerPage() {
  const scope = {
    React,
    Button,
    Icon,
    Input,
    Spinner,
    View,
    Text,
    LoaderCircle,
    Loader,
    LoaderPinwheel,
    RefreshCw,
    Figma
  };

  return (
    <MarkdownPage 
      path="packages/ui/src/components/spinner/README.md"
      scope={scope}
    />
  );
}
