import * as React from 'react';
import * as AvatarPrimitive from '@rn-primitives/avatar';
import { cn } from '../../utils';
import { avatarVariants, avatarTextVariants, avatarIconVariants } from './styles';
import type { AvatarRootProps } from './types';
import { Surface } from '../surface';
import { Text } from '../text';
import { Icon } from '../icon';
import { HelpCircle } from 'lucide-react-native';
import { AvatarImage, AvatarFallback } from './Avatar.shared';
import { AvatarContextProvider } from './context';

const AvatarRoot = React.forwardRef<React.ElementRef<typeof Surface>, AvatarRootProps>(
  ({ 
    className, 
    size = 'md', 
    color = 'neutral', 
    border = false, 
    children, 
    source, 
    icon, 
    alt,
    onPress,
    disabled = false,
    toColor,
    ...props 
  }, ref) => {
    const avatarContext = React.useContext(AvatarContextProvider);
    
    // Use context values if available, otherwise use props
    const effectiveSize = size || avatarContext?.size;
    const effectiveClassName = avatarContext?.className ? cn(avatarContext.className, className) : className;
    
    // Determine variant based on border prop
    const variant = border ? 'outline' : 'soft';
    
    // Determine content to render
    const renderContent = () => {
      if (source) {
        return (
          <>
            <AvatarImage source={source} size={effectiveSize} alt={alt} />
            {icon ? (
              <AvatarFallback>
                <Icon icon={icon} />
              </AvatarFallback>
            ) : typeof children === 'string' ? (
              <AvatarFallback>
                <Text>{children}</Text>
              </AvatarFallback>
            ) : (
              <AvatarFallback>
                <Icon icon={HelpCircle} />
              </AvatarFallback>
            )}
          </>
        );
      }
      
      if (icon) {
        return (
          <AvatarFallback>
            <Icon icon={icon} />
          </AvatarFallback>
        );
      }
      
      if (typeof children === 'string') {
        return (
          <AvatarFallback>
            <Text>{children}</Text>
          </AvatarFallback>
        );
      }
      
      return children;
    };

    return (
      <AvatarPrimitive.Root alt={alt || ''}>
        <Surface
          ref={ref}
          variant={variant}
          color={color}
          toColor={toColor}
          pressable={!!onPress}
          disabled={disabled}
          onPress={onPress}
          iconContext={{ className: avatarIconVariants({ size: effectiveSize }) }}
          textContext={{ className: avatarTextVariants({ size: effectiveSize }) }}
          className={cn(
            avatarVariants({ size: effectiveSize, border }),
            effectiveClassName,
          )}
          {...props}
        >
          {renderContent()}
        </Surface>
      </AvatarPrimitive.Root>
    );
  }
);

AvatarRoot.displayName = 'Avatar';

const Avatar = Object.assign(AvatarRoot, {
  Image: AvatarImage,
  Fallback: AvatarFallback,
  Text: Text,
  Icon: Icon,
});

export { Avatar };