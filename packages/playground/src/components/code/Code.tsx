import { View, Text, useThemeColors } from '@consensys/ds3';
import { Highlight as PrismHighlight } from 'prism-react-renderer';
import { createDs3Theme } from './theme';
import type { CodeProps } from './types';

export function Code({ 
  code, 
  language = 'javascript', 
  className = '',
  style,
  theme,
}: CodeProps) {
  const colors = useThemeColors();
  const ds3Theme = createDs3Theme(colors);

  return (
    <View className={className}>
      <PrismHighlight
        code={code}
        language={language}
        theme={theme || ds3Theme}
      >
        {({ tokens, getTokenProps }) => {
          const isLineBlank = (line: any[]) =>
            line.length === 0 || line.every((token: any) => !token.content.trim());
          return (
            <>
              {tokens.map((line: any[], i: number) => {
                const lineStyle: any[] = [style, { width: '100%', flexWrap: 'wrap' as const }];
                if (isLineBlank(line)) {
                  return (
                    <Text
                      key={i}
                      style={lineStyle}
                      allowFontScaling={false}
                    >
                      {' '}
                    </Text>
                  );
                }
                return (
                  <Text
                    key={i}
                    style={lineStyle}
                    allowFontScaling={false}
                  >
                    {line.map((token: any, key: number) => {
                      const tokenProps = getTokenProps({ token });
                      return (
                        <Text
                          key={key}
                          style={[
                            { color: tokenProps.style?.color || ds3Theme.plain.color },
                            style,
                          ]}
                          allowFontScaling={false}
                        >
                          {token.content}
                        </Text>
                      );
                    })}
                  </Text>
                );
              })}
            </>
          );
        }}
      </PrismHighlight>
    </View>
  );
}