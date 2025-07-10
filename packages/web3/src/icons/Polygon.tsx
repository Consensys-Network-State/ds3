import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const Polygon: React.FC<React.ComponentProps<typeof Svg>> = (props) => (
  <Svg 
    width="24"
    height="24"
    viewBox="0 0 178 161"
    fill="none"
    {...props}
  >
    <Path 
      fill="#6C00F6" 
      d="M66.8,54.7l-16.7-9.7L0,74.1v58l50.1,29l50.1-29V41.9L128,25.8l27.8,16.1v32.2L128,90.2l-16.7-9.7v25.8 l16.7,9.7l50.1-29V29L128,0L77.9,29v90.2l-27.8,16.1l-27.8-16.1V86.9l27.8-16.1l16.7,9.7V54.7z"
    />
  </Svg>
); 