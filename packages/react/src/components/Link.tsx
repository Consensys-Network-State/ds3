import { TouchableOpacity, TouchableOpacityProps, Linking } from 'react-native';
import { ReactNode } from 'react';

type BaseProps = Omit<TouchableOpacityProps, 'onPress'> & {
  children: ReactNode;
  className?: string;
};

type LinkProps = BaseProps & ({
  href: string;
  onPress?: never;
} | {
  href?: never;
  onPress: () => void;
});

const Link = ({ href, onPress, children, className = '', ...props }: LinkProps) => {
  const handlePress = () => {
    if (onPress) {
      onPress();
    } else if (href) {
      Linking.openURL(href);
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className={className}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Link;