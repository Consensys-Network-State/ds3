import React from 'react';
import { View, Text, useCopyToClipboard, Icon, Button, Card } from '@consensys/ds3';
import { Check, Copy, Eye, EyeOff, Edit, Code } from 'lucide-react-native';
import { LivePreview } from './LivePreview';
import { Highlight } from '../highlight';
import { HighlightInput } from '../highlight/HighlightInput';

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
  onChange,
  editable = true,
}: CodeBlockProps) {
  const { copied, copy } = useCopyToClipboard();
  const [showCode, setShowCode] = React.useState(preview ? expand : true);
  const [isEditing, setIsEditing] = React.useState(false);
  const [editableCode, setEditableCode] = React.useState(code);

  // Update editable code when prop changes
  React.useEffect(() => {
    setEditableCode(code);
  }, [code]);

  const handleCopy = React.useCallback(() => {
    copy(isEditing ? editableCode : code);
  }, [copy, code, editableCode, isEditing]);

  const toggleCodeVisibility = React.useCallback(() => {
    setShowCode(!showCode);
  }, [showCode]);

  const toggleEditMode = React.useCallback(() => {
    setIsEditing(!isEditing);
  }, [isEditing]);

  const handleCodeChange = React.useCallback((text: string) => {
    setEditableCode(text);
    if (onChange) {
      onChange(text);
    }
  }, [onChange]);

  // Determine what to show based on preview state
  const shouldShowCode = showCode || !preview;
  const shouldShowPreview = preview;
  const shouldShowToggleButton = preview;
  const shouldShowEditButton = preview && shouldShowCode && editable;

  const showHeader = showLanguage || showCopyButton || shouldShowEditButton || shouldShowToggleButton;

  // Calculate number of lines for HighlightInput
  const numberOfLines = Math.max(6, editableCode.split('\n').length);

  return (
    <Card color="neutral" border className={className}>
      {/* Live Preview - main content when preview is true */}
      {shouldShowPreview && (
        <Card.Content className="bg-neutral-1">
          <LivePreview 
            code={isEditing ? editableCode : code}
            scope={scope}
          />
        </Card.Content>
      )}

      {/* Code content - either highlighted or editable */}
      {shouldShowCode && (
        !preview && (
          <Card.Content className="bg-neutral-1">
            <MemoizedHighlight code={code} language={language} />
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
              {shouldShowEditButton && (
                <Button
                  variant="ghost"
                  size="sm"
                  onPress={toggleEditMode}
                  accessibilityLabel={isEditing ? "View code" : "Edit code"}
                  accessibilityHint={isEditing ? "Click to view the code without editing" : "Click to edit the code"}
                  className="flex-row items-center gap-2"
                >
                  <Icon icon={isEditing ? Code : Edit} size="sm" color="neutral" />
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
            {isEditing ? (
              <HighlightInput
                value={editableCode}
                onChangeText={handleCodeChange}
                multiline={true}
                numberOfLines={numberOfLines}
                className="min-h-[120px]"
              />
            ) : (
              <MemoizedHighlight code={code} language={language} />
            )}
          </Card.Content>
        )
      )}
    </Card>
  );
} 