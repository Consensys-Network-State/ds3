import React, { createContext, useContext, useState, useEffect, ReactNode, useRef, useCallback } from 'react';
import { loadMarkdown, startSSEConnection, stopSSEConnection } from '@/utils/markdownLoader';

interface MarkdownContextType {
  isLoading: boolean;
  error: string | null;
  loadMarkdown: (path: string) => Promise<string>;
  getCachedMarkdown: (path: string) => string | null;
  subscribeToFileChanges: (path: string, callback: () => void) => () => void;
}

const MarkdownContext = createContext<MarkdownContextType | undefined>(undefined);

interface MarkdownProviderProps {
  children: ReactNode;
  enableLiveReload?: boolean; // Enable SSE-based live reload
}

export function MarkdownProvider({ children, enableLiveReload = true }: MarkdownProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isInitialized = useRef(false);
  const fileChangeSubscribers = useRef<Map<string, Set<() => void>>>(new Map());

  const loadMarkdownContent = useCallback(async (path: string): Promise<string> => {
    setIsLoading(true);
    setError(null);
    try {
      const content = await loadMarkdown(path);
      return content;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load markdown';
      setError(errorMessage);
      console.error('Error loading markdown:', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getCachedMarkdown = useCallback((path: string): string | null => {
    // For now, we'll always load fresh content
    // In the future, we could implement a more sophisticated caching system
    return null;
  }, []);

  const subscribeToFileChanges = useCallback((path: string, callback: () => void) => {
    if (!fileChangeSubscribers.current.has(path)) {
      fileChangeSubscribers.current.set(path, new Set());
    }
    fileChangeSubscribers.current.get(path)!.add(callback);

    // Return unsubscribe function
    return () => {
      const subscribers = fileChangeSubscribers.current.get(path);
      if (subscribers) {
        subscribers.delete(callback);
        if (subscribers.size === 0) {
          fileChangeSubscribers.current.delete(path);
        }
      }
    };
  }, []);

  // Handle file changes from SSE
  const handleFileChanged = useCallback(async (filePath: string) => {
    console.log(`🔄 File changed: ${filePath}`);
    
    // Notify all subscribers for this file
    const subscribers = fileChangeSubscribers.current.get(filePath);
    if (subscribers) {
      console.log(`📢 Notifying ${subscribers.size} subscribers for ${filePath}`);
      subscribers.forEach(callback => callback());
    }
  }, []);

  // Initial setup
  useEffect(() => {
    if (!isInitialized.current) {
      isInitialized.current = true;
      
      // Start SSE connection for live reload
      if (enableLiveReload) {
        startSSEConnection(handleFileChanged);
      }
    }

    return () => {
      if (enableLiveReload) {
        stopSSEConnection();
      }
    };
  }, [enableLiveReload, handleFileChanged]);

  const value: MarkdownContextType = {
    isLoading,
    error,
    loadMarkdown: loadMarkdownContent,
    getCachedMarkdown,
    subscribeToFileChanges,
  };

  return (
    <MarkdownContext.Provider value={value}>
      {children}
    </MarkdownContext.Provider>
  );
}

export function useMarkdown() {
  const context = useContext(MarkdownContext);
  if (context === undefined) {
    throw new Error('useMarkdown must be used within a MarkdownProvider');
  }
  return context;
}

export function useMarkdownContent(path: string) {
  const { loadMarkdown, isLoading, error, subscribeToFileChanges } = useMarkdown();
  const [content, setContent] = useState<string>('');
  const [localLoading, setLocalLoading] = useState(true);
  const [reloadTrigger, setReloadTrigger] = useState(0);

  // Subscribe to file changes
  useEffect(() => {
    const unsubscribe = subscribeToFileChanges(path, () => {
      console.log(`🔄 Reloading content for: ${path}`);
      setReloadTrigger(prev => prev + 1);
    });

    return unsubscribe;
  }, [path, subscribeToFileChanges]);

  useEffect(() => {
    async function loadContent() {
      setLocalLoading(true);
      try {
        const markdownContent = await loadMarkdown(path);
        setContent(markdownContent);
      } catch (err) {
        setContent(`# Error\n\nFailed to load markdown from: ${path}`);
      } finally {
        setLocalLoading(false);
      }
    }

    loadContent();
  }, [path, loadMarkdown, reloadTrigger]);

  return {
    content,
    isLoading: isLoading || localLoading,
    error,
  };
} 