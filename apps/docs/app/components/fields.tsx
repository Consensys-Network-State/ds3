import React, { useState } from 'react';
import { Button, Icon, Input, InputField, SwitchField, CheckboxField, Checkbox, View, Text } from '@consensys/ds3';
import { Check } from 'lucide-react-native';
import { Controller, useForm } from 'react-hook-form';
import { MarkdownPage } from '@/components/MarkdownPage';

export default function FieldsPage() {
  const scope = {
    React,
    Button,
    Icon,
    Input,
    InputField,
    SwitchField,
    CheckboxField,
    Checkbox,
    View,
    Text,
    Check,
    Controller,
    useForm,
  };

  return (
    <MarkdownPage 
      path="packages/ui/src/components/fields/README.md"
      scope={scope}
    />
  );
}
