import * as React from 'react';
import { Button, Text } from "@consensys/ds3";
import type { DisconnectButtonProps } from './types';

const DisconnectButton = React.forwardRef<any, DisconnectButtonProps>(
  ({ children, disconnect, ...props }, ref) => {

    return (
      <Button
        ref={ref}
        // @ts-ignore - TypeScript can't handle universal component props
        onPress={() => disconnect()}
        {...props}
      >
        {children || <Text>Disconnect</Text>}
      </Button>
    );
  }
);

DisconnectButton.displayName = 'DisconnectButton';

export { DisconnectButton }; 