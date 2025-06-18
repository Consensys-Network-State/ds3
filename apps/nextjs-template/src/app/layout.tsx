import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@consensys/ds3';
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
          <ThemeProvider config={global.DS3}>
            {children}
          </ThemeProvider>
        </SafeAreaProvider>
      </body>
    </html>
  );
}