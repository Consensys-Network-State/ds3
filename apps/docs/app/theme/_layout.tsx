import { LocalDrawer } from '@/components/LocalDrawer';

export default function ThemeLayout() {
  return (
    <LocalDrawer>
      <LocalDrawer.Screen name="index" options={{ title: 'Overview' }} />
      <LocalDrawer.Screen name="colors" options={{ title: 'Colors' }} />
      <LocalDrawer.Screen name="tokens" options={{ title: 'Tokens' }} />
    </LocalDrawer>
  );
}
