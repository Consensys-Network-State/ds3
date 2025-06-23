import { LocalDrawer } from '@/components/LocalDrawer';

export default function ComponentsLayout() {
  return (
    <LocalDrawer>
      <LocalDrawer.Screen name="index" options={{ title: 'Overview' }} />
      <LocalDrawer.Screen name="buttons" options={{ title: 'Buttons' }} />
      <LocalDrawer.Screen name="inputs" options={{ title: 'Inputs' }} />
      <LocalDrawer.Screen name="checkbox" options={{ title: 'Checkbox' }} />
      <LocalDrawer.Screen name="switch" options={{ title: 'Switch' }} />
      <LocalDrawer.Screen name="field" options={{ title: 'Fields' }} />
      <LocalDrawer.Screen name="form" options={{ title: 'Form' }} />
      <LocalDrawer.Screen name="icons" options={{ title: 'Icons' }} />
      <LocalDrawer.Screen name="spinner" options={{ title: 'Spinner' }} />
      <LocalDrawer.Screen name="highlight" options={{ title: 'Highlight' }} />
      <LocalDrawer.Screen name="jsx-playground" options={{ title: 'JSX Playground' }} />
    </LocalDrawer>
  );
} 