import * as React from 'react';
import { cn } from '../../utils';
import { tagVariants, tagTextVariants, tagIconVariants } from './styles';
import type { TagProps, TagContext } from './types';
import { Surface } from '../surface';
import { Text } from '../text';
import { TagContextProvider } from './context';
import { TagDismiss } from './Tag.shared';

const Tag = React.forwardRef<React.ElementRef<typeof Surface>, TagProps>(
  (props, ref) => {
    const {
      children,
      className = '',
      style,
      color = 'neutral',
      size = 'md',
      variant = 'soft',
      onPress,
      disabled = false,
      ...otherProps
    } = props;

    const contextValue = React.useMemo<TagContext>(() => ({
      color: color!,
      size: size!,
      variant: variant!,
    }), [color, size, variant]);

    return (
      <TagContextProvider.Provider value={contextValue}>
        <Surface
          ref={ref}
          color={color}
          variant={variant}
          pressable={!!onPress}
          disabled={disabled}
          onPress={onPress}
          iconContext={{ className: tagIconVariants({ size }) }}
          textContext={{ className: tagTextVariants({ size }) }}
          className={cn(
            tagVariants({ size }),
            className
          )}
          style={style}
          {...otherProps}
        >
          {typeof children === 'string' ? <Text>{children}</Text> : children}
        </Surface>
      </TagContextProvider.Provider>
    );
  }
);

Tag.displayName = 'Tag';

const TagWithDismiss = Object.assign(Tag, {
  Dismiss: TagDismiss,
});

export { TagWithDismiss as Tag }; 