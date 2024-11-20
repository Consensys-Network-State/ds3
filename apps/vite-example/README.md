# Vite + DS3

This example provides a minimal setup to get DS3 working in Vite.

## Installing DS3

This template was created with the following steps:

Create a vite application:

`pnpm create vite`

Install dev dependencies:

```
pnpm add -D @ds3/react @ds3/nativewind
```

Instantiate Tailwind:

```
npx tailwindcss init -p
```

Create and configure `tailwind.config.js`:

```js
import ds3 from "@ds3/react/tailwind.config";

// /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/@ds3/react/**/*.{js,jsx,ts,tsx}',
    '!node_modules/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [ds3]
}

```

Configure `vite.config.ts`:

Note: remove existing `@vitejs/plugin-react`

```js
import { defineConfig } from 'vite'
import { vitePlugin } from '@ds3/nativewind';

export default defineConfig(({ command }) => {
  return {
    plugins: [
      vitePlugin(command),
    ],
  }
});

```

Add tailwind to `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Add types to `src/vite-end.d.ts`

```
/// <reference types="nativewind/types" />
```

Add `Provder.tsx` to `main.tsx`:

```js
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from "@ds3/react";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
)
```
