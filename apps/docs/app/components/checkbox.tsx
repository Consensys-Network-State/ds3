import React from 'react';
import { Button, Icon, Input, Text, Checkbox, View } from '@consensys/ds3';
// import { View } from 'react-native';
import { useState } from 'react';
import { Check, Minus, X } from 'lucide-react-native';
import { MarkdownPage } from '@/components/MarkdownPage';
import { Pressable } from 'react-native';

export default function CheckboxPage() {
  const scope = {
    React,
    Button,
    Icon,
    Input,
    Checkbox,
    View,
    Check,
    Minus,
    X,
    Pressable,
    Text
  };

  return (
    <MarkdownPage 
      path="packages/ui/src/components/checkbox/README.md"
      scope={scope}
    />
  );
}
