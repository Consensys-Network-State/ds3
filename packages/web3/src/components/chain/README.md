# Chain Components

The Chain components provide utilities for displaying and interacting with blockchain network information, including chain avatars and network indicators. These components help users identify and interact with different blockchain networks in a visually appealing way.

## Installation

Import the Chain components from the DS3 Web3 package.

```tsx
import { ChainAvatar } from '@consensys/ds3-web3';
```

## Examples

### Basic Chain Avatar

Display an avatar for a specific blockchain network.

```tsx live
<ChainAvatar chainId={1} />
```

### Ethereum Mainnet

Display the Ethereum mainnet avatar.

```tsx live
<ChainAvatar chainId={1} />
```

### Polygon Network

Display the Polygon network avatar.

```tsx live
<ChainAvatar chainId={137} />
```

### Optimism Network

Display the Optimism network avatar.

```tsx live
<ChainAvatar chainId={10} />
```

### Arbitrum Network

Display the Arbitrum network avatar.

```tsx live
<ChainAvatar chainId={42161} />
```

### Linea Network

Display the Linea network avatar.

```tsx live
<ChainAvatar chainId={59144} />
```

### Custom Styling

Apply custom styling to match your design system.

```tsx live
<View className="space-y-4">
  <ChainAvatar 
    chainId={1} 
    className="w-8 h-8 rounded-full border-2 border-blue-500"
  />
  <ChainAvatar 
    chainId={137} 
    className="w-10 h-10 rounded-lg shadow-lg"
  />
  <ChainAvatar 
    chainId={10} 
    className="w-12 h-12 rounded-xl border-4 border-orange-500"
  />
</View>
```

### With Custom Alt Text

Provide custom alt text for better accessibility.

```tsx live
<ChainAvatar 
  chainId={1} 
  alt="Ethereum Mainnet Network"
  className="w-6 h-6"
/>
```

### Multiple Networks

Display multiple network avatars together.

```tsx live
<View className="flex flex-row gap-2">
  {[1, 137, 10, 42161, 59144].map((chainId) => (
    <ChainAvatar 
      key={chainId} 
      chainId={chainId} 
      className="w-6 h-6"
    />
  ))}
</View>
```

### Network Selection

Use chain avatars in a network selection interface.

```tsx live
<View className="space-y-2">
  <Text className="font-semibold">Select Network:</Text>
  <View className="flex flex-row gap-2">
    {[
      { id: 1, name: 'Ethereum' },
      { id: 137, name: 'Polygon' },
      { id: 10, name: 'Optimism' },
      { id: 42161, name: 'Arbitrum' },
      { id: 59144, name: 'Linea' }
    ].map((network) => (
      <Button
        key={network.id}
        variant="outline"
        onPress={() => console.log(`Selected ${network.name}`)}
        className="flex flex-row items-center gap-2"
      >
        <ChainAvatar 
          chainId={network.id} 
          className="w-4 h-4"
        />
        <Text>{network.name}</Text>
      </Button>
    ))}
  </View>
</View>
```

## API Reference

Complete reference of all available props and their configurations.

### ChainAvatar

A component that displays an avatar representing a blockchain network.

```tsx
<ChainAvatar 
  chainId={1} 
  alt="Ethereum Network"
  className="custom-class"
/>
```

| Prop | Type | Description |
|------|------|-------------|
| `chainId` | `number` | The chain ID of the network |
| `alt` | `string` | Alt text for the avatar image |
| `className` | `string` | Additional class names for styling |

Inherits all [Avatar](https://reactnative.dev/docs/image) props.

## Supported Networks

The ChainAvatar component supports the following networks:

| Network | Chain ID |
|---------|----------|
| Ethereum | 1 |
| Polygon | 137 |
| Optimism | 10 | 
| Arbitrum | 42161 |
| Linea | 59144 |

### Default Fallback

For any unsupported chain ID, the component will display the Ethereum logo as a fallback.

## Features

### Core Functionality

- **Network Identification**: Visual representation of blockchain networks
- **Automatic Logo Loading**: Loads appropriate logos based on chain ID
- **Fallback Handling**: Gracefully handles unsupported networks
- **Responsive Design**: Adapts to different screen sizes and contexts

### Visual Features

- **High-Quality Logos**: Uses official network logos from trusted sources
- **Consistent Sizing**: Maintains aspect ratio across different sizes
- **Customizable Styling**: Full CSS class customization support
- **Accessibility**: Proper alt text and ARIA labels

### Network Support

- **Ethereum Ecosystem**: Comprehensive support for major Ethereum L2s
- **Extensible**: Easy to add support for new networks
- **Standardized**: Uses official chain IDs for consistency

## Dependencies

The Chain components rely on the following:

- `@consensys/ds3` for UI components (Avatar)
- `viem/chains` for chain definitions and metadata

## Integration with Web3

The Chain components integrate with:

- **Chain ID System**: Uses standardized chain IDs for network identification
- **Network Metadata**: Leverages official network information
- **Wallet Integration**: Compatible with wallet network switching

## Accessibility

The ChainAvatar component automatically implements proper accessibility attributes:

### Accessibility Features

- **Alt Text**: Descriptive alt text for network avatars
- **Screen Reader Support**: Proper ARIA labels for network identification
- **Semantic HTML**: Uses proper semantic elements for structure
- **Focus Management**: Proper focus handling for interactive elements

## Styling

The component uses the following UI components from `@consensys/ds3`:

- `Avatar` for network logo display

You can customize the appearance using the `className` prop or by modifying the component styles.

### Common Styling Patterns

```tsx
// Small network indicator
<ChainAvatar chainId={1} className="w-4 h-4" />

// Medium network avatar
<ChainAvatar chainId={137} className="w-6 h-6 rounded-full" />

// Large network display
<ChainAvatar chainId={10} className="w-12 h-12 rounded-lg shadow-lg" />

// Network with border
<ChainAvatar chainId={42161} className="w-8 h-8 border-2 border-primary" />
```

## Error Handling

The component includes built-in error handling:

- **Invalid Chain IDs**: Falls back to Ethereum logo for unsupported networks
- **Image Loading Errors**: Gracefully handles failed image loads
- **Network Errors**: Handles network issues when loading logos

## Performance Considerations

- **Optimized Images**: Uses optimized logo URLs for fast loading
- **Lazy Loading**: Images are loaded on demand
- **Caching**: Browser caching for frequently used network logos
- **Minimal Dependencies**: Lightweight implementation with minimal overhead
