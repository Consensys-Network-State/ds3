import { LocalDrawer } from '@/components/LocalDrawer';

export default function ComponentsLayout() {
  return (
    <LocalDrawer>
      <LocalDrawer.Screen name="index" options={{ title: 'Overview' }} />
      <LocalDrawer.Screen name="text" options={{ title: 'Text' }} />
      <LocalDrawer.Screen name="icons" options={{ title: 'Icons' }} />
      <LocalDrawer.Screen name="spinner" options={{ title: 'Spinner' }} />
      <LocalDrawer.Screen name="buttons" options={{ title: 'Button' }} />
      <LocalDrawer.Screen name="avatar" options={{ title: 'Avatar' }} />
      <LocalDrawer.Screen name="tag" options={{ title: 'Tag' }} />
      <LocalDrawer.Screen name="card" options={{ title: 'Card' }} />
      <LocalDrawer.Screen name="accordion" options={{ title: 'Accordion' }} />
      <LocalDrawer.Screen name="table" options={{ title: 'Table' }} />
      <LocalDrawer.Screen name="inputs" options={{ title: 'Input' }} />
      <LocalDrawer.Screen name="checkbox" options={{ title: 'Checkbox' }} />
      <LocalDrawer.Screen name="switch" options={{ title: 'Switch' }} />
      <LocalDrawer.Screen name="field" options={{ title: 'Field' }} />
      <LocalDrawer.Screen name="fields" options={{ title: 'Fields' }} />
      <LocalDrawer.Screen name="highlight" options={{ title: 'Highlight' }} />
      <LocalDrawer.Screen name="code-block" options={{ title: 'Code Block' }} />
      <LocalDrawer.Screen name="markdown" options={{ title: 'Markdown' }} />
    </LocalDrawer>
  );
}
