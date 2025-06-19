<p align="center">
  <img src="../../assets/ds3.png" alt="DS3 Logo" width="100" />
</p>

<h1 align="center">@consensys/ds3-web3</h1>

> 🚧 **Note**: This package is under active development. While we're working hard to make it production-ready, please be aware that APIs and features may change. We welcome your feedback and contributions as we continue to improve!
>
> 🌐 **Web Support Only** - Native support coming soon!

🚀 **Ultimate cross-platform blockchain components that feel native everywhere**

Build powerful Web3 interfaces that work seamlessly across web and mobile platforms, with a comprehensive set of components that handle blockchain interactions, wallet connections, and Ethereum-specific utilities.

```tsx
// One import. Any platform. Native everywhere.
import { Account, Address, ChainAvatar } from '@consensys/ds3-web3';
```

## ✨ Standout Features

✨ **Built on @consensys/ds3** - Leverages true cross-platform components with compound patterns, dual APIs, and unified styling through Tailwind + NativeWind

🔗 **Wallet Integration** - Seamless connection with MetaMask, WalletConnect, and other popular wallets

🌐 **Cross-Chain Support** - Display and interact with multiple blockchain networks through a unified interface

🔍 **ENS Resolution** - Automatic resolution of Ethereum addresses to human-readable ENS names


## 🚀 Get Started

```bash
pnpm add @consensys/ds3-web3
```

For detailed framework setup and configuration, see the [@consensys/ds3-config documentation](.../config).

## 📚 Component Library

DS3 Web3 gives you production-ready components for building modern blockchain interfaces:

### Account Components
- [**Account**](src/components/account) - Display and manage connected wallet accounts with ENS resolution

### Address Components
- [**Address**](src/components/address) - Display Ethereum addresses with ENS resolution and truncation
- [**AddressAvatar**](src/components/address) - Generate and display avatars based on Ethereum addresses
- [**AddressCard**](src/components/address) - Card layout for displaying addresses with avatars

### Chain Components

- [**ChainAvatar**](src/components/chain) - Display network avatars and indicators
- [**ChainSelector**](src/components/chain) - Network selection dropdown (coming soon)

### Wallet Components

- [**MetaMaskLogin**](src/components/wallet) - Connect to MetaMask wallet
- [**DisconnectButton**](src/components/wallet) - Disconnect current wallet
- [**WalletConnect**](src/components/wallet) - Connect to WalletConnect (coming soon)

## 🛠️ Development

```bash
# Install dependencies
pnpm i

# Watch and build
pnpm dev

# Production build
pnpm build
```

## 🤝 Contributing

We welcome contributions!

## 📜 License

MIT 