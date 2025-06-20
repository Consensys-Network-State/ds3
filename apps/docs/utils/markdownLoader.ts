import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';

// Development mode detection
const isDevelopment = (globalThis as any).__DEV__ || process.env.NODE_ENV === 'development';

// Development server configuration
const DEV_SERVER_PORT = 3001;
const DEV_SERVER_HOST = 'localhost'; // For web
const DEV_SERVER_HOST_NATIVE = '10.0.2.2'; // For Android emulator
const DEV_SERVER_HOST_IOS = 'localhost'; // For iOS simulator

// GitHub raw content URLs for README files
const README_URLS = {
  button: 'https://raw.githubusercontent.com/Consensys-Network-State/ds3/docs-cleanup/packages/ui/src/components/button/README.md',
  checkbox: 'https://raw.githubusercontent.com/Consensys-Network-State/ds3/docs-cleanup/packages/ui/src/components/checkbox/README.md',
  field: 'https://raw.githubusercontent.com/Consensys-Network-State/ds3/docs-cleanup/packages/ui/src/components/field/README.md',
  fields: 'https://raw.githubusercontent.com/Consensys-Network-State/ds3/docs-cleanup/packages/ui/src/components/fields/README.md',
  heading: 'https://raw.githubusercontent.com/Consensys-Network-State/ds3/docs-cleanup/packages/ui/src/components/heading/README.md',
  highlight: 'https://raw.githubusercontent.com/Consensys-Network-State/ds3/docs-cleanup/packages/ui/src/components/highlight/README.md',
  icon: 'https://raw.githubusercontent.com/Consensys-Network-State/ds3/docs-cleanup/packages/ui/src/components/icon/README.md',
  input: 'https://raw.githubusercontent.com/Consensys-Network-State/ds3/docs-cleanup/packages/ui/src/components/input/README.md',
  spinner: 'https://raw.githubusercontent.com/Consensys-Network-State/ds3/docs-cleanup/packages/ui/src/components/spinner/README.md',
  switch: 'https://raw.githubusercontent.com/Consensys-Network-State/ds3/docs-cleanup/packages/ui/src/components/switch/README.md',
  text: 'https://raw.githubusercontent.com/Consensys-Network-State/ds3/docs-cleanup/packages/ui/src/components/text/README.md',
} as const;

// Cache for downloaded content
const markdownCache: Record<string, string> = {};

// SSE connection for live reload
let sseConnection: EventSource | null = null;
let sseReconnectTimeout: NodeJS.Timeout | null = null;

export type MarkdownKey = keyof typeof README_URLS;

export interface MarkdownContent {
  button: string;
  checkbox: string;
  field: string;
  fields: string;
  heading: string;
  highlight: string;
  icon: string;
  input: string;
  spinner: string;
  switch: string;
  text: string;
}

/**
 * Gets the development server URL for a markdown key
 */
function getDevServerUrl(key: MarkdownKey): string {
  // Detect platform for correct host
  const isWeb = typeof window !== 'undefined';
  const isAndroid = !isWeb && typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
  
  let host = DEV_SERVER_HOST;
  if (!isWeb && isAndroid) {
    host = DEV_SERVER_HOST_NATIVE; // Android emulator
  } else if (!isWeb) {
    host = DEV_SERVER_HOST_IOS; // iOS simulator
  }
  
  return `http://${host}:${DEV_SERVER_PORT}/markdown/${key}.md`;
}

/**
 * Gets the SSE events URL
 */
function getSSEUrl(): string {
  const isWeb = typeof window !== 'undefined';
  const isAndroid = !isWeb && typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
  
  let host = DEV_SERVER_HOST;
  if (!isWeb && isAndroid) {
    host = DEV_SERVER_HOST_NATIVE;
  } else if (!isWeb) {
    host = DEV_SERVER_HOST_IOS;
  }
  
  return `http://${host}:${DEV_SERVER_PORT}/events`;
}

/**
 * Loads a markdown file from the development server
 */
async function loadFromDevServer(key: MarkdownKey): Promise<string | null> {
  if (!isDevelopment) {
    return null;
  }

  try {
    const url = getDevServerUrl(key);
    console.log(`🔍 Attempting to load from dev server: ${url}`);
    
    const response = await fetch(url);
    if (!response.ok) {
      console.warn(`Dev server returned ${response.status} for ${key}`);
      return null;
    }
    
    const content = await response.text();
    console.log(`✅ Loaded from dev server: ${key}`);
    return content;
  } catch (error) {
    console.warn(`Failed to load from dev server for ${key}:`, error);
    return null;
  }
}

/**
 * Downloads a markdown file from GitHub and caches it
 */
async function downloadMarkdown(url: string, key: MarkdownKey): Promise<string> {
  try {
    // Check cache first
    if (markdownCache[key]) {
      return markdownCache[key];
    }

    console.log(`📥 Downloading markdown for ${key} from GitHub...`);
    
    // Download from GitHub
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.status}`);
    }
    
    const content = await response.text();
    
    // Cache the content
    markdownCache[key] = content;
    
    console.log(`✅ Downloaded markdown for ${key}`);
    return content;
  } catch (error) {
    console.error(`Error downloading markdown for ${key}:`, error);
    return `# Error loading ${key} README\n\nCould not load the markdown file from ${url}\n\nError: ${error instanceof Error ? error.message : 'Unknown error'}`;
  }
}

