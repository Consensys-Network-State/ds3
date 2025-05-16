# Vite + DS3

This example provides a minimal setup to get DS3 working in Vite.

## Installing DS3

This template was created with the following steps:

### Dependencies

Create a vite application:

```bash
pnpm create vite
```

Install dependencies:

```bash
pnpm add @ds3/ui @ds3/core react-native-web react-native-safe-area-context
```

### DS3 Configuration

Create `ds3.config.js` file:

```bash
touch ds3.config.js
```

Configure `ds3.config.js`:

```js
const { generateConfig } = require('@ds3/core');

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

Under `src/main.tsx`, add the following:

```tsx
import { ThemeProvider } from "@ds3/ui";
import { SafeAreaProvider } from 'react-native-safe-area-context';

// ...

return (
  <SafeAreaProvider>
      <ThemeProvider config={import.meta.env.DS3}>
         // ...
      </ThemeProvider>
  </SafeAreaProvider>
);
```

### Tailwind Configuration

Instantiate Tailwind:

```
pnpm exec tailwindcss init -p
```

Configure `tailwind.config.js`:

```js
import ds3Preset from "@ds3/core/nativewind";
import ds3Config from "./ds3.config";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/@ds3/ui/**/*.{js,jsx,ts,tsx}',
    '!node_modules/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [ds3Preset(ds3Config)]
}
```

Add to `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Vite Configuration

Replace `vite.config.ts` with the following:

```js
import { defineConfig } from 'vite'
import ds3Plugin from '@ds3/core/vite';
import ds3Config from "./ds3.config";

export default defineConfig(({ command }) => {
  return {
    plugins: [
      ds3Plugin(command, ds3Config),
    ],
  }
});
```

Add types to `src/vite-end.d.ts`

```
/// <reference types="nativewind/types" />
```

### Troubleshooting

Sometimes the following error occurs: `Uncaught ReferenceError: exports is not defined`.

Fix by adding this to `index.html`:

```
<script>
  /* https://stackoverflow.com/questions/43042889/typescript-referenceerror-exports-is-not-defined */
  var exports = {};
</script>
```