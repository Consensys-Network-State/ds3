import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@consensys/ds3';
import { generateConfig } from '@consensys/ds3-theme';
import themeConfig from '../../theme.config';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <SafeAreaProvider>
          <ThemeProvider config={generateConfig(themeConfig)}>
            {children}
          </ThemeProvider>
        </SafeAreaProvider>
      </body>
    </html>
  );
}
