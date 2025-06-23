import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';

// Development mode detection
const isDevelopment = (globalThis as any).__DEV__ || process.env.NODE_ENV === 'development';

// Development server configuration
const DEV_SERVER_PORT = 3001;
const DEV_SERVER_HOST = 'localhost'; // For web
const DEV_SERVER_HOST_NATIVE = '10.0.2.2'; // For Android emulator
const DEV_SERVER_HOST_IOS = 'localhost'; // For iOS simulator

// GitHub repository base URL for production fallback
const GITHUB_BASE_URL = 'https://raw.githubusercontent.com/Consensys-Network-State/ds3/docs-cleanup';

// Cache for downloaded content
const markdownCache: Record<string, string> = {};

// SSE connection for live reload
let sseConnection: EventSource | null = null;
let sseReconnectTimeout: NodeJS.Timeout | null = null;

/**
 * Gets the development server URL for a markdown path
 */
function getDevServerUrl(markdownPath: string): string {
  // Detect platform for correct host
  const isWeb = typeof window !== 'undefined';
  const isAndroid = !isWeb && typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
  
  let host = DEV_SERVER_HOST;
  if (!isWeb && isAndroid) {
    host = DEV_SERVER_HOST_NATIVE; // Android emulator
  } else if (!isWeb) {
    host = DEV_SERVER_HOST_IOS; // iOS simulator
  }
  
  return `http://${host}:${DEV_SERVER_PORT}/markdown/${markdownPath}`;
}

/**
 * Gets the GitHub URL for a markdown path
 */
function getGitHubUrl(markdownPath: string): string {
  // Ensure the path ends with .md
  const pathWithExtension = markdownPath.endsWith('.md') ? markdownPath : `${markdownPath}.md`;
  return `${GITHUB_BASE_URL}/${pathWithExtension}`;
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
async function loadFromDevServer(markdownPath: string): Promise<string | null> {
  try {
    const url = getDevServerUrl(markdownPath);
    console.log(`🔍 Attempting to load from dev server: ${url}`);
    
    // Detect platform for debugging
    const isWeb = typeof window !== 'undefined';
    const isAndroid = !isWeb && typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
    console.log(`🔍 Platform detection: isWeb=${isWeb}, isAndroid=${isAndroid}`);
    
    const response = await fetch(url);
    if (!response.ok) {
      console.warn(`Dev server returned ${response.status} for ${markdownPath}`);
      return null;
    }
    
    const content = await response.text();
    console.log(`✅ Loaded from dev server: ${markdownPath}`);
    return content;
  } catch (error) {
    console.warn(`Failed to load from dev server for ${markdownPath}:`, error);
    console.warn(`Error details:`, error);
    return null;
  }
}

/**
 * Downloads a markdown file from GitHub and caches it
 */
async function downloadMarkdown(markdownPath: string): Promise<string> {
  try {
    // Check cache first
    if (markdownCache[markdownPath]) {
      return markdownCache[markdownPath];
    }

    console.log(`📥 Downloading markdown for ${markdownPath} from GitHub...`);
    
    // Download from GitHub
    const url = getGitHubUrl(markdownPath);
    console.log(`🔗 GitHub URL: ${url}`);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.status}`);
    }
    
    const content = await response.text();
    
    // Cache the content
    markdownCache[markdownPath] = content;
    
    console.log(`✅ Downloaded markdown for ${markdownPath}`);
    return content;
  } catch (error) {
    console.error(`Error downloading markdown for ${markdownPath}:`, error);
    return `# Error loading ${markdownPath}\n\nCould not load the markdown file from GitHub\n\nError: ${error instanceof Error ? error.message : 'Unknown error'}`;
  }
}

/**
 * Loads markdown content with fallback strategy
 */
export async function loadMarkdown(markdownPath: string): Promise<string> {
  console.log(`🚀 Loading markdown: ${markdownPath} (dev mode: ${isDevelopment})`);
  
  // Always try development server first
  console.log(`🔍 Attempting to load local markdown for ${markdownPath}...`);
  const devServerContent = await loadFromDevServer(markdownPath);
  if (devServerContent) {
    markdownCache[markdownPath] = devServerContent;
    return devServerContent;
  }
  console.log(`⚠️ Local markdown not available for ${markdownPath}, falling back to GitHub...`);

  // Fallback to GitHub URL
  console.log(`📥 Falling back to GitHub for: ${markdownPath}`);
  return downloadMarkdown(markdownPath);
}

/**
 * Preloads specific markdown files for faster access
 */
export async function preloadMarkdown(paths: string[]): Promise<void> {
  await Promise.all(paths.map(path => loadMarkdown(path)));
}

/**
 * Gets cached markdown content (must be preloaded first)
 */
export function getCachedMarkdown(markdownPath: string): string | null {
  return markdownCache[markdownPath] || null;
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
 * Gets the development server URL for a specific markdown path
 */
export function getDevServerUrlFor(markdownPath: string): string {
  return getDevServerUrl(markdownPath);
}

/**
 * Starts SSE connection for live reloading
 */
export function startSSEConnection(onFileChanged?: (path: string) => void): void {
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
          console.log(`📝 File changed: ${data.path}`);
          
          // Clear cache for the changed file
          if (data.path && markdownCache[data.path]) {
            delete markdownCache[data.path];
            console.log(`🗑️ Cleared cache for: ${data.path}`);
          }
          
          // Notify callback
          if (onFileChanged) {
            onFileChanged(data.path);
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