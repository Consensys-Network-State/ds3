# Account Component

The `<Account />` component provides a user-friendly interface for displaying and managing a connected wallet account. It includes features like displaying the account address, ENS name resolution, avatar generation, and common wallet actions through a dropdown menu.

## Installation

Import the Account component from the DS3 Web3 package.

```tsx
import { Account } from '@consensys/ds3-web3';
```

## Examples

### Basic

Create a simple account display with default functionality.

```tsx live
<Account 
  address="0x1234567890123456789012345678901234567890"
  disconnect={() => console.log('Disconnected')}
/>
```

### With Custom ENS Resolver and Custom Avatar Resolver

Provide a custom ENS resolver for name resolution and/or Custom Avatar Resolver.

```tsx live
<Account 
  address={"0x1234567890123456789012345678901234567890"}
  disconnect={() => console.log('Disconnected')}
  ensResolver={async (address) => {
    // Custom ENS resolution logic
    if (address === "0x1234567890123456789012345678901234567890") {
      return "vitalik.eth";
    }
    return null;
  }}
  avatarResolver={async (address) => {
    // Custom avatar resolution logic
    if (address === "0x1234567890123456789012345678901234567890") {
      return "https://euc.li/vitalik.eth";
    }
    return null;
  }}
/>
```

### Custom Styling

Apply custom styling to match your design system.

```tsx live
<Account 
  address="0x1234567890123456789012345678901234567890"
  disconnect={() => console.log('Disconnected')}
  className="bg-primary text-white rounded-lg px-4 py-2"
/>
```

## API Reference

Complete reference of all available props and their configurations.

### Account Root

The main Account component that provides the account display and dropdown menu.

```tsx
<Account 
  address="0x1234..." 
  disconnect={() => {}} 
  ensResolver={customResolver}
  avatarResolver={customAvatarResolver}
  className="custom-class"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `address` | `0x${string}` | - | The Ethereum address to display |
| `disconnect` | `() => void` | - | Function to call when disconnecting the wallet |
| `ensResolver` | `(address: 0x${string}) => Promise<string \| null>` | - | Custom function to resolve ENS names |
| `avatarResolver` | `(address: 0x${string}) => Promise<string \| null>` | - | Custom function to resolve avatar URLs |
| `className` | `string` | - | Additional class names for styling |

Inherits all [Button](https://reactnative.dev/docs/button) props.

## Features

### Core Functionality

- **Address Display**: Shows the connected wallet address with optional truncation
- **ENS Resolution**: Automatically resolves and displays ENS names when available
- **Avatar Generation**: Displays a unique avatar based on the wallet address
- **Dropdown Menu**: Provides quick access to common wallet actions

### Dropdown Actions

The account dropdown includes the following actions:

- **Copy Address**: Copies the wallet address to the clipboard
- **View on Explorer**: Opens the address on Etherscan
- **Disconnect**: Disconnects the current wallet

### Customization Options

- **Custom ENS Resolver**: Override the default ENS resolution logic
- **Custom Avatar Resolver**: Provide custom avatar URLs
- **Styling**: Full CSS class customization support
- **Button Props**: Inherits all standard button properties

## Dependencies

The Account component relies on the following:

- `@consensys/ds3` for UI components (Button, DropdownMenu, Text, Icon)
- `lucide-react-native` for icons (ChevronDown, Copy, ExternalLink, LogOut)
- `@consensys/ds3-web3` for Address and AddressAvatar components

## Integration with Web3

The Account component integrates with:

- **Wallet Connection**: Displays the currently connected wallet address
- **ENS Resolution**: Optional integration with ENS for human-readable names
- **Avatar Services**: Optional integration with avatar generation services
- **Blockchain Explorers**: Direct links to view addresses on Etherscan

## Accessibility

The Account component automatically implements proper accessibility attributes:

### Accessibility Features

- **WAI-ARIA Compliance**: Follows the WAI-ARIA design pattern for dropdown menus
- **Keyboard Navigation**: Full keyboard support for dropdown interaction
- **Screen Reader Support**: Proper ARIA attributes for menu items and states
- **Focus Management**: Automatic focus handling for dropdown interactions
- **Semantic HTML**: Uses proper semantic elements for structure

## Styling

The component uses the following UI components from `@consensys/ds3`:

- `Button` for the main trigger
- `DropdownMenu` and related components for the menu
- `Text` for displaying addresses and labels
- `Icon` for action icons
- `Address` and `AddressAvatar` for address display

You can customize the appearance using the `className` prop or by modifying the styles in `styles.ts`.

## Error Handling

The component includes built-in error handling:

- **ENS Resolution Errors**: Gracefully falls back to address display if ENS resolution fails
- **Avatar Resolution Errors**: Falls back to generated avatar if custom avatar fails to load
- **Network Errors**: Handles network issues when resolving external data

## Performance Considerations

- **Memoized Resolvers**: ENS and avatar resolvers are called efficiently
- **Lazy Loading**: Avatar images are loaded on demand
- **Caching**: Consider implementing caching for ENS and avatar resolutions in production 