import React, { useMemo } from 'react';
import { View, Pressable } from 'react-native';
import { Text, openLink } from '@consensys/ds3';
import { CodeBlock } from './CodeBlock';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

interface ParsedElement {
  type: 'heading' | 'paragraph' | 'code' | 'codeBlock' | 'link' | 'list' | 'listItem' | 'blockquote' | 'strong' | 'emphasis' | 'text' | 'break';
  content: string;
  level?: number;
  language?: string;
  url?: string;
  children?: ParsedElement[];
}

export function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  const parseMarkdown = React.useCallback((text: string): ParsedElement[] => {
    if (!text || text.length === 0) return [];
    
    const lines = text.split('\n');
    const elements: ParsedElement[] = [];
    let currentList: ParsedElement[] = [];
    let inCodeBlock = false;
    let codeBlockLanguage = '';
    let codeBlockContent = '';

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Handle code blocks
      if (line.startsWith('```')) {
        if (!inCodeBlock) {
          // Start of code block
          inCodeBlock = true;
          codeBlockLanguage = line.slice(3).trim();
          codeBlockContent = '';
        } else {
          // End of code block
          inCodeBlock = false;
          elements.push({
            type: 'codeBlock',
            content: codeBlockContent.trim(),
            language: codeBlockLanguage
          });
          continue;
        }
      } else if (inCodeBlock) {
        codeBlockContent += line + '\n';
        continue;
      }

      // Handle headings
      const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
      if (headingMatch) {
        elements.push({
          type: 'heading',
          content: headingMatch[2],
          level: headingMatch[1].length
        });
        continue;
      }

      // Handle blockquotes
      if (line.startsWith('> ')) {
        elements.push({
          type: 'blockquote',
          content: line.slice(2)
        });
        continue;
      }

      // Handle lists
      const listMatch = line.match(/^(\s*)([-*+]|\d+\.)\s+(.+)$/);
      if (listMatch) {
        const listItem: ParsedElement = {
          type: 'listItem',
          content: listMatch[3]
        };
        
        if (currentList.length === 0) {
          currentList = [{
            type: 'list',
            content: '',
            children: [listItem]
          }];
        } else {
          currentList[0].children!.push(listItem);
        }
        continue;
      } else if (currentList.length > 0 && line.trim() === '') {
        // End of list
        elements.push(...currentList);
        currentList = [];
        continue;
      }

      // Handle paragraphs
      if (line.trim() !== '') {
        elements.push({
          type: 'paragraph',
          content: line
        });
      }
    }

    // Add any remaining list
    if (currentList.length > 0) {
      elements.push(...currentList);
    }

    return elements;
  }, []);

  const parseInlineElements = React.useCallback((text: string): ParsedElement[] => {
    if (!text || text.length === 0) return [];
    
    const elements: ParsedElement[] = [];
    let currentIndex = 0;
    const maxIterations = text.length * 2; // Prevent infinite loops
    let iterations = 0;

    while (currentIndex < text.length && iterations < maxIterations) {
      iterations++;
      
      // Handle links
      const linkMatch = text.slice(currentIndex).match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (linkMatch && linkMatch.index !== undefined) {
        if (linkMatch.index > 0) {
          elements.push({
            type: 'text',
            content: text.slice(currentIndex, currentIndex + linkMatch.index)
          });
        }
        elements.push({
          type: 'link',
          content: linkMatch[1],
          url: linkMatch[2]
        });
        currentIndex += linkMatch.index + linkMatch[0].length;
        continue;
      }

      // Handle inline code
      const codeMatch = text.slice(currentIndex).match(/`([^`]+)`/);
      if (codeMatch && codeMatch.index !== undefined) {
        if (codeMatch.index > 0) {
          elements.push({
            type: 'text',
            content: text.slice(currentIndex, currentIndex + codeMatch.index)
          });
        }
        elements.push({
          type: 'code',
          content: codeMatch[1]
        });
        currentIndex += codeMatch.index + codeMatch[0].length;
        continue;
      }

      // Handle bold
      const boldMatch = text.slice(currentIndex).match(/\*\*([^*]+)\*\*/);
      if (boldMatch && boldMatch.index !== undefined) {
        if (boldMatch.index > 0) {
          elements.push({
            type: 'text',
            content: text.slice(currentIndex, currentIndex + boldMatch.index)
          });
        }
        elements.push({
          type: 'strong',
          content: boldMatch[1]
        });
        currentIndex += boldMatch.index + boldMatch[0].length;
        continue;
      }

      // Handle italic
      const italicMatch = text.slice(currentIndex).match(/\*([^*]+)\*/);
      if (italicMatch && italicMatch.index !== undefined) {
        if (italicMatch.index > 0) {
          elements.push({
            type: 'text',
            content: text.slice(currentIndex, currentIndex + italicMatch.index)
          });
        }
        elements.push({
          type: 'emphasis',
          content: italicMatch[1]
        });
        currentIndex += italicMatch.index + italicMatch[0].length;
        continue;
      }

      // Handle line breaks
      if (text[currentIndex] === '\n') {
        elements.push({
          type: 'break',
          content: ''
        });
        currentIndex++;
        continue;
      }

      // Handle regular text
      const nextSpecialChar = text.slice(currentIndex).search(/[`*\[\]\n]/);
      if (nextSpecialChar === -1) {
        elements.push({
          type: 'text',
          content: text.slice(currentIndex)
        });
        break;
      } else {
        elements.push({
          type: 'text',
          content: text.slice(currentIndex, currentIndex + nextSpecialChar)
        });
        currentIndex += nextSpecialChar;
      }
    }

    return elements;
  }, []);

  const renderElement = React.useCallback((element: ParsedElement, index: number): React.ReactNode => {
    switch (element.type) {
      case 'heading':
        const headingClasses = {
          1: 'text-h1',
          2: 'text-h2',
          3: 'text-h3',
          4: 'text-h4',
          5: 'text-h5',
          6: 'text-h6'
        };
        return (
          <Text key={index} className={headingClasses[element.level as keyof typeof headingClasses]}>
            {element.content}
          </Text>
        );

      case 'paragraph':
        const paragraphElements = parseInlineElements(element.content);
        return (
          <View key={index} className="mb-4">
            {paragraphElements.map((el, i) => renderElement(el, i))}
          </View>
        );

      case 'codeBlock':
        return (
          <View key={index} className="mb-4">
            <CodeBlock 
              code={element.content} 
              language={element.language || 'text'}
              showCopyButton={true}
              showLanguage={true}
            />
          </View>
        );

      case 'code':
        return (
          <Text key={index} className="bg-neutral-3 px-1 py-0.5 rounded font-mono text-sm">
            {element.content}
          </Text>
        );

      case 'link':
        return (
          <Pressable key={index} onPress={() => element.url && openLink(element.url)}>
            <Text className="text-primary-11 underline hover:text-primary-10 cursor-pointer">
              {element.content}
            </Text>
          </Pressable>
        );

      case 'list':
        return (
          <View key={index} className="mb-4">
            {element.children?.map((child, i) => (
              <View key={i} className="flex-row items-start mb-2">
                <Text className="text-neutral-11 mr-2">•</Text>
                <View className="flex-1">
                  {renderElement(child, i)}
                </View>
              </View>
            ))}
          </View>
        );

      case 'listItem':
        const itemElements = parseInlineElements(element.content);
        return (
          <View key={index}>
            {itemElements.map((el, i) => renderElement(el, i))}
          </View>
        );

      case 'blockquote':
        const quoteElements = parseInlineElements(element.content);
        return (
          <View key={index} className="border-l-4 border-neutral-6 pl-4 mb-4 italic">
            {quoteElements.map((el, i) => renderElement(el, i))}
          </View>
        );

      case 'strong':
        return (
          <Text key={index} className="font-bold">
            {element.content}
          </Text>
        );

      case 'emphasis':
        return (
          <Text key={index} className="italic">
            {element.content}
          </Text>
        );

      case 'break':
        return <View key={index} className="h-4" />;

      case 'text':
        return (
          <Text key={index} className="text-base text-neutral-11">
            {element.content}
          </Text>
        );

      default:
        return null;
    }
  }, [parseInlineElements]);

  const parsedElements = useMemo(() => {
    try {
      return parseMarkdown(content);
    } catch (error) {
      console.error('Error parsing markdown:', error);
      return [{
        type: 'text' as const,
        content: 'Error parsing markdown content'
      }];
    }
  }, [content, parseMarkdown]);

  return (
    <View className={className}>
      {parsedElements.map((element, index) => renderElement(element, index))}
    </View>
  );
} 