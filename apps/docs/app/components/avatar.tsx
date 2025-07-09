import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Avatar, Icon, Input, Checkbox, Switch, Spinner, Card, Badge, Alert, View, Text } from '@consensys/ds3';
import { MarkdownPage } from '@/components/MarkdownPage';
import { Figma, Loader, User, Settings, Bell, HelpCircle, RefreshCw, LoaderPinwheel } from 'lucide-react-native';
import { Link } from 'expo-router';

export default function AvatarPage() {
  const scope = {
    React,
    Avatar,
    Icon,
    Input,
    Checkbox,
    Switch,
    Spinner,
    Card,
    Badge,
    Alert,
    View,
    Figma,
    Loader,
    User,
    Settings,
    Bell,
    HelpCircle,
    TouchableOpacity,
    Link,
    Text,
    RefreshCw,
    LoaderPinwheel
  };

  return (
    <MarkdownPage 
      path="packages/ui/src/components/avatar/README.md"
      scope={scope}
    />
  );
} 