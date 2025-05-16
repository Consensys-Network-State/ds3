import { Platform, Clipboard } from 'react-native';

/*
  import { copyToClipboard } from './clipboard-utils';

  const handleCopy = async () => {
    await copyToClipboard('Text to copy', {
      onSuccess: () => console.log('Copied!'),
      onError: (error) => console.error('Failed to copy:', error),
    });
  };
 */
interface CopyToClipboardOptions {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
}

const copyToClipboard = async (
  text: string,
  options: CopyToClipboardOptions = {}
): Promise<boolean> => {
  const { onSuccess, onError } = options;

  try {
    if (Platform.OS === 'web') {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
          document.execCommand('copy');
        } finally {
          textArea.remove();
        }
      }
    } else {
      await Clipboard.setString(text);
    }

    onSuccess?.();
    return true;
  } catch (error) {
    onError?.(error);
    return false;
  }
};

export { copyToClipboard };
export type { CopyToClipboardOptions };