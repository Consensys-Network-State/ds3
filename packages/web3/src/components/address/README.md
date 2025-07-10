# Address Components

The Address components provide a comprehensive set of utilities for displaying and interacting with Ethereum addresses. This includes address display with truncation, ENS name resolution, avatar generation, and card layouts for enhanced user experience.

## Installation

Import the Address components from the DS3 Web3 package.

```tsx
import { Address, AddressAvatar, AddressCard } from '@consensys/ds3-web3';
```

## Examples

### Basic Address Display

Create a simple address display with automatic truncation.

```tsx live
<Address address="0x1234567890123456789012345678901234567890" />
```

### Full Address Display

Display the complete address without truncation.

```tsx live
<Address address="0x1234567890123456789012345678901234567890" truncate={false} />
```

### With Custom ENS Resolver

Provide a custom ENS resolver for name resolution.

```tsx live
<Address 
  address="0x1234567890123456789012345678901234567890" 
  ensResolver={async (address) => {
    // Custom ENS resolution logic
    if (address === "0x1234567890123456789012345678901234567890") {
      return "vitalik.eth";
    }
    return null;
  }}
/>
```

### Address Avatar

Generate and display an avatar based on an Ethereum address.

```tsx live
<AddressAvatar address="0x1234567890123456789012345678901234567890" />
```

### Address Avatar with Custom Resolver

Provide a custom avatar resolver for profile images.

```tsx live
<AddressAvatar 
  address="0x1234567890123456789012345678901234567890" 
  avatarResolver={async (address) => {
    // Custom avatar resolution logic
    if (address === "0x1234567890123456789012345678901234567890") {
      return "https://euc.li/vitalik.eth";
    }
    return null;
  }}
/>
```

### Address Card

Display an address with its avatar in a card layout.

```tsx live
<AddressCard address="0x1234567890123456789012345678901234567890" />
```

### Custom Styling

Apply custom styling to match your design system.

```tsx live
<View className="space-y-4">
  <Address 
    address="0x1234567890123456789012345678901234567890" 
    className="text-lg font-bold text-primary"
  />
  <AddressAvatar 
    address="0x1234567890123456789012345678901234567890" 
    className="w-12 h-12 rounded-full border-2 border-primary"
  />
  <AddressCard 
    address="0x1234567890123456789012345678901234567890" 
    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-xl"
  />
</View>
```

### Complete Integration

Full integration with all custom resolvers and styling.

```tsx live
<AddressCard 
  address="0x1234567890123456789012345678901234567890"
  showCopyButton={true}
  ensResolver={async (address) => {
    if (address === "0x1234567890123456789012345678901234567890") {
      return "vitalik.eth";
    }
    return null;
  }}
  avatarResolver={async (address) => {
    if (address === "0x1234567890123456789012345678901234567890") {
      return "https://euc.li/vitalik.eth";
    }
    return null;
  }}
  className="bg-white shadow-lg border border-gray-200 p-4 rounded-lg"
  avatarClassName="w-10 h-10"
/>
```

## API Reference

Complete reference of all available props and their configurations.

### Address

A component for displaying Ethereum addresses with optional ENS name resolution and truncation.

```tsx
<Address 
  address="0x1234..." 
  truncate={true}
  ensResolver={customResolver}
  className="custom-class"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `address` | `0x${string}` | - | The Ethereum address to display |
| `truncate` | `boolean` | `true` | Whether to truncate the address |
| `ensResolver` | `(address: 0x${string}) => Promise<string \| null>` | - | Custom function to resolve ENS names |
| `className` | `string` | - | Additional class names for styling |

Inherits all [Text](https://reactnative.dev/docs/text) props.

### AddressAvatar

A component that generates and displays an avatar based on an Ethereum address.

```tsx
<AddressAvatar 
  address="0x1234..." 
  avatarResolver={customResolver}
  className="custom-class"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `address` | `0x${string}` | - | The Ethereum address to generate avatar for |
| `ens` | `boolean` | - | Whether to attempt ENS resolution (deprecated) |
| `ensResolver` | `(address: 0x${string}) => Promise<string \| null>` | - | Custom function to resolve ENS names |
| `avatarResolver` | `(address: 0x${string}) => Promise<string \| null>` | - | Custom function to resolve avatar URLs |
| `className` | `string` | - | Additional class names for styling |

Inherits all [Avatar](https://reactnative.dev/docs/image) props.

### AddressCard

A component that displays an address with its avatar in a card layout.

```tsx
<AddressCard 
  address="0x1234..." 
  showCopyButton={true}
  ensResolver={customResolver}
  avatarResolver={customAvatarResolver}
  className="custom-class"
  avatarClassName="avatar-class"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `address` | `0x${string}` | - | The Ethereum address to display |
| `showCopyButton` | `boolean` | `false` | Whether to show a copy button |
| `ensResolver` | `(address: 0x${string}) => Promise<string \| null>` | - | Custom function to resolve ENS names |
| `avatarResolver` | `(address: 0x${string}) => Promise<string \| null>` | - | Custom function to resolve avatar URLs |
| `className` | `string` | - | Additional class names for the card |
| `avatarClassName` | `string` | - | Additional class names for the avatar |

## Features

### Core Functionality

- **Address Display**: Shows Ethereum addresses with optional truncation
- **ENS Resolution**: Automatically resolves and displays ENS names when available
- **Avatar Generation**: Creates unique avatars based on wallet addresses
- **Card Layout**: Provides a structured layout for address display

### Address Truncation

The address component automatically truncates long addresses for better readability:

- **Default Format**: `0x1234...5678`
- **Customizable**: Can be disabled to show full addresses
- **Consistent**: Uses standardized truncation logic

### ENS Integration

- **Automatic Resolution**: Attempts to resolve ENS names for addresses
- **Fallback Handling**: Gracefully falls back to address display if resolution fails
- **Custom Resolvers**: Support for custom ENS resolution logic

### Avatar Features

- **Deterministic Generation**: Same address always generates the same avatar
- **Custom Avatars**: Support for custom avatar URLs via resolver
- **Fallback System**: Falls back to generated avatar if custom avatar fails

## Dependencies

The Address components rely on the following:

- `@consensys/ds3` for UI components (Text, Avatar, Card, Button)
- `@consensys/ds3-web3` for utility functions (truncateEthAddress)

## Integration with Web3

The Address components integrate with:

- **ENS Protocol**: For human-readable address resolution
- **Avatar Services**: For profile image generation and resolution
- **Blockchain Data**: For address validation and formatting

## Accessibility

The Address components automatically implement proper accessibility attributes:

### Accessibility Features

- **Screen Reader Support**: Proper ARIA labels for addresses and avatars
- **Alt Text**: Descriptive alt text for avatar images
- **Semantic HTML**: Uses proper semantic elements for structure
- **Focus Management**: Proper focus handling for interactive elements

## Styling

The components use the following UI components from `@consensys/ds3`:

- `Text` for address display
- `Avatar` for address avatars
- `Card` for address card layout
- `Button` for copy functionality

You can customize the appearance using the `className` prop or by modifying the styles in `styles.ts`.

## Error Handling

The components include built-in error handling:

- **ENS Resolution Errors**: Gracefully falls back to address display
- **Avatar Loading Errors**: Falls back to generated avatar
- **Network Errors**: Handles network issues when resolving external data
- **Invalid Addresses**: Validates address format before processing

## Performance Considerations

- **Memoized Resolvers**: ENS and avatar resolvers are called efficiently
- **Lazy Loading**: Avatar images are loaded on demand
- **Caching**: Consider implementing caching for ENS and avatar resolutions
- **Address Validation**: Efficient address format validation 