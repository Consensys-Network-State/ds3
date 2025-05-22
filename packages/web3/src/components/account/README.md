# Account Component

The `<Account />` component provides a user-friendly interface for displaying and managing a connected wallet account. It includes features like displaying the account address, ENS name resolution, and common wallet actions.

## Installation

```bash
pnpm add @consensys/ui-web3
```

## Usage Examples

### Basic Usage

```tsx
import { Account } from '@consensys/ui-web3';

function MyApp() {
  return (
    <Account />
  );
}
```

### With Custom Styling

```tsx
import { Account } from '@consensys/ui-web3';

function MyApp() {
  return (
    <Account className="custom-class" />
  );
}
```

## Component API

### `<Account />`

The main component that displays the connected wallet account with a dropdown menu for common actions.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional class names for styling |

### Features

- Displays wallet address with optional ENS name resolution
- Shows account avatar
- Dropdown menu with common actions:
  - Copy address to clipboard
  - View on Etherscan
  - Disconnect wallet

### Dependencies

The Account component relies on the following:
- `wagmi` for wallet connection and ENS resolution
- `@consensys/ui` for UI components
- `lucide-react-native` for icons

## Styling

The component uses the following UI components from `@consensys/ui`:
- `Button`
- `Text`
- `DropdownMenu` and related components
- `Icon`

You can customize the appearance using the `className` prop or by modifying the styles in `styles.ts`.

## Integration with Web3

The Account component integrates with:
- `useAccount` hook from wagmi for wallet connection
- `useDisconnect` hook from wagmi for wallet disconnection
- `useEnsName` hook from wagmi for ENS name resolution

## Accessibility

The component implements proper accessibility attributes through the underlying UI components:
- Proper ARIA roles and labels
- Keyboard navigation support
- Focus management 