import { useThemeColors } from '../theme';
import { createDs3Theme } from './theme';

export const useSyntaxTheme = () => {
  const colors = useThemeColors();
  const ds3Theme = createDs3Theme(colors);
  
  return ds3Theme;
}; 