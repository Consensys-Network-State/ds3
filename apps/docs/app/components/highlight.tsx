import React from 'react';
import { Button, Icon, Input, Checkbox, Switch, Spinner, Card, Badge, Alert, View } from '@consensys/ds3';
import { MarkdownPage } from '@/components/MarkdownPage';
import { themes } from 'prism-react-renderer';
import { Highlight } from '@consensys/ds3-playground';

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
    themes,
  };

  return (
    <MarkdownPage 
      path="packages/playground/src/components/highlight/README.md"
      scope={scope}
    />
  );
} 