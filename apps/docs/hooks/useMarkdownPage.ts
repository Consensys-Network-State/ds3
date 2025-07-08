import { useState, useEffect, useCallback, useRef } from 'react';
import { useMarkdown } from '@/components/MarkdownProvider';

const DEBUG = __DEV__;

interface UseMarkdownPageReturn {
  content: string;
  isLoading: boolean;
  error: string | null;
  loadContent: () => Promise<void>;
}

/**
 * Custom hook to manage markdown page state and logic
 * 
 * Handles:
 * - Loading markdown content from a specific path
 * - Loading state management
 * - Error handling
 * - Live reload subscriptions
 * - Preventing duplicate loads
 */
export function useMarkdownPage(
  path: string, 
  enableLiveReload: boolean = true
): UseMarkdownPageReturn {
  const { loadMarkdown, subscribeToFileChanges } = useMarkdown();
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isInitialLoad = useRef(true);
  const loadAttemptRef = useRef<number>(0);
  const lastRenderTime = useRef<number>(0);
  const renderStartTime = useRef<number>(0);

  const loadContent = useCallback(async (forceReload = false) => {
    const attemptId = ++loadAttemptRef.current;
    
    if (isLoading) {
      if (DEBUG) console.log(`⏳ Skipping load for ${path} - already loading`);
      return;
    }

    if (content && !forceReload) {
      if (DEBUG) console.log(`⏳ Skipping load for ${path} - already have content`);
      return;
    }
    setIsLoading(true);
    setError(null);

    try {
      const markdownContent = await loadMarkdown(path);
      
      // Only update if this is still the latest load attempt
      if (attemptId === loadAttemptRef.current) {
        setContent(markdownContent);
        setIsLoading(false);
        if (DEBUG) console.log(`✅ Loaded markdown: ${path}`);
      }
    } catch (err) {
      if (attemptId === loadAttemptRef.current) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load markdown';
        setError(errorMessage);
        setIsLoading(false);
        console.error(`❌ Error loading markdown ${path}:`, err);
      }
    }
  }, [path, loadMarkdown, isLoading, content]);

  // Initial load
  useEffect(() => {
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      loadContent();
    }
  }, [loadContent]);

  // Subscribe to file changes for live reload
  useEffect(() => {
    if (!enableLiveReload) {
      return;
    }

    const unsubscribe = subscribeToFileChanges(path, () => {
      setContent(''); // Clear content to force reload
      loadContent(true); // Force reload
    });

    return unsubscribe;
  }, [path, enableLiveReload, subscribeToFileChanges, loadContent]);

  // Performance monitoring - only run once per mount
  useEffect(() => {
    renderStartTime.current = performance.now();
    
    return () => {
      const renderTime = performance.now() - renderStartTime.current;
      lastRenderTime.current = renderTime;
      
      if (renderTime > 50) {
        console.warn(`🐌 Slow render detected in MarkdownPage-${path}: ${renderTime.toFixed(2)}ms`);
      }
    };
  }, []);

  return {
    content,
    isLoading,
    error,
    loadContent,
  };
} 