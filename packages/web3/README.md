# @ds3/web3

Blockchain integration components for Design System 3.

## Overview

The web3 package provides blockchain integration components and utilities:

- Built on top of @ds3/ui components
- Wagmi and Viem integration for blockchain interactions
- Ethereum-specific utilities
- Web3 UI components

## Features

- Blockchain connection management
- Ethereum address display and manipulation
- Web3 specific UI components
- Integrates with popular Ethereum libraries

## Usage

```jsx
import { ConnectButton, Address, BlockieAvatar } from '@ds3/web3';

function MyComponent() {
  return (
    <div>
      <ConnectButton />
      <Address value="0x1234..." />
      <BlockieAvatar address="0x1234..." />
    </div>
  );
}
```

## Dependencies

- @ds3/ui
- wagmi
- viem
- ethereum-blockies-base64
- truncate-eth-address 