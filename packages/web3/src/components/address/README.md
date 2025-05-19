# Address Components

The Address components provide a set of utilities for displaying and interacting with Ethereum addresses. This includes address display, avatar generation, and card layouts.

## Installation

```bash
pnpm add @ds3/web3
```

## Usage Examples

### Basic Address Display

```tsx
import { Address } from '@ds3/web3';

function MyApp() {
  return (
    <Address address="0x1234..." />
  );
}
```

### Address with Avatar

```tsx
import { AddressAvatar } from '@ds3/web3';

function MyApp() {
  return (
    <AddressAvatar address="0x1234..." />
  );
}
```

### Address Card

```tsx
import { AddressCard } from '@ds3/web3';

function MyApp() {
  return (
    <AddressCard address="0x1234..." />
  );
}
```

## Component API

### `<Address />`

A component for displaying Ethereum addresses with optional ENS name resolution and truncation.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `address` | `string` | Required | The Ethereum address to display |
| `ens` | `boolean` | `true` | Whether to attempt ENS name resolution |
| `truncate` | `boolean` | `true` | Whether to truncate the address |
| `className` | `string` | - | Additional class names for styling |

### `<AddressAvatar />`

A component that generates and displays an avatar based on an Ethereum address.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `address` | `string` | Required | The Ethereum address to generate avatar for |
| `className` | `string` | - | Additional class names for styling |

### `<AddressCard />`

A component that displays an address with its avatar in a card layout.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `address` | `string` | Required | The Ethereum address to display |
| `className` | `string` | - | Additional class names for styling |

## Features

- ENS name resolution
- Address truncation
- Avatar generation
- Card layout with avatar and address
- Customizable styling

## Dependencies

The Address components rely on the following:
- `wagmi` for ENS resolution
- `@ds3/ui` for UI components
- `truncate-eth-address` for address truncation

## Styling

The components use the following UI components from `@ds3/ui`:
- `Text`
- `Card` (for AddressCard)

You can customize the appearance using the `className` prop or by modifying the styles in `styles.ts`.

## Integration with Web3

The Address components integrate with:
- `useEnsName` hook from wagmi for ENS name resolution

## Accessibility

The components implement proper accessibility attributes through the underlying UI components:
- Proper ARIA roles and labels
- Semantic HTML structure
- Alt text for avatars 