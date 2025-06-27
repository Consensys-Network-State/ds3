# Table Components

A set of custom table components built for the DS3 documentation app, featuring horizontal scrolling and theme integration.

## Components

- `<Table />` - Main table container with horizontal scrolling
- `<Table.Row />` - Table row component with optional striping
- `<Table.Cell />` - Table cell component with alignment options

## Installation

The components are available in the docs app:

```tsx
import { Table } from '@/components';
```

## Usage Examples

### Basic Table

```tsx live
<Table>
  <Table.Row isHeader>
    <Table.Cell>Name</Table.Cell>
    <Table.Cell>Age</Table.Cell>
    <Table.Cell>Email</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell>John Doe</Table.Cell>
    <Table.Cell>30</Table.Cell>
    <Table.Cell>john@example.com</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell>Jane Smith</Table.Cell>
    <Table.Cell>25</Table.Cell>
    <Table.Cell>jane@example.com</Table.Cell>
  </Table.Row>
</Table>
```


### Striped Table

```tsx live
<Table striped>
  <Table.Row isHeader>
    <Table.Cell>Component</Table.Cell>
    <Table.Cell>Status</Table.Cell>
    <Table.Cell>Version</Table.Cell>
  </Table.Row>
  <Table.Row isEven={false}>
    <Table.Cell>Button</Table.Cell>
    <Table.Cell>✅ Stable</Table.Cell>
    <Table.Cell>1.0.0</Table.Cell>
  </Table.Row>
  <Table.Row isEven={true}>
    <Table.Cell>Input</Table.Cell>
    <Table.Cell>✅ Stable</Table.Cell>
    <Table.Cell>1.0.0</Table.Cell>
  </Table.Row>
  <Table.Row isEven={false}>
    <Table.Cell>Switch</Table.Cell>
    <Table.Cell>✅ Stable</Table.Cell>
    <Table.Cell>1.0.0</Table.Cell>
  </Table.Row>
</Table>
```

### Compact Table with Custom Alignment

```tsx live
<Table compact>
  <Table.Row isHeader>
    <Table.Cell align="left">Name</Table.Cell>
    <Table.Cell align="center">Score</Table.Cell>
    <Table.Cell align="right">Rank</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell>Alice</Table.Cell>
    <Table.Cell align="center">95</Table.Cell>
    <Table.Cell align="right">1st</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell>Bob</Table.Cell>
    <Table.Cell align="center">87</Table.Cell>
    <Table.Cell align="right">2nd</Table.Cell>
  </Table.Row>
</Table>
```

### Color Variants

The Table component supports different color themes that affect the header background and striped row colors.

#### Neutral (Default)
```tsx live
<Table color="neutral" striped>
  <Table.Row isHeader>
    <Table.Cell>Status</Table.Cell>
    <Table.Cell>Count</Table.Cell>
  </Table.Row>
  <Table.Row isEven={false}>
    <Table.Cell>Active</Table.Cell>
    <Table.Cell>42</Table.Cell>
  </Table.Row>
  <Table.Row isEven={true}>
    <Table.Cell>Inactive</Table.Cell>
    <Table.Cell>18</Table.Cell>
  </Table.Row>
</Table>
```

#### Primary
```tsx live
<Table color="primary" striped>
  <Table.Row isHeader>
    <Table.Cell>Status</Table.Cell>
    <Table.Cell>Count</Table.Cell>
  </Table.Row>
  <Table.Row isEven={false}>
    <Table.Cell>Active</Table.Cell>
    <Table.Cell>42</Table.Cell>
  </Table.Row>
  <Table.Row isEven={true}>
    <Table.Cell>Inactive</Table.Cell>
    <Table.Cell>18</Table.Cell>
  </Table.Row>
</Table>
```

#### Success
```tsx live
<Table color="success" striped>
  <Table.Row isHeader>
    <Table.Cell>Status</Table.Cell>
    <Table.Cell>Count</Table.Cell>
  </Table.Row>
  <Table.Row isEven={false}>
    <Table.Cell>Completed</Table.Cell>
    <Table.Cell>156</Table.Cell>
  </Table.Row>
  <Table.Row isEven={true}>
    <Table.Cell>Pending</Table.Cell>
    <Table.Cell>23</Table.Cell>
  </Table.Row>
</Table>
```

