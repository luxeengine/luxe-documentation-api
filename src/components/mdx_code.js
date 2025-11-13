import { Code } from '@astrojs/starlight/components';

export const mdxComponents = {
  code: (props) => {
    const { class: className, children } = props;

    // Detect if this is inline code (no line breaks)
    const isInline = !/\n/.test(children);

    if (isInline) {
      // Extract language from className (e.g., language-tailing-curly-colon)
      const lang = className?.replace('language-', '') || 'plaintext';
      return <Code code={children} lang={lang} inline />;
    }

    // For fenced blocks, leave Starlight to handle them normally
    return <code className={className}>{children}</code>;
  },
};
