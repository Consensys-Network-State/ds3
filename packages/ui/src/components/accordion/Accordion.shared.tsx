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
import { accordionItemVariants, accordionTriggerVariants, accordionContentVariants, accordionChevronVariants } from './styles';
import { useAccordionContext } from './context';
import type { AccordionItemProps, AccordionTriggerProps, AccordionContentProps } from './types';
import { TextClassContext } from '../text';

export const AccordionItem = React.forwardRef<AccordionPrimitive.ItemRef, AccordionItemProps>(
  ({ className, value, ...props }, ref) => {
    const context = useAccordionContext();

    return (
      <Animated.View className={'overflow-hidden'} layout={LinearTransition.duration(200)}>
        <AccordionPrimitive.Item
          ref={ref}
          className={cn(accordionItemVariants({ variant: context.variant, color: context.color, size: context.size }), className)}
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

    return (
      <TextClassContext.Provider value='native:text-lg font-medium web:group-hover:underline'>
        <AccordionPrimitive.Header className='flex'>
          <AccordionPrimitive.Trigger {...props} asChild>
            <Trigger
              ref={ref}
              className={cn(
                accordionTriggerVariants({ variant: context.variant, color: context.color, size: context.size }),
                className
              )}
            >
              {children}
              <Animated.View style={chevronStyle}>
                <ChevronDown 
                  size={context.size === 'sm' ? 16 : context.size === 'lg' ? 20 : 18} 
                  className={cn(accordionChevronVariants({ size: context.size, color: context.color }), 'shrink-0')} 
                />
              </Animated.View>
            </Trigger>
          </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
      </TextClassContext.Provider>
    );
  }
);
AccordionTrigger.displayName = 'AccordionTrigger';

export const AccordionContent = React.forwardRef<AccordionPrimitive.ContentRef, AccordionContentProps>(
  ({ className, children, ...props }, ref) => {
    const context = useAccordionContext();
    const { isExpanded } = AccordionPrimitive.useItemContext();

    return (
      <TextClassContext.Provider value='native:text-lg'>
        <AccordionPrimitive.Content
          ref={ref}
          className={cn(
            accordionContentVariants({ variant: context.variant, color: context.color, size: context.size }),
            'overflow-hidden text-sm web:transition-all',
            isExpanded ? 'web:animate-accordion-down' : 'web:animate-accordion-up'
          )}
          {...props}
        >
          <InnerContent className={cn('pb-4', className)}>{children}</InnerContent>
        </AccordionPrimitive.Content>
      </TextClassContext.Provider>
    );
  }
);
AccordionContent.displayName = 'AccordionContent';

function InnerContent({ children, className }: { children: React.ReactNode; className?: string }) {
  if (Platform.OS === 'web') {
    return <View className={cn('pb-4', className)}>{children}</View>;
  }
  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOutUp.duration(200)}
      className={cn('pb-4', className)}
    >
      {children}
    </Animated.View>
  );
} 