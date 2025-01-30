import { Platform, Linking } from 'react-native';

interface OpenLinkOptions {
  // Web-specific options
  target?: '_blank' | '_self' | '_parent' | '_top';
  features?: string; // window features for window.open
  // Native-specific options
  androidPackage?: string; // for specific Android app
  iosAppId?: string; // for specific iOS app
  // Common options
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  // Validation options
  validate?: boolean;
}

const defaultOptions: OpenLinkOptions = {
  target: '_blank',
  validate: true,
};

const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

const openLink = async (
  url: string,
  options: OpenLinkOptions = defaultOptions
): Promise<boolean> => {
  const finalOptions = { ...defaultOptions, ...options };

  try {
    // Validate URL if enabled
    if (finalOptions.validate && !isValidUrl(url)) {
      throw new Error('Invalid URL format');
    }

    if (Platform.OS === 'web') {
      // Web implementation
      const { target, features } = finalOptions;
      const opened = window.open(url, target, features);

      if (!opened) {
        throw new Error('Popup was blocked or failed to open');
      }
    } else {
      // Check if the URL can be opened on the device
      const canOpen = await Linking.canOpenURL(url);

      if (!canOpen) {
        throw new Error('URL cannot be opened on this device');
      }

      // Handle platform-specific deep linking
      if (Platform.OS === 'android' && finalOptions.androidPackage) {
        // Try to open in specific Android app first
        try {
          await Linking.openURL(`${finalOptions.androidPackage}${url}`);
          finalOptions.onSuccess?.();
          return true;
        } catch {
          // Fallback to default browser if app isn't installed
          await Linking.openURL(url);
        }
      } else if (Platform.OS === 'ios' && finalOptions.iosAppId) {
        // Try to open in specific iOS app first
        try {
          await Linking.openURL(`${finalOptions.iosAppId}://${url}`);
          finalOptions.onSuccess?.();
          return true;
        } catch {
          // Fallback to default browser if app isn't installed
          await Linking.openURL(url);
        }
      } else {
        // Default behavior
        await Linking.openURL(url);
      }
    }

    finalOptions.onSuccess?.();
    return true;
  } catch (error) {
    const errorObject = error instanceof Error ? error : new Error('Failed to open URL');
    finalOptions.onError?.(errorObject);
    return false;
  }
};

export { openLink };
export type { OpenLinkOptions };