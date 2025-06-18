# DS3 Next.js Template

A pre-configured Next.js template with DS3 (Design System 3) already set up and ready to use.

## Features

- 🎨 Pre-configured DS3 design system
- ⚡️ Built with Next.js 14 for server-side rendering
- 🎯 TypeScript support
- 🎭 Theme customization support
- 📱 React Native Web integration
- 🎯 Tailwind CSS with NativeWind preset
- 🔒 Safe Area Context support
- 🌐 App Router and Server Components

## Documentation

For comprehensive documentation about DS3, including UI components, theming, and configuration, visit the [DS3 Monorepo](https://github.com/Consensys-Network-State/ds3).

## Quick Start

### Option 1: Using degit

```bash
pnpm dlx degit Consensys-Network-State/ds3-nextjs-template ui
```

### Option 2: Using GitHub Template

1. Click "Use this template" on the GitHub repository
2. Clone your new repository

## Usage

Install dependencies:
```bash
pnpm install
```

Start the development server:
```bash
pnpm dev
```

Build for production:
```bash
pnpm build
```

Start the production server:
```bash
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Customization

The template comes with a default theme configuration in `theme.config.mjs`. You can customize the theme by modifying this file:

```js
export default {
    themes: {
      default: {
        colors: {
          neutral: 'gray',
          primary: 'blue',
          secondary: 'violet',
          error: 'red',
          warning: 'amber',
          success: 'green',
          info: 'blue',
        },
      },
    },
  };
```

For detailed theme customization options and documentation, refer to the [DS3 Theme Package](https://github.com/Consensys-Network-State/ds3/tree/main/packages/theme).

## Learn More

To learn more about Next.js and DS3:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
- [DS3 Documentation](https://github.com/Consensys-Network-State/ds3) - explore DS3 components and features

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
