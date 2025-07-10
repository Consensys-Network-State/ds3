import * as React from 'react';
import { Button, Text, Spinner, cn } from "@consensys/ds3";
import type { Web3LoginProps } from './types';

const Web3LoginButton = React.forwardRef<any, Web3LoginProps>(
  ({ 
    className, 
    connect, 
    icon: Icon,
    children = "Connect Wallet",
    ...props 
  }, ref) => {
    const [isConnecting, setIsConnecting] = React.useState(false);

    const handleConnect = async () => {
      if (!connect) return;
      
      setIsConnecting(true);
      try {
        await connect();
      } catch (error) {
        console.error('Connection failed:', error);
      } finally {
        setIsConnecting(false);
      }
    };

    return (
      <Button
        ref={ref}
        className={cn("w-full", className)}
        variant="soft"
        // @ts-ignore - TypeScript can't handle universal component props
        onPress={handleConnect}
        disabled={isConnecting || !connect}
        {...props}
      >
        <Spinner fallback={Icon} spin={isConnecting} />
        <Text>{children}</Text>
      </Button>
    );
  }
);

Web3LoginButton.displayName = 'Web3LoginButton';

export { Web3LoginButton }; 