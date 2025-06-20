import React from 'react';
import { View } from 'react-native';
import { Text } from '../text';
import { Highlight } from 'prism-react-renderer';
import type { SyntaxHighlighterProps } from './types';
import { useSyntaxTheme } from './useSyntaxTheme';

export function SyntaxHighlighter({ 
  code, 
  language = 'javascript', 
  className = '' 
}: SyntaxHighlighterProps) {
  const ds3Theme = useSyntaxTheme();

  return (
    <View className={className}>
      <Highlight
        code={code}
        language={language}
        theme={ds3Theme}
      >
        {({ tokens, getTokenProps }) => (
          <View className="bg-transparent">
            {tokens.map((line, i) => (
              <View key={i} className="flex-row flex-wrap">
                {line.map((token, key) => {
                  const tokenProps = getTokenProps({ token });
                  
                  return (
                    <Text 
                      key={key}
                      style={{ color: tokenProps.style?.color || ds3Theme.plain.color }}
                    >
                      {token.content}
                    </Text>
                  );
                })}
              </View>
            ))}
          </View>
        )}
      </Highlight>
    </View>
  );
} 