/**
 * Loads markdown content with fallback strategy
 */
async function loadMarkdownWithFallback(key: MarkdownKey): Promise<string> {
  // Try development server first in development mode
  if (isDevelopment) {
    console.log(`🔍 Attempting to load local markdown for ${key}...`);
    const devServerContent = await loadFromDevServer(key);
    if (devServerContent) {
      markdownCache[key] = devServerContent;
      return devServerContent;
    }
    console.log(`⚠️ Local markdown not available for ${key}, falling back to GitHub...`);
  }

  // Fallback to GitHub URL
  const url = README_URLS[key];
  return downloadMarkdown(url, key);
}

/**
 * Loads all README files and returns them as an object
 */
export async function loadAllMarkdown(): Promise<MarkdownContent> {
  console.log(`🚀 Loading all markdown files (mode: ${isDevelopment ? 'dev-server' : 'remote'})...`);
  
  const promises = Object.keys(README_URLS).map(async (key) => {
    const typedKey = key as MarkdownKey;
    const content = await loadMarkdownWithFallback(typedKey);
    return { key: typedKey, content };
  });

  const results = await Promise.all(promises);
  
  const markdownContent = results.reduce((acc, { key, content }) => {
    acc[key] = content;
    return acc;
  }, {} as MarkdownContent);

  console.log(`✅ Loaded ${results.length} markdown files`);
  return markdownContent;
}

/**
 * Loads a specific README file by key
 */
export async function loadMarkdown(key: MarkdownKey): Promise<string> {
  return loadMarkdownWithFallback(key);
}

/**
 * Preloads all markdown files for faster access
 */
export async function preloadMarkdown(): Promise<void> {
  await loadAllMarkdown();
}

/**
 * Gets cached markdown content (must be preloaded first)
 */
export function getCachedMarkdown(key: MarkdownKey): string | null {
  return markdownCache[key] || null;
}

/**
 * Gets all cached markdown content
 */
export function getAllCachedMarkdown(): MarkdownContent {
  const result: MarkdownContent = {} as MarkdownContent;
  
  // Only return keys that exist in the cache and match the interface
  Object.keys(README_URLS).forEach((key) => {
    const typedKey = key as MarkdownKey;
    if (markdownCache[typedKey]) {
      result[typedKey] = markdownCache[typedKey];
    }
  });
  
  return result;
}

/**
 * Clears the markdown cache
 */
export function clearMarkdownCache(): void {
  Object.keys(markdownCache).forEach(key => {
    delete markdownCache[key];
  });
  console.log('🗑️ Markdown cache cleared');
}

/**
 * Gets the current loading mode (dev-server or remote)
 */
export function getLoadingMode(): 'dev-server' | 'remote' {
  return isDevelopment ? 'dev-server' : 'remote';
}

/**
 * Gets the current development status
 */
export function isDevMode(): boolean {
  return isDevelopment;
}

/**
 * Gets the development server URL for a specific markdown key
 */
export function getDevServerUrlFor(key: MarkdownKey): string {
  return getDevServerUrl(key);
}

/**
 * Starts SSE connection for live reloading
 */
export function startSSEConnection(onFileChanged?: (component: string) => void): void {
  if (!isDevelopment || sseConnection) {
    return;
  }

  try {
    const sseUrl = getSSEUrl();
    console.log(`🔗 Connecting to SSE: ${sseUrl}`);
    
    sseConnection = new EventSource(sseUrl);
    
    sseConnection.onopen = () => {
      console.log('✅ SSE connection established');
    };
    
    sseConnection.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        
        if (data.type === 'connected') {
          console.log('✅ SSE connected successfully');
        } else if (data.type === 'file-changed') {
          console.log(`📝 File changed: ${data.component}`);
          
          // Clear cache for the changed component
          if (data.component && markdownCache[data.component]) {
            delete markdownCache[data.component];
            console.log(`🗑️ Cleared cache for: ${data.component}`);
          }
          
          // Notify callback
          if (onFileChanged) {
            onFileChanged(data.component);
          }
        }
      } catch (error) {
        console.warn('Failed to parse SSE message:', error);
      }
    };
    
    sseConnection.onerror = (error) => {
      console.warn('SSE connection error:', error);
      
      // Attempt to reconnect after 5 seconds
      if (sseReconnectTimeout) {
        clearTimeout(sseReconnectTimeout);
      }
      
      sseReconnectTimeout = setTimeout(() => {
        console.log('🔄 Attempting to reconnect SSE...');
        stopSSEConnection();
        startSSEConnection(onFileChanged);
      }, 5000);
    };
  } catch (error) {
    console.warn('Failed to start SSE connection:', error);
  }
}

/**
 * Stops SSE connection
 */
export function stopSSEConnection(): void {
  if (sseConnection) {
    sseConnection.close();
    sseConnection = null;
    console.log('🔌 SSE connection closed');
  }
  
  if (sseReconnectTimeout) {
    clearTimeout(sseReconnectTimeout);
    sseReconnectTimeout = null;
  }
}

// Export the URLs for reference
export { README_URLS };
