import * as AccordionPrimitive from '@rn-primitives/accordion';
import * as React from 'react';
import { Platform } from 'react-native';
import Animated, {
  LayoutAnimationConfig,
  LinearTransition,
} from 'react-native-reanimated';
import { cn } from '../../utils';
import { accordionVariants } from './styles';
import { AccordionContextProvider } from './context';
import { 
  AccordionItem,
  AccordionTrigger, 
  AccordionContent
} from './Accordion.shared';
import type { AccordionRootProps } from './types';

const AccordionRoot = React.forwardRef<AccordionPrimitive.RootRef, AccordionRootProps>(
  ({ className, variant, color, size, children, ...props }, ref) => {
    const contextValue = React.useMemo(() => ({ variant, color, size }), [variant, color, size]);

    return (
      <LayoutAnimationConfig skipEntering>
        <AccordionContextProvider.Provider value={contextValue}>
          <AccordionPrimitive.Root
            ref={ref}
            className={cn(accordionVariants({ variant, color, size }), className)}
            {...(props as AccordionPrimitive.RootProps)}
            asChild={Platform.OS !== 'web'}
          >
            <Animated.View layout={LinearTransition.duration(200)}>{children}</Animated.View>
          </AccordionPrimitive.Root>
        </AccordionContextProvider.Provider>
      </LayoutAnimationConfig>
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