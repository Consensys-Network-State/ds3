import React from 'react';
import { View, ScrollView, Platform } from 'react-native';
import { Text, Spinner, cn } from '@consensys/ds3';
import { Markdown } from '@consensys/ds3-playground';
import { useMarkdownPage } from '@/hooks';

interface MarkdownPageProps {
  path: string;
  scope?: Record<string, any>;
  className?: string;
  enableLiveReload?: boolean;
}

export const MarkdownPage = React.memo(({ 
  path,
  scope,
  className = "flex-1 bg-primary-1",
  enableLiveReload = true
}: MarkdownPageProps) => {
  const { content, isLoading, error } = useMarkdownPage(path, enableLiveReload);

  if (error) {
    return (
      <View className={cn(className, "items-center justify-center")}>
        <Text className="text-error-11">
          Error loading {path}: {error}
        </Text>
      </View>
    );
  }

  if (isLoading && !content) {
    return (
      <View className={cn(className, "items-center justify-center")}>
        <View className="flex-row items-center gap-3">
          <Spinner size="md" />
          <Text>Loading Page...</Text>
        </View>
      </View>
    );
  }

  return (
    <ScrollView 
      className={className}
      showsVerticalScrollIndicator={false}
      removeClippedSubviews={Platform.OS === 'ios'}
    >
      <View className="w-full max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
        <Markdown content={content} scope={scope} />
      </View>
    </ScrollView>
  );
}, (prevProps, nextProps) => {
  return (
    prevProps.path === nextProps.path &&
    prevProps.className === nextProps.className &&
    prevProps.scope === nextProps.scope &&
    prevProps.enableLiveReload === nextProps.enableLiveReload
  );
}); 