import React from 'react';
import { View } from 'react-native';
import { Text, useCopyToClipboard, Icon, Highlight } from '@consensys/ds3';
import { Check, Copy } from 'lucide-react-native';
import LivePreview from './LivePreview';

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
  showCopyButton?: boolean;
  showLanguage?: boolean;
  preview?: boolean;
  scope?: Record<string, any>;
}

// Memoized Highlight component to prevent unnecessary re-renders and state updates
const MemoizedHighlight = React.memo(({ code, language }: { code: string; language: string }) => {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    setHasError(false);
  }, [code, language]);

  if (hasError) {
    return (
      <Text className="font-mono text-sm text-neutral-11">
        {code}
      </Text>
    );
  }

  try {
    return <Highlight code={code} language={language} />;
  } catch (error) {
    console.warn('Highlight component error:', error);
    setHasError(true);
    return (
      <Text className="font-mono text-sm text-neutral-11">
        {code}
      </Text>
    );
  }
});

export function CodeBlock({
  code,
  language = 'javascript',
  className = '',
  showCopyButton = true,
  showLanguage = true,
  preview = false,
  scope = {},
}: CodeBlockProps) {
  const { copied, copy } = useCopyToClipboard();

  const handleCopy = () => {
    copy(code);
  };

  const showHeader = showLanguage || showCopyButton;

  return (
    <View className={`bg-neutral-3 rounded-lg overflow-hidden ${className}`}>
      {/* Live Preview */}
      {preview && (
        <View className="border-b border-neutral-5">
          <LivePreview 
            code={code} 
            scope={scope}
            className="m-4"
          />
        </View>
      )}

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
        <MemoizedHighlight code={code} language={language} />
      </View>
    </View>
  );
} 