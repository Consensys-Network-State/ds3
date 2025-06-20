import ds3 from "@consensys/ds3-config/nativewind";
import themeConfig from "./theme.config";
import { defaultConfig, COLOR_MODES } from "@consensys/ds3-theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    './node_modules/@consensys/ds3/**/*.{js,jsx,ts,tsx}',
    '!node_modules/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [ds3(themeConfig)],
  safelist: [
    // Theme modes from constants
    ...Object.values(COLOR_MODES),
    
    // Theme names from default config
    ...Object.keys(defaultConfig.themes),
    
    // Semantic colors with shades 1-12
    { pattern: /^bg-(neutral|primary|secondary|error|warning|success|info)-(1|2|3|4|5|6|7|8|9|10|11|12)$/ },
    { pattern: /^text-(neutral|primary|secondary|error|warning|success|info)-(1|2|3|4|5|6|7|8|9|10|11|12)$/ },
    { pattern: /^border-(neutral|primary|secondary|error|warning|success|info)-(1|2|3|4|5|6|7|8|9|10|11|12)$/ },
    
    // Alpha variants for semantic colors
    { pattern: /^bg-(neutral|primary|secondary|error|warning|success|info)-(a1|a2|a3|a4|a5|a6|a7|a8|a9|a10|a11|a12)$/ },
    { pattern: /^text-(neutral|primary|secondary|error|warning|success|info)-(a1|a2|a3|a4|a5|a6|a7|a8|a9|a10|a11|a12)$/ },
    { pattern: /^border-(neutral|primary|secondary|error|warning|success|info)-(a1|a2|a3|a4|a5|a6|a7|a8|a9|a10|a11|a12)$/ },
    
    // Spacing (based on tailwind preset)
    { pattern: /^(p|px|py|pt|pb|pl|pr)-(0|0\.5|1|1\.5|2|2\.5|3|3\.5|4|5|6|7|8|10|12|14|16|18|20|24|28|32|36|40)$/ },
    { pattern: /^(m|mx|my|mt|mb|ml|mr)-(0|0\.5|1|1\.5|2|2\.5|3|3\.5|4|5|6|7|8|10|12|14|16|18|20|24|28|32|36|40)$/ },
    
    // Gap utilities (commonly used in playgrounds)
    { pattern: /^gap-(0|0\.5|1|1\.5|2|2\.5|3|3\.5|4|5|6|7|8|10|12|14|16|18|20|24|28|32|36|40)$/ },
    { pattern: /^(gap-x|gap-y)-(0|0\.5|1|1\.5|2|2\.5|3|3\.5|4|5|6|7|8|10|12|14|16|18|20|24|28|32|36|40)$/ },
    
    // Border radius (based on tailwind preset)
    { pattern: /^rounded(-(0|1|2|3|4|5|6|7|8|full))?$/ },
    
    // Font weights (based on tailwind preset)
    { pattern: /^font-(light|regular|medium|bold|semibold)$/ },
    
    // Font sizes (including h1-h6 from tailwind preset)
    { pattern: /^text-(2|2\.5|3|3\.5|4|4\.5|5|5\.5|6|7|8|10|12|14|16|xl|lg|base|sm|xs|h1|h2|h3|h4|h5|h6)$/ },
    
    // Text alignment
    { pattern: /^text-(left|center|right|justify)$/ },
    
    // Flex utilities
    { pattern: /^flex(-(row|col))?$/ },
    { pattern: /^items-(start|center|end|stretch|baseline)$/ },
    { pattern: /^justify-(start|center|end|between|around|evenly)$/ },
    
    // Borders
    { pattern: /^border(-(0|2|4|8))?$/ },
    
    // Box shadows (based on theme config)
    { pattern: /^shadow(-(elevated))?$/ },
    
    // Display
    { pattern: /^(block|inline-block|inline|flex|inline-flex|grid|inline-grid|hidden)$/ },
    
    // Position
    { pattern: /^(static|relative|absolute|fixed|sticky)$/ },
    
    // Width and height
    { pattern: /^(w|h)-(0|0\.5|1|1\.5|2|2\.5|3|3\.5|4|5|6|7|8|10|12|14|16|18|20|24|28|32|36|40|full|screen|auto)$/ },
    
    // Min/Max width/height (for responsive playgrounds)
    { pattern: /^(min-w|max-w|min-h|max-h)-(0|full|screen|auto|xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl)$/ },
    
    // Overflow
    { pattern: /^overflow(-(auto|hidden|visible|scroll))?$/ },
    
    // Z-index
    { pattern: /^z-(0|10|20|30|40|50|auto)$/ },
    
    // Common playground utilities
    { pattern: /^(bg|text)-(transparent)$/ },
    { pattern: /^(outline)-(none)$/ },
    { pattern: /^(relative|absolute|inset-0)$/ },
    
    // Common spacing for playgrounds
    { pattern: /^(mb|mt|ml|mr|mx|my)-(3|6|8)$/ },
    
    // Common flex patterns
    { pattern: /^(flex-1|flex-auto|flex-initial|flex-none)$/ },
  ],
}