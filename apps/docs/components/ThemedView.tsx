import { View, type ViewProps } from 'react-native';
import { useThemeColors } from '@consensys/ds3';

export type ThemedViewProps = ViewProps;

export function ThemedView({ style, ...otherProps }: ThemedViewProps) {
  const colors = useThemeColors();

  return <View style={[{ backgroundColor: colors.neutral1 }, style]} {...otherProps} />;
}
