import * as React from 'react';
import { View } from 'react-native';
import { cn } from '../../utils';
import { cardVariants } from './styles';
import { CardContextProvider } from './context';
import { CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardText } from './Card.shared';
import type { CardRootProps } from './types';
import { TextClassContext } from '../text';

const CardRoot = React.forwardRef<React.ElementRef<typeof View>, CardRootProps>(
  ({ className, color = 'neutral', border = false, children, ...props }, ref) => {
    const contextValue = React.useMemo(() => ({ color, border }), [color, border]);

    return (
      <CardContextProvider.Provider value={contextValue}>
        <TextClassContext.Provider value='text-card-foreground'>
          <View
            ref={ref}
            className={cn(cardVariants({ color, border }), className)}
            {...props}
          >
            {typeof children === 'string' ? (
              <CardContent>
                <CardText>{children}</CardText>
              </CardContent>
            ) : (
              children
            )}
          </View>
        </TextClassContext.Provider>
      </CardContextProvider.Provider>
    );
  }
);

CardRoot.displayName = 'Card';

const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter,
  Text: CardText,
});

export { Card }; 