export const createDs3Theme = (colors: any) => ({
  plain: {
    color: colors.neutral11,
    backgroundColor: colors.neutral11,
  },
  styles: [
    {
      types: ['changed'],
      style: {
        color: colors.warning11,
      },
    },
    {
      types: ['deleted'],
      style: {
        color: colors.error11,
        opacity: 0.56,
      },
    },
    {
      types: ['inserted'],
      style: {
        color: colors.success11,
      },
    },
    {
      types: ['comment'],
      style: {
        color: colors.neutral11,
        fontStyle: 'italic' as const,
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: colors.neutral10,
      },
    },
    {
      types: ['constant'],
      style: {
        color: colors.secondary11,
      },
    },
    {
      types: ['string', 'url'],
      style: {
        color: colors.success11,
      },
    },
    {
      types: ['variable'],
      style: {
        color: colors.warning11,
      },
    },
    {
      types: ['number', 'boolean'],
      style: {
        color: colors.secondary11,
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: colors.info11,
      },
    },
    {
      types: ['keyword', 'operator', 'property', 'namespace', 'tag', 'selector', 'doctype'],
      style: {
        color: colors.primary11,
      },
    },
    {
      types: ['builtin', 'char', 'function', 'class-name'],
      style: {
        color: colors.warning11,
      },
    },
  ],
}); 