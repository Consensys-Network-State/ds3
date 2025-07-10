import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Menu, Icon, View, Text, Button, Avatar, Spinner, Accordion, Badge } from '@consensys/ds3';
import { MarkdownPage } from '@/components/MarkdownPage';
import { Home, Settings, User, Bell, Mail, Figma, Users, HelpCircle, AlertCircle, AlertTriangle, CheckCircle, ChevronDown, FileText, Shield, UserCheck, UserX, UserPlus, Palette } from 'lucide-react-native';
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
    Spinner,
    Accordion,
    ChevronDown,
    FileText,
    Shield,
    Badge,
    UserCheck,
    UserX,
    UserPlus,
    Palette
  };

  return (
    <MarkdownPage 
      path="packages/ui/src/components/menu/README.md"
      scope={scope}
    />
  );
} 