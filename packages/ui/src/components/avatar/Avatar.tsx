import * as AvatarPrimitive from '@rn-primitives/avatar';
import * as React from 'react';
import { cn } from '../../utils';
import { avatarVariants } from './styles';
import { AvatarContextProvider } from './context';
import { AvatarImage, AvatarFallback, AvatarText, AvatarIcon } from './Avatar.shared';
import type { AvatarRootProps } from './types';
import { HelpCircle } from 'lucide-react-native';

const AvatarRoot = React.forwardRef<AvatarPrimitive.RootRef, AvatarRootProps>(
  ({ className, size = 'md', color = 'neutral', border = true, children, source, icon, alt, ...props }, ref) => {
    const contextValue = React.useMemo(() => ({ size, color, border, source, icon }), [size, color, border, source, icon]);

    return (
      <AvatarContextProvider.Provider value={contextValue}>
        <AvatarPrimitive.Root
          ref={ref}
          className={cn(avatarVariants({ size, color, border }), className)}
          alt={alt}
          {...props}
        >
          {source ? (
            <>
              <AvatarImage source={source} />
              {icon ? (
                <AvatarFallback>
                  <AvatarIcon icon={icon} />
                </AvatarFallback>
              ) : typeof children === 'string' ? (
                <AvatarFallback>
                  <AvatarText>{children}</AvatarText>
                </AvatarFallback>
              ) : (
                <AvatarFallback>
                  <AvatarIcon icon={HelpCircle} />
                </AvatarFallback>
              )}
            </>
          ) : icon ? (
            <AvatarFallback>
              <AvatarIcon icon={icon} />
            </AvatarFallback>
          ) : typeof children === 'string' ? (
            <AvatarFallback>
              <AvatarText>{children}</AvatarText>
            </AvatarFallback>
          ) : (
            children
          )}
        </AvatarPrimitive.Root>
      </AvatarContextProvider.Provider>
    );
  }
);

AvatarRoot.displayName = 'Avatar';

const Avatar = Object.assign(AvatarRoot, {
  Image: AvatarImage,
  Fallback: AvatarFallback,
  Text: AvatarText,
  Icon: AvatarIcon,
});

export { Avatar };