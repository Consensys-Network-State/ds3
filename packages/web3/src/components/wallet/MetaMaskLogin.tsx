import * as React from 'react';
import { Button, Text, cn } from "@consensys/ds3";
import { useConnect, Connector } from "wagmi";
import type { MetaMaskLoginProps } from './types';
import { MetaMask } from '../../icons/MetaMask';

const MetaMaskLogin = React.forwardRef<any, MetaMaskLoginProps>(
  ({ className, ...props }, ref) => {
    const [isConnecting, setIsConnecting] = React.useState(false);

    const { connectors, connect } = useConnect({
      mutation: {
        onError() {
          setIsConnecting(false);
        },
        onSuccess() {
          setIsConnecting(false);
        }
      },
    });

    const metaMaskConnector = connectors.find(
      (connector) => connector.name === 'MetaMask'
    );

    const handleConnect = () => {
      setIsConnecting(true);
      connect({ connector: metaMaskConnector as Connector });
    };

    return metaMaskConnector ? (
      <Button
        ref={ref}
        className={cn("w-full", className)}
        variant="soft"
         // @ts-ignore - TypeScript can't handle universal component props
        onPress={handleConnect}
        disabled={isConnecting}
        loading={isConnecting}
        {...props}
      >
        <Button.Spinner icon={MetaMask} />
        <Button.Text>Login with MetaMask</Button.Text>
      </Button>
    ) : (
      <Text>You need MetaMask to connect to this application</Text>
    );
  }
);

MetaMaskLogin.displayName = 'MetaMaskLogin';

export { MetaMaskLogin }; 