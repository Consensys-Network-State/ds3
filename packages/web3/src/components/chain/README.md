# Chain Components

The Chain components provide utilities for displaying and interacting with blockchain network information, including chain avatars and network indicators.

## Installation

```bash
pnpm add @ds3/web3
```

## Usage Examples

### Chain Avatar

```tsx
import { ChainAvatar } from '@ds3/web3';

function MyApp() {
  return (
    <ChainAvatar chainId={1} />
  );
}
```

## Component API

### `<ChainAvatar />`

A component that displays an avatar representing a blockchain network.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `chainId` | `number` | Required | The chain ID of the network |
| `className` | `string` | - | Additional class names for styling |

## Features

- Network avatar display
- Support for multiple networks
- Customizable styling

## Dependencies

The Chain components rely on the following:
- `@ds3/ui` for UI components
- `wagmi` for chain information

## Styling

The components use the following UI components from `@ds3/ui`:
- `Avatar`

You can customize the appearance using the `className` prop.

## Integration with Web3

The Chain components integrate with:
- Chain ID system for network identification
- Network metadata for avatar display

## Accessibility

The components implement proper accessibility attributes through the underlying UI components:
- Proper ARIA roles and labels
- Alt text for network avatars
- Semantic HTML structure 