#### Warning
```tsx live
<Table color="warning" striped>
  <Table.Row isHeader>
    <Table.Cell>Status</Table.Cell>
    <Table.Cell>Count</Table.Cell>
  </Table.Row>
  <Table.Row isEven={false}>
    <Table.Cell>Warning</Table.Cell>
    <Table.Cell>7</Table.Cell>
  </Table.Row>
  <Table.Row isEven={true}>
    <Table.Cell>Info</Table.Cell>
    <Table.Cell>12</Table.Cell>
  </Table.Row>
</Table>
```

#### Error
```tsx live
<Table color="error" striped>
  <Table.Row isHeader>
    <Table.Cell>Status</Table.Cell>
    <Table.Cell>Count</Table.Cell>
  </Table.Row>
  <Table.Row isEven={false}>
    <Table.Cell>Error</Table.Cell>
    <Table.Cell>3</Table.Cell>
  </Table.Row>
  <Table.Row isEven={true}>
    <Table.Cell>Critical</Table.Cell>
    <Table.Cell>1</Table.Cell>
  </Table.Row>
</Table>
```

#### Secondary
```tsx live
<Table color="secondary" striped>
  <Table.Row isHeader>
    <Table.Cell>Status</Table.Cell>
    <Table.Cell>Count</Table.Cell>
  </Table.Row>
  <Table.Row isEven={false}>
    <Table.Cell>Draft</Table.Cell>
    <Table.Cell>8</Table.Cell>
  </Table.Row>
  <Table.Row isEven={true}>
    <Table.Cell>Archived</Table.Cell>
    <Table.Cell>45</Table.Cell>
  </Table.Row>
</Table>
```

### Table with Fixed Column Widths

```tsx live
<Table>
  <Table.Row isHeader>
    <Table.Cell width={200}>Long Column Name</Table.Cell>
    <Table.Cell width={100}>Short</Table.Cell>
    <Table.Cell>Flexible Width</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell>This is a very long cell content</Table.Cell>
    <Table.Cell>Short</Table.Cell>
    <Table.Cell>This column will take remaining space</Table.Cell>
  </Table.Row>
</Table>
```

## Component API

### `<Table />`

The main table container with horizontal scrolling capability.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Table rows |
| `className` | `string` | - | Additional CSS classes |
| `style` | `ViewStyle` | - | Additional styles |
| `border` | `boolean` | `true` | Show table border |
| `striped` | `boolean` | `false` | Enable row striping |
| `compact` | `boolean` | `false` | Use compact spacing |
| `color` | `'neutral' \| 'primary' \| 'secondary' \| 'error' \| 'warning' \| 'success'` | `'neutral'` | Table color theme |

### `<Table.Row />`

A table row component that handles styling and passes props to child cells.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Table cells |
| `className` | `string` | - | Additional CSS classes |
| `style` | `ViewStyle` | - | Additional styles |
| `isHeader` | `boolean` | `false` | Style as header row |
| `isEven` | `boolean` | `false` | Mark as even row (for striping) |
| `isLast` | `boolean` | `false` | Mark as last row (affects border) |
| `border` | `boolean` | - | Override border setting |

### `<Table.Cell />`

A table cell component with text alignment and styling options.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Cell content |
| `className` | `string` | - | Additional CSS classes |
| `style` | `ViewStyle` | - | Additional styles |
| `textStyle` | `TextStyle` | - | Text-specific styles |
| `align` | `'left' \| 'center' \| 'right'` | `'left'` | Text alignment |
| `width` | `DimensionValue` | - | Fixed column width (number, string, or percentage) |
| `isHeader` | `boolean` | `false` | Style as header cell |
| `isEven` | `boolean` | `false` | Mark as even cell |
| `border` | `boolean` | - | Override border setting |

