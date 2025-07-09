import * as React from 'react';
import * as AvatarPrimitive from '@rn-primitives/avatar';
import { cn } from '../../utils';
import { avatarImageVariants } from './styles';
import type { AvatarImageProps, AvatarFallbackProps } from './types';

export const AvatarImage = React.forwardRef<AvatarPrimitive.ImageRef, AvatarImageProps>(
  ({ className, size = 'md', ...props }, ref) => {
    return (
      <AvatarPrimitive.Image
        ref={ref}
        className={cn(avatarImageVariants({ size }), className)}
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