# Expo + CUI

This example provides a minimal setup to get CUI working in Expo.

## Install CUI

This template was created with the following steps:

### Dependencies

Create a vite application:

```bash
pnpm create expo@latest
```

Install dependencies:

```bash
pnpm add @consensys/ui-config @consensys/ui
```

### CUI Configuration

Create `theme.config.js` file:

```bash
touch theme.config.js
```

Configure `theme.config.js`:

```js
const { generateConfig } = require('@consensys/ui-theme');

module.exports = generateConfig({
  themes: {
    default: {
      // use any radix colors - https://www.radix-ui.com/colors
      colors: {
        neutral: 'gray',
        primary: 'violet',
        secondary: 'teal',
        error: 'red',
        warning: 'yellow',
        success: 'green',
        // add custom schemes here
      },
    },
  },
});
```

Under `app/_layout.tsx`, replace the `ThemeProvider`:

```tsx
import { ThemeProvider } from "@consensys/ui";
import ExpoConstants from 'expo-constants';

// ...

return (
  <ThemeProvider className="flex-1" config={ExpoConstants?.expoConfig?.extra?.CUI}>
     // ...
  </ThemeProvider>
);
```

### Tailwind Configuration

Instantiate Tailwind:

```bash
pnpm exec tailwindcss init
```

Configure `tailwind.config.js`:

```js
import nativewindPreset from "@consensys/ui-config/nativewind";
import themeConfig from "./theme.config";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    './node_modules/@consensys/ui/**/*.{js,jsx,ts,tsx}',
    '!node_modules/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [nativewindPreset(themeConfig)],
}
```

Create a `global.css` file:

```bash
touch global.css
```

Configure `/global.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Under `app/_layout.tsx`, add:

```js
import "../global.css";
```

### Expo Configuration

#### Metro

Create a `metro.config.js` file:

```bash
touch metro.config.js
```

Configure `metro.config.js`:

```js
const { getDefaultConfig } = require('expo/metro-config');
const { withCui } = require('@consensys/ui-config/metro');

const config = getDefaultConfig(__dirname);

module.exports = withCui(config);
```

If using a monorepo (workspace), use the following configuration instead:

```js
const { getDefaultConfig } = require('expo/metro-config');
const { withCuiWorkspace } = require('@consensys/ui-config/metro');

const config = getDefaultConfig(__dirname);

module.exports = withCuiWorkspace(config);
```

#### Expo

Create a `app.config.js` file:

```bash
touch app.config.js
```

Configure `app.config.js`:

```js
import withCui from '@consensys/ui-config/expo';
import themeConfig from './theme.config';

module.exports = ({ config }) => {
   return withCui({ config, themeConfig });
};
```

#### Babel

Create a `babel.config.js` file:

```bash
touch babel.config.js
```

Create and configure `babel.config.js`:

```js
module.exports = function (api) {
   api.cache(true);

   return {
      presets: ['@consensys/ui-config/expo/babel'],
   };
};
```
