import React from 'react';
import { Button, Icon, Input, Checkbox, Switch, Spinner, Card, Badge, Alert, View } from '@consensys/ds3';
import { MarkdownPage } from '@/components/MarkdownPage';
import { themes } from 'prism-react-renderer';
import { Code, CodeInput } from '@consensys/ds3-playground';

export default function CodePage() {
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
    Code,
    CodeInput,
    themes,
  };

  return (
    <MarkdownPage 
      path="packages/playground/src/components/code/README.md"
      scope={scope}
    />
  );
} 