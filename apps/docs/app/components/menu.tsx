import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Menu, Icon, View, Text, Button } from '@consensys/ds3';
import { MarkdownPage } from '@/components/MarkdownPage';
import { Home, Settings, User, FileText, Database, Shield, Bell, Mail, LogOut } from 'lucide-react-native';
import { Link } from 'expo-router';

export default function MenuPage() {
  const scope = {
    React,
    Menu,
    Icon,
    View,
    Text,
    Button,
    Home,
    Settings,
    User,
    FileText,
    Database,
    Shield,
    Bell,
    Mail,
    LogOut,
    TouchableOpacity,
    Link,
  };

  return (
    <MarkdownPage 
      path="packages/ui/src/components/menu/README.md"
      scope={scope}
    />
  );
} 