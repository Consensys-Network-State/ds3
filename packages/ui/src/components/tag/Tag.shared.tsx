import * as React from 'react';
import { Button } from '../button';
import { Icon } from '../icon';
import { X } from 'lucide-react-native';
import { cn } from '../../utils';
import { useTagContext } from './context';

export const TagDismiss = React.forwardRef<React.ElementRef<typeof Button>, React.ComponentProps<typeof Button>>(
  (props, ref) => {
    const { className = '', ...otherProps } = props;
    const context = useTagContext();
    
    return (
      <Button
        ref={ref}
        variant="ghost"
        size="sm"
        square
        className={cn("p-0.5 self-center", className)}
        {...otherProps}
      >
        <Icon icon={X} size="sm" color={context.color} />
      </Button>
    );
  }
);

TagDismiss.displayName = 'Tag.Dismiss'; 