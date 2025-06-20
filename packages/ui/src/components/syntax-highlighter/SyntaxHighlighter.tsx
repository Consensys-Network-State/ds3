import React from 'react';
import { View, Platform} from 'react-native';
import { Text } from '../text';
import { Highlight } from 'prism-react-renderer';
import type { SyntaxHighlighterProps } from './types';
import { useThemeColors } from '../theme';
import { createDs3Theme } from './theme';

export function SyntaxHighlighter({ 
  code, 
  language = 'javascript', 
  className = '' 
}: SyntaxHighlighterProps) {
  const colors = useThemeColors();
  const ds3Theme = createDs3Theme(colors);

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
                      className={`text-sm ${
                        Platform.OS === 'ios' 
                          ? 'font-[SFMono-Regular]'
                          : 'font-mono'
                      }`}
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