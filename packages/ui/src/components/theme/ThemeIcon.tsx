import React from 'react';
import { useThemeColors } from './useThemeColors';

interface ThemeIconProps {
  size?: number;
  className?: string;
}

export const ThemeIcon: React.FC<ThemeIconProps> = ({ 
  size = 150,
  className,
  ...otherProps
}) => {
  const colors = useThemeColors();

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      fill="none" 
      stroke={colors.primary9}
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
      {...otherProps}
    >
      <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/>
      <circle cx="13.5" cy="6.5" r=".8" stroke={colors.warning9} strokeWidth="1.6"/>
      <circle cx="17.5" cy="10.5" r=".8" stroke={colors.success9} strokeWidth="1.6"/>
      <circle cx="6.5" cy="12.5" r=".8" stroke={colors.error9} strokeWidth="1.6"/>
      <circle cx="8.5" cy="7.5" r=".8" stroke={colors.secondary9} strokeWidth="1.6"/>
      <circle cx="12" cy="12" r=".8" stroke={colors.neutral9} strokeWidth="1.6"/>
      <circle cx="9" cy="17" r=".8" stroke={colors.info9} strokeWidth="1.6" />
    </svg>
  );
}; 