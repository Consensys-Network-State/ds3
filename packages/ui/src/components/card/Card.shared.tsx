import * as React from 'react';
import { Text, View } from 'react-native';
import { cn } from '../../utils';
import { cardHeaderVariants, cardContentVariants, cardFooterVariants, cardTextVariants } from './styles';
import { useCardContext } from './context';
import type { CardHeaderProps, CardTitleProps, CardDescriptionProps, CardTextProps, CardContentProps, CardFooterProps } from './types';

const CardHeader = React.forwardRef<React.ElementRef<typeof View>, CardHeaderProps>(
  ({ className, ...props }, ref) => {
    const { color, border } = useCardContext();
    return (
      <View ref={ref} className={cn(cardHeaderVariants({ color, border }), className)} {...props} />
    );
  }
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<React.ElementRef<typeof Text>, CardTitleProps>(
  ({ className, ...props }, ref) => (
    <CardText
      role='heading'
      aria-level={3}
      ref={ref}
      className={cn('text-2xl font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<React.ElementRef<typeof Text>, CardDescriptionProps>(
  ({ className, ...props }, ref) => (
    <CardText 
      ref={ref} 
      className={cn('text-sm', className)} 
      {...props} 
    />
  )
);
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<React.ElementRef<typeof View>, CardContentProps>(
  ({ className, ...props }, ref) => {
    const { color } = useCardContext();
    return (
      <View ref={ref} className={cn(cardContentVariants({ color }), className)} {...props} />
    );
  }
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<React.ElementRef<typeof View>, CardFooterProps>(
  ({ className, ...props }, ref) => {
    const { color, border } = useCardContext();
    return (
      <View ref={ref} className={cn(cardFooterVariants({ color, border }), className)} {...props} />
    );
  }
);
CardFooter.displayName = 'CardFooter';

const CardText = React.forwardRef<React.ElementRef<typeof Text>, CardTextProps>(
  ({ className, ...props }, ref) => {
    const { color } = useCardContext();
    return (
      <Text ref={ref} className={cn(cardTextVariants({ color }), className)} {...props} />
    );
  }
);
CardText.displayName = 'CardText';

export { CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardText }; 