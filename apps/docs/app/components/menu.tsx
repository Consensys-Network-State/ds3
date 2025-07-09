import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Menu, Icon, View, Text, Button, Avatar, Spinner } from '@consensys/ds3';
import { MarkdownPage } from '@/components/MarkdownPage';
import { Home, Settings, User, Bell, Mail, Figma, Users, HelpCircle, AlertCircle, AlertTriangle, CheckCircle } from 'lucide-react-native';
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
    Bell,
    Mail,
    TouchableOpacity,
    Link,
    Avatar,
    Figma,
    Users,
    HelpCircle,
    AlertCircle,
    AlertTriangle,
    CheckCircle,
    Spinner
  };

  return (
    <MarkdownPage 
      path="packages/ui/src/components/menu/README.md"
      scope={scope}
    />
  );
} 