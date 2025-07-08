import * as React from 'react';
import * as AvatarPrimitive from '@rn-primitives/avatar';
import { cn } from '../../utils';
import { avatarImageVariants, avatarTextVariants, avatarIconVariants } from './styles';
import { useAvatarContext } from './context';
import type { AvatarImageProps, AvatarFallbackProps, AvatarTextProps, AvatarIconProps } from './types';
import { Text } from '../text';
import { Icon } from '../icon';

export const AvatarImage = React.forwardRef<AvatarPrimitive.ImageRef, AvatarImageProps>(
  ({ className, ...props }, ref) => {
    const context = useAvatarContext();

    return (
      <AvatarPrimitive.Image
        ref={ref}
        className={cn(avatarImageVariants({ size: context.size }), className)}
        {...props}
      />
    );
  }
);
AvatarImage.displayName = 'AvatarImage';

export const AvatarFallback = React.forwardRef<AvatarPrimitive.FallbackRef, AvatarFallbackProps>(
  ({ className, ...props }, ref) => {
    return (
      <AvatarPrimitive.Fallback
        ref={ref}
        className={className}
        {...props}
      />
    );
  }
);
AvatarFallback.displayName = 'AvatarFallback';

export const AvatarText = React.forwardRef<React.ElementRef<typeof Text>, AvatarTextProps>(
  ({ className, children, ...props }, ref) => {
    const context = useAvatarContext();

    return (
      <Text
        ref={ref}
        className={cn(avatarTextVariants({ size: context.size, color: context.color }), className)}
        {...props}
      >
        {children}
      </Text>
    );
  }
);
AvatarText.displayName = 'AvatarText';

export const AvatarIcon = React.forwardRef<React.ElementRef<typeof Icon>, AvatarIconProps>(
  ({ className, icon, ...props }, ref) => {
    const context = useAvatarContext();
    const iconComponent = icon || context.icon;

    if (!iconComponent) {
      return null;
    }

    return (
      <Icon
        ref={ref}
        icon={iconComponent}
        className={cn(avatarIconVariants({ size: context.size, color: context.color }), className)}
        {...props}
      />
    );
  }
);
AvatarIcon.displayName = 'AvatarIcon'; 