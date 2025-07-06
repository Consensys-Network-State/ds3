import React from 'react';
import { View, Text, useCopyToClipboard, Button, Card } from '@consensys/ds3';
import { Check, Copy, Code as CodeIcon, X, Pencil } from 'lucide-react-native';
import { LivePreview } from './LivePreview';
import { Code, CodeInput } from '../code';

export interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
  showCopyButton?: boolean;
  showLanguage?: boolean;
  showEditButton?: boolean;
  preview?: boolean;
  expand?: boolean;
  scope?: Record<string, any>;
  onChange?: (code: string) => void;
  editable?: boolean;
}

// Memoized Highlight component to prevent unnecessary re-renders and state updates
const MemoizedCode = React.memo(({ code, language }: { code: string; language: string }) => {
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
    return <Code code={code} language={language} />;
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
  onChange,
  editable = true,
}: CodeBlockProps) {
  const { copied, copy } = useCopyToClipboard();
  const [viewMode, setViewMode] = React.useState<'hidden' | 'code' | 'edit'>(
    preview ? (expand ? 'code' : 'hidden') : 'code'
  );
  const [editableCode, setEditableCode] = React.useState(code);

  // Update editable code when prop changes
  React.useEffect(() => {
    setEditableCode(code);
  }, [code]);

  const handleCopy = React.useCallback(() => {
    copy(viewMode === 'edit' ? editableCode : code);
  }, [copy, code, editableCode, viewMode]);

  const toggleCode = React.useCallback(() => {
    setViewMode(viewMode === 'code' ? 'hidden' : 'code');
  }, [viewMode]);

  const toggleEdit = React.useCallback(() => {
    setViewMode(viewMode === 'edit' ? 'hidden' : 'edit');
  }, [viewMode]);

  const handleCodeChange = React.useCallback((text: string) => {
    setEditableCode(text);
    if (onChange) {
      onChange(text);
    }
  }, [onChange]);

  // Determine what to show based on preview state
  const shouldShowCode = viewMode === 'code' || !preview;
  const shouldShowEdit = viewMode === 'edit';
  const shouldShowPreview = preview;
  const shouldShowToggleButton = preview;
  const shouldShowEditButton = preview && editable;

  const showHeader = showLanguage || showCopyButton || shouldShowEditButton || shouldShowToggleButton;

  // Calculate number of lines for HighlightInput
  const numberOfLines = Math.max(6, editableCode.split('\n').length);

  return (
    <Card color="neutral" border className={className}>
      {/* Live Preview - main content when preview is true */}
      {shouldShowPreview && (
        <Card.Content className="bg-neutral-1">
          <LivePreview 
            code={viewMode === 'edit' ? editableCode : code}
            scope={scope}
          />
        </Card.Content>
      )}

      {/* Code content - either highlighted or editable */}
      {shouldShowCode && (
        !preview && (
          <Card.Content className="bg-neutral-1">
            <MemoizedCode code={code} language={language} />
          </Card.Content>
        )
      )}

      {/* Header with language label and action buttons */}
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
                  <Button.Icon icon={copied ? Check : Copy} />
                </Button>
              )}
              {shouldShowToggleButton && (
                <Button
                  variant={viewMode === 'code' ? 'solid' : 'ghost'}
                  size="sm"
                  onPress={toggleCode}
                  accessibilityLabel={viewMode === 'code' ? "Hide code" : "Show code"}
                  accessibilityHint="Click to toggle code view"
                  className="flex-row items-center gap-2"
                >
                  <Button.Icon icon={viewMode === 'code' ? X : CodeIcon} />
                </Button>
              )}
              {shouldShowEditButton && (
                <Button
                  variant={viewMode === 'edit' ? 'solid' : 'ghost'}
                  size="sm"
                  onPress={toggleEdit}
                  accessibilityLabel={viewMode === 'edit' ? "Hide edit" : "Show edit"}
                  accessibilityHint="Click to toggle edit mode"
                  className="flex-row items-center gap-2"
                >
                  <Button.Icon icon={viewMode === 'edit' ? X : Pencil}/>
                </Button>
              )}
            </View>
          </View>
        </Card.Footer>
      )}

      {/* Code content - footer when there's a toggle, otherwise main content */}
      {preview && (shouldShowCode || shouldShowEdit) && (
        <Card.Content className="border-t border-neutral-a7 bg-neutral-1">
          {viewMode === 'edit' ? (
            <CodeInput
              value={editableCode}
              onChangeText={handleCodeChange}
              multiline={true}
              numberOfLines={numberOfLines}
              className="min-h-[120px]"
              autoFocus={viewMode === 'edit'}
            />
          ) : (
            <MemoizedCode code={code} language={language} />
          )}
        </Card.Content>
      )}
    </Card>
  );
} 