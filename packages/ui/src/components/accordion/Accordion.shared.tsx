import * as React from 'react';
import * as AccordionPrimitive from '@rn-primitives/accordion';
import { Platform, Pressable, View } from 'react-native';
import Animated, {
  Extrapolation,
  FadeIn,
  FadeOutUp,
  LinearTransition,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import { ChevronDown } from 'lucide-react-native';
import { cn } from '../../utils';
import { useAccordionContext } from './context';
import type { AccordionItemProps, AccordionTriggerProps, AccordionContentProps } from './types';
import { TextClassContext } from '../text';
import { Card } from '../card';
import { Icon } from '../icon';
import { accordionTriggerVariants, accordionContentVariants, accordionItemVariants } from './styles';

export const AccordionItem = React.forwardRef<AccordionPrimitive.ItemRef, AccordionItemProps>(
  ({ value, ...props }, ref) => {
    const context = useAccordionContext();
    
    return (
      <Animated.View 
        className={cn(
          'overflow-hidden',
          accordionItemVariants({ 
            variant: context.variant, 
            color: context.color 
          })
        )} 
        layout={LinearTransition.duration(200)}
      >
        <AccordionPrimitive.Item
          ref={ref}
          value={value}
          {...props}
        />
      </Animated.View>
    );
  }
);
AccordionItem.displayName = 'AccordionItem';

const Trigger = Platform.OS === 'web' ? View : Pressable;

export const AccordionTrigger = React.forwardRef<AccordionPrimitive.TriggerRef, AccordionTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const context = useAccordionContext();
    const { isExpanded } = AccordionPrimitive.useItemContext();

    const progress = useDerivedValue(() =>
      isExpanded ? withTiming(1, { duration: 250 }) : withTiming(0, { duration: 200 })
    );
    
    const chevronStyle = useAnimatedStyle(() => ({
      transform: [{ rotate: `${progress.value * 180}deg` }],
      opacity: interpolate(progress.value, [0, 1], [1, 0.8], Extrapolation.CLAMP),
    }));

    // Map accordion color to card color
    const cardColor = context.color || 'neutral';

    const triggerContent = (
      <AccordionPrimitive.Header className='flex'>
        <AccordionPrimitive.Trigger {...props} asChild>
          <Trigger
            ref={ref}
            className={cn(
              accordionTriggerVariants({ 
                variant: context.variant, 
                size: context.size,
                color: context.color
              }),
              className
            )}
          >
            {children}
            <Animated.View style={chevronStyle}>
              <Icon 
                icon={ChevronDown}
                size={context.size === 'sm' ? 16 : context.size === 'lg' ? 20 : 18}
                color={cardColor}
                className="shrink-0"
              />
            </Animated.View>
          </Trigger>
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    );

    return (
      <TextClassContext.Provider value='native:text-lg font-medium web:group-hover:underline'>
        {context.variant === 'card' ? (
          <Card.Header className="p-0 border-0">
            {triggerContent}
          </Card.Header>
        ) : triggerContent}
      </TextClassContext.Provider>
    );
  }
);
AccordionTrigger.displayName = 'AccordionTrigger';

export const AccordionContent = React.forwardRef<AccordionPrimitive.ContentRef, AccordionContentProps>(
  ({ className, children, ...props }, ref) => {
    const context = useAccordionContext();
    const { isExpanded } = AccordionPrimitive.useItemContext();

    const contentElement = (
      <AccordionPrimitive.Content
        ref={ref}
        className={cn(
          accordionContentVariants({ 
            variant: context.variant,
            color: context.color
          }),
          'overflow-hidden web:transition-all',
          isExpanded ? 'web:animate-accordion-down' : 'web:animate-accordion-up',
          className
        )}
        {...props}
      >
        {Platform.OS === 'web' ? 
          children :
          <Animated.View
            entering={FadeIn.duration(100)}
            exiting={FadeOutUp.duration(100)}
          >
            {children}
          </Animated.View>
        }
      </AccordionPrimitive.Content>
    );

    return (
      <TextClassContext.Provider value='native:text-lg'>
        {context.variant === 'card' ? (
          <Card.Content className="p-0">
            {contentElement}
          </Card.Content>
        ) : contentElement}
      </TextClassContext.Provider>
    );
  }
);
AccordionContent.displayName = 'AccordionContent';