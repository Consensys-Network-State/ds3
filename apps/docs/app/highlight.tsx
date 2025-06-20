import { ScrollView, View, Pressable } from 'react-native';
import { Highlight, Text, openLink } from '@consensys/ds3';

export default function HighlightPage() {
  const basicExample = `import { Highlight } from '@consensys/ds3';

// Basic usage
<Highlight 
  code="const hello = 'world';" 
  language="javascript" 
/>`;

  const customStylingExample = `// With custom styling
<Highlight 
  code={\`
function greet(name) {
  return \`Hello, \${name}!\`;
}
  \`}
  language="javascript"
  className="p-4 rounded-lg bg-neutral-1"
/>`;

  const prismThemeExample = `// Using a Prism.js preset theme
import { themes } from 'prism-react-renderer';

<Highlight 
  code="const example = 'code';" 
  language="javascript"
  theme={themes.vsDark} // or themes.vsLight, themes.github, etc.
/>`;

  const customThemeExample = `// Using a custom theme
const colors = useThemeColors();

const customTheme = {
  plain: {
    color: colors.neutral11,
    backgroundColor: colors.neutral12,
  },
  styles: [
    {
      types: ['keyword'],
      style: {
        color: colors.primary4,
      },
    },
    // ... more token styles
  ],
};

<Highlight 
  code="const example = 'code';" 
  language="javascript"
  theme={customTheme}
/>`;

  const propsExample = `interface HighlightProps {
  code: string;
  language?: string;
  className?: string;
  theme?: PrismTheme;
  // ... all other prism-react-renderer props
}`;

  return (
    <ScrollView className="h-screen bg-primary-1">
      <View className="flex-1 items-center pb-4">
        <View className="w-full max-w-[1200px] px-4 h-full gap-4">
          <Text className="text-h1">Highlight Component</Text>
          
          <Text className="text-base text-neutral-11">
            The &lt;Highlight /&gt; component provides syntax highlighting for code blocks with a custom DS3 theme that adapts to your design system colors. Built with{' '}
            <Pressable onPress={() => openLink('https://github.com/FormidableLabs/prism-react-renderer')}>
              <Text className="text-primary-11 underline hover:text-primary-10 cursor-pointer">
                prism-react-renderer
              </Text>
            </Pressable>{' '}
            for robust syntax highlighting support.
          </Text>

          <Text className="text-h2">Installation</Text>
          <View className="bg-neutral-3 p-4 rounded-lg">
            <Highlight code="pnpm add @consensys/ds3" language="bash" />
          </View>

          <Text className="text-h2">Usage Examples</Text>
          
          <Text className="text-h3">Basic usage</Text>
          <View className="bg-neutral-3 p-4 rounded-lg">
            <Highlight code={basicExample} language="tsx" />
          </View>

          <Text className="text-h3">With custom styling</Text>
          <View className="bg-neutral-3 p-4 rounded-lg">
            <Highlight code={customStylingExample} language="tsx" />
          </View>

          <Text className="text-h3">Using a Prism.js preset theme</Text>
          <View className="bg-neutral-3 p-4 rounded-lg">
            <Highlight code={prismThemeExample} language="tsx" />
          </View>

          <Text className="text-h3">Using a custom theme</Text>
          <View className="bg-neutral-3 p-4 rounded-lg">
            <Highlight code={customThemeExample} language="tsx" />
          </View>

          <Text className="text-h2">Component API</Text>
          <Text className="text-h3">&lt;Highlight /&gt;</Text>
          <Text className="text-base text-neutral-11">
            The main component that renders syntax-highlighted code.
          </Text>

          <Text className="text-h3">Props</Text>
          <View className="bg-neutral-3 p-4 rounded-lg">
            <Highlight code={propsExample} language="typescript" />
          </View>

          <Text className="text-base text-neutral-11">
            | Prop | Type | Default | Description |
            |------|------|---------|-------------|
            | `code` | `string` | - | The code string to highlight |
            | `language` | `string` | `'javascript'` | The programming language for syntax highlighting |
            | `theme` | `object` | DS3 theme | The Prism.js theme object to use |
            | `className` | `string` | `''` | Additional class names for styling |
          </Text>

          <Text className="text-h2">Custom Themes</Text>
          <Text className="text-base text-neutral-11">
            The component uses a custom DS3 theme by default that adapts to your design system colors. To use custom themes:
          </Text>
          <Text className="text-base text-neutral-11">
            1. **Use built-in Prism.js themes**: Import from `prism-react-renderer/themes`
            2. **Create custom themes**: Follow the{' '}
            <Pressable onPress={() => openLink('https://prismjs.com/docs/Prism.html#.highlight')}>
              <Text className="text-primary-11 underline hover:text-primary-10 cursor-pointer">
                Prism.js theme format
              </Text>
            </Pressable>
            3. **Reference our theme implementation**: See `packages/ui/src/components/highlight/theme.ts` for how we structure DS3 themes
          </Text>

          <Text className="text-h2">Supported Languages</Text>
          <Text className="text-base text-neutral-11">
            The component supports all languages supported by Prism.js. See the{' '}
            <Pressable onPress={() => openLink('https://prismjs.com/#supported-languages')}>
              <Text className="text-primary-11 underline hover:text-primary-10 cursor-pointer">
                full list of supported languages
              </Text>
            </Pressable>{' '}
            in the Prism.js documentation, including:
          </Text>
          <Text className="text-base text-neutral-11">
            - JavaScript/TypeScript
            - JSX/TSX
            - Python
            - Java
            - C/C++
            - CSS
            - HTML
            - JSON
            - SQL
            - And many more
          </Text>

          <Text className="text-h2">Theme Integration</Text>
          <Text className="text-base text-neutral-11">
            The Highlight automatically uses your DS3 theme colors:
          </Text>
          <Text className="text-base text-neutral-11">
            - **Keywords**: Primary colors
            - **Strings**: Success colors
            - **Comments**: Neutral colors
            - **Numbers/Booleans**: Secondary colors
            - **Variables**: Warning colors
            - **Functions/Classes**: Warning colors
            - **Punctuation**: Neutral colors
          </Text>

          <Text className="text-h2">Platform Support</Text>
          <Text className="text-base text-neutral-11">
            The component works seamlessly across platforms:
          </Text>
          <Text className="text-base text-neutral-11">
            - **Web**: Uses system monospace fonts for optimal readability
            - **React Native**: Uses the platform's monospace font
          </Text>

          <Text className="text-h2">Implementation Details</Text>
          <Text className="text-base text-neutral-11">
            The component uses `prism-react-renderer` for syntax highlighting and creates a custom theme based on your DS3 color palette. It renders each token individually to ensure proper color application and supports both light and dark themes automatically.
          </Text>

          <Text className="text-h2">Accessibility</Text>
          <Text className="text-base text-neutral-11">
            - The component preserves the semantic structure of code
            - Colors are chosen to maintain sufficient contrast ratios
            - Consider using with appropriate labels or ARIA attributes in your implementation
          </Text>
        </View>
      </View>
    </ScrollView>
  );
} 