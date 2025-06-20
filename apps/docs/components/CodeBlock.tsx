import React from 'react';
import { View } from 'react-native';
import { Text, useCopyToClipboard, Icon, Highlight } from '@consensys/ds3';
import { Check, Copy } from 'lucide-react-native';

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
  showCopyButton?: boolean;
  showLanguage?: boolean;
}

export function CodeBlock({
  code,
  language = 'javascript',
  className = '',
  showCopyButton = true,
  showLanguage = true,
}: CodeBlockProps) {
  const { copied, copy } = useCopyToClipboard();

  const handleCopy = () => {
    copy(code);
  };

  const showHeader = showLanguage || showCopyButton;

  return (
    <View className={`bg-neutral-3 rounded-lg overflow-hidden ${className}`}>
      {/* Header with language label and copy button */}
      {showHeader && (
        <View className="flex-row justify-between items-center px-4 py-2 bg-neutral-4 border-b border-neutral-5">
          {showLanguage ? (
            <Text size="sm" color="neutral" className="text-neutral-11 font-mono uppercase">
              {language}
            </Text>
          ) : (
            <View /> // Empty view to keep justify-between working
          )}
          {showCopyButton && (
            <View
              className="flex-row items-center gap-2 px-2 py-1 rounded cursor-pointer"
              onTouchEnd={handleCopy}
            >
              <Icon icon={copied ? Check : Copy} size="sm" color="neutral" />
              <Text size="sm" color="neutral" className="text-neutral-11">
                {copied ? 'Copied!' : 'Copy'}
              </Text>
            </View>
          )}
        </View>
      )}

      {/* Code content */}
      <View className="p-4">
        <Highlight code={code} language={language} />
      </View>
    </View>
  );
} 