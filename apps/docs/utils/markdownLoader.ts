import { Platform } from 'react-native';

// Development mode detection
const isDevelopment = (globalThis as any).__DEV__ || process.env.NODE_ENV === 'development';
const DEBUG = __DEV__;

// Platform detection using React Native Platform API
const isWeb = Platform.OS === 'web';
const isReactNative = Platform.OS === 'ios' || Platform.OS === 'android';

// Development server configuration
const DEV_SERVER_PORT = 3001;
const DEV_SERVER_HOST = 'localhost';

// GitHub repository base URL for production fallback
const GITHUB_BASE_URL = 'https://raw.githubusercontent.com/Consensys-Network-State/ds3/more-components';

// Cache for downloaded content
const markdownCache: Record<string, string> = {};

// Loading queue to prevent simultaneous loads of the same file
const loadingQueue: Set<string> = new Set();
const loadingPromises: Map<string, Promise<string>> = new Map();

// SSE connection for live reload
let sseConnection: EventSource | null = null;
let sseReconnectTimeout: NodeJS.Timeout | null = null;
let sseReconnectAttempts = 0;
const MAX_RECONNECT_ATTEMPTS = 3;
const RECONNECT_DELAY = 5000;

/**
 * Gets the development server URL for a markdown path
 */
function getDevServerUrl(markdownPath: string): string {
  return `http://${DEV_SERVER_HOST}:${DEV_SERVER_PORT}/markdown/${markdownPath}`;
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
  return `http://${DEV_SERVER_HOST}:${DEV_SERVER_PORT}/events`;
}

/**
 * Loads a markdown file from the development server
 */
async function loadFromDevServer(markdownPath: string): Promise<string | null> {
  try {
    const url = getDevServerUrl(markdownPath);
    if (DEBUG) console.log(`📥 Downloading markdown for ${markdownPath} from local server...`);
    
    const response = await fetch(url);
    if (!response.ok) {
      return null;
    }
    
    const content = await response.text();
    return content;
  } catch (error) {
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

    if (DEBUG) console.log(`📥 Downloading markdown for ${markdownPath} from GitHub...`);
    
    // Download from GitHub
    const url = getGitHubUrl(markdownPath);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.status}`);
    }
    
    const content = await response.text();
    
    // Cache the content
    markdownCache[markdownPath] = content;
    
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
  // Check if already loading this file
  if (loadingQueue.has(markdownPath)) {
    const existingPromise = loadingPromises.get(markdownPath);
    if (existingPromise) {
      return existingPromise;
    }
  }
  
  // Check cache first
  if (markdownCache[markdownPath]) {
    return markdownCache[markdownPath];
  }
  
  // Add to loading queue
  loadingQueue.add(markdownPath);
  
  // Create loading promise
  const loadingPromise = (async () => {
    try {
      // Always try development server first
      const devServerContent = await loadFromDevServer(markdownPath);
      if (devServerContent) {
        markdownCache[markdownPath] = devServerContent;
        return devServerContent;
      }
      if (DEBUG) console.log(`⚠️ Local markdown not available for ${markdownPath}, falling back to GitHub...`);

      // Fallback to GitHub URL
      return await downloadMarkdown(markdownPath);
    } finally {
      // Remove from loading queue
      loadingQueue.delete(markdownPath);
      loadingPromises.delete(markdownPath);
    }
  })();
  
  // Store the promise
  loadingPromises.set(markdownPath, loadingPromise);
  
  return loadingPromise;
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
  if (!isDevelopment) {
    if (DEBUG) console.log('🚫 SSE connection disabled in production');
    return;
  }
  
  if (sseConnection) {
    if (DEBUG) console.log('🚫 SSE connection already exists');
    return;
  }

  // Check if EventSource is available (web only)
  if (typeof EventSource === 'undefined' || isReactNative) {
    if (DEBUG) console.log('🚫 SSE connection disabled for React Native');
    return;
  }

  // Reset reconnect attempts when starting fresh
  sseReconnectAttempts = 0;

  try {
    const sseUrl = getSSEUrl();
    if (DEBUG) console.log(`🔗 Connecting to SSE: ${sseUrl}`);
    
    sseConnection = new EventSource(sseUrl);
    
    sseConnection.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        
        if (data.type === 'connected') {
          if (DEBUG) console.log('✅ SSE connected established');
        } else if (data.type === 'file-changed') {
          if (DEBUG) console.log(`📝 File changed: ${data.path}`);
          
          // Clear cache for the changed file
          if (data.path && markdownCache[data.path]) {
            delete markdownCache[data.path];
          }
          
          // Notify callback
          if (onFileChanged) {
            onFileChanged(data.path);
          }
        }
      } catch (error) {
        if (DEBUG) console.warn('Failed to parse SSE message:', error);
      }
    };
    
    sseConnection.onerror = (error) => {
      if (sseReconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
        if (DEBUG) console.warn(`SSE connection error (attempt ${sseReconnectAttempts + 1}/${MAX_RECONNECT_ATTEMPTS}):`, error);
        
        // Attempt to reconnect after delay
        if (sseReconnectTimeout) {
          clearTimeout(sseReconnectTimeout);
        }
        
        sseReconnectAttempts++;
        sseReconnectTimeout = setTimeout(() => {
          if (DEBUG) console.log(`🔄 Attempting to reconnect SSE (attempt ${sseReconnectAttempts})...`);
          stopSSEConnection();
          startSSEConnection(onFileChanged);
        }, RECONNECT_DELAY);
      } else {
        if (DEBUG) console.warn('SSE connection failed after maximum attempts. Live reload disabled.');
        stopSSEConnection();
      }
    };
  } catch (error) {
    if (DEBUG) console.warn('Failed to start SSE connection:', error);
  }
}

/**
 * Stops SSE connection
 */
export function stopSSEConnection(): void {
  if (sseConnection) {
    sseConnection.close();
    sseConnection = null;
    if (DEBUG) console.log('🔌 SSE connection closed');
  }
  
  if (sseReconnectTimeout) {
    clearTimeout(sseReconnectTimeout);
    sseReconnectTimeout = null;
  }

  // Reset reconnect attempts
  sseReconnectAttempts = 0;
}