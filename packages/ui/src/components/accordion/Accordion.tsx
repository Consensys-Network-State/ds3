import * as AccordionPrimitive from '@rn-primitives/accordion';
import * as React from 'react';
import { Platform, View } from 'react-native';
import Animated, {
  LayoutAnimationConfig,
  LinearTransition,
} from 'react-native-reanimated';
import { AccordionContextProvider } from './context';
import { 
  AccordionItem,
  AccordionTrigger, 
  AccordionContent
} from './Accordion.shared';
import type { AccordionRootProps } from './types';
import { Card } from '../card';
import { accordionVariants } from './styles';
import { cn } from '../../utils';

const AccordionRoot = React.forwardRef<AccordionPrimitive.RootRef, AccordionRootProps>(
  ({ className, variant = 'card', color, size, children, ...props }, ref) => {
    const contextValue = React.useMemo(() => ({ variant, color, size }), [variant, color, size]);

    // Map accordion color to card color
    const cardColor = color || 'neutral';

    const accordionContent = (
      <LayoutAnimationConfig skipEntering>
        <AccordionContextProvider.Provider value={contextValue}>
          <AccordionPrimitive.Root
            ref={ref}
            {...(props as AccordionPrimitive.RootProps)}
            asChild={Platform.OS !== 'web'}
          >
            <Animated.View layout={LinearTransition.duration(200)}>{children}</Animated.View>
          </AccordionPrimitive.Root>
        </AccordionContextProvider.Provider>
      </LayoutAnimationConfig>
    );

    // Use Card component for 'card' variant
    if (variant === 'card') {
      return (
        <Card color={cardColor} border={true} className={className}>
          {accordionContent}
        </Card>
      );
    }

    // Use CVA variants for 'underline' and 'outline'
    return (
      <View className={cn(accordionVariants({ variant, color }), className)}>
        {accordionContent}
      </View>
    );
  }
);

AccordionRoot.displayName = 'Accordion';

const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
});

export { Accordion }; 