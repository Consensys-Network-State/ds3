import React from 'react';
import { Button, Icon, Input, View, Text } from '@consensys/ds3';
import { MarkdownPage } from '@/components/MarkdownPage';
import { 
  Figma, 
  Heart, 
  Star, 
  Zap, 
  Settings, 
  Edit3, 
  Search,
  Mail,
  Lock,
  Eye,
  BookOpen
} from 'lucide-react-native';

export default function IconPage() {
  const scope = {
    React,
    Button,
    Icon,
    Input,
    View,
    Text,
    // Lucide React Native
    Figma,
    Heart,
    Star,
    Zap,
    Settings,
    Edit3,
    Search,
    Mail,
    Lock,
    Eye,
    BookOpen,
  };

  return (
    <MarkdownPage 
      path="packages/ui/src/components/icon/README.md"
      scope={scope}
    />
  );
}
