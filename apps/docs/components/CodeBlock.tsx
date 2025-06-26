import React from 'react';
import { View } from 'react-native';
import { Text, useCopyToClipboard, Icon, Highlight, Button } from '@consensys/ds3';
import { Check, Copy, Eye, EyeOff } from 'lucide-react-native';
import { LivePreview } from '@consensys/ds3-playground';

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
  const [showCode, setShowCode] = React.useState(!preview); // Show code by default when no preview
  const [hasError, setHasError] = React.useState(false);

  const handleCopy = React.useCallback(() => {
    copy(code);
  }, [copy, code]);

  const toggleCodeVisibility = React.useCallback(() => {
    setShowCode(!showCode);
  }, [showCode]);

  // Determine what to show based on preview state and error state
  const shouldShowCode = showCode || hasError || !preview;
  const shouldShowPreview = preview && !hasError;
  const shouldShowToggleButton = preview && !hasError;
  const shouldShowLanguage = showLanguage && shouldShowCode;

  const showHeader = showLanguage || showCopyButton;

  return (
    <View className={`bg-neutral-3 rounded-lg overflow-hidden ${className}`}>
      {/* Live Preview - only show when preview is true and no error */}
      {shouldShowPreview && (
        <View className="border-b border-neutral-5">
          <LivePreview 
            code={code}
            scope={scope}
            onError={() => setHasError(true)}
          />
        </View>
      )}

      {/* Header with language label and copy button */}
      {showHeader && (
        <View className="flex-row justify-between items-center px-4 py-2 bg-neutral-4 border-b border-neutral-5">
          {shouldShowLanguage ? (
            <Text size="sm" color="neutral" className="text-neutral-11 font-mono uppercase">
              {language}
            </Text>
          ) : (
            <View /> // Empty view to keep justify-between working
          )}
          <View className="flex-row items-center gap-2">
            {showCopyButton && (
              <Button
                variant="ghost"
                size="sm"
                onPress={handleCopy}
                accessibilityLabel={copied ? "Copied" : "Copy to clipboard"}
                accessibilityHint="Click to copy code to clipboard"
                className="flex-row items-center gap-2"
              >
                <Icon icon={copied ? Check : Copy} size="sm" color="neutral" />
                <Text size="sm" color="neutral" className="text-neutral-11">
                  {copied ? 'Copied!' : 'Copy'}
                </Text>
              </Button>
            )}
            {shouldShowToggleButton && (
              <Button
                variant="ghost"
                size="sm"
                onPress={toggleCodeVisibility}
                accessibilityLabel={showCode ? "Hide code" : "Show code"}
                accessibilityHint="Click to toggle code visibility"
                className="flex-row items-center gap-2"
              >
                <Icon icon={showCode ? EyeOff : Eye} size="sm" color="neutral" />
                <Text size="sm" color="neutral" className="text-neutral-11">
                  {showCode ? 'Hide Code' : 'Show Code'}
                </Text>
              </Button>
            )}
          </View>
        </View>
      )}

      {/* Code content */}
      {shouldShowCode && (
        <View className="p-4">
          <MemoizedHighlight code={code} language={language} />
        </View>
      )}
    </View>
  );
} 