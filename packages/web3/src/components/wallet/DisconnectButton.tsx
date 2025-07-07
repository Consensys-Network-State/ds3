import * as React from 'react';
import { Button, Text } from "@consensys/ds3";
import { useDisconnect } from 'wagmi';
import type { DisconnectButtonProps } from './types';

const DisconnectButton = React.forwardRef<any, DisconnectButtonProps>(
  ({ children, ...props }, ref) => {
    const { disconnect } = useDisconnect();

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