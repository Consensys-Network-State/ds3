import React from 'react';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { View, Text, useThemeColors, Table, Tag, H1, H2, H3, H4, H5, H6 } from '@consensys/ds3';
import MarkdownRenderer, { Renderer, RendererInterface } from 'react-native-marked';
import { CodeBlock } from '../code-block';

export interface MarkdownProps {
  content: string;
  className?: string;
  scope?: Record<string, any>;
  customRenderer?: Partial<RendererInterface>;
}

export function Markdown({
  content,
  className = '',
  scope = {},
  customRenderer = {},
}: MarkdownProps) {
  const themeColors = useThemeColors();

  const customRendererInstance = React.useMemo(() => {
    class CustomRenderer extends Renderer {
      heading(text: string | React.ReactNode[], styles?: TextStyle, depth?: number) {
        if (customRenderer.heading) {
          return customRenderer.heading(text, styles, depth);
        }

        const marginClass = depth === 1 ? 'mb-4' : depth === 2 ? 'mb-3' : 'mb-2';
        
        switch (depth) {
          case 1:
            return <H1 key={this.getKey()} className={marginClass}>{text}</H1>;
          case 2:
            return <H2 key={this.getKey()} className={marginClass}>{text}</H2>;
          case 3:
            return <H3 key={this.getKey()} className={marginClass}>{text}</H3>;
          case 4:
            return <H4 key={this.getKey()} className={marginClass}>{text}</H4>;
          case 5:
            return <H5 key={this.getKey()} className={marginClass}>{text}</H5>;
          case 6:
            return <H6 key={this.getKey()} className={marginClass}>{text}</H6>;
          default:
            return <H1 key={this.getKey()} className={marginClass}>{text}</H1>;
        }
      }

      code(code: string, lang?: string, containerStyle?: ViewStyle, textStyle?: TextStyle) {
        if (customRenderer.code) {
          return customRenderer.code(code, lang, containerStyle, textStyle);
        }

        const language = lang || 'text';
        const isPreviewable = language.includes('live');
        const isExpandable = language.includes('expand');
        const baseLanguage = language.replace(/\s+(live|expand)(\s+(live|expand))?$/, '');

        return (
          <View key={this.getKey()} className="mb-4">
            <CodeBlock
              code={code}
              language={baseLanguage}
              showCopyButton={true}
              showLanguage={true}
              preview={isPreviewable}
              expand={isExpandable}
              scope={scope}
            />
          </View>
        );
      }

      codespan(text: string, styles?: TextStyle) {
        if (customRenderer.codespan) {
          return customRenderer.codespan(text, styles);
        }

        return (
          <Tag key={this.getKey()} size="sm">
            {text}
          </Tag>
        );
      }

      table(header: React.ReactNode[][], rows: React.ReactNode[][][], tableStyle?: ViewStyle, rowStyle?: ViewStyle, cellStyle?: ViewStyle) {
        if (customRenderer.table) {
          return customRenderer.table(header, rows, tableStyle, rowStyle, cellStyle);
        }

        return (
          <View key={this.getKey()} className="mb-4">
            <Table striped>
              {header.length > 0 && (
                <Table.Row key="header" isHeader={true}>
                  {header.map((cell, cellIndex) => (
                    <Table.Cell key={`header-cell-${cellIndex}`} isHeader={true}>
                      {cell}
                    </Table.Cell>
                  ))}
                </Table.Row>
              )}
              {rows.map((row, rowIndex) => (
                <Table.Row key={`row-${rowIndex}`} isEven={rowIndex % 2 === 1} isLast={rowIndex === rows.length - 1}>
                  {row.map((cell, cellIndex) => (
                    <Table.Cell key={`cell-${rowIndex}-${cellIndex}`}>
                      {cell}
                    </Table.Cell>
                  ))}
                </Table.Row>
              ))}
            </Table>
          </View>
        );
      }

      // Delegate other methods to custom renderer or use super
      paragraph(text: React.ReactNode[], styles?: TextStyle) {
        if (customRenderer.paragraph) {
          return customRenderer.paragraph(text, styles);
        }
        return super.paragraph(text, styles);
      }

      link(children: string | React.ReactNode[], href: string, styles?: TextStyle) {
        if (customRenderer.link) {
          return customRenderer.link(children, href, styles);
        }
        return super.link(children, href, styles);
      }
      
      linkImage(href: string, imageUrl: string, alt?: string, style?: ImageStyle) {
        if (customRenderer.linkImage) {
          return customRenderer.linkImage(href, imageUrl, alt, style);
        }
        return super.linkImage(href, imageUrl, alt, style);
      }

      list(ordered: boolean, li: React.ReactNode[], listStyle?: ViewStyle, textStyle?: TextStyle, startIndex?: number) {
        if (customRenderer.list) {
          return customRenderer.list(ordered, li, listStyle, textStyle, startIndex);
        }
        return super.list(ordered, li, listStyle, textStyle, startIndex);
      }

      listItem(children: React.ReactNode[], styles?: TextStyle) {
        if (customRenderer.listItem) {
          return customRenderer.listItem(children, styles);
        }
        return super.listItem(children, styles);
      }

      blockquote(children: React.ReactNode[], styles?: TextStyle) {
        if (customRenderer.blockquote) {
          return customRenderer.blockquote(children, styles);
        }
        return super.blockquote(children, styles);
      }

      strong(children: string | React.ReactNode[], styles?: TextStyle) {
        if (customRenderer.strong) {
          return customRenderer.strong(children, styles);
        }
        return super.strong(children, styles);
      }

      em(children: string | React.ReactNode[], styles?: TextStyle) {
        if (customRenderer.em) {
          return customRenderer.em(children, styles);
        }
        return super.em(children, styles);
      }

      hr(styles?: any) {
        if (customRenderer.hr) {
          return customRenderer.hr(styles);
        }
        return super.hr(styles);
      }

      image(uri: string, alt?: string, styles?: ImageStyle) {
        if (customRenderer.image) {
          return customRenderer.image(uri, alt, styles);
        }
        return super.image(uri, alt, styles);
      }

      escape(text: string, styles?: TextStyle) {
        if (customRenderer.escape) {
          return customRenderer.escape(text, styles);
        }
        return super.escape(text, styles);
      }
      
      br() {
        if (customRenderer.br) {
          return customRenderer.br();
        }
        return super.br();
      }

      del(children: string | React.ReactNode[], styles?: TextStyle) {
        if (customRenderer.del) {
          return customRenderer.del(children, styles);
        }
        return super.del(children, styles);
      }

      text(text: string | React.ReactNode[], styles?: TextStyle) {
        if (customRenderer.text) {
          return customRenderer.text(text, styles);
        }
        return super.text(text, styles);
      }

      html(text: string | React.ReactNode[], styles?: TextStyle) {
        if (customRenderer.html) {
          return customRenderer.html(text, styles);
        }
        return super.html(text, styles);
      }
      
    }

    return new CustomRenderer();
  }, [scope, customRenderer]);

  const elements = React.useMemo(() => {
    try {
      return (
        <MarkdownRenderer
          value={content}
          renderer={customRendererInstance}
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
  }, [content, customRendererInstance, themeColors]);

  return (
    <View className={className}>
      {elements}
    </View>
  );
} 