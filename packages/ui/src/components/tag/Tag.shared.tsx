import * as React from 'react';
import { Pressable, View } from 'react-native';
import { Text } from '../text';
import { cn } from '../../utils';
import { tagVariants, tagTextVariants } from './styles';
import { useTagContext } from './context';
import type { TagProps, TagTextProps } from './types';

export const TagText = React.forwardRef<React.ElementRef<typeof Text>, TagTextProps>(
  (props, ref) => {
    const { children, className = '', style, color, size, ...otherProps } = props;
    const context = useTagContext();

    return (
      <Text
        ref={ref}
        className={cn(
          tagTextVariants({
            color: color || context.color,
            size: size || context.size,
          }),
          className
        )}
        style={style}
        {...otherProps}
      >
        {children}
      </Text>
    );
  }
);

TagText.displayName = 'TagText';

export const TagRoot = React.forwardRef<React.ElementRef<typeof Pressable>, TagProps>(
  (props, ref) => {
    const {
      children,
      className = '',
      style,
      color = 'neutral',
      size = 'md',
      variant = 'default',
      onPress,
      disabled = false,
      ...otherProps
    } = props;

    const Component = onPress ? Pressable : View;

    return (
      <Component
        ref={ref}
        className={cn(
          tagVariants({ color, size, variant }),
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
        style={style}
        onPress={onPress}
        disabled={disabled}
        {...otherProps}
      >
        {children}
      </Component>
    );
  }
);

TagRoot.displayName = 'Tag'; 