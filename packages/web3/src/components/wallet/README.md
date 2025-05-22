# Wallet Components

The Wallet components provide utilities for wallet connection, disconnection, and interaction with various wallet providers like MetaMask.

## Installation

```bash
pnpm add @ds3/web3
```

## Usage Examples

### MetaMask Login

```tsx
import { MetaMaskLogin } from '@ds3/web3';

function MyApp() {
  return (
    <MetaMaskLogin />
  );
}
```

### Disconnect Button

```tsx
import { DisconnectButton } from '@ds3/web3';

function MyApp() {
  return (
    <DisconnectButton />
  );
}
```

## Component API

### `<MetaMaskLogin />`

A component that provides a button to connect to MetaMask wallet.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional class names for styling |
| `onSuccess` | `() => void` | - | Callback when connection is successful |
| `onError` | `(error: Error) => void` | - | Callback when connection fails |

### `<DisconnectButton />`

A component that provides a button to disconnect the current wallet.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional class names for styling |
| `onSuccess` | `() => void` | - | Callback when disconnection is successful |
| `onError` | `(error: Error) => void` | - | Callback when disconnection fails |

## Features

- MetaMask wallet connection
- Wallet disconnection
- Success/error callbacks
- Customizable styling

## Dependencies

The Wallet components rely on the following:
- `wagmi` for wallet connection and management
- `@ds3/ui` for UI components
- `lucide-react-native` for icons

## Styling

The components use the following UI components from `@ds3/ui`:
- `Button`
- `Icon`

You can customize the appearance using the `className` prop.

## Integration with Web3

The Wallet components integrate with:
- `useConnect` hook from wagmi for wallet connection
- `useDisconnect` hook from wagmi for wallet disconnection
- MetaMask provider integration

## Accessibility

The components implement proper accessibility attributes through the underlying UI components:
- Proper ARIA roles and labels
- Keyboard navigation support
- Focus management
- Clear button labels and states 