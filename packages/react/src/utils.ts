import { Platform, Linking } from 'react-native';
import { ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

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

const fontSizes = [
  '2',
  '2.5',
  '3',
  '3.5',
  '4',
  '4.5',
  '5',
  '5.5',
  '6',
  '7',
  '8',
  '10',
  '12',
  '14',
  '16'
];

const twMergeConfig = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [{
        text: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', ...fontSizes]
      }],
    }
  }
});

export const cn = (...inputs: ClassValue[]) => {
  return twMergeConfig(clsx(inputs));
};
