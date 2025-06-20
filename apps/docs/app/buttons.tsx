import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text } from '@consensys/ds3';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { useMarkdownContent } from '@/components/MarkdownProvider';

export default function ButtonsPage() {
  const { content: markdown, isLoading, error } = useMarkdownContent('button');

  return (
    <ScrollView className="h-screen bg-primary-1">
      <View className="flex-1 items-center pb-4">
        <View className="w-full max-w-[1200px] px-4 h-full gap-4">
        {isLoading ? (
              <Text className="text-neutral-11">Loading markdown from GitHub...</Text>
            ) : error ? (
              <Text className="text-error-11">Error: {error}</Text>
            ) : markdown ? (
              <MarkdownRenderer content={markdown} />
            ) : (
              <Text className="text-neutral-11">No markdown content available</Text>
            )}
        </View>
      </View>
    </ScrollView>
  );
}
