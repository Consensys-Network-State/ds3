import * as React from 'react';
import { Button } from "@consensys/ds3";
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
        {children || <Button.Text>Disconnect</Button.Text>}
      </Button>
    );
  }
);

DisconnectButton.displayName = 'DisconnectButton';

export { DisconnectButton }; 