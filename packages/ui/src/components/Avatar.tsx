import * as AvatarPrimitive from '@rn-primitives/avatar';
import * as React from 'react';
import { cn } from '../utils';

export type AvatarProps = AvatarPrimitive.RootProps & {
  className?: string;
};

const Avatar = React.forwardRef<AvatarPrimitive.RootRef, AvatarProps>(
  ({ className, ...props }, ref) => (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)}
      {...props}
    />
  )
);
Avatar.displayName = AvatarPrimitive.Root.displayName;

export type AvatarImageProps = AvatarPrimitive.ImageProps & {
  className?: string;
};

const AvatarImage = React.forwardRef<AvatarPrimitive.ImageRef, AvatarImageProps>(
  ({ className, ...props }, ref) => (
    <AvatarPrimitive.Image
      ref={ref}
      className={cn('aspect-square h-full w-full', className)}
      {...props}
    />
  )
);
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

export type AvatarFallbackProps = AvatarPrimitive.FallbackProps & {
  className?: string;
};

const AvatarFallback = React.forwardRef<AvatarPrimitive.FallbackRef, AvatarFallbackProps>(
  ({ className, ...props }, ref) => (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={cn(
        'flex h-full w-full items-center justify-center rounded-full bg-muted',
        className
      )}
      {...props}
    />
  )
);
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarFallback, AvatarImage };