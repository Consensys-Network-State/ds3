import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from '../text';
import { Tag } from './Tag';

export function TagExample() {
  return (
    <ScrollView className="flex-1 p-4">
      <View className="space-y-6">
        {/* Basic Tags */}
        <View className="space-y-4">
          <Text className="text-lg font-semibold">Basic Tags</Text>
          <View className="flex-row flex-wrap gap-2">
            <Tag>Default</Tag>
            <Tag color="primary">Primary</Tag>
            <Tag color="success">Success</Tag>
            <Tag color="warning">Warning</Tag>
            <Tag color="error">Error</Tag>
          </View>
        </View>

        {/* Tag Variants */}
        <View className="space-y-4">
          <Text className="text-lg font-semibold">Tag Variants</Text>
          <View className="space-y-2">
            <View className="flex-row flex-wrap gap-2">
              <Tag variant="default">Default</Tag>
              <Tag variant="outline">Outline</Tag>
              <Tag variant="secondary">Secondary</Tag>
            </View>
            <View className="flex-row flex-wrap gap-2">
              <Tag variant="outline" color="primary">Primary Outline</Tag>
              <Tag variant="outline" color="success">Success Outline</Tag>
              <Tag variant="outline" color="warning">Warning Outline</Tag>
              <Tag variant="outline" color="error">Error Outline</Tag>
            </View>
          </View>
        </View>

        {/* Tag Sizes */}
        <View className="space-y-4">
          <Text className="text-lg font-semibold">Tag Sizes</Text>
          <View className="flex-row flex-wrap items-center gap-2">
            <Tag size="sm">Small</Tag>
            <Tag size="md">Medium</Tag>
            <Tag size="lg">Large</Tag>
          </View>
        </View>

        {/* Interactive Tags */}
        <View className="space-y-4">
          <Text className="text-lg font-semibold">Interactive Tags</Text>
          <View className="flex-row flex-wrap gap-2">
            <Tag onPress={() => alert('Tag pressed!')}>
              Clickable
            </Tag>
            <Tag color="primary" onPress={() => alert('Primary tag pressed!')}>
              Primary Clickable
            </Tag>
            <Tag disabled>Disabled</Tag>
          </View>
        </View>

        {/* Custom Tag Text */}
        <View className="space-y-4">
          <Text className="text-lg font-semibold">Custom Tag Text</Text>
          <View className="flex-row flex-wrap gap-2">
            <Tag color="primary">
              <Tag.Text>Custom styled text</Tag.Text>
            </Tag>
            <Tag variant="outline" color="success">
              <Tag.Text>Success outline text</Tag.Text>
            </Tag>
          </View>
        </View>

        {/* Usage Examples */}
        <View className="space-y-4">
          <Text className="text-lg font-semibold">Usage Examples</Text>
          <View className="space-y-2">
            <View className="flex-row flex-wrap gap-2">
              <Tag color="success">Completed</Tag>
              <Tag color="warning">Pending</Tag>
              <Tag color="error">Failed</Tag>
              <Tag color="primary">In Progress</Tag>
            </View>
            <View className="flex-row flex-wrap gap-2">
              <Tag size="sm" color="neutral">React</Tag>
              <Tag size="sm" color="neutral">TypeScript</Tag>
              <Tag size="sm" color="neutral">JavaScript</Tag>
              <Tag size="sm" color="neutral">Node.js</Tag>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
} 