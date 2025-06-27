import React from 'react';
import { Button, Icon, Input } from '@consensys/ds3';
import { MarkdownPage } from '@/components/MarkdownPage';

export default function FieldPage() {
  const scope = {
    React,
    Button,
    Icon,
    Input,
    // AI fill this
  };

  return (
    <MarkdownPage 
      path="packages/ui/src/components/field/README.md"
      scope={scope}
    />
  );
}
