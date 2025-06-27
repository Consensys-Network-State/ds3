import React from 'react';
import { View} from 'react-native';
import { Text } from '../text';
import { Highlight as PrismHighlight } from 'prism-react-renderer';
import { useThemeColors } from '../theme';
import { createDs3Theme } from './theme';
import type { HighlightProps } from './types';

export function Highlight({ 
  code, 
  language = 'javascript', 
  className = '',
  style,
}: HighlightProps) {
  const colors = useThemeColors();
  const ds3Theme = createDs3Theme(colors);

  return (
    <View className={className}>
      <PrismHighlight
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
                      style={[
                        { color: tokenProps.style?.color || ds3Theme.plain.color },
                        style,
                      ]}
                    >
                      {token.content}
                    </Text>
                  );
                })}
              </View>
            ))}
          </View>
        )}
      </PrismHighlight>
    </View>
  );
}