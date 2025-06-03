# Heading Component

The `<Heading />` components provide cross-platform typography elements for section headings (H1-H6) that adapt to both web and React Native environments while maintaining consistent styling.

## Installation

```bash
pnpm add @consensys/ds3
```

## Usage Examples

The Heading components allow you to create properly styled and semantic headings across platforms.

```tsx
import { H1, H2, H3, H4, H5, H6 } from '@consensys/ds3';

function PageHeadings() {
  return (
    <>
      <H1>Main Page Title</H1>
      <H2>Section Heading</H2>
      <H3>Subsection Title</H3>
      <H4>Minor Section</H4>
      <H5>Small Heading</H5>
      <H6>Micro Heading</H6>
    </>
  );
}
```

## Component API

### `<H1 />` through `<H6 />`

Components for rendering headings from level 1 (largest) to level 6 (smallest).

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | **Required** | The content of the heading |
| `className` | `string` | - | Additional class names for custom styling |

Plus any additional props that are valid for the underlying elements (`<h1>` - `<h6>` on web, `Text` component on native).

## Styling

Each heading level has its own default styling defined in the `headingClasses` object:

```tsx
// Default heading classes
{
  1: 'text-h1',
  2: 'text-h2',
  3: 'text-h3',
  4: 'text-h4',
  5: 'text-h5',
  6: 'text-h6',
}
```

### Custom Styling

You can apply additional styles using the `className` prop:

```tsx
<H1 className="text-primary underline mb-4">
  Custom Styled Heading
</H1>
```

## Cross-Platform Implementation

The Heading components have platform-specific implementations to ensure proper rendering:

- **Web**: Uses the native HTML heading elements (`h1` through `h6`) with appropriate styling (`Heading.web.tsx`)
- **Native**: Uses the `Text` component with heading-specific styles (`Heading.tsx`)

Both implementations maintain the same API and styling options while adapting to platform-specific requirements.

## Accessibility

The Heading components automatically implement proper heading semantics:

- On web, they use the appropriate HTML heading elements (`<h1>` through `<h6>`)
- On native, they set the appropriate accessibility roles and traits

Using semantic headings is important for:
- Creating a clear document outline
- Helping users navigate with assistive technologies
- Improving SEO and document structure

## Best Practices

- Use headings in a hierarchical order (H1, then H2, etc.) without skipping levels
- Limit use of H1 to once per page (usually for the main title)
- Use meaningful, descriptive text that explains the content of the section
- Keep heading text concise for better readability and scanning

Example of proper heading hierarchy:

```tsx
function StructuredPage() {
  return (
    <>
      <H1>Company Blog</H1>
      
      <H2>Latest Articles</H2>
      <ArticleList />
      
      <H2>Categories</H2>
      
      <H3>Technology</H3>
      <TechArticles />
      
      <H3>Business</H3>
      <BusinessArticles />
    </>
  );
}
``` 