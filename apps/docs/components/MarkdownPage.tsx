import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Spinner, cn } from '@consensys/ds3';
import { useMarkdownContent } from '@/components/MarkdownProvider';
import { Markdown } from '@consensys/ds3-playground';

interface MarkdownPageProps {
  path: string;
  scope?: Record<string, any>;
  className?: string;
}

export function MarkdownPage({ 
  path,
  scope,
  className = "flex-1 bg-primary-1"
}: MarkdownPageProps) {
  const { content, isLoading, error } = useMarkdownContent(path);
  

  if (isLoading) {
    return (
      <View className={cn(className, "items-center justify-center")}>
        <View className="flex-row items-center gap-3">
          <Spinner size="md" />
          <Text>Loading Page...</Text>
        </View>
      </View>
    );
  }

  if (error) {
    return (
      <View className={cn(className, "items-center justify-center")}>
        <Text className="text-error-11">
          Error loading {path}: {error}
        </Text>
      </View>
    );
  }

  return (
    <ScrollView className={className}>
      {/* w-full max-w-[1200px] px-4 py-6 sm:px-6 lg:px-8 */}
      <View className="w-full max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
        <Markdown content={content} scope={scope} />
      </View>
    </ScrollView>
  );
} 