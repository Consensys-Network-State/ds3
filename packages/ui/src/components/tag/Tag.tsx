import * as React from 'react';
import { View } from 'react-native';
import { cn } from '../../utils';
import { tagVariants } from './styles';
import { TagContextProvider } from './context';
import { TagRoot, TagText } from './Tag.shared';
import type { TagProps, TagContext } from './types';

const TagComponent = React.forwardRef<React.ElementRef<typeof View>, TagProps>(
  (props, ref) => {
    const {
      children,
      className = '',
      style,
      color = 'neutral',
      size = 'md',
      variant = 'default',
      ...otherProps
    } = props;

    const contextValue = React.useMemo<TagContext>(() => ({
      color: color!,
      size: size!,
      variant: variant!,
    }), [color, size, variant]);

    // Wrap string children in TagText
    const renderChildren = () => {
      if (typeof children === 'string') {
        return <TagText>{children}</TagText>;
      }
      return children;
    };

    return (
      <TagContextProvider.Provider value={contextValue}>
        <TagRoot
          ref={ref}
          className={cn(
            tagVariants({ color, size, variant }),
            className
          )}
          style={style}
          color={color}
          size={size}
          variant={variant}
          {...otherProps}
        >
          {renderChildren()}
        </TagRoot>
      </TagContextProvider.Provider>
    );
  }
);

TagComponent.displayName = 'Tag';

const Tag = Object.assign(TagComponent, {
  Text: TagText,
});

export { Tag }; 