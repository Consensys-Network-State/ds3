import React, { createContext, useContext, useState, useEffect, ReactNode, useRef } from 'react';
import { loadAllMarkdown, startSSEConnection, stopSSEConnection, type MarkdownContent, type MarkdownKey } from '@/utils/markdownLoader';

interface MarkdownContextType {
  markdown: Partial<MarkdownContent>;
  isLoading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
  getMarkdown: (key: MarkdownKey) => string;
}

const MarkdownContext = createContext<MarkdownContextType | undefined>(undefined);

interface MarkdownProviderProps {
  children: ReactNode;
  autoLoad?: boolean;
  enableLiveReload?: boolean; // Enable SSE-based live reload
}

const EMPTY_MARKDOWN: Partial<MarkdownContent> = {};

export function MarkdownProvider({ children, autoLoad = true, enableLiveReload = true }: MarkdownProviderProps) {
  const [markdown, setMarkdown] = useState<Partial<MarkdownContent>>(EMPTY_MARKDOWN);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isInitialized = useRef(false);

  const loadMarkdown = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const content = await loadAllMarkdown();
      setMarkdown(content);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load markdown');
      console.error('Error loading markdown:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const refresh = async () => {
    await loadMarkdown();
  };

  const getMarkdown = (key: MarkdownKey): string => {
    return markdown[key] || `# Not found\n\nNo markdown found for: ${key}`;
  };

  // Handle file changes from SSE
  const handleFileChanged = async (component: string) => {
    console.log(`🔄 Reloading markdown for: ${component}`);
    await loadMarkdown();
  };

  // Initial load and SSE setup
  useEffect(() => {
    if (autoLoad && !isInitialized.current) {
      isInitialized.current = true;
      loadMarkdown();
      
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
  }, [autoLoad, enableLiveReload]);

  const value: MarkdownContextType = {
    markdown,
    isLoading,
    error,
    refresh,
    getMarkdown,
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

export function useMarkdownContent(key: MarkdownKey) {
  const { getMarkdown, isLoading, error } = useMarkdown();
  return {
    content: getMarkdown(key),
    isLoading,
    error,
  };
} 