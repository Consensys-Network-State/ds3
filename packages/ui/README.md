<p align="center">
  <img src="../../assets/ds3.png" alt="DS3 Logo" width="100" />
</p>

<h1 align="center">@consensys/ds3</h1>

> 🚧 **Note**: This package is under active development. While we're working hard to make it production-ready, please be aware that APIs and features may change. We welcome your feedback and contributions as we continue to improve!

🚀 **Ultimate cross-platform React components that feel native everywhere**

Build breathtaking interfaces for both web and React Native with a single component library that respects each platform's conventions while providing a unified developer experience.

```tsx
// One import. Any platform. Native everywhere.
import { Button, Input, Icon } from '@consensys/ds3';
```

## ✨ Standout Features

🌐 **True Cross-Platform** - Components work natively on web and React Native with platform-specific optimizations

🔧 **Framework Agnostic** - Seamless integration with Vite, Expo and more through [@consensys/ds3-config](../config) plugins

🧩 **Compound Components** - Simple by default, infinitely customizable when needed

🔄 **Dual API** - Use familiar web APIs or React Native patterns - your choice, no compromise

♿ **Accessibility Built-in** - Ship inclusive experiences without extra effort

🎨 **Consistent Design** - Share color schemes and tokens across platforms

🔌 **Pluggable Styling** - [Tailwind CSS](https://tailwindcss.com/) + [NativeWind](https://www.nativewind.dev/) for unified styling that feels native everywhere

🖼️ **Universal SVG** - Use your favorite icon libraries seamlessly on any platform

## 🚀 Get Started

```bash
pnpm add @consensys/ds3
```

For detailed framework setup and configuration, see the [@consensys/ds3-config documentation](../config).

## 📚 Component Library

DS3 UI gives you production-ready components for building modern interfaces:

### Core Components

- [**Button**](src/components/button) - Pressable controls with multiple variants, states, and compositions
- [**Checkbox**](src/components/checkbox) - Selection controls with accessible states and custom icons
- [**Heading**](src/components/heading) - Semantic typography with consistent hierarchy across platforms
- [**Icon**](src/components/icon) - Universal SVG rendering with perfect platform adaptation
- [**Input**](src/components/input) - Text fields with validation, icons, and platform-specific behaviors
- [**Spinner**](src/components/spinner) - Loading indicators with customizable animations
- [**Switch**](src/components/switch) - Toggle controls with smooth animations
- [**Text**](src/components/text) - Typography components with consistent styling everywhere

### Form Components

- [**Field**](src/components/field) - Foundational form fields with proper labeling and structure
- [**Fields**](src/components/fields) - High-level form controls with built-in validation and accessibility

### Coming Soon

- **Dialog** - Modal dialog experiences
- **Select** - Dropdown selection menus
- **Avatar** - User representation components
- **Card** - Content containers with flexible layouts
- **Badge** - Status indicators and counters

## 🏛️ Architectural Excellence

DS3 UI is built on six powerful architectural patterns that work together to deliver exceptional developer and user experiences:

### 1. 🌐 Platform Adaptation

Components intelligently adapt to their environment while maintaining consistent APIs:

```tsx
// Same import, same API, platform-perfect behavior
import { Input } from '@consensys/ds3';

// Works perfectly on web and native
<Input 
  placeholder="Enter your name"
  color="primary"
/>
```

DS3 UI components follow a consistent organization pattern that enables cross-platform functionality:

#### Component Architecture

| File | Purpose |
|------|---------|
| `Component.tsx` | React Native implementation |
| `Component.web.tsx` | Web implementation |
| `Component.shared.tsx` | Shared compound elements (Icon, Text, etc.) |
| `context.ts` | State sharing for [compound components](#2--compound-components) |
| `styles.ts` | Shared [CVA](https://cva.style/docs) styling definitions |
| `utils.ts` | [Dual-API](#6--dual-api) handling |
| `types.ts` | TypeScript type definitions |
| `index.ts` | Named exports |

#### Implementation Strategies

DS3 UI uses two main approaches to implement cross-platform components:

**1. Custom Implementation**

Most components like `<Button />`, `<Input />`, and `<Icon />` use platform-specific implementations:

```tsx
// Input.tsx (React Native specific)
export const Input = (props) => <TextInput {...props} />;

// Input.web.tsx (Web specific)
export const Input = (props) => <input {...props} />;
```

**2. Primitives-Based Implementation**

Some components build on existing accessibility primitives:

```tsx
// Checkbox.tsx uses RN Primitives
import * as CheckboxPrimitive from '@rn-primitives/checkbox';

// Checkbox.web.tsx uses Radix UI
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
```

These leverage [Radix UI](https://www.radix-ui.com/primitives) (web) and [RN Primitives](https://rn-primitives.vercel.app/) (React Native) for consistent behavior and accessibility.

### 2. 🧩 Compound Components

Simple by default, infinitely customizable when needed:

```tsx
// Simple usage - clean and concise
<Button color="primary">
  Sign Up
</Button>

// Advanced usage - full control over structure and styling
<Button variant="outline" color="primary" className="px-8 rounded-full">
  <Button.Icon icon={Mail} className="mr-2" />
  <Button.Text className="font-bold tracking-wide">Contact Us</Button.Text>
  <Button.Spinner loadingIcon={RefreshCw} className="ml-3 animate-spin" />
</Button>
```

**Power features:**
- ⚡ **Context sharing** - Child components automatically inherit parent state
- 🎛️ **Precise control** - Position and style each element exactly how you want
- 🎭 **Dynamic rendering** - Show/hide elements based on component state

For a deeper dive into the pattern, see the [Patterns.dev guide](https://www.patterns.dev/react/compound-pattern/).

### 3. 🔌 Framework Integration

Consistent experience across multiple React frameworks:

```tsx
// Works in React DOM (Vite)
// Works in React Native (Expo)
// Works in Next.js (coming soon)
import { Button, Input } from '@consensys/ds3';
```

**Integration features:**
- 🏗️ **Framework plugins** - Easy setup with [@consensys/ds3-config](../config)  framework-specific plugins
- 🧰 **Configuration presets** - Optimized defaults for each framework
- 🔄 **Shared APIs** - Consistent component behavior regardless of framework

Framework-specific optimizations are handled by [@consensys/ds3-config](../config) plugins, allowing your components to work seamlessly in any React environment.

### 4. ♿ Accessibility By Default

Ship accessible experiences without extra effort:

- 🔤 **ARIA mapping** - Web attributes automatically map to native equivalents
- ⌨️ **Keyboard navigation** - Full keyboard support on every platform
- 🗣️ **Screen reader optimization** - Proper roles and states for assistive technology
- 🌈 **Focus management** - Visual indicators and proper focus trapping

#### 🔄 Accessibility Prop Mapping

The library automatically maps accessibility props between platforms. Here are a few common examples:

| Web Props | Native Props | Component |
|-----------|--------------|-----------|
| `aria-disabled` | `accessibilityState.disabled` | Button, Input |
| `aria-busy` | `accessibilityState.busy` | Button, Input |
| `role="button"` | `accessibilityRole="button"` | Button |

```tsx
// Web accessibility
<Button 
  aria-disabled={isLoading}
  aria-busy={isLoading}
  role="button"
>
  Submit
</Button>

// Native accessibility
<Button 
  accessibilityState={{
    disabled: isLoading,
    busy: isLoading
  }}
  accessibilityRole="button"
>
  <Button.Text>Submit</Button.Text>
</Button>
```

### 5. 🎨 Unified Styling

One styling system, perfect everywhere:

```tsx
// Consistent styling API across platforms
<Text 
  size="lg" 
  weight="bold" 
  color="primary"
  className="underline opacity-90" // Works on web and native!
/>
```

**Style features:**
- 🌊 **Tailwind + NativeWind** - Use familiar [Tailwind CSS](https://tailwindcss.com/) classes everywhere through [NativeWind](https://www.nativewind.dev/)
- 🎭 **Variants** - Consistent styling API with [class-variance-authority](https://cva.style/docs) (CVA)
- 🎛️ **Theme tokens** - Shared design tokens for colors, spacing, and typography

### 6. 🔄 Dual API

While Platform Adaptation handles the underlying implementation differences, Dual API gives you the freedom to write code in your preferred style. Whether you're a web developer or React Native developer, you can use the APIs you're most comfortable with.

**Dual API features:**
- 🌐 **Web-first development** - Use familiar DOM APIs (`onClick`, `onChange`, `type`)
- 📱 **Native-first development** - Use React Native APIs (`onPress`, `onChangeText`)
- 🛡️ **Type safety** - Full TypeScript support for both platforms
- 🔄 **Automatic conversion** - Props map correctly between platforms
- 🧠 **Smart detection** - Components adapt to how you use them

#### 📋 The Rules

1. **🌐 Web-only Development**
   - Use ONLY web props (`onClick`, `onChange`, `type`)
   - Get full DOM access and browser features
   - Perfect for web-only applications

2. **📱 Native/Hybrid Development**
   - Use ONLY native props (`onPress`, `onChangeText`)
   - Consistent with React Native patterns
   - Works across all platforms

3. **⚠️ Never Mix APIs**
   ```tsx
   // ❌ INCORRECT: Using web props in native/hybrid code
   <Button 
     onClick={() => {}} // Will be ignored on native!
     onPress={handlePress}
   >
     <Button.Text>Mixed Props Button</Button.Text>
   </Button>

   // ✅ CORRECT: 🌐 Web-only code can use web props
   <Button 
     onClick={handleClick} // Perfectly fine in web-only code!
   >
     <Button.Text>Web Button</Button.Text>
   </Button>

   // ✅ CORRECT: 📱🌐  Native/hybrid code must use native props
   <Button 
     onPress={handlePress}
   >
     <Button.Text>Native Button</Button.Text>
   </Button>
   ```

#### 🔄 Prop Mapping

For hybrid applications, the library automatically maps native props to web props. This one-way mapping ensures React Native code works seamlessly on web. Here are a few common examples:

| Native Props | Web Props | Component |
|--------------|-----------|-----------|
| `onPress` | `onClick` | Button |
| `onChangeText` | `onChange` | Input |
| `secureTextEntry` | `type="password"` | Input |

> ⚠️ **Important Rules**: 
> 1. **Never use web props in native code** - they will be silently ignored
> 2. **Never mix web and native props** - choose one style and stick with it

#### 📘 Type-Safe Events

The library provides platform-specific event types for type safety:

```tsx
import type { WebClickEvent, NativePressEvent } from '@consensys/ds3';

// 🌐 Web events
<Button onClick={(e: WebClickEvent) => console.log(e.currentTarget)}>
  Click Me
</Button>

// 📱 Native events
<Button onPress={(e: NativePressEvent) => console.log(e.nativeEvent)}>
  <Button.Text>Press Me</Button.Text>
</Button>
```

| Web Types | Native Types | Description |
|-----------|--------------|-------------|
| `WebClickEvent` | `NativePressEvent` | Button click/press events |
| `WebFocusEvent` | `NativeFocusEvent` | Focus/blur events |
| `WebChangeEvent` | `NativeChangeEvent` | Input change events |

#### 🎯 Platform Adaptation vs Dual API

- **Platform Adaptation**: Handles the underlying implementation differences (DOM vs Native)
- **Dual API**: Gives you the freedom to write code in your preferred style

### 7. 🔌 Slot Pattern

Replace any component part with your own elements:

```tsx
// Button as a link using asChild
<Button variant="solid" color="primary" asChild>
  <a href="https://example.com">Visit Website</a>
</Button>

// Button as a router link
<Button variant="outline" color="secondary" asChild>
  <Link to="/dashboard">Go to Dashboard</Link>
</Button>
```

The Slot pattern allows you to replace a component's default root element with your own custom element, while preserving all styling, behavior, and accessibility features.

When you pass `asChild={true}` to a component:

1. The component renders a `Slot` component instead of its default element
2. The `Slot` captures all props from the parent component
3. It applies those props to the first child element you provide
4. The child element becomes the new root, inheriting all behavior

The rendered DOM with `asChild` would be essentially:

```html
<a 
  href="https://example.com" 
  class="bg-neutral-a11"
  role="button"
>
  Visit Website
</a>
```

Our components use different Slot implementations based on platform:

- **Web**: Uses [`@radix-ui/react-slot`](https://www.radix-ui.com/primitives/docs/utilities/slot) for DOM elements
- **Native**: Uses [`@rn-primitives/slot`](https://rn-primitives.vercel.app/slot/) for React Native components

This allows the same API to work seamlessly across platforms while respecting platform-specific behavior.

**Slot power:**
- 🎭 **Style inheritance** - Your elements inherit DS3 styling
- 🔌 **Behavior injection** - DS3 behaviors transfer to your elements
- ♿ **Accessibility transfer** - Accessibility attributes preserved

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

We welcome contributions! Check out our [Contributing Guidelines](CONTRIBUTING.md) for detailed information on our development workflow, code standards, and how to submit changes.

## 📜 License

MIT 
