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
import { TextContextProvider } from '../text';
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

const AccordionChevron = React.forwardRef<View, { size?: 'sm' | 'md' | 'lg'; color?: 'neutral' | 'primary' | 'secondary' | 'error' | 'warning' | 'success'; className?: string }>(
  ({ size = 'md', color = 'neutral', className }, ref) => {
    const { isExpanded } = AccordionPrimitive.useItemContext();

    const progress = useDerivedValue(() =>
      isExpanded ? withTiming(1, { duration: 250 }) : withTiming(0, { duration: 200 })
    );
    
    const chevronStyle = useAnimatedStyle(() => ({
      transform: [{ rotate: `${progress.value * 180}deg` }],
      opacity: interpolate(progress.value, [0, 1], [1, 0.8], Extrapolation.CLAMP),
    }));

    return (
      <Animated.View ref={ref} style={chevronStyle}>
        <Icon 
          icon={ChevronDown}
          size={size === 'sm' ? 16 : size === 'lg' ? 20 : 18}
          color={color}
          className={cn("shrink-0", className)}
        />
      </Animated.View>
    );
  }
);

AccordionChevron.displayName = 'AccordionChevron';

export { AccordionChevron };

export const AccordionTrigger = React.forwardRef<AccordionPrimitive.TriggerRef, AccordionTriggerProps>(
  ({ className, children, asChild, ...props }, ref) => {
    const context = useAccordionContext();

    const triggerContent = (
      <AccordionPrimitive.Header className='flex'>
        <AccordionPrimitive.Trigger {...props} asChild>
          {asChild ? (
            children
          ) : (
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
              <AccordionChevron size={context.size} color={context.color} />
            </Trigger>
          )}
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    );

    return (
      <TextContextProvider.Provider value={{ className: 'native:text-lg font-medium web:group-hover:underline' }}>
        {context.variant === 'card' ? (
          <Card.Header className="p-0 border-0">
            {triggerContent}
          </Card.Header>
        ) : triggerContent}
      </TextContextProvider.Provider>
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
      <TextContextProvider.Provider value={{ className: 'native:text-lg' }}>
        {context.variant === 'card' ? (
          <Card.Content className="p-0">
            {contentElement}
          </Card.Content>
        ) : contentElement}
      </TextContextProvider.Provider>
    );
  }
);
AccordionContent.displayName = 'AccordionContent';