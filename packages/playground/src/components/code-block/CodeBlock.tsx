import React from 'react';
import { View, Text, useCopyToClipboard, Icon, Button, Card } from '@consensys/ds3';
import { Check, Copy, Eye, EyeOff } from 'lucide-react-native';
import { LivePreview } from './LivePreview';
import { Highlight } from '../highlight';

export interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
  showCopyButton?: boolean;
  showLanguage?: boolean;
  preview?: boolean;
  expand?: boolean;
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
  expand = false,
  scope = {},
}: CodeBlockProps) {
  const { copied, copy } = useCopyToClipboard();
  const [showCode, setShowCode] = React.useState(preview ? expand : true);

  const handleCopy = React.useCallback(() => {
    copy(code);
  }, [copy, code]);

  const toggleCodeVisibility = React.useCallback(() => {
    setShowCode(!showCode);
  }, [showCode]);

  // Determine what to show based on preview state
  const shouldShowCode = showCode || !preview;
  const shouldShowPreview = preview;
  const shouldShowToggleButton = preview;

  const showHeader = showLanguage || showCopyButton;

  return (
    <Card color="neutral" border className={className}>
      {/* Live Preview - main content when preview is true */}
      {shouldShowPreview && (
        <Card.Content className="bg-neutral-1">
          <LivePreview 
            code={code}
            scope={scope}
          />
        </Card.Content>
      )}

      {shouldShowCode && (
        !preview && (
          <Card.Content className="bg-neutral-1">
            <MemoizedHighlight code={code} language={language} />
          </Card.Content>
        )
      )}

      {/* Header with language label and copy button */}
      {showHeader && (
        <Card.Footer>
          <View className="flex-row justify-between items-center w-full">
            {showLanguage ? (
              <Card.Text className="text-neutral-11 font-mono uppercase">
                {language}
              </Card.Text>
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
                </Button>
              )}
            </View>
          </View>
        </Card.Footer>
      )}

      {/* Code content - footer when there's a toggle, otherwise main content */}
      {shouldShowCode && (
        preview && (
          <Card.Content className="border-t border-neutral-a7 bg-neutral-1">
            <MemoizedHighlight code={code} language={language} />
          </Card.Content>
        )
      )}
    </Card>
  );
} 