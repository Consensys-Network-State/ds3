import * as React from 'react';
import { Button } from "@ds3/ui";
import { useDisconnect } from 'wagmi';
import type { DisconnectButtonProps } from './types';

const DisconnectButton = React.forwardRef<any, DisconnectButtonProps>(
  ({ children, ...props }, ref) => {
    const { disconnect } = useDisconnect();

    return (
      <Button ref={ref} onPress={() => disconnect()} {...props}>
        {children || <Button.Text>Disconnect</Button.Text>}
      </Button>
    );
  }
);

DisconnectButton.displayName = 'DisconnectButton';

export { DisconnectButton }; 