import React from 'react';
import { TextStyle, View } from 'react-native';
import { Text, useThemeColors, Table, Tag } from '@consensys/ds3';
import Markdown, { Renderer } from 'react-native-marked';
import { CodeBlock } from './CodeBlock';

interface MarkdownRendererProps {
  content: string;
  className?: string;
  scope?: Record<string, any>;
}

export function MarkdownRenderer({
  content,
  className = '',
  scope = {},
}: MarkdownRendererProps) {
  const themeColors = useThemeColors();

  const customRenderer = React.useMemo(() => {
    class CustomRenderer extends Renderer {
      code(code: string, lang: string | undefined) {
        const language = lang || 'text';
        const isPreviewable = language.includes('live');
        const baseLanguage = language.replace(/\s+live$/, '');

        return (
          <View key={this.getKey()} className="mb-4">
            <CodeBlock
              code={code}
              language={baseLanguage}
              showCopyButton={true}
              showLanguage={true}
              preview={isPreviewable}
              scope={scope}
            />
          </View>
        );
      }

      codespan(text: string, styles?: TextStyle) {
        return (
          <Tag key={this.getKey()} size="sm">
            <Tag.Text>{text}</Tag.Text>
          </Tag>
        );
      }

      table(header: React.ReactNode[][], rows: React.ReactNode[][][]) {
        return (
          <View key={this.getKey()} className="mb-4">
            <Table striped>
              {header.length > 0 && (
                <Table.Row key="header" isHeader={true}>
                  {header.map((cell, cellIndex) => (
                    <Table.Cell key={`header-cell-${cellIndex}`} isHeader={true} className="w-[500px]">
                      {cell}
                    </Table.Cell>
                  ))}
                </Table.Row>
              )}
              {rows.map((row, rowIndex) => (
                <Table.Row key={`row-${rowIndex}`} isEven={rowIndex % 2 === 1} isLast={rowIndex === rows.length - 1}>
                  {row.map((cell, cellIndex) => (
                    <Table.Cell key={`cell-${rowIndex}-${cellIndex}`} className="w-[500px]">
                      {cell}
                    </Table.Cell>
                  ))}
                </Table.Row>
              ))}
            </Table>
          </View>
        );
      }
    }

    return new CustomRenderer();
  }, [scope]);

  const elements = React.useMemo(() => {
    try {
      return (
        <Markdown
          value={content}
          renderer={customRenderer}
          theme={{
            colors: {
              background: 'transparent',
              code: themeColors.neutral3 || '#f6f8fa',
              link: themeColors.primary9 || '#58a6ff',
              text: themeColors.neutral12 || '#333333',
              border: themeColors.neutral6 || '#d0d7de',
            },
          }}
          flatListProps={{
            initialNumToRender: 8,
            maxToRenderPerBatch: 10,
            windowSize: 10,
            removeClippedSubviews: true,
            showsVerticalScrollIndicator: false,
            scrollEnabled: false,
            nestedScrollEnabled: true,
            style: {
              backgroundColor: 'transparent',
            },
          }}
        />
      );
    } catch (error) {
      console.error('Error parsing markdown:', error);
      return (
        <Text className="text-base text-neutral-11">
          Error parsing markdown content
        </Text>
      );
    }
  }, [content, customRenderer, themeColors]);

  return (
    <View className={className}>
      {elements}
    </View>
  );
} 