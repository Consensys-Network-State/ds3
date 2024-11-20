// import Clipboard from '@react-native-clipboard/clipboard';
import { Platform, Linking } from 'react-native';
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// export const copyToClipboard = async (textToCopy: string) => {
//   if (Platform.OS === 'web' && navigator.clipboard) {
//     // Web-specific copy
//     try {
//       await navigator.clipboard.writeText(textToCopy);
//       // eslint-disable-next-line
//     } catch (error) {}
//   } else {
//     // Mobile-specific copy
//     Clipboard.setString(textToCopy);
//   }
// };

export const openLink = (url: string) => {
  if (Platform.OS === 'web') {
    // Open link in a new tab for web
    window.open(url, '_blank');
  } else {
    // Use Linking to open link in the default browser for React Native
    Linking.openURL(url).catch(err => {
      console.error("Failed to open URL: ", err);
    });
  }
};

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
}
