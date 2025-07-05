import React, { createContext, useContext, useState, useEffect, ReactNode, useRef, useCallback } from 'react';
import { loadMarkdown, startSSEConnection, stopSSEConnection } from '@/utils/markdownLoader';

interface MarkdownContextType {
  loadMarkdown: (path: string) => Promise<string>;
  subscribeToFileChanges: (path: string, callback: () => void) => () => void;
}

const MarkdownContext = createContext<MarkdownContextType | undefined>(undefined);

interface MarkdownProviderProps {
  children: ReactNode;
  enableLiveReload?: boolean; // Enable SSE-based live reload
}

export function MarkdownProvider({ children, enableLiveReload = true }: MarkdownProviderProps) {
  const isInitialized = useRef(false);
  const fileChangeSubscribers = useRef<Map<string, Set<() => void>>>(new Map());
  const cleanupRef = useRef<(() => void) | null>(null);

  const loadMarkdownContent = useCallback(async (path: string): Promise<string> => {
    try {
      const content = await loadMarkdown(path);
      return content;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load markdown';
      console.error('Error loading markdown:', errorMessage);
      throw err;
    }
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
    // Notify all subscribers for this file
    const subscribers = fileChangeSubscribers.current.get(filePath);
    if (subscribers) {
      // Create a copy of the set to avoid modification during iteration
      const subscribersCopy = new Set(subscribers);
      subscribersCopy.forEach(callback => {
        try {
          callback();
        } catch (error) {
          console.error('Error in file change subscriber:', error);
        }
      });
    }
  }, []);

  // Initial setup
  useEffect(() => {
    if (!isInitialized.current) {
      isInitialized.current = true;
      
      // Start SSE connection for live reload
      if (enableLiveReload) {
        startSSEConnection(handleFileChanged);
        cleanupRef.current = () => {
          stopSSEConnection();
        };
      }
    }

    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
      
      // Clean up all subscribers
      fileChangeSubscribers.current.clear();
    };
  }, [enableLiveReload, handleFileChanged]);

  const value: MarkdownContextType = {
    loadMarkdown: loadMarkdownContent,
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