# Expo + DS3

This example provides a minimal setup to get DS3 working in Expo.

## Install DS3

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

### DS3 Configuration

Create `ds3.config.js` file:

```bash
touch ds3.config.js
```

Configure `ds3.config.js`:

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
  <ThemeProvider className="flex-1" config={ExpoConstants?.expoConfig?.extra?.DS3}>
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
import ds3Preset from "@consensys/ui-config/nativewind";
import ds3Config from "./ds3.config";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    './node_modules/@consensys/ui/**/*.{js,jsx,ts,tsx}',
    '!node_modules/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [ds3Preset(ds3Config)],
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
const { withDs3 } = require('@consensys/ui-config/metro');

const config = getDefaultConfig(__dirname);

module.exports = withDs3(config);
```

If using a monorepo (workspace), use the following configuration instead:

```js
const { getDefaultConfig } = require('expo/metro-config');
const { withDs3Workspace } = require('@consensys/ui-config/metro');

const config = getDefaultConfig(__dirname);

module.exports = withDs3Workspace(config);
```

#### Expo

Create a `app.config.js` file:

```bash
touch app.config.js
```

Configure `app.config.js`:

```js
import withDs3 from '@consensys/ui-config/expo';
import ds3Config from './ds3.config';

module.exports = ({ config }) => {
   return withDs3({ config, ds3Config });
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
