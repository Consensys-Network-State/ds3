import * as React from 'react'
import {copyToClipboard, CopyToClipboardOptions} from "../utils";

/*
const CustomCopyButton = ({ text }: { text: string }) => {
  const { copied, copy } = useCopyToClipboard();

  return (
    <Button
      onPress={() => copy(text)}
      variant={copied ? 'success' : 'default'}
    >
      {copied ? 'Copied!' : 'Copy'}
    </Button>
  );
};
 */
interface UseCopyToClipboardOptions extends CopyToClipboardOptions {
  timeout?: number;
}

const useCopyToClipboard = (options: UseCopyToClipboardOptions = {}) => {
  const { timeout = 2000, onSuccess, onError } = options;
  const [copied, setCopied] = React.useState(false);

  const copy = React.useCallback(async (text: string) => {
    return await copyToClipboard(text, {
      onSuccess: () => {
        setCopied(true);
        onSuccess?.();

        const timer = setTimeout(() => {
          setCopied(false);
        }, timeout);

        return () => clearTimeout(timer);
      },
      onError,
    });
  }, [timeout, onSuccess, onError]);

  return { copied, copy } as const;
};

export { useCopyToClipboard }
export type { CopyToClipboardOptions };