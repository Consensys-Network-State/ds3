import { LocalDrawer } from '@/components/LocalDrawer';

export default function Web3Layout() {
  return (
    <LocalDrawer>
      <LocalDrawer.Screen name="index" options={{ title: 'Overview' }} />
      <LocalDrawer.Screen name="account" options={{ title: 'Account' }} />
      <LocalDrawer.Screen name="address" options={{ title: 'Address' }} />
      <LocalDrawer.Screen name="chain" options={{ title: 'Chain' }} />
      <LocalDrawer.Screen name="wallet" options={{ title: 'Wallet' }} />
    </LocalDrawer>
  );
} 