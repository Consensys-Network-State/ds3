import React from 'react';
import { Button, Icon, Input, Checkbox, Switch, Spinner, Card, Badge, Alert, Highlight, View } from '@consensys/ds3';
import { MarkdownPage } from '@/components/MarkdownPage';

export default function HighlightPage() {
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
    Highlight,
  };

  return (
    <MarkdownPage 
      path="packages/ui/src/components/highlight/README.md"
      scope={scope}
    />
  );
} 