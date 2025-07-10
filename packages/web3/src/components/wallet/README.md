# Wallet Components

The Wallet components provide utilities for wallet connection, disconnection, and interaction with various wallet providers. These components simplify the process of integrating Web3 wallet functionality into your applications with a consistent and user-friendly interface.

## Installation

Import the Wallet components from the DS3 Web3 package.

```tsx
import { Web3LoginButton, DisconnectButton } from '@consensys/ds3-web3';
```

## Examples

### Basic Web3 Login Button

Create a simple wallet connection button.

```tsx live
<Web3LoginButton connect={() => console.log('Connecting wallet...')} />
```

### Custom Login Button Text

Customize the button text to match your application.

```tsx live
<Web3LoginButton 
  connect={() => console.log('Connecting wallet...')}
  children="Connect MetaMask"
/>
```

### Login Button with Icon

Add an icon to the login button for better visual appeal.

```tsx live
<Web3LoginButton 
  connect={() => console.log('Connecting wallet...')}
  icon={() => <MetaMask />}
  children="Connect Wallet"
/>
```

### Loading State

The button automatically handles loading states during connection.

```tsx live
<Web3LoginButton 
  connect={async () => {
    // Simulate a slow connection
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Connected!');
  }}
  children="Connect Wallet"
/>
```

### Custom Styling

Apply custom styling to match your design system.

```tsx live
<Web3LoginButton 
  connect={() => console.log('Connecting wallet...')}
  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl px-8 py-4 shadow-lg"
  children="Connect Your Wallet"
/>
```

### Basic Disconnect Button

Create a simple wallet disconnection button.

```tsx live
<DisconnectButton disconnect={() => console.log('Disconnecting wallet...')} />
```

### Custom Disconnect Button Text

Customize the disconnect button text.

```tsx live
<DisconnectButton disconnect={() => console.log('Disconnecting wallet...')}>
  <Text>Sign Out</Text>
</DisconnectButton>
```

### Disconnect Button with Icon

Add an icon to the disconnect button.

```tsx live
<DisconnectButton 
  disconnect={() => console.log('Disconnecting wallet...')}
  className="flex flex-row items-center gap-2"
>
  <View className="w-4 h-4 bg-red-500 rounded-full" />
  <Text>Disconnect</Text>
</DisconnectButton>
```

## API Reference

Complete reference of all available props and their configurations.

### Web3LoginButton

A component that provides a button to connect to Web3 wallets.

```tsx
<Web3LoginButton 
  connect={connectFunction}
  icon={CustomIcon}
  children="Connect Wallet"
  className="custom-class"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `connect` | `() => Promise<void> \| void` | - | Function to call when connecting wallet |
| `icon` | `React.ComponentType<any>` | - | Icon component to display |
| `children` | `React.ReactNode` | `"Connect Wallet"` | Button content |
| `className` | `string` | - | Additional class names for styling |

Inherits all [Button](https://reactnative.dev/docs/button) props.

### DisconnectButton

A component that provides a button to disconnect the current wallet.

```tsx
<DisconnectButton 
  disconnect={disconnectFunction}
  children="Disconnect"
  className="custom-class"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `disconnect` | `() => void` | - | Function to call when disconnecting wallet |
| `children` | `React.ReactNode` | `"Disconnect"` | Button content |
| `className` | `string` | - | Additional class names for styling |

Inherits all [Button](https://reactnative.dev/docs/button) props.

## Features

### Core Functionality

- **Wallet Connection**: Simplified wallet connection process
- **Wallet Disconnection**: Easy wallet disconnection
- **Loading States**: Automatic loading state management
- **Error Handling**: Built-in error handling and user feedback

### Connection Features

- **Async Support**: Full support for asynchronous connection processes
- **Loading Indicators**: Visual feedback during connection attempts
- **Icon Support**: Optional icon display for better UX
- **Customizable Text**: Flexible button content customization

### Disconnection Features

- **Simple Interface**: Straightforward disconnection process
- **Custom Content**: Flexible button content options
- **Consistent Styling**: Matches the design system

### State Management

- **Loading States**: Automatic handling of connection loading states
- **Disabled States**: Proper disabled state during operations
- **Error States**: Graceful error handling and display

## Dependencies

The Wallet components rely on the following:

- `@consensys/ds3` for UI components (Button, Text, Spinner)
- React hooks for state management

## Integration with Web3

The Wallet components integrate with:

- **Wallet Providers**: MetaMask, WalletConnect, and other Web3 wallets
- **Connection Libraries**: wagmi, web3-react, and other connection libraries
- **State Management**: Redux, Zustand, and other state management solutions

### Example with wagmi

```tsx
import { useConnect, useDisconnect } from 'wagmi';
import { Web3LoginButton, DisconnectButton } from '@consensys/ds3-web3';

const MyComponent = () => {
  const { connect, connectors, isLoading } = useConnect();
  const { disconnect } = useDisconnect();
  
  const handleConnect = () => {
    connect({ connector: connectors[0] });
  };
  
  return (
    <View>
      <Web3LoginButton 
        connect={handleConnect}
        disabled={isLoading}
      />
      <DisconnectButton disconnect={disconnect} />
    </View>
  );
};
```

## Accessibility

The Wallet components automatically implement proper accessibility attributes:

### Accessibility Features

- **Button Roles**: Proper ARIA roles for button elements
- **Loading States**: ARIA attributes for loading states
- **Screen Reader Support**: Descriptive labels and states
- **Keyboard Navigation**: Full keyboard support
- **Focus Management**: Proper focus handling

### Best Practices

```tsx
<Web3LoginButton 
  connect={connect}
  className="focus:ring-2 focus:ring-primary focus:outline-none"
  accessibilityLabel="Connect to Web3 wallet"
/>
```

## Styling

The components use the following UI components from `@consensys/ds3`:

- `Button` for the main interaction
- `Text` for button content
- `Spinner` for loading states

You can customize the appearance using the `className` prop or by modifying the component styles.

### Common Styling Patterns

```tsx
// Primary connection button
<Web3LoginButton 
  connect={connect}
  className="bg-primary text-white rounded-lg px-6 py-3"
/>

// Secondary disconnect button
<DisconnectButton 
  disconnect={disconnect}
  className="bg-red-500 text-white rounded-lg px-4 py-2"
/>

// Full-width buttons
<Web3LoginButton 
  connect={connect}
  className="w-full bg-gradient-to-r from-blue-500 to-purple-600"
/>
```

## Error Handling

The components include built-in error handling:

- **Connection Errors**: Graceful handling of connection failures
- **Network Errors**: Proper handling of network issues
- **User Rejection**: Handling when users reject connection requests
- **Timeout Handling**: Managing connection timeouts

### Error Handling Example

```tsx
const MyComponent = () => {
  const [error, setError] = React.useState<string | null>(null);
  
  const connect = async () => {
    try {
      setError(null);
      await connectWallet();
    } catch (error) {
      if (error.code === 4001) {
        setError('User rejected connection');
      } else if (error.code === -32002) {
        setError('Connection request already pending');
      } else {
        setError('Failed to connect wallet');
      }
    }
  };
  
  return (
    <View>
      <Web3LoginButton connect={connect} />
      {error && <Text className="text-red-500">{error}</Text>}
    </View>
  );
};
```

## Performance Considerations

- **Lazy Loading**: Components are optimized for performance
- **Minimal Re-renders**: Efficient state management
- **Memory Management**: Proper cleanup of async operations
- **Bundle Size**: Lightweight implementation with minimal dependencies

## Security Considerations

- **No Private Key Storage**: Components never store private keys
- **Secure Communication**: Uses secure wallet communication protocols
- **User Consent**: Always requires explicit user consent for connections
- **Error Boundaries**: Proper error boundaries for security-related errors 